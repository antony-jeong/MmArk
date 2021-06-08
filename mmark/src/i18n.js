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
                lang: {
                    name: 'English',
                },
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
                    author: "Author",
                    tags: "Tags"
                },
                signup: {
                    signup: "Sign Up",
                    top_req: "Required Fields",
                    top_pro: "Account Profile",
                    username: "Username",
                    username_inst: "Maximum of 10 Letters, in Alphabet and Numbers",
                    password: "Password",
                    password_inst: "Only Alphabet, Numbers, +, -, _, @, . can be used",
                    confirm_password: "Confirm Password",
                    confirm_password_inst: "Password and Confirm Password should match",
                    image: "Profile Image",
                    image_inst: "Uploading Profile Images are currently under construction",
                    desc: "User Description",
                    desc_inst: "Describe your account freely",
                    accept: "Since MmArk doesn't handle any of the user's private info, we regard Privacy Terms are accepted by all users",
                    back: "Back",
                    message: "Do you already have an account?",
                    login: "Log In"
                },
                login: {
                    message: "Don't you have an account?",
                    signup: "Sign Up",
                    logout: "Logout",
                    username: "Username",
                    password: "Password",
                    wrong_account: "Invalid Username or Password",
                    user_empty: "Username can't be empty",
                    user_char: "Username only includes English alphabets and Numbers",
                    password_empty: "Password can't be empty",
                    password_char: "Password only includes English alphabets, numbers, ., -, +, _, @."
                },
                page404: {
                    title: "Page not found",
                    message1: "The page you're looking for doesn't exist or other error occured.",
                    message2: "Go back, or go to Main Page.",
                    goback: "Go back",
                    gohome: "Go to Main Page"
                }
            }
        },
        kr: {
            translation: {
                lang: {
                    name: '한국어',
                },
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
                    author: "작성자",
                    tags: "태그"
                },
                signup: {
                    signup: "회원가입",
                    top_req: "필수 정보",
                    top_pro: "계정 프로필",
                    username: "계정 이름",
                    username_inst: "영문 알파벳 및 숫자로 최대 10자",
                    password: "비밀번호",
                    password_inst: "영문 알파벳, 아라비아 숫자, +, -, _, @, . 만 사용 가능",
                    confirm_password: "비밀번호 확인",
                    confirm_password_inst: "비밀번호와 비밀번호 확인은 동일해야 합니다",
                    image: "프로필 사진",
                    image_inst: "프로필 사진은 현재 업로드할 수 없습니다",
                    desc: "상태 메시지",
                    desc_inst: "자신을 자유롭게 소개해보세요!",
                    accept: "MmArk는 사용자의 어떠한 개인 정보도 다루지 않기 때문에, 회원가입시 개인정보 관련 취급 동의를 받은 것으로 간주합니다",
                    back: "뒤로",
                    message: "계정이 이미 있으신가요?",
                    login: "로그인하기",
                },
                login: {
                    message: "아직도 계정이 없으신가요?",
                    signup: "회원가입하기",
                    logout: "로그아웃",
                    username: "유저 이름",
                    password: "비밀먼호",
                    wrong_account: "잘못된 유저 이름 또는 비밀번호입니다",
                    user_empty: "유저 이름이 비어있습니다",
                    user_char: "유저 이름은 영문 알파벳 혹은 숫자만 가능합니다",
                    password_empty: "비밀번호가 비어있습니다",
                    password_char: "비밀번호는 영문 알파벳, 숫자, ., -, +, _, @ 만 가능합니다",
                  login: "로그인하기"
                },
                page404: {
                    title: "페이지를 찾을 수 없습니다.",
                    message1: "요청한 페이지가 존재하지 않거나, 다른 오류가 발생했을 수 있습니다.",
                    message2: "메인 화면이나 이전 페이지로 돌아가세요.",
                    goback: "이전 페이지",
                    gohome: "메인 화면"
                }
            }
        }
    }
});

export default i18n;