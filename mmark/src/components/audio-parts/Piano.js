import React, { Fragment } from "react";
import InstrumentComponent from "./InstrumentComponent";

const TONES = ['C', 'C#',
               'D', 'D#',
               'E',
               'F', 'F#',
               'G', 'G#',
               'A', 'A#',
               'B'];
const OCTAVE_MIN = 1;
const OCTAVE_MAX = 7;
const NOTES = [];
for (let octave = OCTAVE_MIN; octave <= OCTAVE_MAX; octave++) {
  for (let toneIdx = 0; toneIdx < TONES.length; toneIdx++) {
    NOTES.push(TONES[toneIdx] + octave);
  }
}

const isAccidentalNote = (note) => (NOTES.includes(note) && note.includes('#'));
const getNotesBetween = (startNote, endNote) =>  NOTES.slice(NOTES.indexOf(startNote), NOTES.indexOf(endNote) + 1);

const getKeysFromNote = (keyToNote, note) => Object.keys(keyToNote).filter(shortcut => keyToNote[shortcut] === note);

const Piano = ({startNote, endNote, keyToNote, renderer, inputMode, addPlayHistory}) => {
  const notes = getNotesBetween(startNote, endNote);
  return (
    <InstrumentComponent
      instrumentName={"acoustic_grand_piano"}
      keyToNote={keyToNote}
      renderer={({playingNotes, play, stop}) =>
        notes.map(note => (
          <Fragment key={note}>
            {renderer({
              note: note,
              isAccidental: isAccidentalNote(note),
              isPlaying: playingNotes.includes(note),
              play: () => {
                addPlayHistory(note);
                play(note);
              },
              stop: () => stop(note),
              keyBindings: getKeysFromNote(keyToNote, note),
              isDisabled: (inputMode === "oneKey")    ? (note !== "C4") :
                          (inputMode === "whiteKeys") ? isAccidentalNote(note) :
                          (inputMode === "allKeys")   ? false : true,
            })}
          </Fragment>
        ))
      }
    />
  );
};

Piano.defaultProps = {
  keyToNote: {},
};

export default Piano;
