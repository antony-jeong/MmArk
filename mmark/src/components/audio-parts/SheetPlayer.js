
const sharpKeySignOrder = ["F", "C", "G", "D", "A", "E", "D"];
const flatKeySignOrder = ["B", "E", "A", "D", "G", "C", "F"];
const noteOrder = ["D#", "E", "F", "E", "F", "F#", "F#", "G", "G#", "G#", "A", "A#", "A#", "B", "C", "B", "C", "C#", "C#", "D", "D#"];

const convertObjects = (ds) => {
  var returnIndex = 0;
  var segnoIndex = -1;
  var isCodaOpen = false;
  var codaOpen = {type: "to coda", dest: -1};
  var volta1 = {type: "volta 1", dest: -1, visited: false};

  var isTreble = true;
  var durOf4 = 750; // default: quarter = 80
  var keySign = {isSharp: true, notes: []};
  var accidentals = [];

  const processNote = (height, acc) => {
    if (!isTreble) {
      height = height - 12;
    }
    var index = height % 7;
    if (index < 0) {
      index += 7;
    }
    var octave = (height - index) / 7 + 4;
    if (acc === "x") {
      for (var accidentalIdx in accidentals) {
        var accidental = accidentals[accidentalIdx];
        if (accidental.height === height) {
          index = index * 3 + accidental.offsetPlus1;
          if (index >= 10) {
            octave += 1;
          }
          return noteOrder[index] + octave;
        }
      }
      index = index * 3 + 1;
      var note = noteOrder[index];
      if (keySign.notes.indexOf(note) === -1) {
        if (index >= 10) {
          octave += 1;
        }
        return note + octave;
      } else {
        if (keySign.isSharp) {
          index += 1;
          if (index >= 10) {
            octave += 1;
          }
          return noteOrder[index] + octave;
        } else {
          index -= 1;
          if (index >= 10) {
            octave += 1;
          }
          return noteOrder[index] + octave;
        }
      }
    } else {
      if (acc === "s") {
        index = index * 3 + 2;
        if (index >= 10) {
          octave += 1;
        }
        for (let accidental in accidentals) {
          if (accidental.height === height) {
            accidental.offsetPlus1 = 2;
            return noteOrder[index] + octave;
          }
        }
        accidentals.push({height: height, offsetPlus1: 2});
        return noteOrder[index] + octave;
      } else if (acc === "f") {
        index = index * 3;
        if (index >= 10) {
          octave += 1;
        }
        for (let accidental in accidentals) {
          if (accidental.height === height) {
            accidental.offsetPlus1 = 0;
            return noteOrder[index] + octave;
          }
        }
        accidentals.push({height: height, offsetPlus1: 0});
        return noteOrder[index] + octave;
      } else if (acc === "n") {
        index = index * 3 + 1;
        if (index >= 10) {
          octave += 1;
        }
        for (let accidentalIdx in accidentals) {
          var accidental = accidentals[accidentalIdx];
          if (accidental.height === height) {
            accidental.offsetPlus1 = 1;
            return noteOrder[index] + octave;
          }
        }
        accidentals.push({height: height, offsetPlus1: 1});
        return noteOrder[index] + octave;
      }
    }
  };

  var converted = [];
  for (var oidx = 0; oidx < ds.length; oidx++) {
    var o = ds[oidx];
    switch (o.objectType) {
      case "c":
        if (o.treble) {
          isTreble = true;
        } else {
          isTreble = false;
        }
        break;
      case "t":
        break;
      case "k":
        if (o.key === 0) {
          keySign.notes = [];
        } else if (o.key > 0) {
          keySign.isSharp = true;
          keySign.notes = sharpKeySignOrder.slice(0, o.key);
        } else if (o.key < 0) {
          keySign.isSharp = false;
          keySign.notes = flatKeySignOrder.slice(0, -o.key);
        }
        break;
      case "b":
        // pre-barline
        switch (o.barlineDecoration) {
          case "ds":
            converted.push({type: "ds", dest: segnoIndex, visited: false});
            break;
          case "dc":
            converted.push({type: "dc", dest: 0, visited: false});
            break;
          case "fi":
          case "fe":
            converted.push({type: "fine"});
            break;
          case "co":
            if (!isCodaOpen) {
              isCodaOpen = true;
              converted.push(codaOpen);
            }
            break;
          case "r1":
            converted.push(volta1);
            break;
        }
        // barline
        switch (o.type) {
          case "o":
            returnIndex = converted.length;
            break;
          case "c":
            converted.push({type: "repeat", dest: returnIndex, visited: false});
            break;
          case "r":
            converted.push({type: "repeat", dest: returnIndex, visited: false});
            returnIndex = converted.length;
            break;
          case "t":
            converted.push({type: "terminate"})
            break;
        }
        // post-barline
        switch (o.barlineDecoration) {
          case "se":
            segnoIndex = converted.length;
            break;
          case "co":
            if (isCodaOpen) {
              codaOpen.dest = converted.length;
            }
            break;
          case "r2":
            volta1.dest = converted.length;
            break;
        }
        break;
      case "n":
        var lenBy128 = 128/Math.pow(2, o.length);
        if (o.extend) {
          lenBy128 += lenBy128/2;
        }
        if (o.noteDecoration === "f") {
          lenBy128 *= 3;
        }
        if (o.rest) {
          converted.push({type: "rest", lenBy128: lenBy128, durOf4: durOf4});
        } else {
          var notes = [];
          for (var i = 0; i < o.height.length; i++) {
            notes.push(processNote(o.height[i], o.accidental[i]));
          }
          if (o.noteDecoration === "s") {
            lenBy128 /= 2;
            converted.push({type: "note", notes: notes, lenBy128: lenBy128, durOf4: durOf4, isLoud: false});
            converted.push({type: "rest", lenBy128: lenBy128, durOf4: durOf4});
          } else {
            converted.push({type: "note", notes: notes, lenBy128: lenBy128, durOf4: durOf4, isLoud: o.noteDecoration === "a"});
          }
        }
        break;
      case "p":
        durOf4 = 120000/o.bpmUnit8/o.bpm;
        break;
      case "r":
        var tripletNotes = [];
        for (var noteIdx = 0; noteIdx < o.notes.length; noteIdx++) {
          var note = o.notes[noteIdx];
          var lenBy128 = 128/Math.pow(2, o.length);
          if (note.extend) {
            lenBy128 += lenBy128/2;
          }
          if (note.noteDecoration === "f") {
            lenBy128 *= 3;
          }
          if (note.rest) {
            tripletNotes.push({type: "rest", lenBy128: lenBy128});
          } else {
            var notes = [];
            for (var i = 0; i < note.height.length; i++) {
              notes.push(processNote(note.height[i], note.accidental[i]));
            }
            if (note.noteDecoration === "s") {
              lenBy128 /= 2;
              tripletNotes.push({type: "note", notes: notes, lenBy128: lenBy128, isLoud: false});
              tripletNotes.push({type: "rest", lenBy128: lenBy128});
            } else {
              tripletNotes.push({type: "note", notes: notes, lenBy128: lenBy128, isLoud: note.noteDecoration === "a"});
            }
          }
        }
        converted.push({type: "triplet", tripletNotes: tripletNotes, durOf4: durOf4});
        break;
    }
  }
  return converted;
}

