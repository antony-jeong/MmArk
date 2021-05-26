import React from "react";
import "./StyleSheet.css";

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

import {ReactComponent as LineIcon} from "../musical_symbols_svg/notes1/line.svg";

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
    newHeight = height;
  }
  if (height === -1) {
    prefix = 3;
  }
  console.log("height : " + height)
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

const AccidentalObj = ({ type, height, direction }) => {
  var type_num = 0;
  if (type = "s") {type_num = 0}
  else if (type = "f") {type_num = 1}
  else {type_num = 2}

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
						<div style = {{width: "10px", display: "inline", position: "relative", top : -11.5 - 6.1225 * (height + 1) + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "28px"/>
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
            <div style = {{width: "10px", display: "inline", position: "relative", top : -11.5 - 6.1225 * (height + 1) + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "28px"/>
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
	console.log(Hori)
 
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

  if (type == "f") {
    if (height > 11) {
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
              top: -100 - 6.1225 * height + "px",
              left: "-21px",
            }}
            height="9px"
          />
        </div>
      );
    }

    return (
      <div style={{ width: "0px", display: "inline-flex" }}>
        <img
          src={
            process.env.PUBLIC_URL +
            "/musical_symbols_svg/deco_" +
            type +
            ".svg"
          }
          style={{ position: "relative", top: -100 + "px", left: "-21px" }}
          height="9px"
        />
      </div>
    );
  }
  if (type == "x") {
    return <div style={{ width: "5px", display: "inline" }}></div>;
  }
  return f(direction);
};

const IndivNoteUpObj = ({ type, height, deco, acc }) => {
  const NoteComponent = noteComponents[type];
  return (
    <div style={{ width: "0px", display: "inline" }}>
      <AccidentalObj type={acc} height={height} direction="up" />

      <div style={{ width: "0px", display: "inline-flex", "margin-right": "0px" }}>
          <LineObj height = {height} />
        </div>
      <div className="up" style={{ width: "0px", display: "inline" }}>
        {/* <img
          src={
            process.env.PUBLIC_URL +
            "/musical_symbols_svg/notes/" +
            type +
            ".svg"
          }
          style={{
            position: "relative",
            top: -19 - 6.1225 * (height + 1) + "px",
          }}
          height="45px"
        /> */}
        <div  style = {{width: "10px", display: "inline", position: "relative", top : -19.5 - 6.1225 * (height + 1) + "px"}}>
          <NoteComponent style = {{display: "inline", position: "relative"}} height = "45px"/>
        </div>

      </div>
      <NoteDecorationObj type={deco} height={height} direction="up" />
    </div>
  );
};

const IndivNoteDownObj = ({ type, height, deco, acc }) => {
  const NoteComponent = noteDownComponents[type];
  return (
    <div style={{ width: "0px", display: "inline" }}>
      <AccidentalObj type={acc} height={height} direction="down" />
      <div style={{ width: "0px", display: "inline-flex", "margin-right": "0px" }}>
          <LineObj height = {height} />
        </div>
      <div className="down" style={{ width: "0px", display: "inline" }}>
        {/* <img
          src={
            process.env.PUBLIC_URL +
            "/musical_symbols_svg/notes/" +
            type +
            "_down.svg"
          }
          style={{
            position: "relative",
            top: 14 - 6.1225 * (height + 1) + "px",
          }}
          height="45px"
        /> */}
        <div style = {{width: "10px", display: "inline", position: "relative", top : 14 - 6.1225 * (height + 1) + "px"}}>
          <NoteComponent style = {{display: "inline", position: "relative"}} height = "45px"/>
        </div>
      </div>
      <NoteDecorationObj type={deco} height={height} direction="down" />
    </div>
  );
};

const IndivNoteStackObj = ({ type, realloc, accAlloc, accHori, accHoriMax, isRealloc, finished, height, deco, acc }) => {
	const realloc_type = realloc ? "_alloc" : "";
	console.log("Hori : " +accHoriMax);
	if (finished && isRealloc) {
		console.log("finished && isRealloc");
		return (
			<div className={height} style={{ width: "32px", display: "inline" }}>
				<AccidentalStackObj type={acc} height={height} direction="up" realloc={accAlloc} Hori={accHori}/>
        <div style={{ width: "0px", display: "inline-flex", "margin-right": "0px" }}>
          <LineObj height = {height} />
        </div>
				<div className="up" style={{ width: "32px", display: "inline"}}>
					<img
						src={
							process.env.PUBLIC_URL +
							"/musical_symbols_svg/notes/" +
							type + realloc_type + "_finAlloc" +
							".svg"
						}
						style={{
							position: "relative",
							top: -19 - 6.1225 * (height + 1) + "px",
							left: "0px"
						}}
						height="45px"
					/>
				</div>
				<NoteDecorationObj type={deco} height={height} direction="up" />
			</div>
		);
	}
	if (finished) {
		return (
			<div className={height} style={{ width: "0px", display: "inline" }}>
				<AccidentalStackObj type={acc} height={height} direction="up" realloc={accAlloc} Hori={accHori}/>
				<div className="up" style={{ width: "0px", display: "inline" , "margin-left": "0px" }}>
					<img
						src={
							process.env.PUBLIC_URL +
							"/musical_symbols_svg/notes/" +
							type + realloc_type +
							".svg"
						}
						style={{
							position: "relative",
							top: -19 - 6.1225 * (height + 1) + "px",
							left: "0px"
						}}
						height="45px"
					/>
				</div>
				<NoteDecorationObj type={deco} height={height} direction="up" />
			</div>
		);
	}
  return (
    <div className={height} style={{ width: "0px", display: "inline-flex"}} height = "50px">
      <AccidentalStackObj type={acc} height={height} direction="up" realloc={accAlloc} Hori={accHori}/>
      <div style={{ width: "0px", display: "inline", "margin-right": "0px" }}>
        <LineObj height = {height} />
      </div>
      <div className="up" style={{ width: "30px", display: "inline", fill: "blue" }}>
        <img
          src={
            process.env.PUBLIC_URL +
            "/musical_symbols_svg/notes/" +
            type + realloc_type + 
            ".svg"
          }
          style={{
            position: "relative",
            top: -36 - 6.1225 * (height + 1) + "px",
						left: "0px"
          }}
          height="45px"
        />
      </div>
      <NoteDecorationObj type={deco} height={height} direction="up" />
    </div>
  );
};

const NoteObj = ({ obj, isPlaying }) => {
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
  console.log(obj.length);
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

	
	console.log(thereIsRealloc);
	obj.accHori = Accidental(heights);
	var AccidentalMax = 0;
	for (var i = 0; i < obj.height.length; i++) {
		if (obj.accHori[i] > AccidentalMax) {
			AccidentalMax = obj.accHori[i];
		}
	}
	const accidental = Accidental(heights);
	console.log(obj.accHori);
  const objData = [];
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
  const returnValue = objData.map((obj) => {
    return direction === "up" ? (
      <IndivNoteUpObj
        type={type}
        height={obj.height}
        deco={obj.deco}
        acc={obj.acc}
      />
    ) : (
      <IndivNoteDownObj
        type={type}
        height={obj.height}
        deco={obj.deco}
        acc={obj.acc}
      />
    );
  });

	const stackReturnValue = objData.map((obj) => {
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
			/>
		);

	})


  if (obj.height.length == 1) {
    return <div className = {isPlaying ? "skyBlue" : "black"} style={{ width: "5px", display: "inline" }}>{returnValue}</div>;
  }

  return (
    <div style={{ width: "10px", display: "inline",}} height = "55px">
      {stackReturnValue}
    </div>
  );
};

