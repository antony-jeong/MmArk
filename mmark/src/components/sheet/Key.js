import React from 'react';

// objectType: (char) 
        // c - clef
        // t - time
        // k - key
        // b - barline
        // n - note

        // > if key
        // key: (int) 0 - c major, num added for sharps

const KeyObj = (className) => {
    return (
        <div>
            {(className) => {
                switch (className) {
                    case "s-1":
                        return (<div className="s-1">s-1</div> )
                    case "s-2":
                        return (<div className="s-2">s-2</div>)
                    case "s-3":
                        return (<div className="s-3">s-3</div>)
                    case "s-4":
                        return (<div className="s-4">s-4</div>)
                    case "s-5":
                        return (<div className="s-5">s-5</div>)
                    case "s-6":
                        return (<div className="s-6">s-6</div> )
                    case "s-7":
                        return (<div className="s-7">s-7</div>)
                    case "0":
                        return (<div className="0">0</div>)
                    case "f-1":
                        return (<div className="f-1">f-1</div> )
                    case "f-2":
                        return (<div className="f-2">f-2</div>)
                    case "f-3":
                        return (<div className="f-3">f-3</div>)
                    case "f-4":
                        return (<div className="f-4">f-4</div>)
                    case "f-5":
                        return (<div className="f-5">f-5</div>)
                    case "f-6":
                        return (<div className="f-6">f-6</div> )
                    case "f-7":
                        return (<div className="f-7">f-7</div>)
                    default:
                        return (<div>Invalid Object Obj</div>)
                }
            }}
        </div>
    );
};

const Key = (obj) => {
    return (
        <div>
            <KeyObj className={obj.key > 0 ? `s-${obj.key}` : obj.key < 0 ? `f${obj.key}`: "0"}/>
        </div>
    );
};

export default Key;