const wNNoteU = [17, 17, 17, 27, 27, 27];
const WNNoteD = [17, 17, 17, 17, 17, 17];
const wENoteU = [20, 23, 23, 27, 27, 27];
const wENoteD = [20, 23, 23, 23, 23, 23];
const wNRest = [22, 22, 13, 15, 19, 24];
const wERest = [30, 30, 22, 21, 25, 31];
const wMNote = 31;
const wAcc = 8;

const wClef = (b) => (b ? 27 : 32);
const wTime = 27;
const wBPM = 0;
const wBar = 1;
const wDoubleBar = 3;
const wTermBar = 6;

const wKey = (key) => (key * wAcc);

const wNote = (isRest, length, isExtended, height, acc) => {
  if (isRest) {
    return (isExtended ? wERest : wNRest)[length];
  } else {
    if (height.length > 1) {
      return wMNote + acc.filter(a => a !== "x").length * wAcc;
    } else {
      if (height[0] >= 5) {
        return (isExtended ? wENoteD : WNNoteD)[length] + (acc[0] !== "x" ? wAcc : 0);
      } else {
        return (isExtended ? wENoteU : wNNoteU)[length] + (acc[0] !== "x" ? wAcc : 0);
      }
    }
  }
};

const calcSheetObjectMargin = (ds, tw) => {
  let subj = tw;
  const tags = [];
  let tagSum = 0;
  const pixels = [];
  for (let i in ds) {
    const o = ds[i];
    switch (o.objectType) {
      case "c":
        subj -= wClef(o.treble)+2;
        tags.push(0);
        pixels.push(2);
        break;
      case "t":
        subj -= wTime+2;
        tags.push(0);
        pixels.push(2);
        break;
      case "k":
        subj -= wKey(o.key)+2;
        tags.push(0);
        pixels.push(2);
        break;
      case "b":
        switch (o.type) {
          case "b":
            subj -= wBar+2;
            tags.push(0);
            pixels.push(2);
            break;
          case "d":
            subj -= wDoubleBar+2;
            tags.push(0);
            pixels.push(2);
            break;
          case "t":
            subj -= wTermBar;
            tags.push(0);
            pixels.push(0);
            break;
        }
        break;
      case "n":
        subj -= wNote(o.rest, o.length, o.extend, o.height, o.accidental)+2;
        let l = 4/Math.pow(2, o.length);
        if (o.extend) {
          l = l * 3 / 2;
        }
        tags.push(l);
        tagSum += l;
        pixels.push(2);
        break;
      case "p":
        subj -= wBPM;
        tags.push(0);
        pixels.push(0);
        break;
      case "r":
        tags.push(0);
        pixels.push(0);
        break;
    }
  }
  for (let i in tags) {
    if (tags[i] !== 0) {
      let increment = Math.round(subj * tags[i] / tagSum);
      subj -= increment;
      tagSum -= tags[i];
      pixels[i] += increment;
    }
  }
  return pixels;
};

export default calcSheetObjectMargin;
