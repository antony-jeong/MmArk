import React from 'react';

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
        <div style = {{width: "23px", height: "100px", display: "inline" }}>
            <div className={className} style = {{width: "23px", display: "inline", position: "relative", top : "-100px"}}>{className}</div>
        </div>
    );
}

const Bpm = ({obj}) => {
    return (
        <div style = {{width: "23px", height: "100px", display: "inline" }}>
            <BpmObj className={obj.bpm}/>
        </div>
    );
};

export default Bpm;