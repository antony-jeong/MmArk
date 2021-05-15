import React from 'react';

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

const BarlineObj = ({ className, barlineDecoration }) => {
    switch (className) {
        case "b":
            return (<div className="bar">{barlineDecoration}</div>)
        case "o":
            return (<div className="open">{barlineDecoration}</div>)
        case "c":
            return (<div className="close">{barlineDecoration}</div>)
        case "d":
            return (<div className="double">{barlineDecoration}</div>)
        case "t":
            return (<div className="terminate">{barlineDecoration}</div>)
        default:
            return (<div> Invalid Object Obj</div>)
    };
}


const Barline = ({obj}) => {
    switch (obj.type) {
        case "b":
            return (<BarlineObj className={"b"} barlineDecoration={ obj.barlineDecoration}/>)
        case "o":
            return (<BarlineObj className={"o"} barlineDecoration={ obj.barlineDecoration}/>)
        case "c":
            return (<BarlineObj className={"c"} barlineDecoration={ obj.barlineDecoration}/>)
        case "d":
            return (<BarlineObj className={"d"} barlineDecoration={ obj.barlineDecoration}/>)
        case "t":
            return (<BarlineObj className={"t"} barlineDecoration={ obj.barlineDecoration}/>)
        default:
            return (<div>Invalid Object</div>)
    }
};

export default Barline;