import React from 'react';
import './PianoKey.css';

const PianoKey = ({note, play, stop}) => {
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