import React, { useState, useEffect } from 'react';
import './PianoKey.css';
import AudioPlayer from '../audio-parts/AudioPlayer';

const PianoKey = ({note}) => {
  const [player, setPlayer] = useState(AudioPlayer());
  useEffect(() => {
    player.setInstrument("acoustic_grand_piano");
  }, []);
  const play = () => {player.playNote(note);};
  const stop = () => {player.stopNote();};
  if(note.includes("#")){
    return (
      <div className={"piano-black-key-wrapper"}>
        <div className={"piano-black-key"} onMouseDown={play} onMouseUp={stop} onMouseOut={stop}>
          <div className={"piano-key-text"}>{note}</div>
        </div>
      </div>
    );
  }else{
    return (
      <>
        <div className={"piano-key"} onMouseDown={play} onMouseUp={stop} onMouseOut={stop}>
          <div className={"piano-key-text"}>{note}</div>
        </div>
      </>
    );
  }
};

export default PianoKey;