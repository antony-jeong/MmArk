import React from 'react';

// objectType: (char) 
        // c - clef
        // t - time
        // k - key
        // b - barline
        // n - note

        // > if note
        // length: (int) as exponent of 2; 0 - whole note
        // extend: (boolean) true - w/ point
        // rest: (boolean) true - rest note
        // height: (int) vertical location in sheet; 0 - mi
        // accidental : (char) s - sharp, f - flat, n - natural, x - none
        // triplet : (boolean) true - is triplet
        // noteDecoration : (char)
            // s - staccato
            // a - accent
            // t - tenuto
            // f - fermata

const Note = (obj) => {
    return (
        <div>
            
        </div>
    );
};

export default Note;