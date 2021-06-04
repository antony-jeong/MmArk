import React, { useState, useEffect, memo } from 'react';
import styled from "styled-components";
import { debounce } from 'lodash';
import { useTranslation } from 'react-i18next';

import "./sheet/StyleSheet.css";

import Time from "./sheet/Time";
import Note from "./sheet/Note";
import Key from "./sheet/Key";
import Barline from "./sheet/Barline";
import Clef from "./sheet/Clef";
import Bpm from "./sheet/Bpm";
import Triplet from "./sheet/Triplet"


import SoundFontPlayerWrapper from "../components/audio-parts/SoundFontPlayerWrapper";
import SheetPlayer from "../components/audio-parts/SheetPlayer";
import "./utils/calcSheetObjectMargin";
import calcSheetObjectMargin from './utils/calcSheetObjectMargin';
import SheetEditControl from './SheetEditControl';

import {ReactComponent as ViewIcon} from "./edit_menu_bar_svg/view.svg";
import {ReactComponent as EditIcon} from "./edit_menu_bar_svg/edit.svg";

import {ReactComponent as Cursor} from "./musical_symbols_svg/cursor.svg";
import {ReactComponent as CursorBig} from "./musical_symbols_svg/cursor_big.svg";

// dataStructure
    // objectType: (char) 
        // c - clef
        // t - time
        // k - key
        // b - barline
        // n - note
        // p - bpm
        // r - triplet

        // > if clef
        // treble: (boolean) true - treble, false - bass
        
        // > if time
        // numerator: (int) up 
        // denominator: (int) down
        
        // > if key
        // key: (int) 0 - c major, num added for sharps

        // > if barline
        // type: (char) 
            // b - bar line
            // o - repeat open line
            // c - repeat close line
            // d - double bar line
            // t - terminal bar line

        // barlineDecoration : (string)
            // ds - dal segno
            // se - segno
            // dc - da capo
            // fi - fine
            // fe - fermata
            // co - coda
            // r1 - repeat 1 start
            // r2 - repear 2 start

        // > if note
        // length: (int) as exponent of 2; 0 - whole note
        // extend: (boolean) true - w/ point
        // rest: (boolean) true - rest note
        // height: ([int]) vertical location in sheet; 0 - mi
        // accidental : ([char]) s - sharp, f - flat, n - natural, x - none
        // noteDecoration : ([char])
            // s - staccato
            // a - accent
            // t - tenuto
            // f - fermata
            // x - none

        // > if bpm
        // bpm : (int) bpm

        // > if triplet
        // notes : ([Note]) contains Note objects which composes the notes


// const dataStructure = [{objectType: "c", treble: }, {objectType: "t", numerator: "", denominator: ""}, {objectType: "k", key: }, {objectType: "b", type: , barlineDecoration: ,}, {objectType: "n", length: , extend: , rest: , height:, accidental:, triplet:, noteDecoration: ,}]

const AlwaysScrollSection = memo(props => {
    const { children } = props;
    return <StyledAlwaysScrollSection>{children}</StyledAlwaysScrollSection>;
  });

const SheetWrapper = styled.div`
    background-image: url(${process.env.PUBLIC_URL + "/musical_symbols_svg/sheet.svg"});
    background-attatchment: fixed;
    background-repeat: repeat no-repeat;
    position: static;
    height: 50px;
    margin: 50px 10px 50px 20px;
    zoom: 1;
    overflow-inline: scroll;
    display: inline-block;
    vertical-align: baseline;
    `;

//      background: rgba(255, 255, 255, 0.4);

