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

const LearnChordData = [{
    "pageId": 1,
    "inst": `<term>Triad</term> is a kind of chord which three notes are stacked. <br>
            The name of the lowest note is <term>Bass note</term>. <br>
            Play the <term>Bass note</term> of the following <term>Triad</term>.`,
    "inst_kr": `<term>3화음</term>은 세 개의 음이 쌓여있는 화음을 말합니다. <br>
                이 중, 가장 낮은 음을 <term>근음</term>이라 합니다. <br>
                아래 <term>3화음</term>의 <term>근음</term>을 연주하세요.`,
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
            "height": [-2, 0, 2],
            "accidental": ["x", "x", "x"],
            "noteDecoration": ["x", "x", "x"]
        }
        
    ],
    "checkType": "Play",
    "checkAnswer": [["C4"]],
    "inputMode": "allKeys"
}, {
    "pageId": 2,
    "inst": `A <term>Triad</term> is called a <term>Major triad</term> when the second and third note of the <term>Triad</term> <br> 
            forms <term>Major 3rd</term> and <term>Perfect 5th</term> interval with the <term>Bass note</term>, respectively. <br>
            Find and play the <term>Major triad</term> in below sheet.`,
    "inst_kr": `<term>3화음</term> 의 두번째와 세번째 음이 각각 <term>근음</term> 과 <term>장 3도</term> 음정, <term>완전 5도</term> 음정을 이룰 때, 이 화음을 <term>장3화음</term> 이라고 합니다. <br></br>
                밑의 악보에서 <term>장3화음</term>을 찾아서 연주하세요.`,
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
            "height": [-2, 0, 3],
            "accidental": ["x", "x", "x"],
            "noteDecoration": ["x", "x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [1, 3, 5],
            "accidental": ["x", "x", "x"],
            "noteDecoration": ["x", "x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-3, 1, 3],
            "accidental": ["x", "x", "x"],
            "noteDecoration": ["x", "x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1, 0, 2],
            "accidental": ["x", "x", "x"],
            "noteDecoration": ["x", "x", "x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["F4", "A4", "C5"]],
    "inputMode": "allKeys"
}, 

{
    "pageId": 3,
    "inst": `A <term>Triad</term> is called a <term>minor triad</term> when the second and third note of the <term>Triad</term> <br> 
            forms <term>minor 3rd</term> and <term>Perfect 5th</term> interval with the <term>Bass note</term>, respectively. <br>
            Find and play the <term>minor triad</term> in below sheet.`,
    "inst_kr": `<term>3화음</term> 의 두번째와 세번째 음이 각각 <term>근음</term> 과 <term>단 3도</term> 음정, <term>완전 5도</term> 음정을 이룰 때, 이 화음을 <term>단3화음</term> 이라고 합니다. <br></br>
                밑의 악보에서 <term>단3화음</term>을 찾아서 연주하세요.`,
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
            "height": [-3, -2, 2],
            "accidental": ["x", "x", "x"],
            "noteDecoration": ["x", "x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1, 3, 5],
            "accidental": ["x", "x", "x"],
            "noteDecoration": ["x", "x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2, 0, 2],
            "accidental": ["x", "x", "x"],
            "noteDecoration": ["x", "x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1, 1, 3],
            "accidental": ["x", "x", "x"],
            "noteDecoration": ["x", "x", "x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["D4", "F4", "A4"]],
    "inputMode": "allKeys"
}, 

{
    "pageId": 4,
    "inst": `A <term>Triad</term> is named after it's <term>Bass note</term> and whether it is <term>Major triad</term> or <term>minor triad</term>. <br>
            For example, a <term>Triad</term> of <absolute>C</absolute>-<absolute>E</absolute>-<absolute>G</absolute> is named <term>C Major</term>. <br>
            a <term>Triad</term> of <absolute>D</absolute>-<absolute>F</absolute>-<absolute>A</absolute> is called <term>(_ _____)</term>. Can you fill in the blank?`,
    "inst_kr": `<term>3화음</term>의 이름은 그 화음의 <term>근음</term>과 <term>장/단3화음</term>인지의 여부를 통해 결정됩니다. <br></br>
                예를 들어, <absolute>C</absolute>-<absolute>E</absolute>-<absolute>G</absolute>의 3화음은 <term>C 장화음</term> 이라고 합니다. <br></br>
                <absolute>D</absolute>-<absolute>F</absolute>-<absolute>A</absolute> 의 3화음은 <term>(_ _____)</term> 라고 합니다. 빈칸을 채워보세요.`,
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
            "height": [-2, 0, 2],
            "accidental": ["x", "x", "x"],
            "noteDecoration": ["x", "x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1, 1, 3],
            "accidental": ["x", "x", "x"],
            "noteDecoration": ["x", "x", "x"]
        }
    ],
    "checkType": "Input",
    "checkAnswer": ["D minor", "Dminor", "Dm", "D Minor", "DMinor", "D 단화음"],
    "inputMode": "text"
},

{
    "pageId": 5,
    "inst": `A <term>Triad</term> is called an <term>Augmented triad</term> when the second and third note of the <term>Triad</term> <br> 
            forms <term>Major 3rd</term> and <term>Augmented 5th</term> interval with the <term>Bass note</term>, respectively. <br>
            Find and play the <term>Augmented triad</term> in below sheet.`,
    "inst_kr": `<term>3화음</term> 의 두번째와 세번째 음이 각각 <term>근음</term> 과 <term>장 3도</term> 음정, <term>증 5도</term> 음정을 이룰 때, 이 화음을 <term>증3화음</term> 이라고 합니다. <br></br>
                밑의 악보에서 <term>증3화음</term>을 찾아서 연주하세요.`,
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
            "height": [-3, -2, 2],
            "accidental": ["x", "x", "x"],
            "noteDecoration": ["x", "x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1, 3, 5],
            "accidental": ["x", "x", "x"],
            "noteDecoration": ["x", "x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2, 0, 2],
            "accidental": ["x", "x", "x"],
            "noteDecoration": ["x", "x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1, 1, 3],
            "accidental": ["x", "x", "s"],
            "noteDecoration": ["x", "x", "x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["D4", "F4", "A4"]],
    "inputMode": "allKeys"
},

{
    "pageId": 6,
    "inst": `A <term>Triad</term> is called a <term>Diminished triad</term> when the second and third note of the <term>Triad</term> <br> 
            respectively forms <term>minor 3rd</term> and <term>Diminished 5th</term> interval with the <term>Bass note</term>. <br>
            Find and play the <term>Diminished triad</term> in below sheet.`,
    "inst_kr": `<term>3화음</term> 의 두번째와 세번째 음이 각각 <term>근음</term> 과 <term>단 3도</term> 음정, <term>감 5도</term> 음정을 이룰 때, 이 화음을 <term>감3화음</term> 이라고 합니다.<br></br>
                밑의 악보에서 <term>감3화음</term> 을 찾아서 연주하세요.`,
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
            "height": [-3, -2, 2],
            "accidental": ["x", "x", "x"],
            "noteDecoration": ["x", "x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1, 3, 5],
            "accidental": ["x", "x", "x"],
            "noteDecoration": ["x", "x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-2, 0, 2],
            "accidental": ["x", "x", "x"],
            "noteDecoration": ["x", "x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1, 1, 3],
            "accidental": ["x", "x", "f"],
            "noteDecoration": ["x", "x", "x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["D4", "F4", "G#4"]],
    "inputMode": "allKeys"
},

{
    "pageId": 7,
    "inst": `Same naming scheme is applied to <term>Augmented</term> and <term>Diminished triad</term>. <br>
            For example, a <term>Triad</term> of <absolute>B</absolute>-<absolute>D${sharp}</absolute>-<absolute>G</absolute> is named <term>B Augmented</term>. <br>
            a <term>Triad</term> of <absolute>E</absolute>-<absolute>G</absolute>-<absolute>B${flat}</absolute> is called <term>(_ _____)</term>. Can you fill in the blank?`,
    "inst_kr": `이름 붙이는 규칙은 <term>증/감3화음</term> 에도 적용됩니다. <br></br>
                예를 들어, <absolute>B</absolute>-<absolute>D${sharp}</absolute>-<absolute>G</absolute>의 3화음은 <term>B 증화음</term> 이라고 합니다. <br></br>
                <absolute>E</absolute>-<absolute>G</absolute>-<absolute>B${flat}</absolute> 의 3화음은 <term>(_ _____)</term> 라고 합니다. 빈칸을 채워보세요.`,
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
            "height": [-3, -1, 2],
            "accidental": ["x", "s", "x"],
            "noteDecoration": ["x", "x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [0, 2, 4],
            "accidental": ["x", "x", "f"],
            "noteDecoration": ["x", "x", "x"]
        }
    ],
    "checkType": "Input",
    "checkAnswer": ["E Diminished", "E 감화음"],
    "inputMode": "text"
},

{
    "pageId": 8,
    "inst": `A <term>seventh chord</term> is a kind of chord which four notes are stacked. <br></br>
            When not otherwise specified, <term>seventh chord</term> usually refers to <term>Dominant Seventh</term>. <br></br>
            Dominant seventh is a chord which an additional note is added to a Major triad which forms a minor 7th with the root. <br></br>
            For example, the stacked <absolute>C</absolute>-<absolute>E</absolute>-<absolute>G</absolute>-<absolute>B${flat}</absolute> is <term>C Dominant seventh</term>. Play the seventh chord.`,
    "inst_kr": `<term>7화음</term>은 4개의 음이 쌓인 화음입니다. 달리 설명이 없으면, 7화음은 보통 <term>딸림7화음</term>을 일컫습니다. <br></br>
                <term>딸림7화음</term>은 <term>장3화음</term>에 <term>근음</term>과 <term>단7도</term>를 이루는 음이 추가된 것입니다. <br></br>
                예를 들어, <absolute>C</absolute>-<absolute>E</absolute>-<absolute>G</absolute>-<absolute>B${flat}</absolute> 은 <term>C 딸림7화음</term>입니다. <br></br>
                <term>딸림7화음</term>을 연주해보세요.`,
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
            "height": [-2, 0, 2, 4],
            "accidental": ["x", "x", "x", "f"],
            "noteDecoration": ["x", "x", "x", "x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["C4", "E4", "G4", "A#4"]],
    "inputMode": "allKeys"
},

{
    "pageId": 9,
    "inst": `A <term>Major seventh</term> is a chord which an additional note is added to a <term>Major triad</term> which forms a <term>Major 7th</term> with the root. <br></br>
            For example, the stacked <absolute>C</absolute>-<absolute>E</absolute>-<absolute>G</absolute>-<absolute>B</absolute> is <term>C Major seventh</term>. Play the Major seventh.`,
    "inst_kr": `<term>장7화음</term>은 <term>장3화음</term>에 <term>근음</term>과 <term>장7도</term>를 이루는 음이 추가된 것을 말합니다. <br></br>
                예를 들어, <absolute>C</absolute>-<absolute>E</absolute>-<absolute>G</absolute>-<absolute>B</absolute>는 <term>C 장7화음</term>이라 합니다. <br></br>
                <term>장7화음</term>을 연주해보세요.`,
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
            "height": [-2, 0, 2, 4],
            "accidental": ["x", "x", "x", "x"],
            "noteDecoration": ["x", "x", "x", "x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["C4", "E4", "G4", "B4"]],
    "inputMode": "allKeys"
},

{
    "pageId": 10,
    "inst": `A <term>minor seventh</term> is a chord which an additional note is added to a minor triad which forms a <term>minor 7th</term> with the root, <br></br>
            and <term>Diminished seventh</term> is when the added note forms <term>diminished 7th</term> with the root. <br></br>
            For example, the stacked <absolute>D</absolute>-<absolute>F</absolute>-<absolute>A</absolute>-<absolute>C</absolute> is <term>EDminor seventh</term>. <br></br>
            The Stacked <absolute>D</absolute>-<absolute>F</absolute>-<absolute>A</absolute>-<absolute>B</absolute> is <term>D diminished seventh</term>. <br></br>
            Play the minor seventh.`,
    "inst_kr": `<term>단3화음</term>에 <term>근음</term>과 <term>단7도</term>를 이루는 음이 추가되면 <term>단7화음</term>, <term>감7도</term>를 이루는 음이 추가되면 <term>감7화음</term>이라고 합니다. <br></br>
                예를 들어, <absolute>D</absolute>-<absolute>F</absolute>-<absolute>A</absolute>-<absolute>C</absolute> 는 <term>D 단7화음</term>이며,
                <absolute>D</absolute>-<absolute>F</absolute>-<absolute>A</absolute>-<absolute>B</absolute> 는 <term>D 감7화음</term>입니다. <br></br>
                <term>단 7화음</term>을 연주해보세요.`,
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
            "height": [-1, 1, 3, 5],
            "accidental": ["x", "x", "x", "x"],
            "noteDecoration": ["x", "x", "x", "x"]
        }, {
            "objectType": "n",
            "length": standardLen,
            "extend": false,
            "rest": false,
            "height": [-1, 1, 3, 4],
            "accidental": ["x", "x", "x", "x"],
            "noteDecoration": ["x", "x", "x", "x"]
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["D4", "F4", "A4", "C5"]],
    "inputMode": "allKeys"
},


];

export default LearnChordData;
