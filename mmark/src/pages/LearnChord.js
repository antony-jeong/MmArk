import React from 'react';
import PropTypes from 'prop-types';
import Sheet from '../components/Sheet'
import Instruction from '../components/Instruction';
import Keyboard from '../components/Keyboard';
import '../stylesheets/Learn.css';
import LearnLayout from '../pages/LearnLayout';

const LearnChord = ({match, history}) => {
    const pageNum = Number(match.params.pagenum);
    const gamePage = <LearnChordPages pageNum={pageNum} pageEnd={10} history={history}/>;
    const pageEnd = 10;
    return (
        <LearnLayout gameName = {`LearnChord`} gamePage = {gamePage} pageNum = {pageNum} pageEnd = {pageEnd} history = {history}/>
    );
};

const LearnChordPages = ({pageNum}) => {
    return (
        <div className={`LearnChord-Page`}>
            <Instruction className ="Instruction">
                This is Page #{pageNum} Instruction.
            </Instruction>
            <Sheet className = "Sheet" dataStructure = {[]}/>
            <Keyboard className = "Keyboard"/>
        </div>
    );
}

LearnChordPages.propTypes = {
    pageNum: PropTypes.number.isRequired,
    pageEnd: PropTypes.number.isRequired
};

export default LearnChord;