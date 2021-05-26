import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                main: {
                    slogan: 'Learn Music by Games',
                    madeby: 'Made by Team MmArk',
                    name_notes: 'Notes',
                    desc_notes: 'Can you guess<br>this note?',
                    name_rhythms: 'Rhythm',
                    desc_rhythms: 'Play it to the beat!',
                    name_intervals: 'Intervals',
                    desc_intervals: 'Learn the interval<br>between the two notes',
                    name_chord: 'Chords',
                    desc_chord: 'Much richer fun of music',
                    name_roadmap: 'Roadmap Signs',
                    desc_roadmap: 'Where should we go?<br>Find a way!'
                }
            }
        },
        kr: {
            translation: {
                main: {
                    slogan: 'MmArk: 음악을 배우는 가장 간단한 방법',
                    madeby: '팀 MmArk 제작',
                    name_notes: '음',
                    desc_notes: '악보, 그리고 음',
                    name_rhythms: '리듬',
                    desc_rhythms: '두둥 탁!',
                    name_intervals: '음정',
                    desc_intervals: '두 음 사이<br>음정 계산?',
                    name_chord: '코드',
                    desc_chord: '음악의 소금',
                    name_roadmap: '로드맵',
                    desc_roadmap: '어디로 가야 하오?'                    
                }
            }
        }
    }
});

export default i18n;