import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init({
    lng: 'en',
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
                    desc_roadmap: 'Where should we go?<br>Find a way!',
                    name_community: "Community",
                    desc_community: "Kkoekkoli",
                    name_login: "Login",
                    desc_login: "Login"
                },
                learn: {
                    submit: "Submit"
                },
                sheet: {
                    reset: "Reset"
                },
                community: {
                    second_singular: " second ago",
                    second_plural: " seconds ago",
                    minute_singular: " minute ago",
                    minute_plural: " minutes ago",
                    hour_singular: " hour ago",
                    hour_plural: " hours ago",
                    day_singular: "Yesterday",
                    day_plural: " days ago",
                    month_singular: "Last month",
                    month_plural: " months ago",
                    year_singular: "Last year",
                    year_plural: " years ago",
                    new_post: "+ NEW POST",
                    show_description: "Show Description ▽",
                    hide_description: "Hide Description △"
                }, 
                post: {
                    discard: "Discard and Go Back",
                    add: "Upload +",
                    description: "Description",
                    title: "Title",
                    author: "Author"
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
                    desc_roadmap: '어디로 가야 하오?',
                    name_community: "커뮤니티",
                    desc_community: "꾀꼬리",
                    name_login: "로그인",
                    desc_login: "로그인"
                },
                learn: {
                    submit: "제출"
                },
                sheet: {
                    reset: "초기화"
                },
                community: {
                    second_singular: " 초 전",
                    second_plural: " 초 전",
                    minute_singular: " 분 전",
                    minute_plural: " 분 전",
                    hour_singular: " 시간 전",
                    hour_plural: " 시간 전",
                    day_singular: "어제",
                    day_plural: " 일 전",
                    month_singular: "지난 달",
                    month_plural: " 달 전",
                    year_singular: "작년",
                    year_plural: " 년 전",
                    new_post: "+ 글쓰기",
                    show_description: "더보기 ▽",
                    hide_description: "접기 △"
                }, 
                post: {
                    discard: "취소",
                    add: "업로드 +",
                    description: "내용",
                    title: "제목",
                    author: "작성자"
                }
            }
        }
    }
});

export default i18n;