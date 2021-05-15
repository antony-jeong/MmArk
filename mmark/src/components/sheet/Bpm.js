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
        <div>
            <div className={className}>{className}</div>
        </div>
    );
}

const Bpm = ({obj}) => {
    return (
        <div>
            <BpmObj className={obj.bpm}/>
        </div>
    );
};

export default Bpm;