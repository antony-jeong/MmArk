import React from 'react';
import PropTypes from 'prop-types';
import Sheet from '../components/Sheet'
import Instruction from '../components/Instruction';
import Keyboard from '../components/Keyboard';
import '../stylesheets/Learn.css';
import PageNavigator from '../components/PageNavigator';
import LearnLayout from '../pages/LearnLayout';

const LearnInterval = ({match, history}) => {
    const pageNum = Number(match.params.pagenum);
    const gamePage = <LearnIntervalPages pageNum={pageNum} pageEnd={10} history={history}/>;
    const pageEnd = 10;
    return (
        <LearnLayout gameName = {`LearnInterval`} gamePage = {gamePage} pageNum = {pageNum} pageEnd = {pageEnd} history = {history}/>
    );
};

const LearnIntervalPages = ({pageNum, pageEnd, history}) => {
    return (
        <div className={`LearnInterval-Page`}>
            <Instruction className ="Instruction">
                This is Page #{pageNum} Instruction.
            </Instruction>
            <Sheet className = "Sheet"/>
            <Keyboard className = "Keyboard"/>
            <PageNavigator className="PageNavigator" gameName = {'LearnInterval'} pageNum={pageNum} pageEnd={pageEnd} history={history}/>
        </div>
    );
}

LearnIntervalPages.propTypes = {
    pageNum: PropTypes.number.isRequired,
    pageEnd: PropTypes.number.isRequired
};

export default LearnInterval;