import React, { useState } from 'react';
import PianoKey from './piano-parts/PianoKey';
import styled from 'styled-components';
import InstrumentAudio from './audio-parts/InstrumentAudio';

// const keyNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
// const octaveNames = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const allNotes = ["C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3",
                  "C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5"];

const PianoWrapper = styled.div `
  display: flex;
  align-items: flex-start;
  justify-self: center;
  justify-content: center;
  width: fit-content;
  margin: 0px;
  padding: 10px;
`

const Piano = ({startNote, endNote}) => {
  const [playingNotes, setPlayingNotes] = useState([]);
  const playNote = (note) => setPlayingNotes([...playingNotes, note]);
  const stopNote = (note) => setPlayingNotes(playingNotes.filter(e => e !== note));
  const existingNotes = [];
  let i = 0;
  while (i < allNotes.length) {
    if (allNotes[i] === startNote) {
      while (i < allNotes.length) {
        existingNotes.push(allNotes[i]);
        if (allNotes[i] === endNote) {
          i = allNotes.length;
        }
        i++;
      }
    }
    i++;
  }
  return (
    <>
      <PianoWrapper>
        {existingNotes.map((note, index) => <PianoKey note={note} play={() => playNote(note)} stop={() => stopNote(note)} key={index}/>)}
      </PianoWrapper>
      <InstrumentAudio playingNotes={playingNotes} instrumentName={"acoustic_grand_piano"}/>
    </>
  );
};

export default Piano;