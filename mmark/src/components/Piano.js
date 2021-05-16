import React from 'react';
import PianoKey from './piano-parts/PianoKey';
import styled from 'styled-components';

// const keyNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
// const octaveNames = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const allNotes = ["C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3",
                  "C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4",];

const PianoWrapper = styled.div `
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: fit-content;
  margin: 0px;
  padding: 10px;
  border: 5px solid pink;
`

const Piano = ({startNote, endNote}) => {
  const startIndex = allNotes.indexOf(startNote);
  const endIndex = allNotes.indexOf(endNote);
  const existingNotes = allNotes.slice(startIndex, endIndex+1);
  return (
    <>
      <PianoWrapper>
        {existingNotes.map((note, index) => <PianoKey note={note} key={index}/>)}
      </PianoWrapper>
    </>
  );
};

export default Piano;