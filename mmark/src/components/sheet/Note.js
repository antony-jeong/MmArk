import React from "react";
import "./StyleSheet.css";

import "../utils/calcSheetObjectMargin.js";

import {ReactComponent as NoteIcon_1} from "../musical_symbols_svg/notes1/1.svg";
import {ReactComponent as NoteIcon_1_down} from "../musical_symbols_svg/notes1/1_down.svg";
import {ReactComponent as NoteIcon_1_5} from "../musical_symbols_svg/notes1/1.5.svg";
import {ReactComponent as NoteIcon_1_5_down} from "../musical_symbols_svg/notes1/1.5_down.svg";
import {ReactComponent as NoteIcon_2} from "../musical_symbols_svg/notes1/2.svg";
import {ReactComponent as NoteIcon_2_down} from "../musical_symbols_svg/notes1/2_down.svg";
import {ReactComponent as NoteIcon_3} from "../musical_symbols_svg/notes1/3.svg";
import {ReactComponent as NoteIcon_3_down} from "../musical_symbols_svg/notes1/3_down.svg";
import {ReactComponent as NoteIcon_4} from "../musical_symbols_svg/notes1/4.svg";
import {ReactComponent as NoteIcon_4_down} from "../musical_symbols_svg/notes1/4_down.svg";
import {ReactComponent as NoteIcon_6} from "../musical_symbols_svg/notes1/6.svg";
import {ReactComponent as NoteIcon_6_down} from "../musical_symbols_svg/notes1/6_down.svg";
import {ReactComponent as NoteIcon_8} from "../musical_symbols_svg/notes1/8.svg";
import {ReactComponent as NoteIcon_8_down} from "../musical_symbols_svg/notes1/8_down.svg";
import {ReactComponent as NoteIcon_12} from "../musical_symbols_svg/notes1/12.svg";
import {ReactComponent as NoteIcon_12_down} from "../musical_symbols_svg/notes1/12_down.svg";
import {ReactComponent as NoteIcon_16} from "../musical_symbols_svg/notes1/16.svg";
import {ReactComponent as NoteIcon_16_down} from "../musical_symbols_svg/notes1/16_down.svg";
import {ReactComponent as NoteIcon_24} from "../musical_symbols_svg/notes1/24.svg";
import {ReactComponent as NoteIcon_24_down} from "../musical_symbols_svg/notes1/24_down.svg";
import {ReactComponent as NoteIcon_32} from "../musical_symbols_svg/notes1/32.svg";
import {ReactComponent as NoteIcon_32_down} from "../musical_symbols_svg/notes1/32_down.svg";
import {ReactComponent as NoteIcon_48} from "../musical_symbols_svg/notes1/48.svg";
import {ReactComponent as NoteIcon_48_down} from "../musical_symbols_svg/notes1/48_down.svg";

import {ReactComponent as NoteIcon_2_Alloc} from "../musical_symbols_svg/notes1/2_alloc.svg";
import {ReactComponent as NoteIcon_3_Alloc} from "../musical_symbols_svg/notes1/3_alloc.svg";
import {ReactComponent as NoteIcon_4_Alloc} from "../musical_symbols_svg/notes1/4_alloc.svg";
import {ReactComponent as NoteIcon_6_Alloc} from "../musical_symbols_svg/notes1/6_alloc.svg";
import {ReactComponent as NoteIcon_8_Alloc} from "../musical_symbols_svg/notes1/8_alloc.svg";
import {ReactComponent as NoteIcon_12_Alloc} from "../musical_symbols_svg/notes1/12_alloc.svg";
import {ReactComponent as NoteIcon_16_Alloc} from "../musical_symbols_svg/notes1/16_alloc.svg";
import {ReactComponent as NoteIcon_24_Alloc} from "../musical_symbols_svg/notes1/24_alloc.svg";
import {ReactComponent as NoteIcon_32_Alloc} from "../musical_symbols_svg/notes1/32_alloc.svg";
import {ReactComponent as NoteIcon_48_Alloc} from "../musical_symbols_svg/notes1/48_alloc.svg";

import {ReactComponent as NoteIcon_8_Stack} from "../musical_symbols_svg/notes1/8_stack.svg";
import {ReactComponent as NoteIcon_12_Stack} from "../musical_symbols_svg/notes1/12_stack.svg";
import {ReactComponent as NoteIcon_16_Stack} from "../musical_symbols_svg/notes1/16_stack.svg";
import {ReactComponent as NoteIcon_24_Stack} from "../musical_symbols_svg/notes1/24_stack.svg";
import {ReactComponent as NoteIcon_32_Stack} from "../musical_symbols_svg/notes1/32_stack.svg";
import {ReactComponent as NoteIcon_48_Stack} from "../musical_symbols_svg/notes1/48_stack.svg";

import {ReactComponent as NoteIcon_Extension} from "../musical_symbols_svg/notes1/extension.svg";

