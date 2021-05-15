import React from 'react';
import styled from "styled-components";

import Time from "./sheet/Time";
import Note from "./sheet/Note";
import Key from "./sheet/Key";
import Barline from "./sheet/Barline";
import Clef from "./sheet/Clef";

// dataStructure
    // objectType: (char) 
        // c - clef
        // t - time
        // k - key
        // b - barline
        // n - note

        // > if clef
        // treble: (boolean) true - treble, false - bass
        
        // > if time
        // numerator: (int) up 
        // denominator: (int) down
        
        // > if key
        // key: (int) 0 - c major, num added for sharps

        // > if barline
        // type: (char) 
            // b - bar line
            // o - repeat open line
            // c - repeat close line
            // d - double bar line
            // t - terminal bar line

        // barlineDecoration : (string)
            // ds - dal segno
            // se - segno
            // dc - da capo
            // fi - fine
            // fe - fermata
            // co - coda
            // r1 - repeat 1 start
            // r2 - repear 2 start

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


// const dataStructure = [{objectType: "c", treble: }, {objectType: "t", numerator: "", denominator: ""}, {objectType: "k", key: }, {objectType: "b", type: , barlineDecoration: ,}, {objectType: "n", length: , extend: , rest: , height:, accidental:, triplet:, noteDecoration: ,}]


const SheetWrapper = styled.div`
    background: royalblue;
    opacity: 50%;
    color: white;
    height: 150px;
    `;

const Sheet = (dataStructure, className) => {
    const data = { dataStructure };
    return (
        <div className={`${className}`}>
            <SheetWrapper >
                {data.map((obj) => {
                    switch (obj.objectType) {
                        case "c":
                            return (<Clef obj={obj}/>)
                        case "t":
                            return (<Time obj={obj}/>)
                        case "k":
                            return (<Key obj={obj}/>)
                        case "b":
                            return (<Barline obj={obj}/>)
                        case "n":
                            return (<Note obj={obj}/>)
                        default:
                            return (<div>Invalid Object</div>)
                    }
                })}
            </SheetWrapper>
        </div>
    );
};

export default Sheet;