import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/InvalidPage.css';
import Logo from '../components/Logo';
import { Trans, useTranslation } from 'react-i18next';
import LanguageSelectButton from '../components/LanguageSelectButton';

const InvalidPage = ({history}) => {
    const { t, i18n } = useTranslation();

    const handleGoBack = () => {
        history.goBack();
    };

    const handleGoHome = () => {
        history.push('/');
    }

    return (
        <div className="invalid-page">
            <div className="page404">
                <LanguageSelectButton className={"Language-Select-Light"}/>
                <Logo className={`Logo`} isLink = {true}/>
                <svg className="svg404" x="0px" y="0px" viewBox="0 0 110 60" style={{"enable-background":"new 0 0 110 60"}}>
                <g>
                    <rect x="98.4" y="4.2" width="1.1" height="25.5"/>
                    <rect x="100.7" y="4.2" width="3.7" height="25.5"/>
                    <rect x="98.4" y="29.7" class="st0" width="1.1" height="24.5"/>
                    <rect x="100.7" y="29.7" class="st0" width="3.7" height="24.5"/>
                    <path d="M92.6,25c-1.3,0-2.4-1.2-2.4-2.5c0.2-1.5,1.3-2.5,2.6-2.5c1.3,0.1,2.4,1.2,2.4,2.6C95.2,24.2,94.1,25,92.6,25L92.6,25z"/>
                    <path class="st0" d="M92.6,37.3c-1.3,0-2.4-1.2-2.4-2.5c0.2-1.5,1.3-2.5,2.6-2.5c1.3,0.1,2.4,1.2,2.4,2.6S94.1,37.3,92.6,37.3
                        L92.6,37.3z"/>
                    <text transform="matrix(1 0 0 1 4.1945 29.6666)" class="st1 st2">4</text>
                    <rect x="4.2" y="28.7" width="54.5" height="1"/>
                    <text transform="matrix(1 0 0 1 4.195 53.8574)" class="st0 st1 st2">4</text>
                    <text transform="matrix(1 0 0 1 22.5696 29.167)" class="st1 st2">0</text>
                    <text transform="matrix(1 0 0 1 22.5697 53.8575)" class="st0 st1 st2">0</text>
                    <text transform="matrix(1 0 0 1 40.9444 29.6669)" class="st1 st2">4</text>
                    <text transform="matrix(1 0 0 1 40.9446 53.8572)" class="st0 st1 st2">4</text>
                    <rect x="4.2" y="4.2" width="100" height="1"/>
                    <rect x="4.3" y="16.4" width="100" height="1"/>
                    <rect x="4.2" y="28.7" width="100" height="1"/>
                    <rect x="4.2" y="40.9" class="st0" width="100" height="1"/>
                    <rect x="4.3" y="53.2" class="st0" width="100" height="1"/>
                </g>
                </svg>
                <div className="invalid-page-title">{t('page404.title')}</div>
                <div className="invalid-page-message">
                    {t('page404.message1')}<br/>
                    {t('page404.message2')}
                </div>
                <div className="invalid-page-button">
                    <button className="invalid-page-goback" onClick={handleGoBack}>{t('page404.goback')}</button>
                    <button className="invalid-page-gohome"onClick={handleGoHome}>{t('page404.gohome')}</button>
                </div>
            </div>
        </div>
    );
};

InvalidPage.propTypes = {
    history: PropTypes.object.isRequired
};

export default InvalidPage;