import {ReactComponent as RestIcon_1} from "../musical_symbols_svg/rests/1.svg";
import {ReactComponent as RestIcon_1_5} from "../musical_symbols_svg/rests/1.5.svg";
import {ReactComponent as RestIcon_2} from "../musical_symbols_svg/rests/2.svg";
import {ReactComponent as RestIcon_3} from "../musical_symbols_svg/rests/3.svg";
import {ReactComponent as RestIcon_4} from "../musical_symbols_svg/rests/4.svg";
import {ReactComponent as RestIcon_6} from "../musical_symbols_svg/rests/6.svg";
import {ReactComponent as RestIcon_8} from "../musical_symbols_svg/rests/8.svg";
import {ReactComponent as RestIcon_12} from "../musical_symbols_svg/rests/12.svg";
import {ReactComponent as RestIcon_16} from "../musical_symbols_svg/rests/16.svg";
import {ReactComponent as RestIcon_24} from "../musical_symbols_svg/rests/24.svg";
import {ReactComponent as RestIcon_32} from "../musical_symbols_svg/rests/32.svg";
import {ReactComponent as RestIcon_48} from "../musical_symbols_svg/rests/48.svg";


import {ReactComponent as AccIcon_s} from "../musical_symbols_svg/accidental_s.svg";
import {ReactComponent as AccIcon_f} from "../musical_symbols_svg/accidental_f.svg";
import {ReactComponent as AccIcon_n} from "../musical_symbols_svg/accidental_n.svg";

import {ReactComponent as TripIcon_3} from "../musical_symbols_svg/triplet_3.svg";
import {ReactComponent as TripIcon_o} from "../musical_symbols_svg/triplet_open.svg";
import {ReactComponent as TripIcon_c} from "../musical_symbols_svg/triplet_close.svg";

import {ReactComponent as Cursor} from "../musical_symbols_svg/cursor.svg";
import {ReactComponent as CursorBig} from "../musical_symbols_svg/cursor_big.svg";
import {ReactComponent as CursorBlank} from "../musical_symbols_svg/cursor_blank.svg";

import {ReactComponent as LineIcon} from "../musical_symbols_svg/notes1/line.svg";
import calcSheetObjectMargin from "../utils/calcSheetObjectMargin.js";

import {ReactComponent as NoteLine} from "../musical_symbols_svg/note_line.svg";

const noteComponents = [];
noteComponents.push(NoteIcon_1);
noteComponents.push(NoteIcon_1_5);
noteComponents.push(NoteIcon_2);
noteComponents.push(NoteIcon_3);
noteComponents.push(NoteIcon_4);
noteComponents.push(NoteIcon_6);
noteComponents.push(NoteIcon_8);
noteComponents.push(NoteIcon_12);
noteComponents.push(NoteIcon_16);
noteComponents.push(NoteIcon_24);
noteComponents.push(NoteIcon_32);
noteComponents.push(NoteIcon_48);

const stackComponents = [];
stackComponents.push(NoteIcon_1);
stackComponents.push(NoteIcon_1_5);
stackComponents.push(NoteIcon_2);
stackComponents.push(NoteIcon_3);
stackComponents.push(NoteIcon_4);
stackComponents.push(NoteIcon_6);
stackComponents.push(NoteIcon_8_Stack);
stackComponents.push(NoteIcon_12_Stack);
stackComponents.push(NoteIcon_16_Stack);
stackComponents.push(NoteIcon_24_Stack);
stackComponents.push(NoteIcon_32_Stack);
stackComponents.push(NoteIcon_48_Stack);

const allocComponents = [];
allocComponents.push(NoteIcon_1);
allocComponents.push(NoteIcon_1_5);
allocComponents.push(NoteIcon_2_Alloc);
allocComponents.push(NoteIcon_3_Alloc);
allocComponents.push(NoteIcon_4_Alloc);
allocComponents.push(NoteIcon_6_Alloc);
allocComponents.push(NoteIcon_8_Alloc);
allocComponents.push(NoteIcon_12_Alloc);
allocComponents.push(NoteIcon_16_Alloc);
allocComponents.push(NoteIcon_24_Alloc);
allocComponents.push(NoteIcon_32_Alloc);
allocComponents.push(NoteIcon_48_Alloc);


const restComponents = [];
restComponents.push(RestIcon_1);
restComponents.push(RestIcon_1_5);
restComponents.push(RestIcon_2);
restComponents.push(RestIcon_3);
restComponents.push(RestIcon_4);
restComponents.push(RestIcon_6);
restComponents.push(RestIcon_8);
restComponents.push(RestIcon_12);
restComponents.push(RestIcon_16);
restComponents.push(RestIcon_24);
restComponents.push(RestIcon_32);
restComponents.push(RestIcon_48);


const noteDownComponents = [];
noteDownComponents.push(NoteIcon_1_down);
noteDownComponents.push(NoteIcon_1_5_down);
noteDownComponents.push(NoteIcon_2_down);
noteDownComponents.push(NoteIcon_3_down);
noteDownComponents.push(NoteIcon_4_down);
noteDownComponents.push(NoteIcon_6_down);
noteDownComponents.push(NoteIcon_8_down);
noteDownComponents.push(NoteIcon_12_down);
noteDownComponents.push(NoteIcon_16_down);
noteDownComponents.push(NoteIcon_24_down);
noteDownComponents.push(NoteIcon_32_down);
noteDownComponents.push(NoteIcon_48_down);