const unwrapSheet = (converted) => {
  var nowBy128 = 0;
  var baseTime = 0;
  var currentDurOf4 = 750; // useless 750
  var afterDSorDC = false;
  var sequence = [];
  var i = 0;
  while (i < converted.length) {
    switch (converted[i].type) {
      case "rest":
        if (converted[i].durOf4 !== currentDurOf4) {
          baseTime += nowBy128 * currentDurOf4 / 32;
          nowBy128 = 0;
          currentDurOf4 = converted[i].durOf4;
        }
        nowBy128 += converted[i].lenBy128;
        i++;
        break;
      case "note":
        if (converted[i].durOf4 !== currentDurOf4) {
          baseTime += nowBy128 * currentDurOf4 / 32;
          nowBy128 = 0;
          currentDurOf4 = converted[i].durOf4;
        }
        for (var noteIdx = 0; noteIdx < converted[i].notes.length; noteIdx++) {
          var note = converted[i].notes[noteIdx];
          sequence.push({
            note: note,
            time: baseTime + nowBy128 * currentDurOf4 / 32,
            duration: converted[i].lenBy128 * currentDurOf4 / 32,
            isLoud: converted[i].isLoud
          });
        }
        nowBy128 += converted[i].lenBy128;
        i++;
        break;
      case "triplet":
        if (converted[i].durOf4 !== currentDurOf4) {
          baseTime += nowBy128 * currentDurOf4 / 32;
          nowBy128 = 0;
          currentDurOf4 = converted[i].durOf4;
        }
        var sumLenBy128 = 0;
        for (var tripletNoteIdx in converted[i].tripletNotes) {
          sumLenBy128 += converted[i].tripletNotes[tripletNoteIdx].lenBy128;
        }
        sumLenBy128 *= 2;
        sumLenBy128 /= 3;
        var copiedBaseTime = baseTime + nowBy128 * currentDurOf4 / 32;
        for (var tripletNoteIdx in converted[i].tripletNotes) {
          var tripletNote = converted[i].tripletNotes[tripletNoteIdx];
          var increment = tripletNote.lenBy128 * currentDurOf4 / 48;
          if (tripletNote.type === "note") {
            for (var noteIdx in tripletNote.notes) {
              var note = tripletNote.notes[noteIdx];
              sequence.push({
                note: note,
                time: copiedBaseTime,
                duration: increment,
                isLoud: tripletNote.isLoud
              });
            }
          }
          copiedBaseTime += increment;
        }
        nowBy128 += sumLenBy128;
        i++;
        break;
      case "ds":
      case "dc":
        afterDSorDC = true;
      case "repeat":
        if (converted[i].visited) {
          i++;
        } else {
          converted[i].visited = true;
          i = converted[i].dest;
        }
        break;
      case "fine":
        if (afterDSorDC) {
          i = converted.length;
        } else {
          i++;
        }
        break;
      case "to coda":
        if (afterDSorDC) {
          i = converted[i].dest;
        } else {
          i++;
        }
        break;
      case "volta 1":
        if (converted[i].visited) {
          i = converted[i].dest;
        } else {
          converted[i].visited = true;
          i++;
        }
        break;
      case "terminate":
        i = converted.length;
        break;
    }
  }
  return sequence;
};

const executeSequence = (soundPlayer, sequence, reservation) => {
  for(var i in sequence) {
    const {note, time, duration, isLoud} = sequence[i];
    reservation.push(setTimeout(() => {
      var stopper = soundPlayer.play(note, isLoud);
      setTimeout(stopper.stop, duration);
    }, time));
  }
};

const SheetPlayer = (soundPlayer) => {
  var sequence = [];
  var reservation = [];

  const play = () => {
    stop();
    executeSequence(soundPlayer, sequence, reservation);
  };

  const stop = () => {
    reservation.forEach((timeout) => {
      clearTimeout(timeout);
    });
    soundPlayer.stop();
    reservation = [];
  };

  return {
    setSheet: (ds) => {
      sequence = unwrapSheet(convertObjects(ds));
    },
    play: play,
    stop: stop
  };
};

export default SheetPlayer;
