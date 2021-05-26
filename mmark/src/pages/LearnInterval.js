import React from 'react';
import LearnLayout from '../pages/LearnLayout';


const LearnInterval = ({match, history}) => {
    const pageNum = Number(match.params.pagenum);
    return (
        <LearnLayout game = {'Intervals'}gameName = {`LearnInterval`} pageNum = {pageNum} history = {history}/>
    );
};


export default LearnInterval;
