import React, { useEffect, useState } from 'react';
import {ReactComponent as AccNatural} from "./musical_symbols_svg/accidental_n.svg";
import {ReactComponent as AccFlat} from "./musical_symbols_svg/accidental_f.svg";
import {ReactComponent as AccSharp} from "./musical_symbols_svg/accidental_s.svg";

import {ReactComponent as NoteIcon_1} from "./musical_symbols_svg/notes1/1.svg";
import {ReactComponent as NoteIcon_2} from "./musical_symbols_svg/notes1/2.svg";
import {ReactComponent as NoteIcon_4} from "./musical_symbols_svg/notes1/4.svg";
import {ReactComponent as NoteIcon_8} from "./musical_symbols_svg/notes1/8.svg";
import {ReactComponent as NoteIcon_16} from "./musical_symbols_svg/notes1/16.svg";
import {ReactComponent as NoteIcon_32} from "./musical_symbols_svg/notes1/32.svg";

const isRegularKey = (e) => {
  return !e.ctrlKey && !e.metaKey && !e.shiftKey;
};

const isControlKey = (e) => {
  return e.ctrlKey && !e.metaKey && !e.shiftKey;
};

const SheetEditControl = ({isBeingEdited, ds, setDs, idx, setIdx, h, setH, focusNow, setIsMutated}) => {
  const [editLength, setEditLength] = useState(2);
  const [editExtend, setEditExtend] = useState(false);
  const [editAccidental, setEditAccidental] = useState("x");
  const [activeDD, setActiveDD] = useState("x");
  const handleMouseDown = (e) => {
    const ddtype = e.target.getAttribute("ddtype");
    if (ddtype !== "c" && ddtype !== "k" && ddtype !== "b") {
      setActiveDD("x");
    }
  };
  const handleKeyDown = (e) => {
    if (focusNow === "s") {
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
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  const addObj = (o) => {
    setDs([...ds.slice(0, idx), o, ...ds.slice(idx)]);
    setIdx(idx+1);
    setIsMutated(true);
  };
  const delObj = () => {
    setDs([...ds.slice(0, idx-1), ...ds.slice(idx)]);
    setIdx(idx-1);
    setIsMutated(true);
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
    setIsMutated(true);
  }
  const addNote = (isRest) => {
    addObj({
      objectType: "n", rest: isRest, height: [h], length: editLength, extend: editExtend,
      accidental: [editAccidental], noteDecoration: ["x"]
    });
    setEditAccidental("x");
    setEditExtend(false);
  };
  const TimeSignatureCell = (n, d, area) => {
    return (
      <div
        className={"option-cell"}
        style={{gridArea: area, flexDirection: "column"}}
        onClick={() => {
          addObj({objectType: "t", numerator: n, denominator: d});
          setActiveDD("x");
        }}
        ddtype="c"
      >
        <div style = {{width: "0px"}} ddtype="c"><img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/numerator_" + n + ".svg"} style = {{position: "relative", top: "4px", left: "-9px"}} height = "15px" ddtype="c"/></div>
        <div style = {{width: "20px", height: "1px", borderTop: "1px solid black"}} ddtype="c"></div>
        <div style = {{width: "0px"}} ddtype="c"><img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/denominator_" + d + ".svg"} style = {{position: "relative", top: "-3px", left: "-9px"}} height = "15px" ddtype="c"/></div>
      </div>
    );
  };
  const KeySignatureCell = (key, area) => {
    const AccImg = (key > 0
      ? (top, index) => {return (
        <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/accidental_s.svg"} style = {{position: "relative", top: top+"px", left: "0px"}} height = "18px" width ="5px" key={index} ddtype="k"/>
      );}
      : (top, index) => {return (
        <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/accidental_f.svg"} style = {{position: "relative", top: top+"px", left: "0px"}} height = "18px" width ="5px" key={index} ddtype="k"/>
      );}
    );
    const numAcc = (key > 0 ? key : -key);
    const topArr = (key > 0 ? [-21, -12, -24, -15, -6, -18, -9] : [-11, -20, -8, -17, -5, -14, -2]).slice(0, numAcc);
    const paddingTop = (key > 0 ? 10 : 6)
    const lineWidth = [16, 16, 20, 24, 28, 32, 36][numAcc-1];
    return (
      <div
        className={"option-cell"}
        style={{gridArea: area, flexDirection: "column", paddingTop: paddingTop+"px"}}
        onClick={() => {
          addObj({objectType: "k", key: key});
          setActiveDD("x");
        }}
        ddtype="k"
      >
        <div style={{height: "0px"}} ddtype="k">
          {topArr.map((top, index) => {
            return AccImg(top, index);
          })}
        </div>
        <div style={{height: "0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} ddtype="k">
          <div style={{width: lineWidth+"px", height: "0px", borderTop: "1px solid black", marginBottom: "5px"}} ddtype="k"></div>
          <div style={{width: lineWidth+"px", height: "0px", borderTop: "1px solid black", marginBottom: "5px"}} ddtype="k"></div>
          <div style={{width: lineWidth+"px", height: "0px", borderTop: "1px solid black", marginBottom: "5px"}} ddtype="k"></div>
          <div style={{width: lineWidth+"px", height: "0px", borderTop: "1px solid black", marginBottom: "5px"}} ddtype="k"></div>
          <div style={{width: lineWidth+"px", height: "0px", borderTop: "1px solid black"}} ddtype="k"></div>
        </div>
      </div>
    );
  };
  return (<div className={isBeingEdited ? "sheet-edit-control-showed" : "sheet-edit-control-hidden"}>
    {/* <div className={"sheet-edit-control-bundle"}>
      <div className={"sheet-edit-control-button"}>stct</div>
      <div className={"sheet-edit-control-button"}>acnt</div>
      <div className={"sheet-edit-control-button"}>tnt</div>
      <div className={"sheet-edit-control-button"}>frmt</div>
    </div> */}
    {/* <div className={"sheet-edit-control-bundle"}>
      <div className={"sheet-edit-control-button"}>stack</div>
    </div> */}
    <div className={"sheet-edit-control-bundle"}>
      <div className={"sheet-edit-control-button"+(editLength===0?" chosen":"")} onClick={()=>setEditLength(0)} style={{width: "30px"}}
      ><div style={{transform: "translate(30%, 10%)"}}><NoteIcon_1 className={"black"} height={"24px"} /></div></div>
      <div className={"sheet-edit-control-button"+(editLength===1?" chosen":"")} onClick={()=>setEditLength(1)} style={{width: "30px"}}
      ><div style={{transform: "translate(30%, 10%)"}}><NoteIcon_2 className={"black"} height={"24px"} /></div></div>
      <div className={"sheet-edit-control-button"+(editLength===2?" chosen":"")} onClick={()=>setEditLength(2)} style={{width: "30px"}}
      ><div style={{transform: "translate(30%, 10%)"}}><NoteIcon_4 className={"black"} height={"24px"} /></div></div>
      <div className={"sheet-edit-control-button"+(editLength===3?" chosen":"")} onClick={()=>setEditLength(3)} style={{width: "30px"}}
      ><div style={{transform: "translate(30%, 10%)"}}><NoteIcon_8 className={"black"} height={"24px"} /></div></div>
      <div className={"sheet-edit-control-button"+(editLength===4?" chosen":"")} onClick={()=>setEditLength(4)} style={{width: "30px"}}
      ><div style={{transform: "translate(30%, 10%)"}}><NoteIcon_16 className={"black"} height={"24px"} /></div></div>
      <div className={"sheet-edit-control-button"+(editLength===5?" chosen":"")} onClick={()=>setEditLength(5)} style={{width: "30px"}}
      ><div style={{transform: "translate(30%, 10%)"}}><NoteIcon_32 className={"black"} height={"24px"} /></div></div>
    </div>
    <div className={"sheet-edit-control-bundle"}>
      <div
        className={"sheet-edit-control-button"+(editAccidental==="n"?" chosen":"")}
        onClick={()=>setEditAccidental(editAccidental==="n"?"x":"n")}
        style={{width: "30px"}}
      >
        <div style={{transform: "translate(40%, 10%)"}}><AccNatural height={"24px"} fill={"#1f1f1f"}/></div>
      </div>
      <div
        className={"sheet-edit-control-button"+(editAccidental==="f"?" chosen":"")}
        onClick={()=>setEditAccidental(editAccidental==="f"?"x":"f")}
        style={{width: "30px"}}
      >
        <div style={{transform: "translate(40%, 15%)"}}><AccFlat height={"24px"} fill={"#1f1f1f"}/></div>
      </div>
      <div
        className={"sheet-edit-control-button"+(editAccidental==="s"?" chosen":"")}
        onClick={()=>setEditAccidental(editAccidental==="s"?"x":"s")}
        style={{width: "30px"}}
      >
        <div style={{transform: "translate(40%, 10%)"}}><AccSharp height={"24px"} fill={"#1f1f1f"}/></div>
      </div>
    </div>
    <div className={"sheet-edit-control-bundle"}>
      <div
        className={"sheet-edit-control-button"+(editExtend?" chosen":"")}
        onClick={()=>setEditExtend(!editExtend)}
        style={{width: "30px", textAlign: "center", font: "Roboto"}}
      >Dot</div>
    </div>
    <div className={"sheet-edit-control-bundle"}>
      <div
        className={"sheet-edit-control-button"}
        onClick={()=>addNote(false)}
        style={{width: "70px", textAlign: "center", font: "Roboto"}}
      >Put note</div>
      <div
        className={"sheet-edit-control-button"}
        onClick={()=>addNote(true)}
        style={{width: "70px", textAlign: "center", font: "Roboto"}}
      >Put rest</div>
      <div
        className={"sheet-edit-control-button"}
        onClick={()=>addObj({objectType: "b", type: "b"})}
        style={{width: "60px", textAlign: "center", font: "Roboto"}}
      >
        Barline
      </div>
      <div
        className={"sheet-edit-control-button"}
        onClick={()=>{if (idx > 0) { delObj(); }}}
        style={{width: "60px", textAlign: "center", font: "Roboto", background: "#ffc2a7"}}
      >
        Delete
      </div>
    </div>
    <div className={"sheet-edit-control-bundle"}>
      {/* <div className={"sheet-edit-control-button"} style={{width: "30px"}}>p</div> */}
      <div className={"sheet-edit-control-dropup"}>
        <div
          className={"button"+(activeDD==="c"?" chosen":"")}
          onClick={()=>{setActiveDD(activeDD==="c"?"x":"c")}}
          style={{width: "130px", textAlign: "center", font: "Roboto"}}
          ddtype="c"
        >
          Clef / Time Sign
        </div>
        <div
          className={"content"+(activeDD==="c"?" chosen":"")}
          style={{gridTemplate: "36px 36px 40px / 24px 24px 12px 12px 24px 24px",}}
          ddtype="c"
        >
          {TimeSignatureCell( 3, 8, "1 / 1 / 2 / 2")}
          {TimeSignatureCell( 5, 8, "1 / 2 / 2 / 3")}
          {TimeSignatureCell( 6, 8, "1 / 3 / 2 / 5")}
          {TimeSignatureCell( 9, 8, "1 / 5 / 2 / 6")}
          {TimeSignatureCell(12, 8, "1 / 6 / 2 / 7")}

          {TimeSignatureCell( 2, 2, "2 / 1 / 3 / 2")}
          {TimeSignatureCell( 2, 4, "2 / 2 / 3 / 3")}
          {TimeSignatureCell( 3, 4, "2 / 3 / 3 / 5")}
          {TimeSignatureCell( 4, 4, "2 / 5 / 3 / 6")}
          {TimeSignatureCell( 5, 4, "2 / 6 / 3 / 7")}

          <div
            className={"option-cell"}
            style={{gridArea: "3 / 1 / 4 / 4",}}
            onClick={() => {
              addObj({objectType: "c", treble: true});
              setActiveDD("x");
            }}
            ddtype="c"
          >
            <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/clef_g.svg"} style = {{position: "relative", top: "0px", left: "0px"}} height = "35px" ddtype="c"/>
          </div>
          <div
            className={"option-cell"}
            style={{gridArea: "3 / 4 / 4 / 7",}}
            onClick={() => {
              addObj({objectType: "c", treble: false});
              setActiveDD("x");
            }}
            ddtype="c"
          >
            <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/clef_f.svg"} style = {{position: "relative", top: "0px", left: "0px"}} height = "40px" ddtype="c"/>
          </div>
        </div>
      </div>
      <div className={"sheet-edit-control-dropup"}>
        <div
          className={"button"+(activeDD==="k"?" chosen":"")}
          onClick={()=>{setActiveDD(activeDD==="k"?"x":"k")}}
          style={{width: "75px", textAlign: "center", font: "Roboto"}}
          ddtype="k"
        >
          Key sign
        </div>
        <div
          className={"content"+(activeDD==="k"?" chosen":"")}
          style={{gridTemplate: "50px 50px / 24px 24px 28px 32px 36px 40px 44px",}}
          ddtype="k"
        >
          {KeySignatureCell(-1, "1 / 1 / 2 / 2")}
          {KeySignatureCell(-2, "1 / 2 / 2 / 3")}
          {KeySignatureCell(-3, "1 / 3 / 2 / 4")}
          {KeySignatureCell(-4, "1 / 4 / 2 / 5")}
          {KeySignatureCell(-5, "1 / 5 / 2 / 6")}
          {KeySignatureCell(-6, "1 / 6 / 2 / 7")}
          {KeySignatureCell(-7, "1 / 7 / 2 / 8")}

          {KeySignatureCell(1, "2 / 1 / 3 / 2")}
          {KeySignatureCell(2, "2 / 2 / 3 / 3")}
          {KeySignatureCell(3, "2 / 3 / 3 / 4")}
          {KeySignatureCell(4, "2 / 4 / 3 / 5")}
          {KeySignatureCell(5, "2 / 5 / 3 / 6")}
          {KeySignatureCell(6, "2 / 6 / 3 / 7")}
          {KeySignatureCell(7, "2 / 7 / 3 / 8")}
        </div>
      </div>
      <span style={{color: "red"}}>*Arrow keys to move cursor</span>
      {/* <div className={"sheet-edit-control-dropup"}>
      <div
          className={"button"+(activeDD==="b"?" chosen":"")}
          onClick={()=>{setActiveDD(activeDD==="b"?"x":"b")}}
          style={{width: "30px"}}
          ddtype="b"
        >
          Bar
        </div>
        <div className={"content"+(activeDD==="b"?" chosen":"")} style={{gridTemplate: "40px / 24px 24px 24px 24px",}} ddtype="b">
          <div className={"option-cell"} style={{gridArea: "1 / 1 / 2 / 2",}} ddtype="b">d</div>
          <div className={"option-cell"} style={{gridArea: "1 / 2 / 2 / 3",}} ddtype="b">o</div>
          <div className={"option-cell"} style={{gridArea: "1 / 3 / 2 / 4",}} ddtype="b">c</div>
          <div className={"option-cell"} style={{gridArea: "1 / 4 / 2 / 5",}} ddtype="b">t</div>
        </div>
      </div> */}
    </div>
  </div>);
};

export default SheetEditControl;