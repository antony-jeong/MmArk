import React from 'react';
import GameSelectButton from '../components/GameSelectButton';
import Logo from '../components/Logo';
import { Trans, useTranslation } from 'react-i18next';
import '../stylesheets/Main.css';

const lngs = {
  en: { nativeName: "English" },
  kr: { nativeName: "Korean" }
};

const Main = () => {
  const { t, i18n } = useTranslation();

    return (
      <div className={'Main-Container'}>
        <div className={'Main-Logo-Container'}>
          <Logo className={'Main-Logo'} isLink={false}/>
          <div className={'Learn-Music-by-Games'}>{t("main.slogan")}</div>
          <div className={'Made-by'}>{t("main.madeby")} ∙ <a href="https://github.com/antony-jeong/MmArk" target="_blank">GitHub</a></div>
          <div className={'Language-Select'}>
            {Object.keys(lngs).map((lng) => (
              <button key={lng} className={i18n.language === lng ? "selected" : ""} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                {lngs[lng].nativeName}
              </button>
            ))}
          </div>
        </div>
        <div className={'Main-Button-Container'}>
          <GameSelectButton src={'LearnNote'} name={t("main.name_notes")}>
            <Trans i18nKey="main.desc_notes"/>
          </GameSelectButton>
          <GameSelectButton src={'LearnRhythm'} name={t("main.name_rhythms")}>
            <Trans i18nKey="main.desc_rhythms"/>
          </GameSelectButton>
          <GameSelectButton /*src={'LearnInterval'}*/ name={t("main.name_intervals")}>
            <Trans i18nKey="main.desc_intervals"/>  
          </GameSelectButton>
          <GameSelectButton /*src={'LearnChord'}*/ name={t("main.name_chord")}>
            <Trans i18nKey="main.desc_chord"/>
          </GameSelectButton>
          <GameSelectButton /*src={'LearnRoadmapSign'}*/ name={t("main.name_roadmap")}>
            <Trans i18nKey="main.desc_roadmap"/>  
          </GameSelectButton>
        </div>
      </div>
    );
};

export default Main;