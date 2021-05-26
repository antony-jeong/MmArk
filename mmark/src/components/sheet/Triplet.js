import React from 'react';
import Note from "./Note";
import "./StyleSheet.css";




// objectType: (char) 
        // c - clef
        // t - time
        // k - key
        // b - barline
        // n - note
        // r - triplet

        // > if triplet
        // notes : ([Note]) contains Note objects which composes the notes

const Triplet = ({ obj }) => {
    const returnValue = obj.notes.map((obj) => {
        return (<Note obj={obj} />);
    });
    return (
        <div style={{ width: "5px", display: "inline" }}>
            <div className="tripletWrapper" style={{ width: "5px", display: "inline" }}>
                {returnValue}
            </div>
        </div>
    );
}
export default Triplet;