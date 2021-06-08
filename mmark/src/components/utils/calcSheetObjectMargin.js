const wUpNote = [17, 17, 17, 27, 27, 27];
const wDownNote = [17, 17, 17, 17, 17, 17];
const wExtendedUpNote = [20, 23, 23, 27, 27, 27];
const wExtendedDownNote = [20, 23, 23, 23, 23, 23];
const wRest = [22, 22, 13, 15, 19, 24];
const wExtendedRest = [30, 30, 22, 21, 25, 31];
const wStackedNotesWide = 31;
const wAcc = 8;

const wClef = (b) => (b ? 27 : 32);
const wTime = 27;
const wBPM = 0;
const wBar = 1;
const wRepeat = 14;
const wDoubleBar = 4;
const wTermBar = 6;

const wDefault = 10;
const wNoteDefaultMargin = 10;

const wKey = (key) => (Math.abs(key) * wAcc);

const wNote = (isRest, length, isExtended, height) => {
  if (isRest) {
    return [(isExtended ? wExtendedRest : wRest)[length], 0];
  } else {
    if (height.length > 1) {
      let copy = [...height];
      copy.sort((a, b) => (a-b));
      let a = 0
      for (let i = 1; i < copy.length; i++) {
        if (copy[i]-copy[i-1] === 1) {
          a = 14;
        }
      }
      return [17, a];
    } else {
      if (height[0] >= 5) {
        return [(isExtended ? wExtendedDownNote : wDownNote)[length], 0];
      } else {
        return [(isExtended ? wExtendedUpNote : wUpNote)[length], 0];
      }
    }
  }
};
const wNoteAcc = (isRest, paramHeight, paramAcc) => {
  const negativeInfty = -64;
  if (isRest) {
    return 0;
  } else {
    let heightsWithAcc = [];
    for (let i = 0; i < paramAcc.length; i++) {
      if (paramAcc[i] !== "x") {
        let temp = [];
        if (heightsWithAcc.length > 0) {
          for (let j = 0; j < heightsWithAcc.length; j++) {
            temp.push(heightsWithAcc[j]);
            if (paramHeight[i] > heightsWithAcc[j]) {
              temp.push(paramHeight[i]);
            }
          }
          heightsWithAcc = temp;
        } else {
          heightsWithAcc = [paramHeight[i]];
        }
      }
    }

    let slot = [negativeInfty, negativeInfty, negativeInfty, negativeInfty, negativeInfty];
    let accWidth = 0;
    for (let i = 0; i < heightsWithAcc.length; i++) {
      for (let slotIdx = 0; slotIdx < slot.length; slotIdx++) {
        if (slot[slotIdx] <= heightsWithAcc[i]-5) {
          slot[slotIdx] = heightsWithAcc[i];
          if (accWidth < slotIdx+1) {
            accWidth = slotIdx+1;
          }
          break;
        }
      }
    }

    return accWidth * wAcc;
  }
};

const calcSheetObjectMargin = (sheet, totalWidth, isBeingEdited) => {
  let dim = [];
  let totalLength = 0;
  for (let i in sheet) {
    const o = sheet[i];
    switch (o.objectType) {
      case "c":
        dim.push({lm: 0, lw: 0, rw: wClef(o.treble), rm: 2, al: 0});
        break;
      case "t":
        dim.push({lm: 0, lw: 0, rw: wTime, rm: 2, al: 0})
        break;
      case "k":
        dim.push({lm: 0, lw: 0, rw: wKey(o.key), rm: 2, al: 0})
        break;
      case "b":
        switch (o.type) {
          case "b":
            dim.push({lm: 10, lw: 0, rw: wBar, rm: 10, al: 0});
            break;
          case "d":
            dim.push({lm: 10, lw: 0, rw: wDoubleBar, rm: 10, al: 0});
            break;
          case "o":
          case "c":
            dim.push({lm: 10, lw: 0, rw: wRepeat, rm: 10, al: 0})
            break;
          case "t":
            dim.push({lm: 10, lw: 0, rw: wTermBar, rm: 0, al: 0})
            break;
          default:
            break;
        }
        break;
      case "n":
        let temp = wNote(o.rest, o.length, o.extend, o.height);
        let length = 64/Math.pow(2, o.length);
        if (o.extend) {
          length = length * 3 / 2;
        }
        totalLength += length;
        dim.push({
          lm: 0,
          lw: wNoteAcc(o.rest, o.height, o.accidental),
          rw: temp[0],
          rm: temp[1],
          al: length
        });
        break;
      case "p":
        dim.push({lm: 0, lw: 0, rw: wBPM, rm: 10, al: 0});
        break;
      case "r":
      default:
        break;
    }
  }
  let fixed = 0;
  let ration64 = 0;
  for (let i = 0; i < dim.length; i++) {
    if (i < dim.length-1) {
      dim[i].minRation = dim[i].rw + dim[i].rm + dim[i+1].lm + dim[i+1].lw;
    } else {
      dim[i].minRation = dim[i].rw + dim[i].rm;
    }
    if (dim[i].al === 0) {
      fixed += dim[i].minRation;
    } else {
      let temp = dim[i].minRation / dim[i].al;
      if (temp > ration64) {
        ration64 = temp;
      }
    }
  }
  let resultTotalWidth = totalWidth;
  const sheetWidth = Math.ceil(totalLength * ration64) + fixed;
  if (sheetWidth > totalWidth) {
    resultTotalWidth = sheetWidth;
  }
  let remainingWidth = resultTotalWidth-fixed-1;
  if (isBeingEdited) {
    remainingWidth = sheetWidth-fixed;
  } else {
    if (totalLength === 0) {
      remainingWidth = resultTotalWidth-1;
      for (let i = 0; i < dim.length; i++) {
        if (sheet[i].objectType !== "b" || sheet[i].type !== "t") {
          totalLength++;
          dim[i].al = 1;
        } else {
          remainingWidth -= wTermBar;
        }
      }
    }
  }
  let remainingLength = totalLength;
  const resultArray = [];
  for (let i = 0; i < dim.length; i++) {
    if (dim[i].al === 0) {
      if (i < dim.length-1) {
        resultArray.push(dim[i].minRation - dim[i].rw - dim[i+1].lw);
      } else {
        resultArray.push(dim[i].minRation - dim[i].rw);
      }
    } else {
      let ration = remainingWidth*dim[i].al/remainingLength;
      remainingWidth -= ration;
      remainingLength -= dim[i].al;
      if (i < dim.length-1) {
        resultArray.push(ration-dim[i].rw-dim[i+1].lw);
      } else {
        resultArray.push(ration-dim[i].rw);
      }
    }
  }
  return [resultTotalWidth, resultArray];
};