const accComponents = [];
accComponents.push(AccIcon_s);
accComponents.push(AccIcon_f);
accComponents.push(AccIcon_n);
accComponents.push(TripIcon_3);
accComponents.push(TripIcon_o);
accComponents.push(TripIcon_c);

const LineObj = ({height}) => {
  const lineObjData = [];
  if (height < -1) {
    for (var i = 0; i < Math.floor((-height)/2); i++){
      const newObj = {
        height : -i
      }
      lineObjData.push(newObj)
    }
  }
  else if (height > 9) {
    for (var i = 0; i < Math.floor((height - 8)/2); i++){
      const newObj = {
        height : i + 1
      }
      lineObjData.push(newObj)
    }
    }
  else { 
    return ( <div></div> );
  }

  const returnValue = lineObjData.map((obj) => {
		return (
			<IndivLineObj
				height = {obj.height}
			/>
		);
  })

  return (<div style={{ width: "0px", display: "inline-flex", "margin-right": "0px" }}> {returnValue} </div>);
}

const IndivLineObj = ({height}) => {
  var newHeight = 0;
  var prefix = 0;
  var toptop = 0;
  if(height > 0) {
    newHeight = height +5;
    toptop = -1.3;
  }
  else{
    newHeight = height - 0.095;
  }
  if (height === -1) {
    prefix = 3;
  }
  //console.log("height : " + height)
  return(
    <div style={{ width: "0px", display: "inline-flex", "margin-right": prefix + "px" }}>
      <img
        src={
          process.env.PUBLIC_URL +
          "/musical_symbols_svg/notes/line.svg"
        }
        style={{
          position: "relative",
          top: -14.5-toptop - 12.245 * (newHeight) + "px",
          left: "0px",
          display: "inline-flex"
        }}
        height="45px"
      />
    </div>
  )
}

const StackLineObj = ({height}) => {
  const lineObjData = [];
  if (height < -1) {
    for (var i = 0; i < Math.floor((-height)/2); i++){
      const newObj = {
        height : -i
      }
      lineObjData.push(newObj)
    }
  }
  else if (height > 9) {
    for (var i = 0; i < Math.floor((height - 8)/2); i++){
      const newObj = {
        height : i + 1
      }
      lineObjData.push(newObj)
    }
    }
  else { 
    return ( <div></div> );
  }

  const returnValue = lineObjData.map((obj) => {
		return (
			<IndivStackLineObj
				height = {obj.height}
			/>
		);
  })

  return (<div style={{ width: "0px", display: "inline-flex", "margin-right": "0px" }}> {returnValue} </div>);
}

const IndivStackLineObj = ({height}) => {
  var newHeight = 0;
  var prefix = 0;
  var toptop = 0;
  if(height > 0) {
    newHeight = height +5;
    toptop = -1.3;
  }
  else{
    newHeight = height - 0.095;
  }
  if (height === -1) {
    prefix = 3;
  }
  //console.log("height : " + height)
  return(
    <div style={{ width: "0px", display: "inline-flex", "margin-right": prefix + "px" }}>
      <img
        src={
          process.env.PUBLIC_URL +
          "/musical_symbols_svg/notes/line.svg"
        }
        style={{
          position: "relative",
          top: -14.5 + 6 -toptop - 12.245 * (newHeight) + "px",
          left: "0px",
          display: "inline-flex"
        }}
        height="45px"
      />
    </div>
  )
}

