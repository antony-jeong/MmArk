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

const Img_openRepeat = '<svg>openRepeat</svg>';
const Img_closeRepeat = '<svg>closeRepeat</svg>';
const Img_dacapo = '<svg>dacapo</svg>';
const Img_coda = '<svg>coda</svg>';
const Img_fine = '<svg>fine</svg>';
const Img_segno = '<svg>segno</svg>';
const Img_dalsegno = '<svg>dalsegno</svg>';
const Img_fermata = '<svg>fermata</svg>';
const Img_dBarline = '<svg>doubleBarline</svg>';

const LearnRoadmapSignData = [{
    "pageId": 1,
    "inst": `The <term>repeat close mark</term> ${Img_closeRepeat} redirects the flow of the sheet and makes the sheet to start again from the beginning.<br></br>
            Play the sheet in the correct order!`,
    "inst_kr": `<term>닫는 도돌이표</term> ${Img_closeRepeat} 는 그 지점에서 악보의 처음으로 돌아가게 만듭니다. <br></br>
            악보를 알맞은 순서로 연주해보세요!`,
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
            "objectType": "b",
            "type": "c"
        }, 
        
    ],
    "checkType": "Play",
    "checkAnswer": [["C4", "D4", "E4", "C4", "D4", "E4"]],
    "inputMode": "allKeys"
}, {
    "pageId": 2,
    "inst": `When there is <term>repeat open mark</term> ${Img_openRepeat} on the sheet, <br></br>
            the <term>repeat close mark</term> ${Img_closeRepeat} makes the sheet to restart from the open mark.<br></br>
            Play the sheet in the correct order!`,
    "inst_kr": `<term>여는 도돌이표</term> ${Img_openRepeat} 가 있을 때는 <term>닫는 도돌이표</term>를 만났을때 여는 도돌이표에서부터 다시 시작합니다. <br></br>
                악보를 알맞은 순서로 연주해보세요!`,
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
            "length": 1,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 1,
            "extend": false,
            "rest": false,
            "height": [-1],
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
            "length": 1,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "c"
        }, {
            "objectType": "b",
            "type": "o"
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
            "length": 1,
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
            "objectType": "b",
            "type": "c"
        }, 
    ],
    "checkType": "Play",
    "checkAnswer": [["C4", "D4", "E4", "C4","C4", "D4", "E4", "C4", "E4", "F4", "G4", "E4", "F4", "G4"]],
    "inputMode": "allKeys"
}, 

{
    "pageId": 3,
    "inst": 
            `A <term>Da Capo</term>${Img_dacapo} makes the sheet to restart from the beginning.<br></br>
            Play the sheet in the correct order!`,
    "inst_kr": `<term>다 카포</term>${Img_dacapo} 를 만났을 때는 악보의 처음부터 다시 시작합니다. <br></br>
                악보를 알맞은 순서로 연주해보세요!`,
        "ds": [{
            "objectType": "p",
            "bpm": 360,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "n",
            "length": 1,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 1,
            "extend": false,
            "rest": false,
            "height": [-1],
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
            "length": 1,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "b",
            "barlineDecoration": "dc"
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["C4", "D4", "E4", "C4", "C4", "D4", "E4", "C4"]],
    "inputMode": "allKeys"
}, 

{
    "pageId": 4,
    "inst": 
            `Every repeat stops when meeting the <term>fine</term>${Img_fine}.<br></br>
            Play the sheet in the correct order!`,
    "inst_kr": `반복 도중에 <term>피네</term>${Img_fine} 를 만났을 때는 연주를 멈춥니다. <br></br>
                악보를 알맞은 순서로 연주해보세요!`,
        "ds": [{
            "objectType": "p",
            "bpm": 360,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "n",
            "length": 1,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 1,
            "extend": false,
            "rest": false,
            "height": [-1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "b",
            "barlineDecoration": "fi"
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
            "length": 1,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "b",
            "barlineDecoration": "dc"
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["C4", "D4", "E4", "C4", "C4", "D4"]],
    "inputMode": "allKeys"
}, 

{
    "pageId": 5,
    "inst": 
            `A <term>fermata</term>${Img_fermata} on a <term>double barline</term>${Img_dBarline} works same as fine <term>fine</term>${Img_fine}.<br></br>
            Play the sheet in the correct order!`,
    "inst_kr": `<term>겹세로줄</term>${Img_dBarline} 위의 <term>페르마타</term>${Img_fermata} 는 <term>피네</term>${Img_fine} 와 같습니다. <br></br>
                악보를 알맞은 순서로 연주해보세요!`,
        "ds": [{
            "objectType": "p",
            "bpm": 360,
            "bpmUnit8": 2
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "n",
            "length": 1,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 1,
            "extend": false,
            "rest": false,
            "height": [-1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "d",
            "barlineDecoration": "fe"
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
            "length": 1,
            "extend": false,
            "rest": false,
            "height": [-2],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "b",
            "barlineDecoration": "dc"
        }
    ],
    "checkType": "Play",
    "checkAnswer": [["C4", "D4", "E4", "C4", "C4", "D4"]],
    "inputMode": "allKeys"
},


];

export default LearnRoadmapSignData;