// // return type: int[]
// const calcSheetObjectMargin = (sheet, totalWidth, isBeingEdited) => {
//   // 1. Find minimally required residue of every bar.
//   // 2. Check whether it requires residue.
//   // 3. Check whether it exceeds "totalWidth".
//   let residue = totalWidth;
//   let minRequiredResidue = 0;
//   let requiresResidue = false;
//   let barsUnit = [];
//   let barsLengthByUnit = [];
//   let barsRationForUnit = [];
//   let barsLengthsByUnit = [];
//   let barsNaturalPixels = [];
//   let template = [];

//   let isPrevNote = false;
//   let currBarRations = [];
//   let currBarLengthsBy64 = [];
//   let currBarMinUnitBy64 = 64;
//   for (let i in sheet) {
//     const o = sheet[i];
//     switch (o.objectType) {
//       case "c":
//         residue -= wClef(o.treble)+wDefault;
//         template.push(wDefault);
//         isPrevNote = false;
//         break;
//       case "t":
//         residue -= wTime+wDefault;
//         template.push(wDefault);
//         isPrevNote = false;
//         break;
//       case "k":
//         residue -= wKey(o.key)+wDefault;
//         template.push(wDefault);
//         isPrevNote = false;
//         break;
//       case "b":
//         barsUnit.push(currBarMinUnitBy64);
//         let currRationForUnit = 0;
//         let currLengthByUnit = 0;
//         let currBarLengthsByUnit = [];
//         for (let j = 0; j < currBarLengthsBy64.length; j++) {
//           let lengthByUnit = currBarLengthsBy64[j] / currBarMinUnitBy64;
//           currLengthByUnit += lengthByUnit;
//           currBarLengthsByUnit.push(lengthByUnit);
//           let now = Math.ceil(currBarRations[j] / currBarLengthsByUnit[j]);
//           if (currRationForUnit < now) {
//             currRationForUnit = now;
//           }
//         }
//         minRequiredResidue += currLengthByUnit * currRationForUnit;
//         barsRationForUnit.push(currRationForUnit);
//         barsLengthByUnit.push(currLengthByUnit);
//         barsLengthsByUnit.push(currBarLengthsByUnit);
//         barsNaturalPixels.push(currBarRations);
//         template.push(-1);
//         currBarRations = [];
//         currBarLengthsBy64 = [];
//         currBarMinUnitBy64 = 64;
//         isPrevNote = false;

//         switch (o.type) {
//           case "b":
//             residue -= wBar+wDefault;
//             template.push(wDefault);
//             break;
//           case "d":
//             residue -= wDoubleBar+wDefault;
//             template.push(wDefault);
//             break;
//           case "t":
//             residue -= wTermBar
//             template.push(0);
//             break;
//         }

//         break;
//       case "n":
//         let currWAcc = wNoteAcc(o.rest, o.height, o.accidental);
//         if (isPrevNote) {
//           currBarRations[currBarRations.length-1] += currWAcc;
//         } else {
//           residue -= currWAcc;
//         }
        
