import React from 'react';
import Note from "./Note";

// objectType: (char) 
        // c - clef
        // t - time
        // k - key
        // b - barline
        // n - note
        // t - triplet

        // > if triplet
        // notes : ([Note]) contains Note objects which composes the notes

const Triplet = ({ obj }) => {
    const returnValue = obj.map((obj) => {
        return (<Note obj={obj} />);
    });

    return (
        <div>
            <div className="tripletWrapper">Triplet Wrapper</div>
                {returnValue}
        </div>
    );
}
export default Triplet;