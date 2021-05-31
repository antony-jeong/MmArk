import React, { useEffect, useState } from 'react';
import {ReactComponent as NoteIcon_2} from "./musical_symbols_svg/notes1/2.svg";

const isRegularKey = (e) => {
  return !e.ctrlKey && !e.metaKey && !e.shiftKey;
};

const isControlKey = (e) => {
  return e.ctrlKey && !e.metaKey && !e.shiftKey;
};

const SheetEditControl = ({isBeingEdited, ds, setDs, idx, setIdx, h, setH}) => {
  const [editLength, setEditLength] = useState(2);
  const [editExtend, setEditExtend] = useState(false);
  const [editAccidental, setEditAccidental] = useState("x");
  const handleKeyDown = (e) => {
    if (isBeingEdited) {
      if (isRegularKey(e)) {
        const code = e.keyCode;
        switch (code) {
          case 35:  // end
            setIdx(ds.length);
            break;
          case 36:  // home
            setIdx(0);
            break;
          case 37:  // left
            if (idx > 0) { setIdx(idx-1); }
            break;
          case 39:  // right
            if (idx < ds.length) { setIdx(idx+1); }
            break;
          case 38:  // up
            if (h < 15) { setH(h+1); }
            break;
          case 40:  // down
            if (h > -7) { setH(h-1); }
            break;
          case 8:  // backspace
            if (idx > 0) { delObj(); }
            break;
          case 49:  // 1
            setEditLength(0);
            break;
          case 50:  // 2
            setEditLength(1);
            break;
          case 51:  // 3
            setEditLength(2);
            break;
          case 52:  // 4
            setEditLength(3);
            break;
          case 53:  // 5
            setEditLength(4);
            break;
          case 54:  // 6
            setEditLength(5);
            break;
          case 55:  // 7
            setEditAccidental(editAccidental==="n"?"x":"n");
            break;
          case 56:  // 8
            setEditAccidental(editAccidental==="f"?"x":"f");
            break;
          case 57:  // 9
            setEditAccidental(editAccidental==="s"?"x":"s");
            break;
          case 190:  // .
            setEditExtend(!editExtend);
            break;
          case 13:  // Enter
            addNote(false);
            break;
          case 32:  // Space
            addNote(true);
            break;
          case 9:  // Tab
            addObj({objectType: 'b', type: 'b', barlineDecoration: "x"});
            break;
        }
      } else if (isControlKey(e)) {
        const code = e.keyCode;
        switch (code) {
          case 35:  // end
            setIdx(ds.length);
            break;
          case 36:  // home
            setIdx(0);
            break;
          case 37:  // left
            if (idx > 0) { setIdx(measureHome()); }
            break;
          case 39:  // right
            if (idx < ds.length) { setIdx(measureEnd()); }
            break;
          case 38:  // up
            if (h < 15-6) { setH(h+7); }
            break;
          case 40:  // down
            if (h > -7+6) { setH(h-7); }
            break;
          case 8:  // backspace
            if (idx > 0) { deleteMeasure(); }
            break;
        }
      }
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  const addObj = (o) => {
    setDs([...ds.slice(0, idx), o, ...ds.slice(idx)]);
    setIdx(idx+1);
  };
  const delObj = () => {
    setDs([...ds.slice(0, idx-1), ...ds.slice(idx)]);
    setIdx(idx-1);
  };
  const measureHome = () => {
    let start = idx-1;
    if (ds[idx-1].objectType === "b") {
      start--;
    }
    for (let i = start; i >= 0; i--) {
      if (ds[i].objectType === "b") {
        return i+1;
      }
    }
    return 0;
  };
  const measureEnd = () => {
    let start = idx;
    if (ds[idx].objectType === "b") {
      start++;
    }
    for (let i = start; i < ds.length; i++) {
      if (ds[i].objectType === "b") {
        return i;
      }
    }
    return ds.length;
  }
  const deleteMeasure = () => {
    let home = measureHome();
    setDs([...ds.slice(0, home), ...ds.slice(idx)]);
    setIdx(home);
  }
  const addNote = (isRest) => addObj({
    objectType: "n", rest: isRest, height: [h], length: editLength, extend: editExtend,
    accidental: [editAccidental], noteDecoration: ["x"]
  });
  return (<div className={isBeingEdited ? "sheet-edit-control-showed" : "sheet-edit-control-hidden"}>
    <div className={"sheet-edit-control-bundle"}>
      <div className={"sheet-edit-control-button"}>p</div>
      <div className={"sheet-edit-control-button"}>c/t</div>
      <div className={"sheet-edit-control-button"}>k</div>
      <div className={"sheet-edit-control-button"}>b</div>
    </div>
    <div className={"sheet-edit-control-bundle"}>
      <div className={"sheet-edit-control-button"}>none</div>
      <div className={"sheet-edit-control-button"}>stct</div>
      <div className={"sheet-edit-control-button"}>acnt</div>
      <div className={"sheet-edit-control-button"}>tnt</div>
      <div className={"sheet-edit-control-button"}>frmt</div>
    </div>
    <div className={"sheet-edit-control-bundle"}>
      <div
        className={"sheet-edit-control-button"+(editExtend?" chosen":"")}
        onClick={()=>setEditExtend(!editExtend)}
      >dot</div>
    </div>
    <div className={"sheet-edit-control-bundle"}>
      <div
        className={"sheet-edit-control-button"+(editAccidental==="n"?" chosen":"")}
        onClick={()=>setEditAccidental(editAccidental==="n"?"x":"n")}
      >nat</div>
      <div
        className={"sheet-edit-control-button"+(editAccidental==="f"?" chosen":"")}
        onClick={()=>setEditAccidental(editAccidental==="f"?"x":"f")}
      >flt</div>
      <div
        className={"sheet-edit-control-button"+(editAccidental==="s"?" chosen":"")}
        onClick={()=>setEditAccidental(editAccidental==="s"?"x":"s")}
      >shrp</div>
    </div>
    <div className={"sheet-edit-control-bundle"}>
      <div className={"sheet-edit-control-button"}>stack</div>
    </div>
    <div className={"sheet-edit-control-bundle"}>
      <div className={"sheet-edit-control-button"+(editLength===0?" chosen":"")} onClick={()=>setEditLength(0)}
      >1</div>
      <div className={"sheet-edit-control-button"+(editLength===1?" chosen":"")} onClick={()=>setEditLength(1)}
      >2</div>
      <div className={"sheet-edit-control-button"+(editLength===2?" chosen":"")} onClick={()=>setEditLength(2)}
      >3</div>
      <div className={"sheet-edit-control-button"+(editLength===3?" chosen":"")} onClick={()=>setEditLength(3)}
      >4</div>
      <div className={"sheet-edit-control-button"+(editLength===4?" chosen":"")} onClick={()=>setEditLength(4)}
      >5</div>
      <div className={"sheet-edit-control-button"+(editLength===5?" chosen":"")} onClick={()=>setEditLength(5)}
      >6</div>
    </div>
    <div className={"sheet-edit-control-bundle"}>
      <div
        className={"sheet-edit-control-button"}
        onClick={()=>addNote(false)}
      >note</div>
      <div
        className={"sheet-edit-control-button"}
        onClick={()=>addNote(true)}
      >rest</div>
    </div>
    <div className={"sheet-edit-control-bundle"}>
      <div className={"sheet-edit-control-button"}>
        <NoteIcon_2 className={"black"} style={{position: "relative", height: "20px"}}/>
      </div>
      <div className={"sheet-edit-control-dropup"}>
        <div className={"button"} onClick={() => {addObj({objectType: "c", treble: true});}}>
          <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/clef_g.svg"} style = {{position: "relative", top: "0px"}}  height = "25px"/>
        </div>
        <div className={"content"}>
          <div className={"option"}>
            <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/clef_f.svg"} style = {{position: "relative", top: "0px"}}  height = "30px"/>
          </div>
          <div className={"option"} onClick={() => {addObj({objectType: "n", length: 1, noteDecoration: ["x"], rest: false, extend: false, height: [ 4], accidental: ["x"]})}}>
            <NoteIcon_2 className={"black"} style={{position: "relative", height: "20px"}}/>
          </div>
          <div className={"option"}>
            <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/clef_f.svg"} style = {{position: "relative", top: "0px"}}  height = "30px"/>
          </div>
        </div>
      </div>
    </div>
  </div>);
};

export default SheetEditControl;