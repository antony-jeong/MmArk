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
const wholeNoteSrc = 'components/musical_symbols_svg/notes/';
const halfNoteSrc = 'components/musical_symbols_svg/notes/';
const quarterNoteSrc = 'components/musical_symbols_svg/notes/';

const LearnRhythmData = [{
"pageId": 1,
"inst": `A <term>half note</term>😊 is half the length of a <term>whole note<term>.<br></br>A <term>quarter note</term>😊 is half the length of a <term>half note<term>😊.<br></br>How many times a quarter note is the sum of the notes to the right of the vertical line?`,
"ds": [{
            "objectType": "p",
            "bpm": 360,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
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
            "length": 1,
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
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "b"
        }, {
            "objectType": "n",
            "length": 1,
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
            "length": 1,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Input",
    "checkAnswer": "9",
    "inputMode": "text"
}, {
    "pageId": 2,
    "inst": `A <term>eighth note</term>😊 is half the length of a <term>quarter note<term>.<br></br>A <term>sixteenth note</term>😊 is half the length of a <term>eighth note<term>😊.<br></br>Each tail halves the length of the note. How many times the <term>sixteenth note</term> is the sum of the notes to the right of the vertical line?`,
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
            "length": 2,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 3,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 4,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "b"
        }, {
            "objectType": "n",
            "length": 4,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 5,
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
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 5,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 3,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 3,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Input",
    "checkAnswer": "10",
    "inputMode": "text"
}, {
    "pageId": 3,
    "inst": `The vertical linea are called <term>bar line<term>. Between bar lines is called a <tern>bar</term>.<br></br>However, the first bar doesn't have a starting bar line. At the end of the sheet music, there's a <term>terminal bar line</term>😀<br></br>How many bars are there in the sheet music below?`,
    "ds": [{
        "objectType": "c",
        "treble": true
        }, {
            "objectType": "b",
            "type": "b"
        }, {
            "objectType": "b",
            "type": "b"
        }, {
            "objectType": "b",
            "type": "b"
        }, {
            "objectType": "b",
            "type": "t"
        }
    ],
    "checkType": "Input",
    "checkAnswer": "4",
    "inputMode": "text"
}

];

export default LearnRhythmData;