const StyledAlwaysScrollSection = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      /* 세로 스크롤 넓이 */
      width: 0px;
  
      /* 가로 스크롤 높이 */
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 6px;
    }
  `;

const Sheet = ({ dataStructure, className, updateDS }) => {
    const { t, i18n } = useTranslation();
    const [cursorIndex, setCursorIndex] = useState(false);
    const propSetCursorIndex = (i) => setCursorIndex(i);
    const [cursorHeight, setCursorHeight] = useState(0);
    const propSetCursorHeight = (i) => setCursorHeight(i);
    const [soundPlayer, setSoundPlayer] = useState(false);
    const [player, setPlayer] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const getState = (playState) => setIsPlaying(playState);
    const [ds, setDs] = useState(false);
    const propSetDs = (newDs) => {
        setDs(newDs);
        if (updateDS) { updateDS(newDs); }
    };
    useEffect(() => {
        setDs([...dataStructure]);
        setCursorIndex(dataStructure.length);
        setCursorHeight(0);
    }, [dataStructure]);
    useEffect(() => {
        if (!soundPlayer) {
            setSoundPlayer(SoundFontPlayerWrapper());
        } else if (!player) {
            setPlayer(SheetPlayer(soundPlayer, changeHighlight, changeTripletHighlight, getState));
        }
    });
    useEffect(() => {
        if (soundPlayer) {
            soundPlayer.init("acoustic_grand_piano");
        }
    }, [soundPlayer]);
    useEffect(() => {
        if (player) {
            player.setSheet(ds);
        }
    }, [player]);
    useEffect( () => {
        if (player) {
            player.stop();
            player.setSheet(ds);
        }
    }, [ds]);
    const [playingIndex, setPlayingIndex] = useState(-1);
    const [playingTripletIndex, setPlayingTripletIndex] = useState(-1);
    const changeHighlight = (index) => setPlayingIndex(index);
    const changeTripletHighlight = (tripletIndex) => setPlayingTripletIndex(tripletIndex);

    const [minMargin, setMinMargin] = useState(500);


    const handleResize = debounce(() => {
        setMinMargin(document.getElementById("top").clientWidth-31);
      }, 500);
    
    useEffect(() => {
        setMinMargin(document.getElementById("top").clientWidth-31);
    }, []);
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return() =>{
            window.removeEventListener("resize", handleResize)
        }

    });
    const [margin, setMargin] = useState(false);
    useEffect(() => {
        if(ds){
            setMargin(calcSheetObjectMargin(ds, minMargin));
        }
    }, [ds, minMargin]);
    //document.getElementById("sheetwrapper").clientWidth
    //document.getElementById("sheetwrapper").clientWidth-2
    const [isBeingEdited, setIsBeingEdited] = useState(false);
    const data = ds || dataStructure;
    var trebled = true;
    const returnValue = data.map((obj, index) => {
        switch (obj.objectType) {
            case "c":
                return (<Clef obj={obj} key={index} margin = {margin ? margin[index] : 0} cursorHeight={cursorIndex-1 === index && isBeingEdited ? cursorHeight : 50} />)
            case "t":
                trebled = obj.treble;
                return (<Time obj={obj} key={index} margin = {margin ? margin[index] : 0} cursorHeight={cursorIndex-1 === index && isBeingEdited  ? cursorHeight : 50} />)
            case "k":
                return (<Key obj={obj} key={index} margin = {margin ? margin[index] : 0} cursorHeight={cursorIndex-1 === index && isBeingEdited  ? cursorHeight : 50} treble={trebled} />)
            case "b":
                return (<Barline obj={obj} key={index} margin = {margin ? margin[index] : 0} cursorHeight={cursorIndex-1 === index && isBeingEdited  ? cursorHeight : 50} />)
            case "n":
                return (<Note obj={obj} key={index} isPlaying={index === playingIndex} margin = {margin ? margin[index] : 0} cursorHeight={cursorIndex-1 === index && isBeingEdited  ? cursorHeight : 50} />)
            case "p":
                return (<Bpm obj={obj} key={index} margin = {margin ? margin[index] : 0} cursorHeight={cursorIndex-1 === index && isBeingEdited  ? cursorHeight : 50} isBeingEdited={isBeingEdited}/>)
            case "r":
                return (<Triplet obj={obj} key={index} isPlaying={index === playingIndex} playingTripletIndex={playingTripletIndex} margin = {margin ? margin[index] : 0} cursorHeight={cursorIndex-1 === index && isBeingEdited  ? cursorHeight : 50} />)
            default:
                return (<div key={index}>Invalid Object</div>)
        }
    });
    return (
        <div id = "top" style = {{overflow: "hidden"}}>
        <div id = "sheet-menu" className={"sheet-menu-bar"}>
            <div className={"sheet-menu-section-left"}>
                <div className={"sheet-audio-button"} onClick={!isPlaying ? (player ? player.play : () => {}) : (player ? player.stop : () => {})}>
                    {!isPlaying
                    ?<div style={{"margin-left": "20px"}}>
                        <svg className={'PlayButton'} width="20" height="23" viewBox="0 0 33 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.5 16.4019C33.5 17.5566 33.5 20.4434 31.5 21.5981L4.5 37.1865C2.5 38.3412 1.98328e-06 36.8979 2.08423e-06 34.5885L3.44702e-06 3.41154C3.54796e-06 1.10214 2.5 -0.341234 4.5 0.813466L31.5 16.4019Z" fill="#977ED7"/>
                        </svg>
                    </div>
                    :<div style={{"margin-left": "20px"}}>
                        <svg className={'StopButton'} width="23" height="23" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="35" height="35" rx="3" fill="#D77E8E"/>
                        </svg>
                    </div>}
                </div>
                {isBeingEdited
                ?<div
                    className={"sheet-mode-button view"}
                    onClick={() => {setIsBeingEdited(false)}}
                >
                    <ViewIcon width={"24px"} fill={"green"}/>
                </div>:<div
                    className={"sheet-mode-button edit"}
                    onClick={() => setIsBeingEdited(true)}
                >
                    <EditIcon width={"24px"} fill={"#7147CB"}/>
                </div>}
                <SheetEditControl
                  isBeingEdited={isBeingEdited}
                  ds={ds}
                  setDs={propSetDs}
                  idx={cursorIndex}
                  setIdx={propSetCursorIndex}
                  h={cursorHeight}
                  setH={propSetCursorHeight}
                />
            </div>
            <div className={"sheet-reset-button"} onClick={() => {setDs(dataStructure);setCursorIndex(dataStructure.length);setCursorHeight(0);}}>
                {t("sheet.reset")}
            </div>
        </div>
        <div className={`${className}`} id="sheet" height="150px"  style={{display: "flex", "overflow-x":"auto", "overflow-y":"visible", "justify-content":"center", "white-space":"nowrap", "-webkit-appearance": "none"}}>
            <AlwaysScrollSection>
            <div id="sheetwrapperwrapper" style={{ "justify-content":"start"} }>
                <SheetWrapper id="sheetwrapper" style={ data.length === 0 || (data.length < 3 && data[0].objectType==="p" ) ? {width:"100px"} : {}}>
                    <div className="starting" style = {{width: "1px", display: "inline" }}>
                        <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/starting.svg"} style = {{position: "relative", top: "-17px"}}  height = "81px"/>
                    </div> 
                    <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225 * (cursorHeight + 1) + "px", left: "-1px"}}>
                        <div>
                            {cursorIndex ===0 && isBeingEdited? <Cursor className="blink_me" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
                        </div>
                    </div>
                    <div style = {{width: "0px", display: "inline-flex", position: "relative", top : -19.5 - 6.1225  + "px", left: "-1px"}}>
                        <div>
                            {cursorIndex ===0 && isBeingEdited? <CursorBig className="cursor" style = {{display: "inline-flex", position: "relative"}} height="60px"/> : <div></div>}
                        </div>
                    </div>
                    {returnValue}
                </SheetWrapper>
            </div>
            </AlwaysScrollSection>
        </div>
        </div>
    );
};

export default Sheet;