const IndivRestObj = ({ length }) => {
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
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -47.5 - 12.245 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "9px"/>
            </div>
          </div>
        );
      case 1.5:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -47.5 - 12.245 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "9px"/>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -47.5 - 12.245 + 3.5 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "9px"/>
            </div>
          </div>
        );
      case 3:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -47.5 - 12.245 + 3.5 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "9px"/>
            </div>
          </div>
        );
      case 4:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -39 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "40px"/>
            </div>
          </div>
        );
      case 6:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -39 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "40px"/>
            </div>
          </div>
        );
      case 8:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -40 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "27px"/>
            </div>
          </div>
        );
      case 12:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -40 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "27px"/>
            </div>
          </div>
        );
      case 16:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -28 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "39px"/>
            </div>
          </div>
        );
      case 24:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -28 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "39px"/>
            </div>
          </div>
        );
      case 32:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -24.5 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "54px"/>
            </div>
          </div>
        );
      case 48:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <div style = {{width: "10px", display: "inline", position: "relative", top : -24.5 + "px"}}>
              <NoteComponent style = {{display: "inline", position: "relative"}} height = "54px"/>
            </div>
          </div>
        );
      default:
        return <div>Invalid Object</div>;
    }
  };

  return f(length);
};

const RestObj = ({ obj, isPlaying }) => {
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
  const returnValue = <IndivRestObj length={length} />;

  return <div className = {isPlaying ? "skyBlue" : "black"} style={{ width: "5px", display: "inline" }}>{returnValue}</div>;

};

const Note = ({ obj, isPlaying }) => {
  return (
    <div style={{ width: "10px", display: "inline" }}>
      {obj.rest ? <RestObj obj={obj} isPlaying = {isPlaying}/> : <NoteObj obj={obj} isPlaying = {isPlaying}/>}
    </div>
  );
};

export default Note;
