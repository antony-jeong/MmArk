import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PageButton from '../components/PageButton';
import Logo from '../components/Logo';
import InvalidPage from '../pages/InvalidPage';
import PageNavigator from '../components/PageNavigator';
import '../stylesheets/Learn.css';

import Piano from "../components/Piano";
import Sheet from '../components/Sheet'
import Instruction from '../components/Instruction';

import LearnNoteData from '../LearnNoteData';
import LearnRhythmData from '../LearnNoteData';         //Temporarily import from LearnNoteData
import LearnIntervalData from '../LearnNoteData';       //because the corresponding json is not written yet
import LearnChordData from '../LearnNoteData';          //
import LearnRoadmapSignData from '../LearnNoteData';    //


const LearnLayout = ({gameName, pageNum, history}) => {
    var data;
    switch (gameName) {
        case "LearnRhythm":
            data = LearnRhythmData;
            break;
        case "LearnNote":
            data = LearnNoteData;
            break;
        case "LearnInterval":
            data = LearnIntervalData;
            break;
        case "LearnChord":
            data = LearnChordData;
            break;
        case "LearnRoadmapSign":
            data = LearnRoadmapSignData;
            break;
   
        default:
            break;
    }
    var pageData = data[pageNum-1];
    var pageEnd = data.length
    var setPageNum;
    [pageNum, setPageNum] = useState(pageNum);
    var updateTimer;
    const [NextShow, setNextShow] = useState(pageNum!==pageEnd);

    const update = () => {

        const removeUpdate = () => {
            if (document.querySelector('.Instruction') && document.querySelector('.Sheet')){
                document.querySelector('.Instruction').classList.remove('updated');
                document.querySelector('.Sheet').classList.remove('updated');
            }
        }

        document.querySelector('.Instruction').classList.add('updated');
        document.querySelector('.Sheet').classList.add('updated');
        updateTimer = setTimeout(removeUpdate, 1000);
    }

    const callback = (newPageNum) => {
        if (newPageNum < 1){
            newPageNum = 1;
        } else if (newPageNum > pageEnd){
            newPageNum = pageEnd;
        } else if ((newPageNum >= 1) && (newPageNum <= pageEnd)){
            newPageNum = newPageNum; 
        } else {
            newPageNum = pageNum;
        }
        if (pageNum !== newPageNum){
            clearTimeout(updateTimer);
            update();
            document.querySelector('.Next').classList.remove('Pass');
        }
        setPageNum(newPageNum);
        history.push(`/${gameName}/${newPageNum}`);
        setNextShow(newPageNum!==pageEnd);
    }

    const handleNext = () => {
        let notPassTimer = undefined;
        if (document.querySelector('.Next').classList.contains('Pass'))
            callback(pageNum + 1);
        else {
            clearTimeout(notPassTimer);
            document.querySelector('.Next').classList.add('NotPass');
            notPassTimer = setTimeout(removeNotPass, 300);
        }
    }

    const removeNotPass = () => {
        document.querySelector('.Next').classList.remove('NotPass');
    }

    return (
        (pageNum >= 1) && (pageNum <= pageEnd)
        ?<div className={`${gameName}`}>
            <Logo className={`Logo`} isLink={true}/>
            <PageNavigator className="PageNavigator" pageNum={pageNum} pageEnd={pageEnd} parentCallback={callback}/>
            <div className={`${gameName}-Page`}>
                <Instruction className="Instruction" inst={pageData.inst}/>
                <Sheet className = "Sheet" dataStructure={pageData.ds}/>
                <Piano className = "Piano" startNote = "C3" endNote = "B4"/>
            </div>
            <PageButton text = {'Next'} className = {`Next`} onClick={handleNext} show={NextShow}/>
        </div>
        :
        <InvalidPage history={history} />
    );
};

LearnLayout.propTypes = {
    gameName: PropTypes.string.isRequired,
    gamePage: PropTypes.node.isRequired,
    pageNum: PropTypes.number.isRequired,
    pageEnd: PropTypes.number.isRequired,
    history: PropTypes.object.isRequired
};

export default LearnLayout;
