import React from 'react';
import PropTypes from 'prop-types';
import Sheet from '../components/Sheet'
import Instruction from '../components/Instruction';
import Keyboard from '../components/Keyboard';
import '../stylesheets/Learn.css';
import LearnLayout from '../pages/LearnLayout';

const LearnRhythm = ({match, history}) => {
    const pageNum = Number(match.params.pagenum);
    const gamePage = <LearnRhythmPages pageNum={pageNum} pageEnd={10} history={history}/>;
    const pageEnd = 10;
    return (
        <LearnLayout gameName = {`LearnRhythm`} gamePage = {gamePage} pageNum = {pageNum} pageEnd = {pageEnd} history = {history}/>
    );
};

const LearnRhythmPages = ({pageNum}) => {
    return (
        <div className={`LearnRhythm-Page`}>
            <Instruction className ="Instruction">
                This is Page #{pageNum} Instruction.
            </Instruction>
            <Sheet className = "Sheet" dataStructure = {[]}/>
            <Keyboard className = "Keyboard"/>
        </div>
    );
}

LearnRhythmPages.propTypes = {
    pageNum: PropTypes.number.isRequired,
    pageEnd: PropTypes.number.isRequired
};

export default LearnRhythm;