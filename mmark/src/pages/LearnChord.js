import React from 'react';
import PropTypes from 'prop-types';
import Sheet from '../components/Sheet'
import Instruction from '../components/Instruction';
import Keyboard from '../components/Keyboard';
import '../stylesheets/Learn.css';
import PageNavigator from '../components/PageNavigator';
import LearnLayout from '../pages/LearnLayout';

const LearnChord = ({match, history}) => {
    const pageNum = Number(match.params.pagenum);
    const gamePage = <LearnChordPages pageNum={pageNum} pageEnd={10} history={history}/>;
    const pageEnd = 10;
    return (
        <LearnLayout gameName = {`LearnChord`} gamePage = {gamePage} pageNum = {pageNum} pageEnd = {pageEnd} history = {history}/>
    );
};

const LearnChordPages = ({pageNum, pageEnd, history}) => {
    return (
        <div className={`LearnChord-Page`}>
            <Instruction className ="Instruction">
                This is Page #{pageNum} Instruction.
            </Instruction>
            <Sheet className = "Sheet"/>
            <Keyboard className = "Keyboard"/>
            <PageNavigator className="PageNavigator" gameName = {'LearnChord'} pageNum={pageNum} pageEnd={pageEnd} history={history}/>
        </div>
    );
}

LearnChordPages.propTypes = {
    pageNum: PropTypes.number.isRequired,
    pageEnd: PropTypes.number.isRequired
};

export default LearnChord;