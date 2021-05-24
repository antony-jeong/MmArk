import React from 'react';
import PropTypes from 'prop-types';
import Piano from "../components/Piano";
import Sheet from '../components/Sheet'
import Instruction from '../components/Instruction';
import '../stylesheets/Learn.css';
import LearnLayout from '../pages/LearnLayout';
import data from '../Note.json';


const LearnNote = ({match, history}) => {
    const pageNum = Number(match.params.pagenum);
    const pageEnd = data.length;
    const gamePage = <LearnNotePages pageNum={pageNum} pageEnd={pageEnd} history={history}/>;
    return (
        <LearnLayout gameName = {`LearnNote`} gamePage = {gamePage} pageNum = {pageNum} pageEnd = {pageEnd} history = {history}/>
    );
};

const LearnNotePages = ({pageNum}) => {
    const pageData = data[pageNum-1];
    return (
        <div className={`LearnNote-Page`}>
            <Instruction className="Instruction">
                <div>
                    {pageData.inst}
                </div>
            </Instruction>
            <Sheet className = "Sheet" dataStructure={pageData.ds}/>
            <Piano className = "Piano" startNote = "C3" endNote = "B4"/>
        </div>
    );
}

LearnNotePages.propTypes = {
    pageNum: PropTypes.number.isRequired,
    pageEnd: PropTypes.number.isRequired
};

export default LearnNote;
