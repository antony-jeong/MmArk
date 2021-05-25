import React from 'react';
import GameSelectButton from '../components/GameSelectButton';
import Logo from '../components/Logo';
import '../stylesheets/Main.css';


const Main = () => {
    return (
      <div className={'Main-Container'}>
        <div className={'Main-Logo-Container'}>
          <Logo className={'Main-Logo'} isLink={false}/>
          <div className={'Learn-Music-by-Games'}>Learn Music by Games</div>
          <div className={'Made-by'}>Made by Team MmArk ∙ <a href="https://github.com/antony-jeong/MmArk" target="_blank">GitHub</a></div>
        </div>
        <div className={'Main-Button-Container'}>
          <GameSelectButton src={'LearnNote'} name={'Notes'}>
            Can you guess <br/> this note?
          </GameSelectButton>
          <GameSelectButton src={'LearnRhythm'} name={'Rhythm'}>
            Play it to the beat!
          </GameSelectButton>
          <GameSelectButton /*src={'LearnInterval'}*/ name={'Intervals'}>
            Learn the interval <br/>
            between the two notes
          </GameSelectButton>
          <GameSelectButton /*src={'LearnChord'}*/ name={'Chords'}>
            Much richer fun of music
          </GameSelectButton>
          <GameSelectButton /*src={'LearnRoadmapSign'}*/ name={'Roadmap Signs'}>
            Where should we go? <br/> Find a way!
          </GameSelectButton>
        </div>
      </div>
    );
};

export default Main;