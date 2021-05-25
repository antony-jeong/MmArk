import React from 'react';
import LearnLayout from '../pages/LearnLayout';


const LearnNote = ({match, history}) => {
    const pageNum = Number(match.params.pagenum);
    return (
        <LearnLayout gameName = {`LearnNote`} pageNum = {pageNum} history = {history}/>
    );
};


export default LearnNote;
