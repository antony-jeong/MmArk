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

const ClefObj = ({className}) => {
    return (
        <div style = {{width: "27px", display: "inline" }} >
            {className === "treble" 
            ? <div className="treble" style = {{width: "27px", display: "inline" }}>
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/clef_g.svg"} style = {{position: "relative", top: "-17px"}}  height = "81px"/>
            </div> 
            : <div className="bass" style = {{width: "27px", display: "inline" }}>
                <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/clef_f.svg"} style = {{position: "relative", top: "-39px"}}  height = "42px"/>
            </div>}
        </div>
    );
}

const Clef = ({obj}) => {
    return (
        <div style = {{width: "27px", display: "inline" }}>
            {obj.treble ? <ClefObj className="treble"/> : <ClefObj className="bass"/>}
        </div>
    );
};

export default Clef;