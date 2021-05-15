import React from 'react';
import PropTypes from 'prop-types';
import Sheet from '../components/Sheet'
import Instruction from '../components/Instruction';
import Keyboard from '../components/Keyboard';
import '../stylesheets/LearnNote.css';
import PageButton from '../components/PageButton';
import PageNavigator from '../components/PageNavigator';
import Logo from '../components/Logo';
import InvalidPage from '../pages/InvalidPage'


const LearnNotePages = ({className, pageNum, pageEnd, history}) => {
    return (
        <div className={`${className}`}>
            <Instruction className = "LearnNotePages-Instruction">
                This is Page #{pageNum} Instruction.
            </Instruction>
            <Sheet className = "LearnNotePages-Sheet"/>
            <Keyboard className = "LearnNotePages-Keyboard"/>
            <PageNavigator className={'LearnNote-PageNavigator'} chapterName = {'LearnNote'} currentPage={pageNum} pageEnd={pageEnd} history={history}/>
        </div>
    );
}

const LearnNote = ({match, history}) => {
    const pageNum = Number(match.params.pagenum);
    const pageEnd = 10;
    return (
        (pageNum >= 1) && (pageNum <= pageEnd)
        ?<div>
            <Logo className={'LearnNote-Logo'}/>
            <LearnNotePages className={'LearnNotePages'} pageNum={pageNum} pageEnd={10} history={history}/>
            <PageButton text = {'Next'} className = "LearnNote-Next" router = {`/LearnNote/${pageNum+1}`}/>
        </div>
        :
        <InvalidPage />
    );
};

LearnNotePages.propTypes = {
    className: PropTypes.string,
    pageNum: PropTypes.string.isRequired
};

export default LearnNote;