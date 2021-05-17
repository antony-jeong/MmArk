import React from 'react';
import "./StyleSheet.css";

// objectType: (char) 
        // c - clef
        // t - time
        // k - key
        // b - barline
        // n - note

        // > if clef
        // treble: (boolean) true - treble, false - bass

const BpmObj = ({className}) => {
    return (
        <div style = {{width: "0px", height: "100px", display: "inline-flex" }}>
            <div className={className} style = {{font: "italic", width: "0px", display: "inline", position: "relative", top : "-100px"}}>
                <font style = {{font: "italic"}}>{className}</font>
            </div>
        </div>
    );
}

const Bpm = ({obj}) => {
    return (
        <div style = {{width: "0px", height: "100px", display: "inline-flex" }}>
            <BpmObj className={obj.bpm}/>
        </div>
    );
};

export default Bpm;