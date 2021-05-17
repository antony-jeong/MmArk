import React from 'react';
import PropTypes from 'prop-types';
import Piano from "../components/Piano";
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
            <Instruction className="Instruction">
                <div>
                    This is Page #{pageNum} Instruction. This is Page #{pageNum} Instruction. This is Page #{pageNum} Instruction.
                </div>
            </Instruction>

            <Sheet className = "Sheet" dataStructure={[{objectType: "p", bpm: 120}, {objectType: "c", treble: true}, {objectType: "t", numerator: 4, denominator: 4}, {objectType: "k", key: 0}, {objectType: "b", type: "b", barlineDecoration: "none",}, {objectType:"n", length:1, extend: true, rest: false, height: [3], accidental: ["s"], noteDecoration: ["s"]}, {objectType:"n", length:1, extend: true, rest: true}, {objectType:"r", notes:[{objectType:"n", length:2, extend: true, rest: false, height: [1], accidental: ["f"], noteDecoration: ["f"]}]}]}/>
            <Piano className = "Piano" startNote = "C3" endNote = "B4"/>

            <PageNavigator className="PageNavigator" gameName = {'LearnNote'} pageNum={pageNum} pageEnd={pageEnd} history={history}/>
        </div>
    );
}

LearnNotePages.propTypes = {
    pageNum: PropTypes.number.isRequired,
    pageEnd: PropTypes.number.isRequired
};

export default LearnNote;