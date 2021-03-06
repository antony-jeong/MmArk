import React from 'react';
import LearnLayout from '../pages/LearnLayout';

const LearnRhythm = ({match, history}) => {
    const pageNum = Number(match.params.pagenum);
    return (
        <LearnLayout game = {'Rhythm'}gameName = {`LearnRhythm`} pageNum = {pageNum} history = {history}/>
    );
};

export default LearnRhythm;