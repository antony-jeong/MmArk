import React, { useState, useEffect, memo } from 'react';
import styled from "styled-components";

import "./sheet/StyleSheet.css";

import Time from "./sheet/Time";
import Note from "./sheet/Note";
import Key from "./sheet/Key";
import Barline from "./sheet/Barline";
import Clef from "./sheet/Clef";
import Bpm from "./sheet/Bpm";
import Triplet from "./sheet/Triplet"


import SoundPlayer from "../components/audio-parts/SoundPlayer";
import SheetPlayer from "../components/audio-parts/SheetPlayer";
import "./utils/calcSheetObjectMargin";
import calcSheetObjectMargin from './utils/calcSheetObjectMargin';

import {ReactComponent as Cursor} from "./musical_symbols_svg/cursor.svg";

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
    background-size: contain;
    position: static;
    align-items: baseline;
    height: 50px;
    margin: 50px 10px 50px 20px;
    zoom: 1;
    overflow-inline: scroll;
    display: inline-block;
    width: 1100px;
    `;

//      background: rgba(255, 255, 255, 0.4);

const StyledAlwaysScrollSection = styled.div`
    overflow: scroll;
    &::-webkit-scrollbar {
      /* 세로 스크롤 넓이 */
      width: 0px;
  
      /* 가로 스크롤 높이 */
      height: 8px;
  
      border-radius: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 6px;
    }
  `;

const Sheet = ({ dataStructure, className, cursorIndex, cursorHeight, isBeingEdited }) => {
    const [soundPlayer, setSoundPlayer] = useState(false);
    const [player, setPlayer] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const getState = (playState) => {
        setIsPlaying(playState);
    };
    useEffect(() => {
        if (!soundPlayer) {
            setSoundPlayer(SoundPlayer());
        } else if (!player) {
            setPlayer(SheetPlayer(soundPlayer, changeHighlight, changeTripletHighlight, getState));
        }
    });
    useEffect(() => {
        if (soundPlayer) {
            soundPlayer.setInstrument("acoustic_grand_piano");
        }
    }, [soundPlayer]);
    useEffect(() => {
        if (player) {
            player.setSheet(dataStructure);
        }
    }, [player]);
    useEffect( () => {
        if (player) {
            player.setSheet(dataStructure);
        }
    }, [dataStructure]);

    const [playingIndex, setPlayingIndex] = useState(-1);
    const [playingTripletIndex, setPlayingTripletIndex] = useState(-1);
    const changeHighlight = (index) => setPlayingIndex(index);
    const changeTripletHighlight = (tripletIndex) => setPlayingTripletIndex(tripletIndex);

    const [margin, setMargin] = useState(false);
    useEffect(() => {
        setMargin(calcSheetObjectMargin(dataStructure, 1095));
    }, [dataStructure]);
    //document.getElementById("sheetwrapper").clientWidth-2
    const data = dataStructure;
    const returnValue = data.map((obj, index) => {
        switch (obj.objectType) {
            case "c":
                return (<Clef obj={obj} key={index} margin = {margin ? margin[index] : 0} cursorHeight={cursorIndex === index && isBeingEdited ? cursorHeight : 50} />)
            case "t":
                return (<Time obj={obj} key={index} margin = {margin ? margin[index] : 0} cursorHeight={cursorIndex === index && isBeingEdited  ? cursorHeight : 50} />)
            case "k":
                return (<Key obj={obj} key={index} margin = {margin ? margin[index] : 0} cursorHeight={cursorIndex === index && isBeingEdited  ? cursorHeight : 50} />)
            case "b":
                return (<Barline obj={obj} key={index} margin = {margin ? margin[index] : 0} cursorHeight={cursorIndex === index && isBeingEdited  ? cursorHeight : 50} />)
            case "n":
                return (<Note obj={obj} key={index} isPlaying={index === playingIndex} margin = {margin ? margin[index] : 0} ccursorHeight={cursorIndex === index && isBeingEdited  ? cursorHeight : 50} />)
            case "p":
                return (<Bpm obj={obj} key={index} margin = {margin ? margin[index] : 0} cursorHeight={cursorIndex === index  && isBeingEdited ? cursorHeight : 50} />)
            case "r":
                return (<Triplet obj={obj} key={index} isPlaying={index === playingIndex} playingTripletIndex={playingTripletIndex} margin = {margin ? margin[index] : 0} cursorHeight={cursorIndex === index && isBeingEdited  ? cursorHeight : 50} />)
            default:
                return (<div key={index}>Invalid Object</div>)
        }
    });
    return (
        <div className={`${className}`} style={{"overflow-x":"scroll", "overflow-y":"hidden", "justify-content":"center", "white-space":"nowrap", "-webkit-appearance": "none"}}>
                {!isPlaying
                ?<div style={{display:"inline"}}>
                    <svg className={'PlayButton'} onClick={player ? player.play : () => {}} width="33" height="38" viewBox="0 0 33 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.5 16.4019C33.5 17.5566 33.5 20.4434 31.5 21.5981L4.5 37.1865C2.5 38.3412 1.98328e-06 36.8979 2.08423e-06 34.5885L3.44702e-06 3.41154C3.54796e-06 1.10214 2.5 -0.341234 4.5 0.813466L31.5 16.4019Z" fill="#977ED7"/>
                    </svg>
                </div>
                :<div style={{display:"inline"}}>
                    <svg className={'StopButton'}onClick={player ? player.stop : () => {}} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="35" height="35" rx="3" fill="#D77E8E"/>
                    </svg>
                </div>}
            <AlwaysScrollSection>
            <div style={{ "justify-content":"start"}}>
                <SheetWrapper >
                    {returnValue}
                </SheetWrapper>
            </div>
            </AlwaysScrollSection>
        </div>
    );
};

export default Sheet;