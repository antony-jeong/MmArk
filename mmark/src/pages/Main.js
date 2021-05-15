import React from 'react';
import Sheet from "../components/Sheet";

const Main = () => {
    return (
        <div>
            <Sheet className={`Sheet`} dataStructure={ [{objectType: "c", treble: true}, {objectType: "t", numerator: 4, denominator: 4}, {objectType: "k", key: 0}, {objectType: "b", type: "b", barlineDecoration: "none",}]}/>
        </div>
    );
};

export default Main;