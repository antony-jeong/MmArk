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
    "inst": 
        "Low <note>Do</note>-<note>Re</note>-<note>Mi</note>-<note>Fa</note>-<note>Sol</note>-<note>La</note>-<note>Ti</note>-<note>Do</note> is represented as below.<br></br>Play the notes in given order.",
        "ds": [{
            "objectType": "p",
            "bpm": 360,
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
    "inst": 
        "Can you play the same?",
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
    "inst": 
        "Can you play this?",
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
/*
{
    "pageId": 6,
    "inst": 
        "Find the same note.",
    "ds": [{
            "objectType": "p",
            "bpm": 360,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": false
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
    "checkType": "Equal",
    "checkAnswer": [{
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend":false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "inputMode": "sheetClick"
},
*/
{
    "pageId": 7,
    "inst": 
        `Putting a <term>sharp</term>${sharp} beside a note raises the note.<br></br>Below are notes for black keys in the piano. Play the notes in given order.`,
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
    "pageId": 8,
    "inst": 
        `There is no black key after <note>Mi</note> and <note>Ti</note>!<br></br><note>Mi${sharp}</note> equals <note>Fa</note>, and <note>Ti${sharp}</note> equals <note>Do</note>.`,
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
    "pageId": 9,
    "inst": 
    `Putting a <term>flat</term>${flat} beside a note lowers the note.<br></br>Below are notes for black keys in the piano. Play the notes in given order.`,
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
    "pageId": 10,
    "inst": 
        `<note>Fa</note>${flat} equals <note>Mi</note> and <note>Do</note>${flat} equals <note>Ti</note>.`,
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
    "pageId": 11,
    "inst": 
        "<note>Do😆</note> and <note>Re😂</note> are the same,<br></br><note>Re😆</note> and <note>Mi😂</note> are the same, and so on.",
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
    "pageId": 12,
    "inst": 
        "The note with 😆 is a <term>semitone</term> higher than the original note.<br></br>The note with 😂 is a <term>semitone</term> lower than the original note.<br></br>Play the two notes in the sheet music that the interval between them is a <term>semitone</term>.",
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
    "checkAnswer": ["E4", "F4"],
    "inputMode": "allKeys"
},

{
    "pageId": 13,
    "inst": 
        "The effect of a <term>sharp</term>😆 and a <term>flat</term>😂 next to the notes is maintained within the bar.",
    "ds": [{
            "objectType": "p",
            "bpm": 360,
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
    "pageId": 14,
    "inst": 
        "Symbol 😐 is called <term>natural</term>.<br></br>If it is beside, the note should be played on its original note.",
    "ds": [{
            "objectType": "p",
            "bpm": 360,
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
    "pageId": 15,
    "inst":
        "A <term>scale</term> is a group of frequently used notes. What we're using now is <term>C major</term>.<br></br>The <term>musical key</term> of <note>Do</note>-<note>Re</note>-<note>Mi</note>-<note>Fa</note>-<note>Sol</note>-<note>La</note>-<note>Ti</note>-<note>Do</note> in C Major is <absolute>C</absolute>-<absolute>D</absolute>-<absolute>E</absolute>-<absolute>F</absolute>-<absolute>G</absolute>-<absolute>A</absolute>-<absolute>B</absolute>-<absolute>C</absolute>, respectively.<br></br>Play <absolute>C</absolute>-<absolute>A</absolute>-<absolute>G</absolute>-<absolute>E</absolute>.",
    "ds": [{
            "objectType": "p",
            "bpm": 360,
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
