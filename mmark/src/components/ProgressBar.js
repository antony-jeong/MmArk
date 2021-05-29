import React from 'react';

const ProgressBar = ({cur, end}) => {
    const arr=[];
    var i = 0;
    for(; i<cur; i++){
        arr.push(<span className={`ProgressBefore`} ></span>);
    }
    arr.push(<span className={`ProgressCur`}></span>);
    for(; i<end-1; i++){
        arr.push(<span className={`ProgressNext`}></span>);
    }
    return (
        <div className="ProgressBar">
            {arr}
        </div>
    );
};

export default ProgressBar;