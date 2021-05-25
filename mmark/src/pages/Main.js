import React from 'react';
import GameSelectButton from '../components/GameSelectButton';
import Logo from '../components/Logo';
import Parser from '../components/Parser'
import '../stylesheets/Main.css';

const Main = () => {
    return (
      // <div className={'Main-Container'}>
      //   <div className={'Main-Logo-Container'}>
      //     <Logo className={'Main-Logo'} isLink={false}/>
      //     <div className={'Learn-Music-by-Games'}>Learn Music by Games</div>
      //     <div className={'Made-by'}>Made by Team MmArk ∙ <a href="https://github.com/antony-jeong/MmArk" target="_blank">GitHub</a></div>
      //   </div>
      //   <div className={'Main-Button-Container'}>
      //     <GameSelectButton src={'LearnNote'} name={'Notes'}>
      //       Description about Notes <br/>
      //       Description
      //     </GameSelectButton>
      //     <GameSelectButton src={'LearnRhythm'} name={'Rhythm'}>
      //       Rhythm <br/>
      //       Description about Rhythm
      //     </GameSelectButton>
      //     <GameSelectButton src={'LearnInterval'} name={'Intervals'}>
      //       Description Intervals <br/>
      //       Description about Intervals
      //     </GameSelectButton>
      //     <GameSelectButton src={'LearnChord'} name={'Chords'}>
      //       Description about Chords <br/>
      //       Description about
      //     </GameSelectButton>
      //     <GameSelectButton src={'LearnRoadmapSign'} name={'Roadmap Signs'}>
      //       Description about <br/> Roadmap Signs
      //     </GameSelectButton>
      //   </div>
      // </div>
      <Parser desc="abc<note>do<it>lower<hi>My</hi></it></note>abcdd<highlight>hi<hi>Ma</hi>aa</highlight>"></Parser>
    );
};

export default Main;