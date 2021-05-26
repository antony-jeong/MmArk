import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

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
import LearnRhythmData from '../LearnRhythmData';       
import LearnIntervalData from '../LearnNoteData';       //Temporarily import from LearnNoteData
import LearnChordData from '../LearnNoteData';          //because the corresponding json is not written yet
import LearnRoadmapSignData from '../LearnNoteData';    //

const lngs = {
  en: { nativeName: "English" },
  kr: { nativeName: "Korean" }
};

const LearnLayout = ({game, gameName, pageNum, history}) => {
    var data;
    var game_kor;
    switch (gameName) {
        case "LearnRhythm":
            data = LearnRhythmData;
            game_kor = "리듬";
            break;
        case "LearnNote":
            data = LearnNoteData;
            game_kor = "음";
            break;
        case "LearnInterval":
            data = LearnIntervalData;
            game_kor = "음정";
            break;
        case "LearnChord":
            data = LearnChordData;
            game_kor = "코드";
            break;
        case "LearnRoadmapSign":
            data = LearnRoadmapSignData;
            game_kor = "로드맵";
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

    const { t, i18n } = useTranslation();

    return (
        (pageNum >= 1) && (pageNum <= pageEnd)
        ?<div className={`${gameName}`}>
            <span className={`LogoContainer`}>
                <Logo className={`Logo`}isLink={true}/>
                <span className={'GameName'}>{i18n.language === "en" ? game : i18n.language === "kr" ? game_kor : "i18n error"}</span>
            </span>
            <PageNavigator className="PageNavigator" pageNum={pageNum} pageEnd={pageEnd} parentCallback={callback}/>
            <div className={`${gameName}-Page`}>
                <Instruction className="Instruction" inst={i18n.language === "en" ? pageData.inst : (i18n.language === "kr"? pageData.inst_kr : "Internationalization Error")}/>
                <Sheet className = "Sheet" dataStructure={pageData.ds}/>
                <Piano className = "Piano" startNote = "C3" endNote = "B4"/>
            </div>
            <div className={"Language-Select-Learn"}>
                {Object.keys(lngs).map((lng) => (
                <button key={lng} className={i18n.language === lng ? "selected" : "unselected"} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                    {lngs[lng].nativeName}
                </button>
                ))}
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
