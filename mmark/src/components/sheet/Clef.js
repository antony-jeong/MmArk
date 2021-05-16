import React from 'react';

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
        <div>
            {className === "treble" ? <div className="treble">Treble</div> : <div className="bass">{className}</div>}
        </div>
    );
}

const Clef = ({obj}) => {
    return (
        <div>
            {obj.treble ? <ClefObj className="treble"/> : <ClefObj className="bass"/>}
        </div>
    );
};

export default Clef;