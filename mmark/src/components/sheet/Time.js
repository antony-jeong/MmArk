import React from 'react';

// objectType: (char) 
        // c - clef
        // t - time
        // k - key
        // b - barline
        // n - note

        // > if time
        // numerator: (int) up 
        // denominator: (int) down

const TimeObj = ({type, num}) => {

    return (
        <div>
            {console.log(num)}
            {type === "nu" ? <div className="nu">{num}</div> : <div className="de">{num}</div>}
        </div>        
    )
}

const Time = ({obj}) => {

    return (
        <div>
            { <TimeObj type="nu" num = {obj.numerator}/>}
            { <TimeObj type="de" num = {obj.denominator}/>}
        </div>
    );
};

export default Time;