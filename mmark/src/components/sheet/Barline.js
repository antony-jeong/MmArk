import React from 'react';
import "./StyleSheet.css";

import {ReactComponent as Cursor} from "../musical_symbols_svg/cursor.svg";
import {ReactComponent as CursorBig} from "../musical_symbols_svg/cursor_big.svg";

// objectType: (char) 
        // c - clef
        // t - time
        // k - key
        // b - barline
        // n - note

        // > if barline
        // type: (char) 
            // b - bar line
            // o - repeat open line
            // c - repeat close line
            // d - double bar line
            // t - terminal bar line

        // barlineDecoration : (string)
            // ds - dal segno
            // se - segno
            // dc - da capo
            // fi - fine
            // fe - fermata
            // co - coda
            // r1 - repeat 1 start
            // r2 - repear 2 start
            // no - none



const BarlineObj = ({ className, barlineDecoration, margin, cursorHeight }) => {
    var deco = "no";
    if (barlineDecoration === "ds") deco = "dalsegno";
    else if (barlineDecoration === "se") deco = "segno";
    else if (barlineDecoration === "dc") deco = "dacapo";
    else if (barlineDecoration === "fi") deco = "fine";
    else if (barlineDecoration === "co") deco = "coda";
    else if (barlineDecoration === "fe") deco = "deco_f";
    const decoH = {
        "segno": "30",
        "dalsegno": "15",
        "dacapo": "15",
        "fine": "15",
        "coda": "25",
        "deco_f": "12"

    }
    const decoTop = {
        "segno": 0,
        "dalsegno": 100,
        "dacapo": 100,
        "fine": 100,
        "coda": 0,
        "deco_f": 0
    }
    const decoLeft = {
        "segno": 0,
        "dalsegno": -35,
        "dacapo": -35,
        "fine": -45,
        "coda": 0,
        "deco_f": -8
    }
    switch (className) {
        case "b":
            return (<div className="bar" style = {{width: "1px", display: "inline", "margin-right": margin}}>
                        {deco === "no"
                            ? <></>
                            : <div style = {{width: "0px", display: "inline-flex", position: "relative", top :  -19.5 - 6.1225 + "px"}}>
                                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/" + deco + ".svg"} style = {{position : "relative", top: -61 + decoTop[deco]  + "px", left: decoLeft[deco]}} height = {decoH[deco] + "px"}/>
                            </div>}
                        <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/barline.svg"} style = {{position : "relative", top: "-31px"}} height = "50px"/>
                        <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
                            <div>
                                {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
                            </div>
                        </div>
                        <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
                            <div>
                                {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
                            </div>
                        </div>
                    </div>)
        case "o":
            return (<div className="open" style = {{width: "14px", display: "inline", "margin-right": margin }}>
                        {deco === "no"
                            ? <></>
                            : <div style = {{width: "0px", display: "inline-flex", position: "relative", top :  -19.5 - 6.1225 + "px"}}>
                                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/" + deco + ".svg"} style = {{position : "relative", top: -61 + decoTop[deco]  + "px", left: decoLeft[deco]}} height = {decoH[deco] + "px"}/>
                            </div>}
                        <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/barline_repeat_open.svg"} style = {{position : "relative", top: "-31px"}} height = "50px"/>
                        <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
                            <div>
                                {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
                            </div>
                        </div>
                        <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
                            <div>
                                {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
                            </div>
                        </div>
                    </div>)
        case "c":
            return (<div className="close" style = {{width: "14px", display: "inline", "margin-right": margin }}>
                        {deco === "no"
                            ? <></>
                            : <div style = {{width: "0px", display: "inline-flex", position: "relative", top :  -19.5 - 6.1225 + "px"}}>
                                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/" + deco + ".svg"} style = {{position : "relative", top: -61 + decoTop[deco]  + "px", left: decoLeft[deco]}} height = {decoH[deco] + "px"}/>
                            </div>}
                        <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/barline_repeat_close.svg"} style = {{position : "relative", top: "-31px"}} height = "50px"/>
                        <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
                            <div>
                                {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
                            </div>
                        </div>
                        <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
                            <div>
                                {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
                            </div>
                        </div>
                    </div>)
        case "d":
            return (<div className="double" style = {{width: "3px", display: "inline", "margin-right": margin }}>
                        {deco === "no"
                            ? <></>
                            : <div style = {{width: "0px", display: "inline-flex", position: "relative", top :  -19.5 - 6.1225 + "px"}}>
                                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/" + deco + ".svg"} style = {{position : "relative", top: -61 + decoTop[deco]  + "px", left: decoLeft[deco]}} height = {decoH[deco] + "px"}/>
                            </div>}
                        <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/barline_double.svg"} style = {{position : "relative", top: "-31px"}} height = "50px"/>
                        <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
                            <div>
                                {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
                            </div>
                        </div>
                        <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
                            <div>
                                {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
                            </div>
                        </div>
                    </div>)
        case "t":
            return (<div className="terminate" style = {{width: "6px", display: "inline", "margin-right": margin }}>
                        {deco === "no"
                            ? <></>
                            : <div style = {{width: "0px", display: "inline-flex", position: "relative", top :  -19.5 - 6.1225 + "px"}}>
                                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/" + deco + ".svg"} style = {{position : "relative", top: -61 + decoTop[deco]  + "px", left: decoLeft[deco]}} height = {decoH[deco] + "px"}/>
                            </div>}
                        <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/barline_terminal.svg"} style = {{position : "relative", top: "-31px"}} height = "50px"/>
                        <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px"}}>
                            <div>
                                {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
                            </div>
                        </div>
                        <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px"}}>
                            <div>
                                {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
                            </div>
                        </div>
                    </div>)
        default:
            return (<div> Invalid Object Obj</div>)
    };
}


const Barline = ({obj, margin, cursorHeight}) => {
    switch (obj.type) {
        case "b":
            return (<BarlineObj className={"b"} barlineDecoration={ obj.barlineDecoration} style = {{width: "1px"}} margin = {margin} cursorHeight = {cursorHeight}/>)
        case "o":
            return (<BarlineObj className={"o"} barlineDecoration={ obj.barlineDecoration} style = {{width: "14px"}} margin = {margin} cursorHeight = {cursorHeight}/>)
        case "c":
            return (<BarlineObj className={"c"} barlineDecoration={ obj.barlineDecoration} style = {{width: "14px"}} margin = {margin} cursorHeight = {cursorHeight}/>)
        case "d":
            return (<BarlineObj className={"d"} barlineDecoration={ obj.barlineDecoration} style = {{width: "3px"}} margin = {margin} cursorHeight = {cursorHeight}/>)
        case "t":
            return (<BarlineObj className={"t"} barlineDecoration={ obj.barlineDecoration} style = {{width: "6px"}} margin = {margin} cursorHeight = {cursorHeight}/>)
        default:
            return (<div>Invalid Object</div>)
    }
};

export default Barline;
