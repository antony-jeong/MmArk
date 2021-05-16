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
        // height: ([int]) vertical location in sheet; 0 - mi
        // accidental : ([char]) s - sharp, f - flat, n - natural, x - none
        // noteDecoration : (char)
            // s - staccato
            // a - accent
            // t - tenuto
            // f - fermata
            // x - none

const AccidentalObj = ({ type }) => {
    
};

const NoteDecorationObj = ({ type }) => {
    
};

const IndivNoteUpObj = ({ type, height, deco, acc }) => {
    
};

const IndivNoteDownObj = ({ type, height, deco, acc }) => {
    
};

const NoteObj = ({ obj }) => {
    const direction = (obj.height[0] > 3) ? "up" : "down";
    var f = (obj) => {
        switch (obj.length) {
            case 0:
                return (obj.extend ? 1.5 : 1);
            case 1:
                return (obj.extend ? 3 : 2);
            case 2:
                return (obj.extend ? 6 : 4);
            case 3:
                return (obj.extend ? 12 : 8);
            case 4:
                return (obj.extend ? 32 : 16);
            case 5:
                return (obj.extend ? 48 : 32);
            default:
                return (<div>Invalid Object</div>);
        }
    };
    const type = f(obj);
    const objData = [];
    for (var i = 0; i < obj.height.length; i++) {
        const newObj = { height: obj.height[i], deco: obj.noteDecoration[i], acc: obj.accidental[i] };
        objData.push(newObj);
    }
    const returnValue = objData.map((obj) => {
        return (direction === "up" ? <IndivNoteUpObj type={ type } height={ obj.height } deco={ obj.deco } acc={ obj.acc }/> : <IndivNoteDownObj type={ type } height={ obj.height } deco={ obj.deco } acc={ obj.acc }/>);
    });

    return (
        { returnValue }
    );
    
};

const IndivRestObj = ({ length }) => {
    var f = (length) => {
        switch (length) {
            case 1:
                return (<div className={length}>{length}</div>);
            case 1.5:
                return (<div className={length}>{length}</div>);
            case 2:
                return (<div className={length}>{length}</div>);
            case 3:
                return (<div className={length}>{length}</div>);
            case 4:
                return (<div className={length}>{length}</div>);
            case 6:
                return (<div className={length}>{length}</div>);
            case 8:
                return (<div className={length}>{length}</div>);
            case 12:
                return (<div className={length}>{length}</div>);
            case 16:
                return (<div className={length}>{length}</div>);
            case 24:
                return (<div className={length}>{length}</div>);
            case 32:
                return (<div className={length}>{length}</div>);
            case 48:
                return (<div className={length}>{length}</div>);
            default:
                return (<div>Invalid Object</div>);
        }
    };

    return (f(length));
};

const RestObj = ({ obj }) => {
    var f = (obj) => {
        switch (obj.length) {
            case 0:
                return (obj.extend ? 1.5 : 1);
            case 1:
                return (obj.extend ? 3 : 2);
            case 2:
                return (obj.extend ? 6 : 4);
            case 3:
                return (obj.extend ? 12 : 8);
            case 4:
                return (obj.extend ? 32 : 16);
            case 5:
                return (obj.extend ? 48 : 32);
            default:
                return (<div>Invalid Object</div>);
        }
    };
    const length = f(obj);
    const returnValue = <IndivRestObj length={ length }/>;

    return (
        { returnValue }
    );
};

const Note = ({obj}) => {
    return (
        <div>
            {obj.rest ? <RestObj obj={obj} /> : <NoteObj obj={obj}/>}
        </div>
    );
};

export default Note;