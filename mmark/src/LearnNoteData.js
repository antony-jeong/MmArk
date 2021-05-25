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

const LearnNoteData = [{
    "pageId": 1,
    "inst": "{Note}Do{/Note} is represented as below. Play {Note}Do{/Note}",
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
    "checkAnswer": [{
            "objectType": "p",
            "bpm": 90,
            "bpmUnit8": 2
        },
        {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "k",
            "key": 0
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "inputMode": "oneKey"
}, {
    "pageId": 2,
    "inst": "<Note>Do</Note>-<Note>Re</Note>-<Note>Mi</Note>-<Note>Fa</Note>-<Note>Sol</Note>-<Note>La</Note>-<Note>Ti</Note>-<Note>Do</Note> is represented as below.<br></br>These are notes for white keys in the piano. Play the notes in given order.",
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
    "checkAnswer": [{
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [-1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [3],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [4],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [5],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "inputMode": "whiteKeys"
}, 

{
    "pageId": 3,
    "inst": 
        "Low <Note>Do</Note>-<Note>Re</Note>-<Note>Mi</Note>-<Note>Fa</Note>-<Note>Sol</Note>-<Note>La</Note>-<Note>Ti</Note>-<Note>Do</Note> is represented as below.<br></br>Play the notes in given order.",
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
    "checkAnswer": [{
            "objectType": "c",
            "treble": false
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [3],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [4],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [5],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [6],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [7],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [8],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [9],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [10],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
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
    "checkAnswer": [{
            "objectType": "c",
            "treble": false
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [3],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [4],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [5],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [6],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [7],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [8],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [9],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 0,
            "extend": false,
            "rest": false,
            "height": [10],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
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
    "checkAnswer": [{
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
    "inputMode": "whiteKeys"
},

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

{
    "pageId": 7,
    "inst": 
        "Putting a <svg>components/musical_symbols_svg/accidental_s</svg> beside a note raises the note.<br></br>Below are notes for black keys in the piano. Play the notes in given order.",
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
    "checkAnswer": [{
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
    "inputMode": "allKeys"
},

{
    "pageId": 8,
    "inst": 
        "There is no black key after <note>Mi</note> and <note>Ti</note>!<br></br><note>Mi<svg>components/musical_symbols_svg/accidental_s</svg></note> equals <note>Fa</note> and <note>Ti<svg>components/musical_symbols_svg/accidental_s</svg></note> equals <note>Do</note>.",
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
    "checkAnswer": [{
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
    "inputMode": "allKeys"
},

{
    "pageId": 9,
    "inst": 
    "Putting a <svg>components/musical_symbols_svg/accidental_f</svg> beside a note lowers the note.<br></br>Below are notes for black keys in the piano. Play the notes in given order.",
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
    "checkAnswer": [{
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
    "inputMode": "allKeys"
},

{
    "pageId": 10,
    "inst": 
        "<note>Fa<svg>components/musical_symbols_svg/accidental_f</svg></note> equals <note>Mi</note> and <note>Do<svg>components/musical_symbols_svg/accidental_f</svg></note> equals <note>Ti</note>.",
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
    "checkAnswer": [{
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
    "inputMode": "allKeys"
},

{
    "pageId": 11,
    "inst": 
        "<note>Do<svg>components/musical_symbols_svg/accidental_s</svg></note> and <note>Re<svg>components/musical_symbols_svg/accidental_f</svg></note> are the same.",
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
    "checkAnswer": [{
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
    "inputMode": "allKeys"
},

{
    "pageId": 12,
    "inst": 
        "The note with <svg>components/musical_symbols_svg/accidental_s</svg> is a semitone higher than the original note.<br></br>The note with <svg>components/musical_symbols_svg/accidental_f</svg> is a semitone lower than the original note.<br></br>Play the two notes in the sheet music that the interval between them is a semitone.",
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
            "accidental": ["x"],
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
    "inputMode": "allKeys"
},

{
    "pageId": 13,
    "inst": 
        "The effect of the <svg>components/musical_symbols_svg/accidental_s</svg> and <svg>components/musical_symbols_svg/accidental_f</svg> next to the notes is maintained within the joints.",
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
    "checkAnswer": [{
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
    "inputMode": "allKeys"
},

{
    "pageId": 14,
    "inst": 
        "Symbol <svg>components/musical_symbols_svg/accidental_f</svg> is called <term>natural</term>. <br></br>If it is beside, the note should be played on its original note.",
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
    "checkAnswer": [{
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
    "inputMode": "allKeys"
},

{
    "pageId": 15,
    "inst": 
        "A <term>scale</term> is a group of frequently used notes. What we're using now is C major. <br></br> The <term>musical key</term> of <Note>Do</Note>-<Note>Re</Note>-<Note>Mi</Note>-<Note>Fa</Note>-<Note>Sol</Note>-<Note>La</Note>-<Note>Ti</Note>-<Note>Do</Note> in C Major is C-D-E-F-G-A-B-C, respectively.<br></br>Play C-A-G-E.",
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
    "checkAnswer": [{
            "objectType": "p",
            "bpm": 360,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
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
            "height": [-4],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": false,
            "height": [2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "inputMode": "allKeys"
}

];

export default LearnNoteData;
