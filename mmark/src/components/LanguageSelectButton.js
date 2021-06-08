import React, { useState, useEffect} from 'react';
import Cookies from 'universal-cookie';

import "../stylesheets/LanguageSelectButton.css";
import { useTranslation } from 'react-i18next';

const lngs = {
    en: { nativeName: "English" },
    kr: { nativeName: "한국어" }
};

const LanguageSelectButton = ({className}) => {
    const cookies = new Cookies();
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(cookies.get('language')||'en');
    useEffect(()=>{
        i18n.changeLanguage(language);
        cookies.set('language', language, { path: '/' });
    }, [language]);

    return (
        <div className={className}>
            {Object.keys(lngs).map((lng) => (
            <button key={lng} className={i18n.language === lng ? "selected" : ""} type="submit" 
                onClick={() => setLanguage(lng)}>
                {lngs[lng].nativeName}
            </button>
            ))}
        </div>
    );
};

export default LanguageSelectButton;