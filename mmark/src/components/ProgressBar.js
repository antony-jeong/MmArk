import React from 'react';

const ProgressBar = ({cur, end, onClick, isComplete}) => {
    const arr=[];
    var i = 0;
    for(; i<cur-1; i++){
        arr.push(<span className={`ProgressBefore`} ></span>);
    }
    arr.push(<span className={`ProgressCur`}></span>);
    for(; i<end-1; i++){
        arr.push(<span className={`ProgressNext`}></span>);
    }
    return (
        <div className="progress-bar-wrapper-wrapper">
            <div className="ProgressBarWrapper" onClick={onClick}>
                <div className="ProgressBar">
                    {(cur > 0) ? arr : <div/>}
                </div>
                <div className="ProgressBarText">{isComplete?'Complete':'Next'}</div>
            </div>
        </div>
    );
};

export default ProgressBar;