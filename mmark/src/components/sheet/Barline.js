import React from 'react';
import "./StyleSheet.css";

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


import imgBarLine from "../musical_symbols_svg/barline.svg";

const BarlineObj = ({ className, barlineDecoration }) => {
    switch (className) {
        case "b":
            return (<div className="bar" style = {{width: "1px", display: "inline" }}><img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/barline.svg"} style = {{position : "relative", top: "-31px"}} height = "50px"/></div>)
        case "o":
            return (<div className="open" style = {{width: "14px", display: "inline" }}><img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/barline_repeat_open.svg"} style = {{position : "relative", top: "-31px"}} height = "50px"/></div>)
        case "c":
            return (<div className="close" style = {{width: "14px", display: "inline" }}><img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/barline_repeat_close.svg"} style = {{position : "relative", top: "-31px"}} height = "50px"/></div>)
        case "d":
            return (<div className="double" style = {{width: "3px", display: "inline" }}><img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/barline_double.svg"} style = {{position : "relative", top: "-31px"}} height = "50px"/></div>)
        case "t":
            return (<div className="terminate" style = {{width: "6px", display: "inline" }}><img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/barline_terminal.svg"} style = {{position : "relative", top: "-31px"}} height = "50px"/></div>)
        default:
            return (<div> Invalid Object Obj</div>)
    };
}


const Barline = ({obj}) => {
    switch (obj.type) {
        case "b":
            return (<BarlineObj className={"b"} barlineDecoration={ obj.barlineDecoration} style = {{width: "1px"}}/>)
        case "o":
            return (<BarlineObj className={"o"} barlineDecoration={ obj.barlineDecoration} style = {{width: "14px"}}/>)
        case "c":
            return (<BarlineObj className={"c"} barlineDecoration={ obj.barlineDecoration} style = {{width: "14px"}}/>)
        case "d":
            return (<BarlineObj className={"d"} barlineDecoration={ obj.barlineDecoration} style = {{width: "3px"}}/>)
        case "t":
            return (<BarlineObj className={"t"} barlineDecoration={ obj.barlineDecoration} style = {{width: "6px"}}/>)
        default:
            return (<div>Invalid Object</div>)
    }
};

export default Barline;