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

        // > if clef
        // treble: (boolean) true - treble, false - bass

const ClefObj = ({className, margin, cursorHeight}) => {
    return (
        <div style = {{width: "0px", display: "inline", "margin-right":  margin}} >
            {className === "treble" 
            ? <div className="treble" style = {{width: "27px", display: "inline" }}>
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/clef_g.svg"} style = {{position: "relative", top: "-17px"}}  height = "81px"/>
            </div> 
            : <div className="bass" style = {{width: "27px", display: "inline" }}>
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/clef_f.svg"} style = {{position: "relative", top: "-18px"}}  height = "81px"/>
            </div>}
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
        </div>
    );
}

const Clef = ({obj, margin, cursorHeight}) => {
    return (
        <div style = {{width: "0px", display: "inline" }}>
            {obj.treble ? <ClefObj className="treble" margin={margin} cursorHeight={cursorHeight}/> : <ClefObj className="bass"margin={margin} cursorHeight={cursorHeight}/>}
        </div>
    );
};

export default Clef;