import React from 'react';
import PropTypes from 'prop-types';
import Sheet from '../components/Sheet'
import Instruction from '../components/Instruction';
import Keyboard from '../components/Keyboard';
import '../stylesheets/Learn.css';
import PageNavigator from '../components/PageNavigator';
import LearnLayout from '../pages/LearnLayout';

const LearnRoadmapSign = ({match, history}) => {
    const pageNum = Number(match.params.pagenum);
    const gamePage = <LearnRoadmapSignPages pageNum={pageNum} pageEnd={10} history={history}/>;
    const pageEnd = 10;
    return (
        <LearnLayout gameName = {`LearnRoadmapSign`} gamePage = {gamePage} pageNum = {pageNum} pageEnd = {pageEnd} history = {history}/>
    );
};

const LearnRoadmapSignPages = ({pageNum, pageEnd, history}) => {
    return (
        <div className={`LearnRoadmapSign-Page`}>
            <Instruction className ="Instruction">
                This is Page #{pageNum} Instruction.
            </Instruction>
            <Sheet className = "Sheet"/>
            <Keyboard className = "Keyboard"/>
            <PageNavigator className="PageNavigator" gameName = {'LearnRoadmapSign'} pageNum={pageNum} pageEnd={pageEnd} history={history}/>
        </div>
    );
}

LearnRoadmapSignPages.propTypes = {
    pageNum: PropTypes.number.isRequired,
    pageEnd: PropTypes.number.isRequired
};

export default LearnRoadmapSign;