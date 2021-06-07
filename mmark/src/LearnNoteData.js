/*
    pageId: pageNum,
    inst: instruction,
    ds: Sheet database,
    inputMode:
        "oneKey" - one key of the Piano,
        "whiteKeys" - only whiteKeys of the Piano,
        "blackKeys" - only blackKeys of the Piano,
        "allKeys" - whole Piano keys,
        "text" - text,
        "sheetClick" - input notes by clicking the sheet
*/
const standardLen = 0;
const natural = "♮";
const sharp = "♯";
const flat = "♭";

const LearnNoteData = [{
    "pageId": 1,
    "inst": "<note>Do</note> is represented as below. Play <note>Do</note>.",
    "inst_kr": "<note>도</note>라는 음은 아래처럼 나타낼 수 있습니다. <note>도</note>를 연주해보세요.",
    "ds": [{
            "objectType": "p",
            "bpm": 360,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "k",
            "key": 0
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["C4"]],
    "inputMode": "oneKey"
}, {
    "pageId": 2,
    "inst": "<note>Do</note>-<note>Re</note>-<note>Mi</note>-<note>Fa</note>-<note>Sol</note>-<note>La</note>-<note>Ti</note>-<note>Do</note> is represented as below.<br></br>These are notes for white keys in the piano. Play the notes in given order.",
    "inst_kr": "<note>도</note>-<note>레</note>-<note>미</note>-<note>파</note>-<note>솔</note>-<note>라</note>-<note>시</note>-<note>도</note>는 아래와 같습니다.<br></br>이 음들은 피아노의 하얀 건반의 음표들입니다. 주어진 순서대로 음표를 연주해보세요.",
    "ds": [{
            "objectType": "p",
            "bpm": 360,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "k",
            "key": 0
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [3],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [4],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [5],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"]],
    "inputMode": "whiteKeys"
}, 

{
    "pageId": 3,
    "inst": "Low <note>Do</note>-<note>Re</note>-<note>Mi</note>-<note>Fa</note>-<note>Sol</note>-<note>La</note>-<note>Ti</note>-<note>Do</note> is represented as below.<br></br>Play the notes in given order.",
    "inst_kr": "낮은 <note>도</note>-<note>레</note>-<note>미</note>-<note>파</note>-<note>솔</note>-<note>라</note>-<note>시</note>-<note>도</note>는 아래와 같이 표현할 수 있습니다.<br></br>주어진 순서대로 음표들을 연주해보세요.",
        "ds": [{
            "objectType": "p",
            "bpm": 450,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": false
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [3],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [4],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [5],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [6],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [7],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [8],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [9],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [10],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [3],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [4],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [5],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"]],
    "inputMode": "whiteKeys"
}, 

{
    "pageId": 4,
    "inst": "Can you play the same?",
    "inst_kr": "아래와 동일하게 칠 수 있나요?",
        "ds": [{
            "objectType": "p",
            "bpm": 360,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [-1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "c",
            "treble": false
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [9],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["D4", "F4", "B3"]],
    "inputMode": "whiteKeys"
},

{
    "pageId": 5,
    "inst": "Can you play this?",
    "inst_kr": "아래의 악보대로 연주해보세요",
        "ds": [{
            "objectType": "p",
            "bpm": 360,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [-3],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "c",
            "treble": false
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [10],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [12],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["B3", "C4", "E4"]],
    "inputMode": "whiteKeys"
},

// {
//     "pageId": 6,
//     "inst": "Find the same note.",
//     "inst_kr": "동일한 음표를 찾아보세요",
//     "ds": [{
//             "objectType": "p",
//             "bpm": 360,
//             "bpmUnit8": 2
//         }, {
//             "objectType": "c",
//             "treble": false
//         }, {
//             "objectType": "n",
//             "length": standardLen,
//             "extend":false,
//             "rest": false,
//             "height": [5],
//             "accidental": ["x"],
//             "noteDecoration": ["x"]
//         }
//     ],
//     "checkType": "Equal",
//     "checkAnswer": [{
//             "objectType": "c",
//             "treble": true
//         }, {
//             "objectType": "n",
//             "length": standardLen,
//             "extend":false,
//             "rest": false,
//             "height": [0],
//             "accidental": ["x"],
//             "noteDecoration": ["x"]
//         }
//     ],
//     "inputMode": "sheetClick"
// },

{
    "pageId": 7,
    "inst": `Putting a <term>sharp</term>${sharp} beside a note raises the note.<br></br>Below are notes for black keys in the piano. Play the notes in given order.`,
    "inst_kr": `<term>샤프</term>${sharp}를 음표 옆에 붙이면 반음이 올라갑니다.<br></br>아래의 음표들은 검은 건반의 것들입니다. 주어진 순서대로 연주하십시오.`,
    "ds": [{
            "objectType": "p",
            "bpm": 360,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [-2],
            "accidental": ["s"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [-1],
            "accidental": ["s"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [1],
            "accidental": ["s"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [2],
            "accidental": ["s"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [3],
            "accidental": ["s"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["C#4", "D#4", "F#4", "G#4", "A#4"]],
    "inputMode": "allKeys"
},

{
    "pageId": 7,
    "inst": 
        `There is no black key after <note>Mi</note> and <note>Ti</note>!<br></br><note>Mi${sharp}</note> equals <note>Fa</note>, and <note>Ti${sharp}</note> equals <note>Do</note>.`,
        "inst_kr": `<note>미</note>와 <note>시</note> 뒤에는 검은 건반이 없습니다!<br></br><note>미</note>${sharp}는 <note>파</note>와, <note>시</note>${sharp}는 <note>도</note>와 같습니다.`,
        "ds": [{
            "objectType": "p",
            "bpm": 450,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [0],
            "accidental": ["s"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [4],
            "accidental": ["s"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [5],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["F4", "F4", "C5", "C5"]],
    "inputMode": "allKeys"
},

{
    "pageId": 8,
    "inst": `Putting a <term>flat</term>${flat} beside a note lowers the note.<br></br>Below are notes for black keys in the piano. Play the notes in given order.`,
    "inst_kr": `<term>플랫</term>${flat}을 음표 옆에 붙이면 반음이 낮아집니다.<br></br> 주어진 음표들을 순서대로 연주해보세요.`,
    "ds": [{
            "objectType": "p",
            "bpm": 360,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [-1],
            "accidental": ["f"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [0],
            "accidental": ["f"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [2],
            "accidental": ["f"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [3],
            "accidental": ["f"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [4],
            "accidental": ["f"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["C#4", "D#4", "F#4", "G#4", "A#4"]],
    "inputMode": "allKeys"
},

{
    "pageId": 9,
    "inst": `<note>Fa${flat}</note> equals <note>Mi</note> and <note>Do${flat}</note> equals <note>Ti</note>.`,
    "inst_kr": `<note>파${flat}</note>은 <note>미</note>와, <note>도${flat}</note>은 <note>시</note>와 같습니다.`,
    "ds": [{
            "objectType": "p",
            "bpm": 480,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [1],
            "accidental": ["f"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [5],
            "accidental": ["f"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [4],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["E4", "E4", "B4", "B4"]],
    "inputMode": "allKeys"
},

{
    "pageId": 10,
    "inst": 
        `<note>Do${sharp}</note> and <note>Re${flat}</note> are the same,<br></br><note>Re${sharp}</note> and <note>Mi${flat}</note> are the same, and so on.`,
    "inst_kr": `<note>도${sharp}</note>은 <note>레${flat}</note>와 같고, <note>레${sharp}</note>은 <note>미${flat}</note>과 같습니다. 뒤로도 이와 같이 계속됩니다.`,
        "ds": [{
            "objectType": "p",
            "bpm": 600,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [-2],
            "accidental": ["s"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [-1],
            "accidental": ["f"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [-1],
            "accidental": ["s"],
            "noteDecoration": ["x"]
        },  {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [0],
            "accidental": ["f"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [1],
            "accidental": ["s"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [2],
            "accidental": ["f"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [2],
            "accidental": ["s"],
            "noteDecoration": ["x"]
        },  {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [3],
            "accidental": ["f"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [3],
            "accidental": ["s"],
            "noteDecoration": ["x"]
        },  {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [4],
            "accidental": ["f"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["C#4", "C#4", "D#4", "D#4", "F#4", "F#4", "G#4", "G#4", "A#4", "A#4"]],
    "inputMode": "allKeys"
},

{
    "pageId": 11,
    "inst": 
    `The note with ${sharp} is a <term>semitone</term> higher than the original note.<br></br>The note with ${flat} is a <term>semitone</term> lower than the original note.<br></br>Play the two notes in the sheet music that the interval between them is a <term>semitone</term>.`,
    "inst_kr": `${sharp}을 가지는 음표는 <term>반음</term>이 더 높고, <br></br>${flat}을 가지는 음표는 <term>반음</term>이 더 낮습니다.<br></br> 아래 음표에서 <term>반음</term> 차이 나는 두 음을 찾아 연주해보세요.`,
        "ds": [{
            "objectType": "p",
            "bpm": 480,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "k",
            "key": 0
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [3],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [4],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [5],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["E4", "F4"], ["F4", "E4"], ["B4", "C5"], ["C5", "B4"]],
    "inputMode": "allKeys"
},

{
    "pageId": 12,
    "inst": 
    `The effect of a <term>sharp</term>${sharp} and a <term>flat</term>${flat} next to the notes is maintained within the bar.`,
    "inst_kr": `<term>샤프</term>${sharp}와 <term>플랫</term>${flat}은 해당 마디가 끝날 때까지 유효합니다.`,
    "ds": [{
        "objectType": "p",
        "bpm": 150,
        "bpmUnit8": 2
    }, {
        "objectType": "c",
        "treble": true
    }, {
        "objectType": "t",
        "numerator": 4,
            "denominator": 4
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["s"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": false,
            "height": [-1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": false,
            "height": [-1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "b"
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": false,
            "height": [-1],
            "accidental": ["s"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": false,
            "height": [-1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "t"
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["C#4", "D4", "C#4", "D4", "C4", "D#4", "C4", "D#4"]],
    "inputMode": "allKeys"
},

{
    "pageId": 13,
    "inst": `Symbol ${natural} is called <term>natural</term>.<br></br>If it is beside, the note should be played on its original note.`,
    "inst_kr": `${natural}는 <term>제자리표</term>라고 부릅니다.<br></br>이 기호가 붙으면 원래 음을 연주하면 됩니다.`,
    "ds": [{
            "objectType": "p",
            "bpm": 150,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "t",
            "numerator": 3,
            "denominator": 4
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["s"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["n"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "b"
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["f"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["n"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "t"
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["C#4", "C#4", "C4", "D#4", "D#4", "E4"]],
    "inputMode": "allKeys"
},

{
    "pageId": 14,
    "inst": `A <term>scale</term> is a group of frequently used notes. A <term>scale</term> is composed of 8 notes, and the name of the notes from low to high are <br></br>
            <term>Tonic</term>, <term>Supertonic</term>, <term>Mediant</term>, <term>Subdominant</term>, <term>Dominant</term>, <term>Submediant</term>, <term>Leading tone</term>, <term>Octave</term>. <br></br>
            Can you find and play the <term>Tonic</term>, <term>Subdominant</term> and  <term>Dominant</term> notes from the scale below?`,
    "inst_kr": `<term>음계</term>는 자주 사용되는 음의 집합입니다. <term>음계</term>는 8개의 음으로 구성되어 있으며, 낮은 음부터 높은 음의 순서대로 <br></br>
                <term>으뜸음</term>, <term>위으뜸음</term>, <term>가온음</term>, <term>버금딸림음</term>, <term>딸림음</term>, <term>버금가온음</term>, <term>이끎음</term>, <term>옥타브</term>라고 합니다. <br></br>
                아래 악보에서 <term>으뜸음</term>, <term>버금딸림음</term>, <term>딸림음</term>을 찾아 연주해보세요.`,
    "ds": [{
            "objectType": "p",
            "bpm": 600,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [3],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [4],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [5],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "t"
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["C4", "F4", "G4"]],
    "inputMode": "allKeys"
},

{
    "pageId": 15,
    "inst": `What we're using now is <term>C major</term> scale.<br></br>The <term>musical key</term> of <note>Do</note>-<note>Re</note>-<note>Mi</note>-<note>Fa</note>-<note>Sol</note>-<note>La</note>-<note>Ti</note>-<note>Do</note> in C Major is <absolute>C</absolute>-<absolute>D</absolute>-<absolute>E</absolute>-<absolute>F</absolute>-<absolute>G</absolute>-<absolute>A</absolute>-<absolute>B</absolute>-<absolute>C</absolute>, respectively.<br></br>Play <absolute>C</absolute>-<absolute>A</absolute>-<absolute>G</absolute>-<absolute>E</absolute>.`,
    "inst_kr": "현재 사용하는 것은 <term>C 장조</term>입니다.<br></br><note>도</note>-<note>레</note>-<note>미</note>-<note>파</note>-<note>솔</note>-<note>라</note>-<note>시</note>-<note>도</note>는 C 장조에서 <absolute>C</absolute>-<absolute>D</absolute>-<absolute>E</absolute>-<absolute>F</absolute>-<absolute>G</absolute>-<absolute>A</absolute>-<absolute>B</absolute>-<absolute>C</absolute>라는 <term>음이름</term>을 가집니다.<br></br><absolute>C</absolute>-<absolute>A</absolute>-<absolute>G</absolute>-<absolute>E</absolute>를 연주해보세요.",
    "ds": [{
            "objectType": "p",
            "bpm": 600,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": false
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [3],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [4],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [5],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [6],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [7],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [8],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [9],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [10],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "b"
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [3],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [4],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [5],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "t"
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["C4", "A4", "G4", "E4"]],
    "inputMode": "allKeys"
},

{
    "pageId": 16,
    "inst": `A scale is <term>Major</term> when <term>Mediant</term>-<term>Subdominant</term> and <term>Leading tone</term>-<term>Octave</term> span a semitone and others span a wholetone, <br></br>
            and is <term>minor</term> when <term>Supertonic</term>-<term>Mediant</term> and <term>Dominant</term>-<term>Submediant</term> span a semitone and others span a wholetone. <br></br>
            There are two scales in the sheet below. Can you find and play the one that is <term>minor scale</term>?`,
    "inst_kr": `음계는 <term>가온음</term>-<term>버금딸림음</term>과 <term>이끎음</term>-<term>옥타브</term>가 반음 하나 차이이고 나머지가 온음 하나 차이일 때 <term>장조</term>라고 하며, <br></br>
                <term>위으뜸음</term>-<term>가온음</term>과 <term>딸림음</term>-<term>버금가온음</term>이 반음 하나 차이이고 나머지가 온음 하나 차이일 때 <term>단조</term>라고 합니다. <br></br>
                아래 악보에는 두 개의 음계가 그려져 있습니다. <term>단조</term>인 것을 찾아서 연주해보세요.`,
    "ds": [{
            "objectType": "p",
            "bpm": 600,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [3],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [4],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [5],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "b"
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["f"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [3],
            "accidental": ["f"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [4],
            "accidental": ["f"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [5],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "t"
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["C4", "D4", "D#4", "F4", "G4", "G#4", "A#4", "C5"]],
    "inputMode": "allKeys"
},

{
    "pageId": 17,
    "inst": `A <term>key signature</term> is a group of sharps or flats that permanently raises or lowers certain notes in the sheet. <br></br>
            Sharps can be accumulated in <absolute>F</absolute>-<absolute>C</absolute>-<absolute>G</absolute>-<absolute>D</absolute>-<absolute>A</absolute>-<absolute>E</absolute>-<absolute>B</absolute>, and flats in backwards. <br></br>
            For example, A key with four sharps can only have sharps in <absolute>F</absolute>-<absolute>C</absolute>-<absolute>G</absolute>-<absolute>D</absolute>. Can you play the sheet below?`,
    "inst_kr": `<term>조표</term>는 샤프나 플랫이 모인 것으로, 악보의 특정 음을 영구적으로 높이거나 낮춥니다. <br></br>
                샤프는 <absolute>F</absolute>-<absolute>C</absolute>-<absolute>G</absolute>-<absolute>D</absolute>-<absolute>A</absolute>-<absolute>E</absolute>-<absolute>B</absolute> 의 순서대로 쌓이며, 플랫은 그 반대의 순서로 쌓입니다. <br></br>
                예를 들어, 샤프가 4개인 조표는 <absolute>F</absolute>-<absolute>C</absolute>-<absolute>G</absolute>-<absolute>D</absolute>의 순서대로만 쌓일 수 있습니다. 아래의 악보를 연주해보세요.`,
    "ds": [{
            "objectType": "p",
            "bpm": 600,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "k",
            "key": 4
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [3],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [4],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [5],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["C#4", "D#4", "E4", "F#4", "G#4", "A4", "B4", "C5"]],
    "inputMode": "allKeys"
},

{
    "pageId": 18,
    "inst": `A <term>key</term> also changes the <term>scale</term> of the sheet by altering the semitones that adjacent two notes span. <br></br>
            For example, the <term>key</term> with 5 sharp makes the <absolute>D#</absolute>-<absolute>E</absolute> and <absolute>A#</absolute>-<absolute>B</absolute> span a semitone and others a wholetone. <br></br>
            This makes the <term>tonic note</term> to be <absolute>B</absolute>. Can you find and play the <term>Subdominant</term> and <term>Dominant</term> notes?`,
    "inst_kr": `<term>조표</term>는 음 간의 차이가 온음인지 반음인지를 바꿔서 악보의 <term>음계</term> 또한 바꿉니다. <br></br>
                예를 들어, 5개의 샤프가 있는 <term>조표</term>는 <absolute>D#</absolute>-<absolute>E</absolute>와 <absolute>A#</absolute>-<absolute>B</absolute> 사이의 간격을 반음 하나로, 나머지를 온음 하나로 바꿉니다. <br></br>
                따라서 으뜸음은 <absolute>B</absolute>가 됩니다. <term>버금딸림음</term>과 <term>딸림음</term>을 찾아 연주해보세요.`,
    "ds": [{
            "objectType": "p",
            "bpm": 600,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "k",
            "key": 5
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-3],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [3],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [4],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["E4", "F#4"]],
    "inputMode": "allKeys"
},

{
    "pageId": 19,
    "inst": `A <term>scale</term> is named after its <term>tonic note</term> and whether it is Major or minor. <br></br>
            For example, the Major scale which <term>tonic note</term> is <absolute>B</absolute> is named <term>B Major</term>. <br></br>
            The name of the scale of sheet below is <term>(_ ____) Major.</term> Can you fill in the blank?`,
    "inst_kr": `<term>음계</term>는 그 <term>으뜸음</term>과 장조인지 단조인지에 따라서 이름이 붙습니다. <br></br>
                예를 들어, <term>으뜸음</term>이 <absolute>B</absolute>인 장조는 <term>B 장조</term>라고 합니다. <br></br>
                아래 악보의 음계는 <term>(__ _) 장조</term>입니다. 빈칸을 채워보세요. (으뜸음에 플랫이 붙으면 내림, 샤프가 붙으면 올림을 추가합니다.)`,
    "ds": [{
            "objectType": "p",
            "bpm": 600,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "k",
            "key": -2
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-3],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [3],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [4],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Input",
    "checkAnswer": ["B flat", "내림 B"],
    "inputMode": "text"
}
];

export default LearnNoteData;