//         let w = wNote(o.rest, o.length, o.extend, o.height, o.accidental)+wNoteDefaultMargin;
//         currBarRations.push(w);
//         let unitBy64 = 64/Math.pow(2, o.length);
//         if (o.extend) {
//           unitBy64 /= 2;
//           currBarLengthsBy64.push(unitBy64*3);
//         } else {
//           currBarLengthsBy64.push(unitBy64);
//         }
//         if (unitBy64 < currBarMinUnitBy64) {
//           currBarMinUnitBy64 = unitBy64;
//         }
//         isPrevNote = true;
//         requiresResidue = true;
//         break;
//       case "p":
//         residue -= wBPM+wDefault;
//         template.push(wDefault);
//         isPrevNote = false;
//         break;
//       case "r":
//         // not implemented
//         break;
//       default:
//         // not the case
//         break;
//     }
//   }

//   if (currBarRations.length > 0) {
//     barsUnit.push(currBarMinUnitBy64);
//     let currRationForUnit = 0;
//     let currLengthByUnit = 0;
//     let currBarLengthsByUnit = [];
//     for (let j = 0; j < currBarLengthsBy64.length; j++) {
//       let lengthByUnit = currBarLengthsBy64[j] / currBarMinUnitBy64;
//       currLengthByUnit += lengthByUnit;
//       currBarLengthsByUnit.push(lengthByUnit);
//       let now = Math.ceil(currBarRations[j] / currBarLengthsByUnit[j]);
//       if (currRationForUnit < now) {
//         currRationForUnit = now;
//       }
//     }
//     minRequiredResidue += currLengthByUnit * currRationForUnit;
//     barsRationForUnit.push(currRationForUnit);
//     barsLengthByUnit.push(currLengthByUnit);
//     barsLengthsByUnit.push(currBarLengthsByUnit);
//     barsNaturalPixels.push(currBarRations);
//     template.push(-1);
//   }

//   // if (requiresResidue) {
//   if(true){
//     let result = [];
//     let barIdx = 0;
//     for (let i = 0; i < template.length; i++) {
//       if (template[i] === -1) {
//         for (let j = 0; j < barsLengthsByUnit[barIdx].length; j++) {
//           result.push(barsLengthsByUnit[barIdx][j]*barsRationForUnit[barIdx]-barsNaturalPixels[barIdx][j]+wNoteDefaultMargin);
//         }
//         barIdx++;
//       } else {
//         result.push(template[i]);
//       }
//     }
//     // if (minRequiredResidue > residue) {
//     if(false){
//     //
//     ;
//       // Expand
//     } else {
//       var temptemp = [];
//       sheet.forEach(()=>temptemp.push(300));
//       return temptemp;
//       return result;
//     }
//   } else {
//     //
//     ;
//   }
// };

// const calcSheetObjectMargin = (ds, tw) => {
//   let subj = tw;
//   const tags = [];
//   let tagSum = 0;
//   const pixels = [];
//   for (let i in ds) {
//     const o = ds[i];
//     switch (o.objectType) {
//       case "c":
//         subj -= wClef(o.treble)+10;
//         tags.push(0);
//         pixels.push(10);
//         break;
//       case "t":
//         subj -= wTime+10;
//         tags.push(0);
//         pixels.push(10);
//         break;
//       case "k":
//         subj -= wKey(o.key)+10;
//         tags.push(0);
//         pixels.push(10);
//         break;
//       case "b":
//         switch (o.type) {
//           case "b":
//             subj -= wBar+10;
//             tags.push(0);
//             pixels.push(10);
//             break;
//           case "d":
//             subj -= wDoubleBar+10;
//             tags.push(0);
//             pixels.push(10);
//             break;
//           case "t":
//             subj -= wTermBar;
//             tags.push(0);
//             pixels.push(0);
//             break;
//         }
//         break;
//       case "n":
//         subj -= wNote(o.rest, o.length, o.extend, o.height, o.accidental)+10;
//         let l = 128/Math.pow(2, o.length);
//         if (o.extend) {
//           l = l * 3 / 2;
//         }
//         tags.push(l);
//         tagSum += l;
//         pixels.push(10);
//         break;
//       case "p":
//         subj -= wBPM+10;
//         tags.push(0);
//         pixels.push(10);
//         break;
//       case "r":
//         tags.push(0);
//         pixels.push(0);
//         break;
//     }
//   }
//   for (let i in tags) {
//     if (tags[i] !== 0) {
//       let increment = Math.round(subj * tags[i] / tagSum);
//       subj -= increment;
//       tagSum -= tags[i];
//       pixels[i] += increment;
//     }
//   }
//   // var temptemp = [];
//   // ds.forEach(()=>temptemp.push(20));
//   // return temptemp;
//   return pixels;
// };

export default calcSheetObjectMargin;