const AccidentalObj = ({ type, height, direction }) => {
  var type_num = 0;
  var type_height = 28;
  if (type === "s") {type_num = 0}
  else if (type === "f") {
    type_num = 1
    type_height = 33.2;
  }
  else if (type === "n") {type_num = 2}
  else if (type === "3") {type_num = 3}
  else if (type === "o") {type_num = 4}
  else {type_num = 5}

  const NoteComponent = accComponents[type_num];

  var f = (direction) => {
    switch (direction) {
      case "up":
        return (
          <div style={{ width: "8px", display: "inline"}}>
            {/* <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/accidental_" +
                type +
                ".svg"
              }
              style={{
                position: "relative",
                top: -11.5 - 6.1225 * (height + 1) + "px",
								left: 0 + "px"
              }}
              height={28 + (type == "f" ? 7.2 : 0) + "px"}
            /> */}
						<div style = {{width: "10px", display: "inline", position: "relative", top : -11.5 - 6.1225 * (height + 1) + (type === "f" ? -2 : 0) + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = {type_height + "px"}/>
            </div>
          </div>
        );
      case "down":
        return (
          <div style={{ width: "8px", display: "inline" }}>
            {/* <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/accidental_" +
                type +
                ".svg"
              }
              style={{
                position: "relative",
                top: -11.5 - 6.1225 * (height + 1) + "px",
              }}
              height={28 + (type == "f" ? 7.2 : 0) + "px"}
            /> */}
            <div style = {{width: "10px", display: "inline", position: "relative", top : -11.5 - 6.1225 * (height + 1) + (type === "f" ? -2 : 0) + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = {type_height + "px"}/>
            </div>
          </div>
        );
    }
  };
  if (type == "x") {
    return <div style={{ width: "0px", display: "inline" }}></div>;
  }
  return f(direction);
};

const AccidentalStackObj = ({ type, height, direction, realloc, Hori }) => {
	const alloc = realloc ? "_alloc_1" : "_noAlloc_1" ;
	//console.log(Hori)
 
  var f = (direction) => {
    switch (direction) {
      case "up":
        return (
          <div style={{ width: "60px", display: "inline" , "margin-right": "1px" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/accidental_" +
                type + "_alloc_" + Hori +
                ".svg"
              }
              style={{
                position: "relative",
                top: -11.5 - 6.1225 * (height + 1) + "px",
								left: alloc + "px",
              }}
              height={28 + (type == "f" ? 7.2 : 0) + "px"}
            />
						
          </div>
        );
      case "down":
        return (
          <div style={{ width: "8px", display: "inline" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/accidental_" +
                type +
                ".svg"
              }
              style={{
                position: "relative",
                top: -11.5 - 6.1225 * (height + 1) + "px",
              }}
              height={28 + (type == "f" ? 7.2 : 0) + "px"}
            />
          </div>
        );
    }
  };

  return f(direction);
};

const NoteDecorationObj = ({ type, height, direction }) => {
  var type_num = 0;
  if (type === "s") {type_num = 0}
  else if (type === "f") {type_num = 1}
  else if (type === "n") {type_num = 2}
  else if (type === "3") {type_num = 3}
  else if (type === "o") {type_num = 4}
  else {type_num = 5}

  const NoteComponent = accComponents[type_num];

  var f = (direction) => {
    switch (direction) {
      case "up":
        return (
          <div style={{ width: "0px", display: "inline-flex" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/deco_" +
                type +
                ".svg"
              }
              style={{
                position: "relative",
                top: -14 - 6.1225 * height + "px",
                left: "-21px",
              }}
              height="9px"
            />
          </div>
        );
      case "down":
        return (
          <div style={{ width: "0px", display: "inline-flex" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/deco_" +
                type +
                ".svg"
              }
              style={{
                position: "relative",
                top: -40 - 6.1225 * height + "px",
                left: "-21px",
              }}
              height="9px"
            />
          </div>
        );
    }
  };

  if (type === "3" || type === "o" || type ===  "c") {
    if (height > 11) {
      return (
        <div style={{ width: "0px", display: "inline-flex" }}>

          <div style = {{width: "10px", display: "inline", position: "relative", top : -100 - 6.1225 * height + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "9px"/>
            </div>
        </div>
      );
    }
    return (
      <div style={{ width: "0px", display: "inline-flex" }}>
            <div style = {{width: "10px", display: "inline", position: "relative", 
                          top : -80 - 6.1225 * height - (type ==="3" ? 4 : 0) + "px", 
                          left: type==="3" ? "5px" : "0px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "9px"/>
            </div>
      </div>
    );
  }
  if (type == "x") {
    return <div style={{ width: "5px", display: "inline" }}></div>;
  }
  return f(direction);
};

const IndivNoteUpObj = ({ type, index, height, deco, acc, cursorHeight, margin, setCursorIndex }) => {
  const NoteComponent = noteComponents[type];
  const helper = () => {
    setCursorIndex(index + 1);
  }
  return (
    <div style={{ width: "0px", display: "inline" }}>
      <AccidentalObj type={acc} height={height} direction="up" />
      <NoteDecorationObj type={deco} height={height} direction="up" />
      <div style={{ width: "0px", display: "inline-flex", "margin-right": "0px" }}>
        <LineObj height = {height} />
      </div>
      <div className="up" style={{ width: "0px", display: "inline" }}>
        <div  style = {{width: "0px", display: "inline", position: "relative", top : -19.5 - 6.1225 * (height + 1) + "px"}}>
          <NoteComponent style = {{display: "inline", position: "relative"}} height = "45px"/>
        </div>
        <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
          <div>
            {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}}height="60px"/> : <div></div>}
          </div>
        </div>
        <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px", left: "-1px"}}>
          <div >
            <CursorBlank onClick= {helper} className="cursor-blank" style = {{preserveAspectRatio: "none", display: "inline-flex", position: "relative", width: margin + "px", height: "60px"}} width={margin + "px"}/>
          </div>
        </div>
        <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
          <div>
            {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

const IndivNoteDownObj = ({ type, index, height, deco, acc, cursorHeight, margin, setCursorIndex }) => {
  const NoteComponent = noteDownComponents[type];
  const helper = () => {
    setCursorIndex(index + 1);
  }
  return (
    <div style={{ width: "0px", display: "inline" }}>
      <AccidentalObj type={acc} height={height} direction="down" />
        <NoteDecorationObj type={deco} height={height} direction="down" />
      <div style={{ width: "0px", display: "inline-flex", "margin-right": "0px" }}>
          <LineObj height = {height} />
        </div>
      <div className="down" style={{ width: "0px", display: "inline" }}>
        <div style = {{width: "0px", display: "inline", position: "relative", top : 14 - 6.1225 * (height + 1) + "px"}}>
          <NoteComponent style = {{display: "inline", position: "relative"}} height = "45px"/>
        </div>
        <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
          <div>
            {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
          </div>
        </div>
        <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px", left: "-1px"}}>
          <div >
            <CursorBlank onClick= {helper} className="cursor-blank" style = {{preserveAspectRatio: "none", display: "inline-flex", position: "relative", width: margin + "px", height: "60px"}} width={margin + "px"}/>
          </div>
        </div>
        <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
          <div>
            {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

const IndivAccStackObj = ({ acc, accHori, height, overLap}) => {
  return (
    <div style={{ width: overLap ? "0px" : "8px", display: "inline-flex" }}>
      <AccidentalObj type={acc} height={height} direction="up"/>
    </div>
  )
}

const IndivNoteStackObj = ({ type, realloc, accAlloc, accHori, accHoriMax, isRealloc, finished, height, deco, acc }) => {
  const NoteComponent = finished ? noteComponents[type] : stackComponents[type];
  return (
    <div style={{ width: "0px", display: "inline-flex" }}>
      <NoteDecorationObj type={deco} height={height} direction="up" />
      <div style={{ width: "0px", display: "inline-flex", "margin-right": "0px" }}>
        <StackLineObj height = {height} />
      </div>
      <div className="up" style={{ width: "0px", display: "inline" }}>
        <div  style = {{width: "0px", display: "inline", position: "relative", top : -19.5 - 6.1225 * (height ) + "px"}}>
          <NoteComponent style = {{display: "inline", position: "relative"}} height = "45px"/>
        </div>
      </div>
    </div>
  );
};

const IndivNoteAllocObj = ({ type, realloc, accAlloc, accHori, accHoriMax, isRealloc, finished, height, deco, acc }) => {
  const NoteComponent = allocComponents[type];
  return (
    <div style={{ width: "0px", display: "inline-flex" }}>
      <NoteDecorationObj type={deco} height={height} direction="up" />
      <div style={{ width: "0px", display: "inline-flex", "margin-right": "0px" }}>
        <StackLineObj height = {height} />
      </div>
      <div className="up" style={{ width: "0px", display: "inline" }}>
        <div  style = {{width: "0px", display: "inline", position: "relative", top : -19.5 - 6.1225 * (height) + "px"}}>
          <NoteComponent style = {{display: "inline", position: "relative"}} height = "45px"/>
        </div>
      </div>
    </div>
  );
};

const NoteObj = ({ obj, index, isPlaying, margin, cursorHeight, setCursorIndex }) => {
  const direction = obj.height[0] > 3 ? "down" : "up";
  var f1 = (obj) => {
    switch (obj.length) {
      case 0:
        return obj.extend ? 1.5 : 1;
      case 1:
        return obj.extend ? 3 : 2;
      case 2:
        return obj.extend ? 6 : 4;
      case 3:
        return obj.extend ? 12 : 8;
      case 4:
        return obj.extend ? 24 : 16;
      case 5:
        return obj.extend ? 48 : 32;
      default:
        return <div>Invalid Object</div>;
    }
  };

  var f = (obj) => {
    switch (obj.length) {
      case 0:
        return obj.extend ? 1 : 0;
      case 1:
        return obj.extend ? 3 : 2;
      case 2:
        return obj.extend ? 5 : 4;
      case 3:
        return obj.extend ? 7 : 6;
      case 4:
        return obj.extend ? 9 : 8;
      case 5:
        return obj.extend ? 11 : 10;
        default:
          return <div>Invalid Object</div>;
        }
      };
      
      const type = f(obj);

      //console.log(obj.length);
	const heights = [];
	for(var i = 0; i < obj.height.length; i++){
		heights.push(obj.height[i]);
	}
	const Accidental = (noteHeight) => {
		let accPos = [1];
		let i, j;
		for (i=1; i<noteHeight.length; i++){
			for (j=0; j<i; j++){
				if (noteHeight[i]-noteHeight[j]<5){
					break;
				}
			}
			let pos = 1;
			for (; pos < 5; pos++){
				if (!accPos.slice(j).includes(pos)){
					break;
				}
			}
			accPos.push(pos);
		}
		return accPos;
	}

	var thereIsRealloc = false;
	for (var i = 0; i<obj.height.length - 1; i++) {
		if( obj.height[i + 1] - obj.height[i] === 1) {
			thereIsRealloc = true;
		}
	}

	const thisIsAlloc = [false];
	for (var i = 1; i < obj.height.length; i++) {
		if (obj.height[i] - obj.height[i-1] === 1 && thisIsAlloc[i-1] === false) {
			thisIsAlloc.push(true);
		}
		else {
			thisIsAlloc.push(false);
		}
	}

	
	//console.log(thereIsRealloc);
	obj.accHori = Accidental(heights);
	var AccidentalMax = 0;
	for (var i = 0; i < obj.height.length; i++) {
		if (obj.accHori[i] > AccidentalMax) {
			AccidentalMax = obj.accHori[i];
		}
	}
	const accidental = Accidental(heights);
	//console.log(obj.accHori);
  const objData = [];
  const objDataAcc = [];
  const objDataStack = [];
  const objDataStackAlloc = [];
  for (var i = 0; i < obj.height.length; i++) {
    const newObj = {
			//realloc: i === 0 ? false : (obj.height[i-1] + 1 === obj.height[i] ? true : false),
			realloc: thisIsAlloc[i],
			accAlloc: i === 0 ? false : ((i % 2 === 1) ? true : false),
			accHori: obj.accHori[i],
			accHoriMax: AccidentalMax,
			isRealloc: thereIsRealloc,
			fin: i === obj.height.length - 1 ? true : false,
      height: obj.height[i],
      deco: obj.noteDecoration[i],
      acc: obj.accidental[i],
    };
    objData.push(newObj);
  }
  for (var i = 0; i < obj.height.length; i++) {
    const newObj = {
      acc: obj.accidental[i],
      accHori: obj.accHori[i],
      height: obj.height[i],
    };
    objDataAcc.push(newObj);
  }
  objDataAcc.sort(function (a, b) {
    if (a.accHori > b.accHori) {
      return -1;
    }
    if (a.accHori < b.accHori) {
      return 1;
    }
    return 0;
  });
  for (var i = 0; i < objDataAcc.length - 1; i++) {
    if (objDataAcc[i].accHori === objDataAcc[i+1].accHori) {
      objDataAcc[i].overLap = true;
    }
    else {
      objDataAcc[i].overLap = false;
    }
  }
  var isExtension = false;
  for (var i = 0; i < obj.height.length - 1; i++) {
    if (obj.height[i+1] - obj.height[i] >= 7) {
      isExtension = true;
    }
  }


  for (var i = 0; i < obj.height.length; i++) {
    const newObj = {
			//realloc: i === 0 ? false : (obj.height[i-1] + 1 === obj.height[i] ? true : false),
			realloc: thisIsAlloc[i],
			accAlloc: i === 0 ? false : ((i % 2 === 1) ? true : false),
			accHori: obj.accHori[i],
			accHoriMax: AccidentalMax,
			isRealloc: thereIsRealloc,
			fin: i === obj.height.length - 1 ? true : false,
      height: obj.height[i],
      deco: obj.noteDecoration[i],
      acc: obj.accidental[i],
    };
    if (newObj.realloc) {
      objDataStackAlloc.push(newObj);
    }
    else {
      objDataStack.push(newObj);
    }
  }
  console.log(objDataStackAlloc);
  const returnValue = objData.map((obj) => {
    return direction === "up" ? (
      <IndivNoteUpObj
        type={type}
        index={index}
        height={obj.height}
        deco={obj.deco}
        acc={obj.acc}
        cursorHeight={cursorHeight}
        margin={margin}
        setCursorIndex={setCursorIndex}
      />
    ) : (
      <IndivNoteDownObj
        type={type}
        index={index}
        height={obj.height}
        deco={obj.deco}
        acc={obj.acc}
        cursorHeight={cursorHeight}
        margin={margin}
        setCursorIndex={setCursorIndex}
      />
    );
  });

  const accReturnValue = objDataAcc.map((obj) => {
    return(
      <IndivAccStackObj
        acc={obj.acc}
        accHori={obj.accHori}
        height={obj.height}
        overLap={obj.overLap}
      />
    );
  })

  const stackReturnValue = objDataStack.map((obj) => {
    return (
      <IndivNoteStackObj
        type = {type}
        realloc = {obj.realloc}
        accAlloc = {obj.accAlloc}
        accHori = {obj.accHori}
        accHoriMax = {obj.accHoriMax}
        isRealloc = {obj.isRealloc}
        finished={obj.fin}
        height={obj.height}
        deco={obj.deco}
        acc={obj.acc}
        cursorHeight={cursorHeight}
      />
    );
  })
  const allocReturnValue = objDataStackAlloc.map((obj) => {
    return (
      <IndivNoteAllocObj
        type = {type}
        realloc = {obj.realloc}
        accAlloc = {obj.accAlloc}
        accHori = {obj.accHori}
        accHoriMax = {obj.accHoriMax}
        isRealloc = {obj.isRealloc}
        finished={obj.fin}
        height={obj.height}
        deco={obj.deco}
        acc={obj.acc}
        cursorHeight={cursorHeight}
      />
    );
  })

  //console.log(calcSheetObjectMargin(obj, 800));
  if (obj.height.length == 1) {
    return <div className = {isPlaying ? "skyBlue" : "black"} style={{ width: "0px", display: "inline", "margin-right":margin}}>{returnValue}</div>;
  }
  const helper = () => {
    setCursorIndex(index + 1);
  }
  var cursorAlloc = 0;
  if (type >= 2 && isExtension && thereIsRealloc) cursorAlloc = 15;
  else if (type < 2) cursorAlloc = 15;
  else if (type >=2 && thereIsRealloc) cursorAlloc = 19;
  return (
    <div className = {isPlaying ? "skyBlue" : "black"} style={{ width: "15px", display: "inline", "margin-right":margin}}>
      <div style={{ width: "15px", display: "inline"}} height = "55px">
        <div style={{ width: "15px", display: "inline"}}>
          {accReturnValue}
        </div>
      </div>
      <div style={{ width: "15px", display: "inline"}} height = "55px">
        <div style={{ width: "15px", display: "inline"}}>
          {stackReturnValue}
        </div>
      </div>
      {type >= 2 && isExtension
      ?<div style={{display: "inline-flex", position:"relative", top:"-45px"}}>
        <div style={{display: "inline-flex"}}>
          <NoteIcon_Extension style={{top:"-50px"}} height="45px"/>
        </div>
      </div>
      : <></>
      }
      {!isExtension
      ?<div style={{display:"inline"}}>
        <div style={{display:"inline", "padding-right": "12px"}}></div>
      </div>
      :<></>
      }
      <div style={{ width: "100px", display: "inline"}}></div>
      <div style={{ width: "15px", display: "inline", position: "relative", left: type>=2 && isExtension ?"-3px" : type >= 2 ? "2px" : "0px"}} height = "55px">
        <div style={{ width: "15px", display: "inline"}}>
          {allocReturnValue}
        </div>
      </div>
      <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px", left :  cursorAlloc + "px"}}>
        <div>
          {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
        </div>
      </div>
      <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px", left: "-1px"}}>
        <div>
          <CursorBlank onClick= {helper} className="cursor-blank" style = {{preserveAspectRatio: "none", display: "inline-flex", position: "relative", width: margin + "px", height: "60px"}} width={margin + "px"}/>
        </div>
      </div>
      <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px", left :  cursorAlloc + "px"}}>
        <div>
          {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
        </div>
      </div>
    </div>
  );
};

const IndivRestObj = ({ length, index, margin, cursorHeight, setCursorIndex }) => {
  const helper = () => {
    setCursorIndex(index + 1);
  }
  var f1 = (length) => {
    switch (length) {
      case 1:
        return 0;
      case 1.5:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      case 4:
        return 4;
      case 6:
        return 5;
      case 8:
        return 6;
      case 12:
        return 7;
      case 16:
        return 8;
      case 24:
        return 9;
      case 32:
        return 10;
      case 48:
        return 11;
      default:
        return <div>Invalid Object</div>;
    }
  };
  const NoteComponent = restComponents[f1(length)];
  var f = (length) => {
    switch (length) {
      case 1:
        return (
          <div className={length} style={{ width: "5px", display: "inline"}}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -47.5 - 12.245 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "9px"/>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
              <div>
                {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px", left: "-1px"}}>
          <div >
            <CursorBlank onClick= {helper} className="cursor-blank" style = {{preserveAspectRatio: "none", display: "inline-flex", position: "relative", width: margin + "px", height: "60px"}} width={margin + "px"}/>
          </div>
        </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
              <div>
                {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
          </div>
        );
      case 1.5:
        return (
          <div className={length} style={{ width: "5px", display: "inline"}}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -47.5 - 12.245 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "9px"/>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
              <div>
                {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px", left: "-1px"}}>
          <div >
            <CursorBlank onClick= {helper} className="cursor-blank" style = {{preserveAspectRatio: "none", display: "inline-flex", position: "relative", width: margin + "px", height: "60px"}} width={margin + "px"}/>
          </div>
        </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
              <div>
                {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={length} style={{ width: "5px", display: "inline"}}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -47.5 - 12.245 + 3.5 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "9px"/>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
              <div>
                {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px", left: "-1px"}}>
          <div >
            <CursorBlank onClick= {helper} className="cursor-blank" style = {{preserveAspectRatio: "none", display: "inline-flex", position: "relative", width: margin + "px", height: "60px"}} width={margin + "px"}/>
          </div>
        </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
              <div>
                {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className={length} style={{ width: "5px", display: "inline"}}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -47.5 - 12.245 + 3.5 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "9px"/>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
              <div>
                {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px", left: "-1px"}}>
          <div >
            <CursorBlank onClick= {helper} className="cursor-blank" style = {{preserveAspectRatio: "none", display: "inline-flex", position: "relative", width: margin + "px", height: "60px"}} width={margin + "px"}/>
          </div>
        </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
              <div>
                {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className={length} style={{ width: "5px", display: "inline"}}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -39 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "40px"/>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
              <div>
                {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px", left: "-1px"}}>
          <div >
            <CursorBlank onClick= {helper} className="cursor-blank" style = {{preserveAspectRatio: "none", display: "inline-flex", position: "relative", width: margin + "px", height: "60px"}} width={margin + "px"}/>
          </div>
        </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
              <div>
                {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className={length} style={{ width: "5px", display: "inline"}}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -39 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "40px"/>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
              <div>
                {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px", left: "-1px"}}>
          <div >
            <CursorBlank onClick= {helper} className="cursor-blank" style = {{preserveAspectRatio: "none", display: "inline-flex", position: "relative", width: margin + "px", height: "60px"}} width={margin + "px"}/>
          </div>
        </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
              <div>
                {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className={length} style={{ width: "5px", display: "inline"}}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -40 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "27px"/>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
              <div>
                {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px", left: "-1px"}}>
          <div >
            <CursorBlank onClick= {helper} className="cursor-blank" style = {{preserveAspectRatio: "none", display: "inline-flex", position: "relative", width: margin + "px", height: "60px"}} width={margin + "px"}/>
          </div>
        </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
              <div>
                {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
          </div>
        );
      case 12:
        return (
          <div className={length} style={{ width: "5px", display: "inline"}}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -40 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "27px"/>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
              <div>
                {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px", left: "-1px"}}>
          <div >
            <CursorBlank onClick= {helper} className="cursor-blank" style = {{preserveAspectRatio: "none", display: "inline-flex", position: "relative", width: margin + "px", height: "60px"}} width={margin + "px"}/>
          </div>
        </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
              <div>
                {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
          </div>
        );
      case 16:
        return (
          <div className={length} style={{ width: "5px", display: "inline"}}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -28 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "39px"/>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
              <div>
                {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px", left: "-1px"}}>
          <div >
            <CursorBlank onClick= {helper} className="cursor-blank" style = {{preserveAspectRatio: "none", display: "inline-flex", position: "relative", width: margin + "px", height: "60px"}} width={margin + "px"}/>
          </div>
        </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
              <div>
                {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
          </div>
        );
      case 24:
        return (
          <div className={length} style={{ width: "5px", display: "inline"}}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -28 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "39px"/>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
              <div>
                {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px", left: "-1px"}}>
          <div >
            <CursorBlank onClick= {helper} className="cursor-blank" style = {{preserveAspectRatio: "none", display: "inline-flex", position: "relative", width: margin + "px", height: "60px"}} width={margin + "px"}/>
          </div>
        </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
              <div>
                {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
          </div>
        );
      case 32:
        return (
          <div className={length} style={{ width: "5px", display: "inline"}}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -24.5 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "54px"/>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
              <div>
                {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px", left: "-1px"}}>
          <div >
            <CursorBlank onClick= {helper} className="cursor-blank" style = {{preserveAspectRatio: "none", display: "inline-flex", position: "relative", width: margin + "px", height: "60px"}} width={margin + "px"}/>
          </div>
        </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
              <div>
                {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
          </div>
        );
      case 48:
        return (
          <div className={length} style={{ width: "5px", display: "inline"}}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -24.5 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "54px"/>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
              <div>
                {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px", left: "-1px"}}>
          <div >
            <CursorBlank onClick= {helper} className="cursor-blank" style = {{preserveAspectRatio: "none", display: "inline-flex", position: "relative", width: margin + "px", height: "60px"}} width={margin + "px"}/>
          </div>
        </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
              <div>
                {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
              </div>
            </div>
          </div>
        );
      default:
        return <div>Invalid Object</div>;
    }
  };

  return f(length);
};

const RestObj = ({ obj, index, isPlaying, margin, cursorHeight, setCursorIndex }) => {
  var f = (obj) => {
    switch (obj.length) {
      case 0:
        return obj.extend ? 1.5 : 1;
      case 1:
        return obj.extend ? 3 : 2;
      case 2:
        return obj.extend ? 6 : 4;
      case 3:
        return obj.extend ? 12 : 8;
      case 4:
        return obj.extend ? 24 : 16;
      case 5:
        return obj.extend ? 48 : 32;
      default:
        return <div>Invalid Object</div>;
    }
  };
  const length = f(obj);
  const returnValue = <IndivRestObj length={length} index={index} margin={margin} cursorHeight={cursorHeight} setCursorIndex={setCursorIndex}/>;

  return <div className = {isPlaying ? "skyBlue" : "black"} style={{ width: "5px", display: "inline", "margin-right":  margin  }}>{returnValue}</div>;

};

const Note = ({ obj, index, isPlaying, margin, cursorHeight, setCursorIndex }) => {
  return (
    <div style={{ width: "0px", display: "inline" }}>
      {obj.rest ? <RestObj obj={obj} index={index} isPlaying = {isPlaying} margin = {margin} cursorHeight ={ cursorHeight } setCursorIndex={setCursorIndex}/> : <NoteObj obj={obj} index={index} isPlaying = {isPlaying} margin = {margin} cursorHeight ={ cursorHeight } setCursorIndex={setCursorIndex}/>}
    </div>
  );
};

export default Note;
