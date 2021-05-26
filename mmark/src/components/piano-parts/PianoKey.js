import React from 'react';
import './PianoKey.css';

const PianoKey = ({note, play, stop, type}) => {
  if(note.includes("#")){
    return (
      type==="allKeys"?
      <div className={"piano-black-key-wrapper"}>
        <div className={"piano-black-key"} onMouseDown={play} onMouseUp={stop} onMouseOut={stop}>
          <div className={"piano-key-text"}>{""}</div>
        </div>
      </div>
      :<div className={"piano-black-key-wrapper"}>
      <div className={"piano-black-key disabled"}>
        <div className={"piano-key-text"}>{""}</div>
      </div>
    </div>
    );
  }else{
    return (
      type==="oneKey"?
        note==="C4"?
          <>
          <div className={"piano-key"} onMouseDown={play} onMouseUp={stop} onMouseOut={stop}>
            <div className={"piano-key-text"}>{note === "C4" ? "●" : ""}</div>
          </div>
          </>
        :
          <>
          <div className={"piano-key disabled"}>
            <div className={"piano-key-text"}>{note === "C4" ? "●" : ""}</div>
          </div>
          </>
      :
      <>
      <div className={"piano-key"} onMouseDown={play} onMouseUp={stop} onMouseOut={stop}>
        <div className={"piano-key-text"}>{note === "C4" ? "●" : ""}</div>
      </div>
      </>
    );
  }
};

export default PianoKey;