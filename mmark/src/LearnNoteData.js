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
const sharp = '😆';
const flat = '😂';

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
    "checkAnswer": ["C4"],
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
    "checkAnswer": ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
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
    "checkAnswer": ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
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
    "checkAnswer": ["F4", "A4", "B3"],
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
    "checkAnswer": ["B3", "C4", "E4"],
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
    "checkAnswer": ["C#4", "D#4", "F#4", "G#4", "A#4"],
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
    "checkAnswer": ["F4", "F4", "C5", "C5"],
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
    "checkAnswer": ["C#4", "D#4", "F#4", "G#4", "A#4"],
    "inputMode": "allKeys"
},

{
    "pageId": 9,
    "inst": `<note>Fa</note>${flat} equals <note>Mi</note> and <note>Do</note>${flat} equals <note>Ti</note>.`,
    "inst_kr": `<note>파</note>${flat}은 <note>미</note>와, <note>도</note>${flat}은 <note>시</note>와 같습니다.`,
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
    "checkAnswer": ["E4", "E4", "B4", "B4"],
    "inputMode": "allKeys"
},

{
    "pageId": 10,
    "inst": 
        "<note>Do😆</note> and <note>Re😂</note> are the same,<br></br><note>Re😆</note> and <note>Mi😂</note> are the same, and so on.",
    "inst_kr": "😆을 가지는 음표는 <term>반음</term>이 더 높고, <br></br>😂을 가지는 음표는 <term>반음</term>이 더 낮습니다.<br></br> 아래 음표에서 <term>반음</term> 차이 나는 두 음을 찾아 연주해보세요.",
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
    "checkAnswer": ["C#4", "C#4", "D#4", "D#4", "F#4", "F#4", "G#4", "G#4", "A#4", "A#4"],
    "inputMode": "allKeys"
},

{
    "pageId": 11,
    "inst": 
        "The note with 😆 is a <term>semitone</term> higher than the original note.<br></br>The note with 😂 is a <term>semitone</term> lower than the original note.<br></br>Play the two notes in the sheet music that the interval between them is a <term>semitone</term>.",
    "inst_kr": "<term>샤프</term>😆와 <term>플랫</term>😂은 해당 마디가 끝날 때까지 유효합니다.",
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
    "checkAnswer": ["E4", "F4"],
    "inputMode": "allKeys"
},

{
    "pageId": 12,
    "inst": 
        "The effect of a <term>sharp</term>😆 and a <term>flat</term>😂 next to the notes is maintained within the bar.",
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
    "checkAnswer": ["C#4", "D4", "C#4", "D4", "C4", "D#4", "C4", "D#4"],
    "inputMode": "allKeys"
},

{
    "pageId": 13,
    "inst": "Symbol 😐 is called <term>natural</term>.<br></br>If it is beside, the note should be played on its original note.",
    "inst_kr": "😐는 <term>제자리표</term>라고 부릅니다.<br></br>이 기호가 붙으면 원래 음을 연주하면 됩니다.",
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
    "checkAnswer": ["C#4", "C#4", "C4", "D#4", "D#4", "E4"],
    "inputMode": "allKeys"
},

{
    "pageId": 14,
    "inst": "A <term>scale</term> is a group of frequently used notes. What we're using now is <term>C major</term>.<br></br>The <term>musical key</term> of <note>Do</note>-<note>Re</note>-<note>Mi</note>-<note>Fa</note>-<note>Sol</note>-<note>La</note>-<note>Ti</note>-<note>Do</note> in C Major is <absolute>C</absolute>-<absolute>D</absolute>-<absolute>E</absolute>-<absolute>F</absolute>-<absolute>G</absolute>-<absolute>A</absolute>-<absolute>B</absolute>-<absolute>C</absolute>, respectively.<br></br>Play <absolute>C</absolute>-<absolute>A</absolute>-<absolute>G</absolute>-<absolute>E</absolute>.",
    "inst_kr": "<term>음계</term>는 자주 사용되는 음들의 집합입니다. 현재 사용하는 것은 <term>C 장조</term>입니다.<br></br><note>도</note>-<note>레</note>-<note>미</note>-<note>파</note>-<note>솔</note>-<note>라</note>-<note>시</note>-<note>도</note>는 C 장조에서 <absolute>C</absolute>-<absolute>D</absolute>-<absolute>E</absolute>-<absolute>F</absolute>-<absolute>G</absolute>-<absolute>A</absolute>-<absolute>B</absolute>-<absolute>C</absolute>라는 <term>음이름</term>을 가집니다.<br></br><absolute>C</absolute>-<absolute>A</absolute>-<absolute>G</absolute>-<absolute>E</absolute>를 연주해보세요.",
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
    "checkAnswer": ["C4", "A4", "G4", "E4"],
    "inputMode": "allKeys"
}

];

export default LearnNoteData;
