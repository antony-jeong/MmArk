import React from 'react';
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

const AccidentalObj = ({ type, height, direction}) => {
    var f = (direction) => {
        switch (direction) {
            case "up" :
                return (<div style = {{width: "5px", display: "inline" }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/accidental_" + type + ".svg"} style = {{position: "relative", top: -11.5-6.1225*(height + 1)+"px"}} height = {28+(type == "f" ? 7.2 : 0)+"px"}/>
                </div>);
            case "down" :
                return (<div style = {{width: "5px", display: "inline" }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/accidental_" + type + ".svg"} style = {{position: "relative", top: -11.5-6.1225*(height + 1)+"px"}} height = {28+(type == "f" ? 7.2 : 0)+"px"} />
                </div>);
        }
    };
    if (type == "x") {
        return (<div style = {{width: "5px", display: "inline" }}></div>);
    }
    return f(direction);
};

const NoteDecorationObj = ({ type, height, direction }) => {
    var f = (direction) => {
        switch (direction) {
            case "up" :
                return (<div style = {{width: "0px", display: "inline-flex" }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/deco_" + type + ".svg"} style = {{position: "relative", top: -14-6.1225*(height)+"px", left: "-21px"}} height = "9px"/>
                </div>);
            case "down" :
                return (<div style = {{width: "0px", display: "inline-flex" }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/deco_" + type + ".svg"} style = {{position: "relative", top: -40-6.1225*(height)+"px", left: "-21px"}} height = "9px"/>
                </div>);
        }
    };

    if (type == "f"){

        if (height > 11){
            return (<div style = {{width: "0px", display: "inline-flex" }}>
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/deco_" + type + ".svg"} style = {{position: "relative", top: -100-6.1225*(height)+"px", left: "-21px"}} height = "9px"/>
            </div>);
        }

        return (<div style = {{width: "0px", display: "inline-flex" }}>
            <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/deco_" + type + ".svg"} style = {{position: "relative", top: -100+"px", left: "-21px"}} height = "9px"/>
        </div>);
    }
    if (type == "x") {
        return (<div style = {{width: "5px", display: "inline" }}></div>);
    }
    return f(direction);
};

const IndivNoteUpObj = ({ type, height, deco, acc }) => {
    return (
        <div className={height} style = {{width: "0px", display: "inline" }}>
            <AccidentalObj type={acc} height={height} direction="up"/>
            <div className="up" style = {{width: "0px", display: "inline" }}> 
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/notes/" + type + ".svg"} style = {{position: "relative", top: -19-6.1225*(height + 1) + "px"}} height = "45px"/>
            </div>
            <NoteDecorationObj type={deco} height={height} direction="up"/>
        </div>
    );
};

const IndivNoteDownObj = ({ type, height, deco, acc }) => {
        return (
        <div className={height} style = {{width: "0px", display: "inline" }}>
            <AccidentalObj type={acc} height={height} direction="down"/>
            <div className="down" style = {{width: "0px", display: "inline" }}> 
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/notes/" + type + "_down.svg"} style = {{position: "relative", top: 14-6.1225*(height + 1) + "px"}} height = "45px"/>
            </div>
            <NoteDecorationObj type={deco} height={height} direction="down"/>
        </div>
    );
};

const NoteObj = ({ obj }) => {
    const direction = (obj.height[0] > 3) ? "down" : "up";
    var f = (obj) => {
        switch (obj.length) {
            case 0:
                return (obj.extend ? 1.5 : 1);
            case 1:
                return (obj.extend ? 3 : 2);
            case 2:
                return (obj.extend ? 6 : 4);
            case 3:
                return (obj.extend ? 12 : 8);
            case 4:
                return (obj.extend ? 24 : 16);
            case 5:
                return (obj.extend ? 48 : 32);
            default:
                return (<div>Invalid Object</div>);
        }
    };
    const type = f(obj);
    console.log(obj.length);
    const objData = [];
    for (var i = 0; i < obj.height.length; i++) {
        const newObj = { height: obj.height[i], deco: obj.noteDecoration[i], acc: obj.accidental[i] };
        objData.push(newObj);
    }
    const returnValue = objData.map((obj) => {

        return (direction === "up" ? <IndivNoteUpObj type={ type } height={ obj.height } deco={ obj.deco } acc={ obj.acc }/> : <IndivNoteDownObj type={ type } height={ obj.height } deco={ obj.deco } acc={ obj.acc }/>);
    });
    if (obj.height.length == 1) {
        return (
            < div style = {{width: "5px", display: "inline" }}>
                {returnValue}
            </div>
        );
    }
    return (
        < div style = {{width: "3px", display: "inline-flex", "flex-shrink":"15px" }}>
            {returnValue}
        </div>
    );
    
};

const IndivRestObj = ({ length }) => {
    var f = (length) => {
        switch (length) {
            case 1:
                return (<div className={length} style = {{width: "5px", display: "inline" }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/rests/" + length + ".svg"} style = {{position: "relative", top: -47.5 -12.245+ "px"}} height = "9px"/>
                </div>);
            case 1.5:
                return (<div className={length} style = {{width: "5px", display: "inline" }}>
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/rests/" + length + ".svg"} style = {{position: "relative", top: -47.5 -12.245+ "px"}} height = "9px"/>
            </div>);
            case 2:
                return (<div className={length} style = {{width: "5px", display: "inline" }}>
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/rests/" + length + ".svg"} style = {{position: "relative", top: -47.5 -12.245 +3.5+ "px"}} height = "9px"/>
            </div>);
            case 3:
                return (<div className={length} style = {{width: "5px", display: "inline" }}>
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/rests/" + length + ".svg"} style = {{position: "relative", top: -47.5 -12.245 +3.5 + "px"}} height = "9px"/>
            </div>);
            case 4:
                return (<div className={length} style = {{width: "5px", display: "inline" }}>
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/rests/" + length + ".svg"} style = {{position: "relative", top: -39 + "px"}} height = "40px"/>
            </div>);
            case 6:
                return (<div className={length} style = {{width: "5px", display: "inline" }}>
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/rests/" + length + ".svg"} style = {{position: "relative", top: -39 + "px"}} height = "40px"/>
            </div>);
            case 8:
                return (<div className={length} style = {{width: "5px", display: "inline" }}>
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/rests/" + length + ".svg"} style = {{position: "relative", top: -40 + "px"}} height = "27px"/>
            </div>);
            case 12:
                return (<div className={length} style = {{width: "5px", display: "inline" }}>
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/rests/" + length + ".svg"} style = {{position: "relative", top: -40 + "px"}} height = "27px"/>
            </div>);
            case 16:
                return (<div className={length} style = {{width: "5px", display: "inline" }}>
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/rests/" + length + ".svg"} style = {{position: "relative", top: -28 + "px"}} height = "39px"/>
            </div>);
            case 24:
                return (<div className={length} style = {{width: "5px", display: "inline" }}>
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/rests/" + length + ".svg"} style = {{position: "relative", top: -28 + "px"}} height = "39px"/>
            </div>);
            case 32:
                return (<div className={length} style = {{width: "5px", display: "inline" }}>
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/rests/" + length + ".svg"} style = {{position: "relative", top: -24.5 + "px"}} height = "54px"/>
            </div>);
            case 48:
                return (<div className={length} style = {{width: "5px", display: "inline" }}>
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/rests/" + length + ".svg"} style = {{position: "relative", top: -24.5 + "px"}} height = "54px"/>
            </div>);
            default:
                return (<div>Invalid Object</div>);
        }
    };

    return (f(length));
};

const RestObj = ({ obj }) => {
    { console.log(obj) };
    var f = (obj) => {
        switch (obj.length) {
            case 0:
                return (obj.extend ? 1.5 : 1);
            case 1:
                return (obj.extend ? 3 : 2);
            case 2:
                return (obj.extend ? 6 : 4);
            case 3:
                return (obj.extend ? 12 : 8);
            case 4:
                return (obj.extend ? 32 : 16);
            case 5:
                return (obj.extend ? 48 : 32);
            default:
                return (<div>Invalid Object</div>);
        }
    };
    const length = f(obj);
    const returnValue = <IndivRestObj length={ length }/>;

    return (

        <div style = {{width: "5px", display: "inline" }}>{ returnValue }</div>
        

    );
};

const Note = ({obj}) => {
    return (
        <div style = {{width: "5px", display: "inline" }}>
            {obj.rest ? <RestObj obj={obj} /> : <NoteObj obj={obj}/>}
        </div>
    );
};

export default Note;