import React from 'react';
import {ReactComponent as NoteIcon_2} from "./musical_symbols_svg/notes1/2.svg";

const SheetEditControl = ({isBeingEdited}) => {
  if (isBeingEdited) {
    return (
      <>
        <div className={"sheet-edit-control-button"}>SheetEditControl-Component</div>
        <div className={"sheet-edit-control-button"}>
          <NoteIcon_2 className={"black"} style={{position: "relative", height: "20px"}}/>
        </div>
        <div className={"sheet-edit-control-dropup"}>
          <div className={"button"}>Dropup</div>
          <div className={"content"}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </>
    );
  } else {
    return (<></>);
  }
};

export default SheetEditControl;