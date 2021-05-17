import React from 'react';
import PropTypes from 'prop-types';
import Sheet from '../components/Sheet'
import Instruction from '../components/Instruction';
import Keyboard from '../components/Keyboard';
import '../stylesheets/Learn.css';
import PageNavigator from '../components/PageNavigator';
import LearnLayout from '../pages/LearnLayout';

const LearnNote = ({match, history}) => {
    const pageNum = Number(match.params.pagenum);
    const gamePage = <LearnNotePages pageNum={pageNum} pageEnd={10} history={history}/>;
    const pageEnd = 10;
    return (
        <LearnLayout gameName = {`LearnNote`} gamePage = {gamePage} pageNum = {pageNum} pageEnd = {pageEnd} history = {history}/>
    );
};

const LearnNotePages = ({pageNum, pageEnd, history}) => {
    return (
        <div className={`LearnNote-Page`}>
            <Instruction className ="Instruction">
                This is Page #{pageNum} Instruction.
            </Instruction>
            <Sheet className = "Sheet" dataStructure = {[]} />
            <Keyboard className = "Keyboard"/>
            <PageNavigator className="PageNavigator" gameName = {'LearnNote'} pageNum={pageNum} pageEnd={pageEnd} history={history}/>
        </div>
    );
}

LearnNotePages.propTypes = {
    pageNum: PropTypes.number.isRequired,
    pageEnd: PropTypes.number.isRequired
};

export default LearnNote;