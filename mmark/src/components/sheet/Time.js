import React from 'react';
import "./StyleSheet.css";

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

const Time = ({obj, margin}) => {

    return (
        <div style = {{width: "23px", display: "inline", "margin-right": margin}}>
            { <TimeObj type="nu" num = {obj.numerator}/>}
            { <TimeObj type="de" num = {obj.denominator}/>}
        </div >
    );
};

export default Time;