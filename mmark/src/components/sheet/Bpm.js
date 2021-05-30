import React, {Component} from 'react';
import "./StyleSheet.css";

import {ReactComponent as NoteIcon_2} from "../musical_symbols_svg/notes/2.svg";
import {ReactComponent as NoteIcon_4} from "../musical_symbols_svg/notes/4.svg";
import {ReactComponent as NoteIcon_6} from "../musical_symbols_svg/notes/6.svg";
import {ReactComponent as NoteIcon_8} from "../musical_symbols_svg/notes/8.svg";
import {ReactComponent as NoteIcon_1} from "../musical_symbols_svg/notes1/1.svg";
import {ReactComponent as NoteIcon_1_5} from "../musical_symbols_svg/notes/1.5.svg";
import {ReactComponent as NoteIcon_2_alloc} from "../musical_symbols_svg/notes/2_alloc.svg";
import {ReactComponent as NoteIcon_2_down} from "../musical_symbols_svg/notes/2_down.svg";
import {ReactComponent as NoteIcon_3_down} from "../musical_symbols_svg/notes/3_down.svg";
import {ReactComponent as NoteIcon_3} from "../musical_symbols_svg/notes/3.svg";
import {ReactComponent as NoteIcon_4_down} from "../musical_symbols_svg/notes/4_down.svg";
import {ReactComponent as NoteIcon_6_down} from "../musical_symbols_svg/notes/6_down.svg";
import {ReactComponent as NoteIcon_8_down} from "../musical_symbols_svg/notes/8_down.svg";
import {ReactComponent as NoteIcon_12_down} from "../musical_symbols_svg/notes/12_down.svg";
import {ReactComponent as NoteIcon_12} from "../musical_symbols_svg/notes/12.svg";
import {ReactComponent as NoteIcon_16_down} from "../musical_symbols_svg/notes/16_down.svg";
import {ReactComponent as NoteIcon_16} from "../musical_symbols_svg/notes/16.svg";
import {ReactComponent as NoteIcon_24_down} from "../musical_symbols_svg/notes/24_down.svg";
import {ReactComponent as NoteIcon_24} from "../musical_symbols_svg/notes/24.svg";
import {ReactComponent as NoteIcon_32_down} from "../musical_symbols_svg/notes/32_down.svg";
import {ReactComponent as NoteIcon_32} from "../musical_symbols_svg/notes/32.svg";
import {ReactComponent as NoteIcon_48} from "../musical_symbols_svg/notes/48.svg";
import {ReactComponent as NoteIcon_48_down} from "../musical_symbols_svg/notes/48_down.svg";
import {ReactComponent as RestIcon_1_5} from "../musical_symbols_svg/rests/48.svg";

import {ReactComponent as Cursor} from "../musical_symbols_svg/cursor.svg";
import {ReactComponent as CursorBig} from "../musical_symbols_svg/cursor_big.svg";
import {ReactComponent as BpmAnker} from "../musical_symbols_svg/bpm_anker.svg";


// objectType: (char) 
        // c - clef
        // t - time
        // k - key
        // b - barline
        // n - note

        // > if clef
        // treble: (boolean) true - treble, false - bass

const Components = [];


Components.push(NoteIcon_8);
Components.push(NoteIcon_4);
Components.push(NoteIcon_6);
Components.push(NoteIcon_2);
Components.push(NoteIcon_1);
Components.push(NoteIcon_1_5);
Components.push(NoteIcon_2_alloc);
Components.push(NoteIcon_2_down);
Components.push(NoteIcon_3_down);
Components.push(NoteIcon_3);
Components.push(NoteIcon_4_down);
Components.push(NoteIcon_6_down);
Components.push(NoteIcon_8_down);
Components.push(NoteIcon_12_down);
Components.push(NoteIcon_12);
Components.push(NoteIcon_16_down);
Components.push(NoteIcon_16);
Components.push(NoteIcon_24_down);
Components.push(NoteIcon_24);
Components.push(NoteIcon_32_down);
Components.push(NoteIcon_32);
Components.push(NoteIcon_48);
Components.push(NoteIcon_48_down);
Components.push(RestIcon_1_5);

const BpmObj = ({className, bpmUnit8, margin, cursorHeight}) => {
    const NoteComponent = Components[bpmUnit8 - 1];
    return (
        <div style = {{width: "0px", height: "100px", display: "inline-flex", "margin-right": margin }}>
            <div className={"black"} style = {{width: "10px", display: "inline", position: "relative", top : "-106.5px"}}>
                <NoteComponent style = {{display: "inline", position: "relative"}} height = "20px"/>
            </div>
            <div className={className} style = {{font: "italic", width: "10px", display: "inline", position: "relative", top : "-100px", left: "8px"}}>
                <font style = {{font: "italic",}}>{"  =  "}</font>
            </div>
            <div className={className} style = {{font: "italic", width: "0px", display: "inline", position: "relative", top : "-102px", left: "16px"}}>
                <font style = {{font: "italic", "font-size": "11px" , left: "8px"}}>{className}</font>
            </div>
        </div>
    );
}

const Bpm = ({obj, margin, cursorHeight, isBeingEdited}) => {
    return (
        <div style = {{width: "0px", height: "100px", display: "inline-flex" }}>
            <BpmObj className={obj.bpm} bpmUnit8={obj.bpmUnit8} margin={margin} cursorHeight={cursorHeight}/>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -59.1 - 6.1225 * (cursorHeight + 1) + "px"}}>
                <div>
                    {cursorHeight < 50 ? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
                </div>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -59.1 - 6.1225  + "px"}}>
                <div>
                    {cursorHeight < 50 ? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
                </div>
            </div>
            <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -84.1 - 6.1225  + "px"}}>
                <div>
                    {isBeingEdited ? <BpmAnker className="anker" style = {{display: "inline-flex", position: "relative", left: "-4px"}} height="10px"/> : <div></div>}
                </div>
            </div>
        </div>
    );
};

export default Bpm;