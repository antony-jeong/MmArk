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

const LearnIntervalData = [{
    "pageId": 1,
    "inst": `The interval of two notes spanning 0, 5, 7, 12 semitones are called <term>Perfect</term> intervals.<br>
            In the sheet below are <term>Perfect Unison</term> <note>Do</note>, <term>Perfect 4th</term> <note>Do</note>-<note>Fa</note>, <term>Perfect 5th</term> <note>Do</note>-<note>Sol</note>, <term>Perfect 8th</term> <note>Do</note>-<note>Do</note>.<br>
            The interval of <note>Re</note> and <note>Sol</note> is <term>Perfect (_)th</term>. Can you fill in the blank?`,
    "inst_kr": `서로 반음 0, 5, 7, 12 개 떨어져 있는 두 음의 음정을 <term>완전</term> 음정이라고 합니다.<br>
                아래 악보에는 <term>완전 1도</term> <note>도</note>, <term>완전 4도</term> <note>도</note>-<note>파</note>, <term>완전 5도</term> <note>도</note>-<note>솔</note>, <term>완전 8도</term> <note>도</note>-<note>도</note> 가 그려져 있습니다.<br>
                <note>레</note>-<note>솔</note> 의 음정은 <term>완전 (_)도</term> 입니다. 빈칸을 채워보세요.`,
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
            "height": [-2, 1],
            "accidental": ["x", "x"],
            "noteDecoration": ["x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2, 2],
            "accidental": ["x", "x"],
            "noteDecoration": ["x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2, 5],
            "accidental": ["x", "x"],
            "noteDecoration": ["x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1, 2],
            "accidental": ["x", "x"],
            "noteDecoration": ["x", "x"]
        }
        
    ],
    "checkType": "Input",
    "checkAnswer": ["4"],
    "inputMode": "text"
}, {
    "pageId": 2,
    "inst": 
            `The interval of two notes spanning 2, 4, 9, 11 semitones are called <term>Major</term> intervals.<br>
            In the sheet below are <term>Major 2nd</term> <note>Do</note>-<note>Re</note>, <term>Major 3rd</term> <note>Do</note>-<note>Mi</note>, <term>Major 6th</term> <note>Do</note>-<note>La</note>, <term>Major 7th</term> <note>Do</note>-<note>Ti</note>.<br>
            The interval of <note>Re</note> and <note>Fa</note> is <term>Major (_)rd</term>. Can you fill in the blank?`,
    "inst_kr": `서로 반음 2, 4, 9, 11 개 떨어져 있는 두 음의 음정을 <term>장</term> 음정이라고 합니다.<br>
                아래 악보에는 <term>장 2도</term> <note>도</note>-<note>레</note>, <term>장 3도</term> <note>도</note>-<note>미</note>, <term>장 6도</term> <note>도</note>-<note>라</note>, <term>장 7도</term> <note>도</note>-<note>시</note> 가 그려져 있습니다.<br>
                <note>레</note>-<note>파</note> 의 음정은 <term>장 (_)도</term> 입니다. 빈칸을 채워보세요.`,
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
            "height": [-2, -1],
            "accidental": ["x", "x"],
            "noteDecoration": ["x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2, 0],
            "accidental": ["x", "x"],
            "noteDecoration": ["x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2, 3],
            "accidental": ["x", "x"],
            "noteDecoration": ["x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2, 4],
            "accidental": ["x", "x"],
            "noteDecoration": ["x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1, 1],
            "accidental": ["x", "x"],
            "noteDecoration": ["x", "x"]
        }
    ],
    "checkType": "Input",
    "checkAnswer": ["3"],
    "inputMode": "text"
}, 

{
    "pageId": 3,
    "inst": 
            `The interval of two notes spanning 1, 3, 8, 10 semitones are called <term>minor</term> intervals.<br>
            In the sheet below are <term>minor 2nd</term> <note>Do</note>-<note>Re${flat}</note>, <term>minor 3rd</term> <note>Do</note>-<note>Mi${flat}</note>, <term>minor 6th</term> <note>Do</note>-<note>La${flat}</note>, <term>minor 7th</term> <note>Do</note>-<note>Ti${flat}</note>.<br>
            The interval of <note>Re</note> and <note>Fa${flat}</note> is <term>minor (_)rd</term>. Can you fill in the blank?`,
    "inst_kr": `서로 반음 1, 3, 8, 10 개 떨어져 있는 두 음의 음정을 <term>단</term> 음정이라고 합니다.<br>
                아래 악보에는 <term>단 2도</term> <note>도</note>-<note>레${flat}</note>, <term>단 3도</term> <note>도</note>-<note>미${flat}</note>, <term>단 6도</term> <note>도</note>-<note>라${flat}</note>, <term>단 7도</term> <note>도</note>-<note>시${flat}</note> 가 그려져 있습니다.<br>
                <note>레</note>-<note>파${flat}</note> 의 음정은 <term>단 (_)도</term> 입니다. 빈칸을 채워보세요.`,
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
            "extend": false,
            "rest": false,
            "height": [-2, -1],
            "accidental": ["x", "f"],
            "noteDecoration": ["x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2, 0],
            "accidental": ["x", "f"],
            "noteDecoration": ["x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2, 3],
            "accidental": ["x", "f"],
            "noteDecoration": ["x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2, 4],
            "accidental": ["x", "f"],
            "noteDecoration": ["x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1, 0],
            "accidental": ["x", "x"],
            "noteDecoration": ["x", "x"]
        }
    ],
    "checkType": "Input",
    "checkAnswer": ["3"],
    "inputMode": "text"
}, 

{
    "pageId": 4,
    "inst": `The intervals of <term>Major</term> spans one more semitone than <term>minor</term>.<br>
            For example, <term>Major 3rd</term> <note>Do</note>-<note>Mi</note> spans one more semitone than <term>minor 3rd</term> <note>Do</note>-<note>Mi${flat}</note>.
            Can you play the two notes that are minor of the <term>Major 3rd</term> <note>Fa</note>-<note>La</note>?`,
    "inst_kr": `<term>장</term> 음정은 <term>단</term> 음정보다 반음 하나만큼 더 넓습니다.<br>
                예를 들어, <term>장 3도</term> <note>도</note>-<note>미</note> 는 <term>단 3도</term> <note>도</note>-<note>미${flat}</note> 보다 반음 하나만큼 더 넓습니다. <br>
                <term>장 3도</term> <note>파</note>-<note>라</note>의 <term>단</term> 음정을 연주해보세요.`,
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
            "extend": false,
            "rest": false,
            "height": [-2, 0],
            "accidental": ["x", "x"],
            "noteDecoration": ["x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2, 0],
            "accidental": ["x", "f"],
            "noteDecoration": ["x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [1, 3],
            "accidental": ["x", "x"],
            "noteDecoration": ["x", "x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["F4", "G#4"]],
    "inputMode": "allKeys"
},

{
    "pageId": 5,
    "inst": `The intervals spanning one more semitone than a <term>Major</term> or <term>Perfect</term> intervals are called <term>Augmented</term> intervals.
            For Example, <term>Augmented</term> interval of <term>Perfect 4th</term> <note>Do</note>-<note>Fa</note> is <term>Augmented 4th</term> <note>Do</note>-<note>Fa${sharp}</note>. <br>
            Then, what is the <term>Augmented</term> interval of <term>Major 3rd</term> <note>Fa</note>-<note>La</note>?`,
    "inst_kr": `<term>장</term> 혹은 <term>완전</term> 음정보다 반음 하나만큼 더 넓은 음정은 <term>증</term> 음정입니다. <br>
                예를 들어, <term>완전 4도</term> <note>도</note>-<note>파</note> 의 <term>증</term> 음정은 <term>증 4도</term> <note>도</note>-<note>파${sharp}</note> 입니다. <br>
                <term>장 3도</term> <note>파</note>-<note>라</note>의 <term>증</term> 음정을 연주해보세요.`,
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
            "extend": false,
            "rest": false,
            "height": [-2, 1],
            "accidental": ["x", "x"],
            "noteDecoration": ["x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2, 1],
            "accidental": ["x", "s"],
            "noteDecoration": ["x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [1, 3],
            "accidental": ["x", "x"],
            "noteDecoration": ["x", "x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["F4", "A#4"]],
    "inputMode": "allKeys"
},

{
    "pageId": 6,
    "inst": `The intervals spanning one less semitone than a <term>minor</term> or <term>Perfect</term> intervals are called <term>Diminished</term> intervals.
            For Example, <term>Diminished</term> interval of <term>Perfect 4th</term> <note>Do</note>-<note>Fa</note> is <term>Diminished 4th</term> <note>Do</note>-<note>Fa${flat}</note>. <br>
            Then, what is the <term>Diminished</term> interval of <term>minor 3rd</term> <note>Fa</note>-<note>La${flat}</note>?`,
    "inst_kr": `<term>단</term> 혹은 <term>완전</term> 음정보다 반음 하나만큼 더 좁은 음정은 <term>감</term> 음정입니다. <br>
                예를 들어, <term>완전 4도</term> <note>도</note>-<note>파</note> 의 <term>감</term> 음정은 <term>감 4도</term> <note>도</note>-<note>파${flat}</note> 입니다. <br>
                <term>단 3도</term> <note>파</note>-<note>라${flat}</note>의 <term>감</term> 음정을 연주해보세요.`,
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
        "extend": false,
        "rest": false,
        "height": [-2, 1],
        "accidental": ["x", "x"],
        "noteDecoration": ["x", "x"]
    }, {
        "objectType": "n",
        "length": standardLen,
        "extend": false,
        "rest": false,
        "height": [-2, 0],
        "accidental": ["x", "x"],
        "noteDecoration": ["x", "x"]
    }, {
        "objectType": "n",
        "length": standardLen,
        "extend": false,
        "rest": false,
        "height": [1, 3],
        "accidental": ["x", "f"],
        "noteDecoration": ["x", "x"]
    }
],
    "checkType": "Play",
    "checkAnswer": [["F4", "G4"]],
    "inputMode": "allKeys"
},

{
    "pageId": 7,
    "inst": `<term>Perfect</term>, <term>Major</term> and <term>minor</term> intervals span same number of semitones with certain <term>Augmented</term> or <term>Diminished</term> intervals. <br>
            For example, <term>Perfect 4th</term> <note>Do</note>-<note>Fa</note> is same as <term>Augmented 3rd</term>.
            <term>Major 6th</term> <note>Do</note>-<note>La</note> is same as <term>Diminished 7th</term>.
            <term>minor 7th</term> <note>Do</note>-<note>Ti${flat}</note> is same as <term>Augmented (_)th</term>. Can you fill in the blank?`,
    "inst_kr": `<term>완전</term>, <term>장</term> 그리고 <term>단</term> 음정들은 특정한 <term>증</term> 혹은 <term>감</term> 음정과 같은 수의 반음만큼 넓습니다. <br>
                예를 들어, <term>완전 4도</term> <note>도</note>-<note>파</note> 는 <term>증 3도</term>와 같습니다.
                <term>장 6도</term> <note>도</note>-<note>라</note> 는 <term>감 7도</term> 와 같습니다. <br>
                <term>단 7도</term> <note>도</note>-<note>시${flat}</note> 는 <term>증 (_)도</term> 와 같습니다. 빈칸을 채워보세요.`,
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
        "extend": false,
        "rest": false,
        "height": [-2, 1],
        "accidental": ["x", "x"],
        "noteDecoration": ["x", "x"]
    }, {
        "objectType": "n",
        "length": standardLen,
        "extend": false,
        "rest": false,
        "height": [-2, 3],
        "accidental": ["x", "x"],
        "noteDecoration": ["x", "x"]
    }, {
        "objectType": "n",
        "length": standardLen,
        "extend": false,
        "rest": false,
        "height": [-2, 4],
        "accidental": ["x", "f"],
        "noteDecoration": ["x", "x"]
    }
    ],
    "checkType": "Input",
    "checkAnswer": ["6"],
    "inputMode": "text"
},



];

export default LearnIntervalData;
