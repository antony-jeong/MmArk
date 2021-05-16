import React from 'react';
import GameSelectButton from '../components/GameSelectButton';
import Logo from '../components/Logo';
import '../stylesheets/Main.css';

const Main = () => {
    return (
      <div className={'Main-Container'}>
        <Logo className={'Main-Logo'} isLink={false}/>
        <GameSelectButton src={'LearnNote'} name={'Notes'}>
          Description about note
        </GameSelectButton>
        <GameSelectButton src={'LearnRhythm'} name={'Rhythm'}>
          Description about note
        </GameSelectButton>
        <GameSelectButton src={'LearnInterval'} name={'Intervals'}>
          Description about note
        </GameSelectButton>
        <GameSelectButton src={'LearnChord'} name={'Chords'}>
          Description about note
        </GameSelectButton>
        <GameSelectButton src={'LearnRoadmapSign'} name={'RoadmapSigns'}>
          Description about note
        </GameSelectButton>
      </div>
    );
};

export default Main;