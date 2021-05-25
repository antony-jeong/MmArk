import React from 'react';
import LearnLayout from '../pages/LearnLayout';


const LearnChord = ({match, history}) => {
    const pageNum = Number(match.params.pagenum);
    return (
        <LearnLayout game = {'Chords'} gameName = {`LearnChord`} pageNum = {pageNum} history = {history}/>
    );
};


export default LearnChord;
