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

        // > if time
        // numerator: (int) up 
        // denominator: (int) down

const TimeObj = ({type, num}) => {

    return (
        <div style = {{width: "23px", display: "inline" }}>
            {type === "nu" 
            ? <div className="nu" style = {{width: "0px", display: "inline" }}><img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/numerator_" + num + ".svg"} style = {{position: "relative", top: "-56px"}} height = "23px"/></div> 
            : <div className="de" style = {{width: "0px", display: "inline-flex"}}><img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/denominator_" + num + ".svg"} style = {{position: "relative", top: "-32px", left: "-27px"}} height = "23px"/></div>}
        </div>        
    )
}

const Time = ({obj, margin, cursorHeight}) => {

    return (
        <div style = {{width: "23px", display: "inline", "margin-right": margin}}>
            { <TimeObj type="nu" num = {obj.numerator}/>}
            { <TimeObj type="de" num = {obj.denominator}/>}
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
        </div >
        
    );
};

export default Time;