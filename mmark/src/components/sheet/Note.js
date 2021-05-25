import React from "react";
import "./StyleSheet.css";

// objectType: (char)
// c - clef
// t - time
// k - key
// b - barline
// n - note

// > if note
// length: (int) as exponent of 2; 0 - whole note
// extend: (boolean) true - w/ point
// rest: (boolean) true - rest note
// height: ([int]) vertical location in sheet; 0 - mi
// accidental : ([char]) s - sharp, f - flat, n - natural, x - none
// noteDecoration : ([char])
// s - staccato
// a - accent
// t - tenuto
// f - fermata
// x - none

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
  var f = (direction) => {
    switch (direction) {
      case "up":
        return (
          <div style={{ width: "8px", display: "inline"}}>
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
								left: 0 + "px"
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
  return (
    <div className={height} style={{ width: "0px", display: "inline" }}>
      <AccidentalObj type={acc} height={height} direction="up" />
      <div style={{ width: "0px", display: "inline-flex", "margin-right": "0px" }}>
          <LineObj height = {height} />
        </div>
      <div className="up" style={{ width: "0px", display: "inline" }}>
        <img
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
        />
      </div>
      <NoteDecorationObj type={deco} height={height} direction="up" />
    </div>
  );
};

const IndivNoteDownObj = ({ type, height, deco, acc }) => {
  return (
    <div className={height} style={{ width: "0px", display: "inline" }}>
      <AccidentalObj type={acc} height={height} direction="down" />
      <div style={{ width: "0px", display: "inline-flex", "margin-right": "0px" }}>
          <LineObj height = {height} />
        </div>
      <div className="down" style={{ width: "0px", display: "inline" }}>
        <img
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
        />
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

const NoteObj = ({ obj }) => {
  const direction = obj.height[0] > 3 ? "down" : "up";
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
    return <div style={{ width: "5px", display: "inline" }}>{returnValue}</div>;
  }

  return (
    <div style={{ width: "10px", display: "inline",}} height = "55px">
      {stackReturnValue}
    </div>
  );
};

const IndivRestObj = ({ length }) => {
  var f = (length) => {
    switch (length) {
      case 1:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/rests/" +
                length +
                ".svg"
              }
              style={{ position: "relative", top: -47.5 - 12.245 + "px" }}
              height="9px"
            />
          </div>
        );
      case 1.5:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/rests/" +
                length +
                ".svg"
              }
              style={{ position: "relative", top: -47.5 - 12.245 + "px" }}
              height="9px"
            />
          </div>
        );
      case 2:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/rests/" +
                length +
                ".svg"
              }
              style={{ position: "relative", top: -47.5 - 12.245 + 3.5 + "px" }}
              height="9px"
            />
          </div>
        );
      case 3:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/rests/" +
                length +
                ".svg"
              }
              style={{ position: "relative", top: -47.5 - 12.245 + 3.5 + "px" }}
              height="9px"
            />
          </div>
        );
      case 4:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/rests/" +
                length +
                ".svg"
              }
              style={{ position: "relative", top: -39 + "px" }}
              height="40px"
            />
          </div>
        );
      case 6:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/rests/" +
                length +
                ".svg"
              }
              style={{ position: "relative", top: -39 + "px" }}
              height="40px"
            />
          </div>
        );
      case 8:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/rests/" +
                length +
                ".svg"
              }
              style={{ position: "relative", top: -40 + "px" }}
              height="27px"
            />
          </div>
        );
      case 12:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/rests/" +
                length +
                ".svg"
              }
              style={{ position: "relative", top: -40 + "px" }}
              height="27px"
            />
          </div>
        );
      case 16:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/rests/" +
                length +
                ".svg"
              }
              style={{ position: "relative", top: -28 + "px" }}
              height="39px"
            />
          </div>
        );
      case 24:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/rests/" +
                length +
                ".svg"
              }
              style={{ position: "relative", top: -28 + "px" }}
              height="39px"
            />
          </div>
        );
      case 32:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/rests/" +
                length +
                ".svg"
              }
              style={{ position: "relative", top: -24.5 + "px" }}
              height="54px"
            />
          </div>
        );
      case 48:
        return (
          <div className={length} style={{ width: "5px", display: "inline" }}>
            <img
              src={
                process.env.PUBLIC_URL +
                "/musical_symbols_svg/rests/" +
                length +
                ".svg"
              }
              style={{ position: "relative", top: -24.5 + "px" }}
              height="54px"
            />
          </div>
        );
      default:
        return <div>Invalid Object</div>;
    }
  };

  return f(length);
};

const RestObj = ({ obj }) => {
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
        return obj.extend ? 32 : 16;
      case 5:
        return obj.extend ? 48 : 32;
      default:
        return <div>Invalid Object</div>;
    }
  };
  const length = f(obj);
  const returnValue = <IndivRestObj length={length} />;

  return <div style={{ width: "5px", display: "inline" }}>{returnValue}</div>;

};

const Note = ({ obj }) => {
  return (
    <div style={{ width: "10px", display: "inline" }}>
      {obj.rest ? <RestObj obj={obj} /> : <NoteObj obj={obj} />}
    </div>
  );
};

export default Note;
