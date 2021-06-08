import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';
import PageButton from '../components/PageButton';
import Logo from '../components/Logo';
import InvalidPage from '../pages/InvalidPage';
import PageNavigator from '../components/PageNavigator';
import '../stylesheets/Learn.css';

import PianoInstance from "../components/PianoInstance";
import Sheet from '../components/Sheet'
import ProgressBar from '../components/ProgressBar';
import Instruction from '../components/Instruction';

import LearnNoteData from '../LearnNoteData';
import LearnRhythmData from '../LearnRhythmData';       
import LearnIntervalData from '../LearnIntervalData';    
import LearnChordData from '../LearnChordData';          //because the corresponding json is not written yet
import LearnRoadmapSignData from '../LearnRoadmapSignData';    //
import Checker from '../Checker';



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

    const update = () => {

        const removeUpdate = () => {
            if (document.querySelector('.Instruction') && document.querySelector('.Sheet')){
                document.querySelector('.Instruction').classList.remove('updated');
                document.querySelector('.sheet-top-wrapper').classList.remove('updated');
                document.querySelector('.ProgressBarWrapper').classList.remove('updated');
                document.querySelector('.ProgressBarWrapper').classList.remove('Wrong');
            }
        }

        document.querySelector('.Instruction').classList.add('updated');
        document.querySelector('.sheet-top-wrapper').classList.add('updated');
        document.querySelector('.ProgressBarWrapper').classList.add('updated');
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
            if (document.querySelector('.ProgressBarWrapper'))
                document.querySelector('.ProgressBarWrapper').classList.remove('Next');
        }
        setPageNum(newPageNum);
        history.push(`/${gameName}/${newPageNum}`);
    }

    const handleNext = () => {
        if (pageNum < pageEnd){
            if (document.querySelector('.ProgressBarWrapper').classList.contains('Next'))
                callback(pageNum + 1);
        }else{
            history.push(`/`);
        }
    }

    const { t, i18n } = useTranslation();
    const [slicedInput, setSlicedInput] = useState([" "]);
    const [inputArr, setInputArr] = useState([" "]);
    const addPlayHistory = (note) => {
        document.querySelector('.ProgressBarWrapper').classList.remove('updated');
        document.querySelector('.ProgressBarWrapper').classList.remove('started');
        document.querySelector('.ProgressBarWrapper').classList.remove('Wrong');
        setInputArr(slicedInput.concat([note]));
        return;
    }

    var [progressCur, setProgressCur] = useState(0);
    var progressEnd = pageData.inputMode==='text'? 1 : pageData.checkAnswer[0].length;
    
    const updateProgress = (newProgressCur) => {
        setSlicedInput(inputArr.slice(inputArr.length - newProgressCur));
        if (progressCur===newProgressCur) setProgressCur(0);
        setTimeout(setProgressCur, 10, newProgressCur);
        if (newProgressCur===progressEnd){
            document.querySelector('.ProgressBarWrapper').classList.add('Next');
            document.querySelector('.InputHistory').classList.add('Hide');
        };
        return;
    }

    useEffect(()=>{
        updateProgress(Checker({type: pageData.checkType, input: inputArr, answer: pageData.checkAnswer}));
    }, [inputArr]);

    useEffect(()=>{
        setInputArr([" "]);
        document.querySelector('.ProgressBarWrapper').classList.add('started');
        document.querySelector('.ProgressBarWrapper').classList.remove('Next');
        document.querySelector('.InputHistory').classList.remove('Hide');
    }, [pageNum]);

    const addText = (str) => {
        setInputArr(inputArr.concat([str]));
        return;
    }

    const handleOnClick = () => {
        document.querySelector('.ProgressBarWrapper').classList.remove('Wrong');
        document.querySelector('.ProgressBarWrapper').classList.remove('started');
        let inputWrapper = document.getElementById("textInput");
        addText(inputWrapper.value.toString());
        inputWrapper.value = "";
    }

    const [focusNow, setFocusNow] = useState("o");  // o for outside, p for piano, s for sheet, n for navigator, i for textInput
    const genSetFocusNow = (f) => {
        return () => {
            setFocusNow(f);
        };
    };

    const inputSubject = () => {
        switch (pageData.inputMode) {
            case ("text"):
                return (<div className="textInputWrapper" onClick={genSetFocusNow("i")}>
                    <input type="text" id="textInput" autoComplete="off" onKeyPress={(e)=>{if (e.key==='Enter') handleOnClick()}}/>
                    <button type="submit" id="textButton" onClick={handleOnClick}>{t("learn.submit")}</button>
                </div>);
            case ("oneKey"):
                return (<PianoInstance className="Piano" startNote="C3" endNote="C5" addPlayHistory={addPlayHistory} inputMode={pageData.inputMode} focusNow={focusNow} getFocusNow={genSetFocusNow("p")} />);
            case ("whiteKeys"):
                return (<PianoInstance className="Piano" startNote="C3" endNote="C5" addPlayHistory={addPlayHistory} inputMode={pageData.inputMode} focusNow={focusNow} getFocusNow={genSetFocusNow("p")} />);
            case ("allKeys"):
                return (<PianoInstance className="Piano" startNote="C3" endNote="C5" addPlayHistory={addPlayHistory} inputMode={pageData.inputMode} focusNow={focusNow} getFocusNow={genSetFocusNow("p")} />);
            default:
                return (<div>inputMode Error</div>)
        }
    }

    return (
        (pageNum >= 1) && (pageNum <= pageEnd)
        ?<div className={'LearnLayout'}>
            <span className={`LogoContainer`}>
                <Logo className={`Logo`}isLink={true}/>
                <span className={'GameName'}>{i18n.language === "en" ? game : i18n.language === "kr" ? game_kor : "i18n error"}</span>
            </span>
            <PageNavigator className="PageNavigator" pageNum={pageNum} pageEnd={pageEnd} parentCallback={callback} getFocusNow={genSetFocusNow("n")} />
            <div className={`LearnPage`}>
                <Instruction className="Instruction" inst={i18n.language === "en" ? pageData.inst : (i18n.language === "kr"? pageData.inst_kr : "Internationalization Error")}/>
                <ProgressBar cur={progressCur} end={progressEnd} onClick={handleNext}/>
                <div className="InputHistory">{slicedInput.map((item)=>{return <span>{item}</span>})}</div>
                <Sheet dataStructure={pageData.ds} focusNow={focusNow} getFocusNow={genSetFocusNow("s")} viewMode={"learn"} />
                {inputSubject()}
            </div>
            <div className={"Language-Select-Learn"}>
                {Object.keys(lngs).map((lng) => (
                <button key={lng} className={i18n.language === lng ? "selected" : "unselected"} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                    {lngs[lng].nativeName}
                </button>
                ))}
            </div>
        </div>
        :
        <InvalidPage history={history} />
    );
};

LearnLayout.propTypes = {
    gameName: PropTypes.string.isRequired,
    gamePage: PropTypes.node.isRequired,
    pageNum: PropTypes.number.isRequired,
    history: PropTypes.object.isRequired
};

export default LearnLayout;
