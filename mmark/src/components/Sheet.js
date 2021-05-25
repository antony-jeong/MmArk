import React, { useState, useEffect } from 'react';
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

const SheetWrapper = styled.div`
    background-image: url(${process.env.PUBLIC_URL + "/musical_symbols_svg/sheet.svg"});
    background-attatchment: fixed;
    background-size: contain;
    position: static;
    align-items: baseline;
    height: 50px;
    margin: 50px 100px 50px 100px;
    zoom: 1;
    `;

const Sheet = ({ dataStructure, className }) => {
    const [soundPlayer, setSoundPlayer] = useState(false);
    const [player, setPlayer] = useState(false);
    useEffect(() => {
        if (!soundPlayer) {
            setSoundPlayer(SoundPlayer());
        } else if (!player) {
            setPlayer(SheetPlayer(soundPlayer));
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
    const data = dataStructure;
    const returnValue = data.map((obj) => {
        switch (obj.objectType) {
            case "c":
                return (<Clef obj={obj} />)
            case "t":
                return (<Time obj={obj} />)
            case "k":
                return (<Key obj={obj} />)
            case "b":
                return (<Barline obj={obj} />)
            case "n":
                return (<Note obj={obj} />)
            case "p":
                return (<Bpm obj={obj} />)
            case "r":
                return (<Triplet obj={obj} />)
            default:
                return (<div>Invalid Object</div>)
        }
    });
    return (
        <div className={`${className}`}>
            <button onClick={player ? player.play : () => {}}>Play</button>
            <button onClick={player ? player.stop : () => {}}>Stop</button>
            <SheetWrapper >
                {returnValue}
            </SheetWrapper>

        </div>
    );
};

export default Sheet;