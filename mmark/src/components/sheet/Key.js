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

        // > if key
        // key: (int) 0 - c major, num added for sharps

const KeyObj = ({className, margin, treble}) => {
    const trebleAlloc = treble ? 0 : 6.1225*2;
    switch (className) {
            case "s-1":
                return (<div className="s-1" style = {{width: "8px", display: "inline", position: "relative", "margin-right":  margin }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_s_1.svg"} style = {{width: "8px", position: "relative", top: -29 + trebleAlloc + "px"}}  height = "81px"/>
                    </div> )
            case "s-2":
                return (<div className="s-2" style = {{width: "16px", display: "inline", position: "relative", "margin-right":  margin }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_s_2.svg"} style = {{width: "16px", position: "relative", top: -29 + trebleAlloc + "px"}}  height = "81px"/>
                    </div>)
            case "s-3":
                return (<div className="s-3" style = {{width: "24px", display: "inline", position: "relative", "margin-right":  margin }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_s_3.svg"} style = {{width: "24px", position: "relative", top: -29 + trebleAlloc + "px"}}  height = "81px"/>
                    </div>)
            case "s-4":
                return (<div className="s-4" style = {{width: "32px", display: "inline", position: "relative", "margin-right":  margin }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_s_4.svg"} style = {{width: "32px", position: "relative", top: -29 + trebleAlloc + "px"}}  height = "81px"/>
                    </div>)
            case "s-5":
                return (<div className="s-5" style = {{width: "40px", display: "inline", position: "relative", "margin-right":  margin }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_s_5.svg"} style = {{width: "40px", position: "relative", top: -29 + trebleAlloc + "px"}}  height = "81px"/>
                    </div>)
            case "s-6":
                return (<div className="s-6" style = {{width: "48px", display: "inline", position: "relative", "margin-right":  margin}}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_s_6.svg"} style = {{width: "48px", position: "relative", top: -29 + trebleAlloc + "px"}}  height = "81px"/>
                    </div> )
            case "s-7":
                return (<div className="s-7" style = {{width: "56px", display: "inline", position: "relative", "margin-right":  margin}}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_s_7.svg"} style = {{width: "56px", position: "relative", top: -29 + trebleAlloc + "px"}}  height = "81px"/>
                    </div>)
            case "0":
                return (<div className="0" style = {{width: "8px", display: "inline", position: "relative", "margin-right":  margin }}></div>)
            case "f-1":
                return (<div className="f-1" style = {{width: "8px", display: "inline", position: "relative", "margin-right":  margin }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_f_1.svg"} style = {{width: "8px", position: "relative", top: -23 + trebleAlloc + "px"}}  height = "81px"/>
                    </div> )
            case "f-2":
                return (<div className="f-2" style = {{width: "16px", display: "inline", position: "relative", "margin-right":  margin }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_f_2.svg"} style = {{width: "16px", position: "relative", top: -23 + trebleAlloc + "px"}}  height = "81px"/>
                    </div>)
            case "f-3":
                return (<div className="f-3" style = {{width: "24px", display: "inline", position: "relative", "margin-right":  margin }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_f_3.svg"} style = {{width: "24px", position: "relative", top: -23 + trebleAlloc + "px"}}  height = "81px"/>
                    </div>)
            case "f-4":
                return (<div className="f-4" style = {{width: "32px", display: "inline", position: "relative", "margin-right":  margin }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_f_4.svg"} style = {{width: "32px", position: "relative", top: -23 + trebleAlloc + "px"}}  height = "81px"/>
                    </div>)
            case "f-5":
                return (<div className="f-5" style = {{width: "40px", display: "inline", position: "relative", "margin-right":  margin }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_f_5.svg"} style = {{width: "40px", position: "relative", top: -23 + trebleAlloc + "px"}}  height = "81px"/>
                    </div>)
            case "f-6":
                return (<div className="f-6" style = {{width: "48px", display: "inline", position: "relative", "margin-right":  margin }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_f_6.svg"} style = {{width: "48px", position: "relative", top: -23 + trebleAlloc + "px"}}  height = "81px"/>
                    </div> )
            case "f-7":
                return (<div className="f-7" style = {{width: "56px", display: "inline", position: "relative", "margin-right":  margin }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_f_7.svg"} style = {{width: "56px", position: "relative", top: -23 + trebleAlloc + "px"}}  height = "81px"/>
                    </div>)
            default:
                return (<div>Invalid Object Obj</div>)
        }
};

const Key = ({obj, margin, cursorHeight, treble}) => {
    return (
        <div style = {{width: "56px", display: "inline" }}>
            <KeyObj className={obj.key > 0 ? `s-${obj.key}` : obj.key < 0 ? `f${obj.key}`: "0"} margin={margin} treble={treble}/>
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
};

export default Key;