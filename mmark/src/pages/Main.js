import React from 'react';
import Sheet from "../components/Sheet";

const Main = () => {
    return (
        <div>
            <Sheet className={`Sheet`} dataStructure={ [{objectType: "p", bpm: 120}, {objectType: "c", treble: true}, {objectType: "t", numerator: 4, denominator: 4}, {objectType: "k", key: 0}, {objectType: "b", type: "b", barlineDecoration: "none",}, {objectType:"n", length:1, extend: true, rest: false, height: [3], accidental: ["s"], noteDecoration: ["s"]}, {objectType:"r", notes:[{objectType:"n", length:2, extend: true, rest: false, height: [1], accidental: ["f"], noteDecoration: ["f"]}]}]}/>
        </div>
    );
};

export default Main;