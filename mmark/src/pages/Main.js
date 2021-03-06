import React, { useEffect, useState } from 'react';
import GameSelectButton from '../components/GameSelectButton';
import LoginNav from "../components/LoginNav";
import Logo from '../components/Logo';
import { Trans, useTranslation } from 'react-i18next';
import Cookies from 'universal-cookie';
import { withCookies, useCookies } from 'react-cookie';
import {BrowserRouter, Link} from 'react-router-dom';
import '../stylesheets/Main.css';
import Login from './Login';
import EmbeddedLogin from '../components/EmbeddedLogin';
import LanguageSelectButton from '../components/LanguageSelectButton';


const Main = () => {
  const { t, i18n } = useTranslation();
  const [Cookie, setCookie, removeCookie] = useCookies(['token', 'name', 'language']);
  const [isLoggedIn, setIsLoggedIn] = useState(Cookie.token !== undefined);
  const cookies = new Cookies();
  const [language, setLanguage] = useState(cookies.get('language')?cookies.get('language'):'en');
  useEffect(()=>{
      i18n.changeLanguage(language);
      cookies.set('language', language, { path: '/' });
  }, [language]);

    return (
      <div className={'Main-Container'}>
        <div className={'Main-Logo-Container'}>
          <Logo className={'Main-Logo'} isLink={false}/>
          <div className={'Learn-Music-by-Games'}>{t("main.slogan")}</div>
          <EmbeddedLogin/>
          <GameSelectButton src={"Community"} name={t("main.name_community")}>
            <Trans i18nKey="main.desc_community"/>
          </GameSelectButton>
          <LanguageSelectButton className={"Language-Select-Dark"}/>
          <div className={'Made-by'}>{t("main.madeby")} ∙ <a href="https://github.com/antony-jeong/MmArk" target="_blank">GitHub</a></div>
        </div>
        <div className={'Main-Button-Container'}>
          <GameSelectButton src={'LearnRhythm'} name={t("main.name_rhythms")}>
            <Trans i18nKey="main.desc_rhythms"/>
          </GameSelectButton>
          <GameSelectButton src={'LearnNote'} name={t("main.name_notes")}>
            <Trans i18nKey="main.desc_notes"/>
          </GameSelectButton>
          <GameSelectButton src={'LearnInterval'} name={t("main.name_intervals")}>
            <Trans i18nKey="main.desc_intervals"/>  
          </GameSelectButton>
          <GameSelectButton src={'LearnChord'} name={t("main.name_chord")}>
            <Trans i18nKey="main.desc_chord"/>
          </GameSelectButton>
          <GameSelectButton src={'LearnRoadmapSign'} name={t("main.name_roadmap")}>
            <Trans i18nKey="main.desc_roadmap"/>  
          </GameSelectButton>
        </div>
      </div>
    );
};

export default withCookies(Main);