import React, { useEffect, useState } from 'react';
import GameSelectButton from '../components/GameSelectButton';
import LoginNav from "../components/LoginNav";
import Logo from '../components/Logo';
import { Trans, useTranslation } from 'react-i18next';
import {BrowserRouter, Link} from 'react-router-dom';
import '../stylesheets/Main.css';
import { withCookies, useCookies } from 'react-cookie';

const lngs = {
  en: { nativeName: "English" },
  kr: { nativeName: "Korean" }
};

const Main = (cookies) => {
  const { t, i18n } = useTranslation();
  const [Cookie, setCookie, removeCookie] = useCookies(['token', 'name']);
  const [isLoggedIn, setIsLoggedIn] = useState(Cookie.token !== undefined);

    return (
      <div className={'Main-Container'}>
        <div className={'Main-Logo-Container'}>
          <Logo className={'Main-Logo'} isLink={false}/>
          <div className={'Learn-Music-by-Games'}>{t("main.slogan")}</div>
          <div className={'Made-by'}>{t("main.madeby")} ∙ <a href="https://github.com/antony-jeong/MmArk" target="_blank">GitHub</a></div>
          <LoginNav logged_in={ Cookie.token !== undefined }/>
          <div className={'Language-Select'}>
            {Object.keys(lngs).map((lng) => (
              <button key={lng} className={i18n.language === lng ? "selected" : ""} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                {lngs[lng].nativeName}
              </button>
            ))}
          </div>
        </div>
        <div className={'Main-Button-Container'}>
          <GameSelectButton src={'LearnRhythm'} name={t("main.name_rhythms")}>
            <Trans i18nKey="main.desc_rhythms"/>
          </GameSelectButton>
          <GameSelectButton src={'LearnNote'} name={t("main.name_notes")}>
            <Trans i18nKey="main.desc_notes"/>
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
          <GameSelectButton src={"Community"} name={t("main.name_community")}>
            <Trans i18nKey="main.desc_community"/>
          </GameSelectButton>
          <GameSelectButton src={"login"} name={t("main.name_login")}>
            <Trans i18nKey="main.desc_login"/>
          </GameSelectButton>
        </div>
      </div>
    );
};

export default withCookies(Main);