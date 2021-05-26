import React from 'react';
import LearnLayout from '../pages/LearnLayout';


const LearnRoadmapSign = ({match, history}) => {
    const pageNum = Number(match.params.pagenum);
    return (
        <LearnLayout game = {'RoadmapSigns'}gameName = {`LearnRoadmapSign`} pageNum = {pageNum} history = {history}/>
    );
};


export default LearnRoadmapSign;
