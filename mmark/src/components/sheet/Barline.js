import React from 'react';

// objectType: (char) 
        // c - clef
        // t - time
        // k - key
        // b - barline
        // n - note

        // > if barline
        // type: (char) 
            // b - bar line
            // o - repeat open line
            // c - repeat close line
            // d - double bar line
            // t - terminal bar line

const BarlineObj = (className) => {
    return (
        <div>
            {(className) => {
                switch (className) {
                    case "b":
                        return (<div className="bar">Bar</div> )
                    case "o":
                        return (<div className="open">Open</div>)
                    case "c":
                        return (<div className="close">Close</div>)
                    case "d":
                        return (<div className="double">Double</div>)
                    case "t":
                        return (<div className="terminate">Terminate</div>)
                    default:
                        return (<div>Invalid Object Obj</div>)
                }
            }}
        </div>
    );
}


const Barline = (obj) => {
    return (
        <div>
            {(obj) => {
                switch (obj.type) {
                    case "b":
                        return (<BarlineObj className={"bar"} />)
                    case "o":
                        return (<BarlineObj className={"open"} />)
                    case "c":
                        return (<BarlineObj className={"close"} />)
                    case "d":
                        return (<BarlineObj className={"double"} />)
                    case "t":
                        return (<BarlineObj className={"terminate"} />)
                    default:
                        return (<div>Invalid Object</div>)
                }
            }}
        </div>
    );
};

export default Barline;