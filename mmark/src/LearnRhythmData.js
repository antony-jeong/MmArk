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

const Img_barline = '<svg>barline</svg>';
const Img_barline_t = '<svg>terminalBarline</svg>';
const Img_barline_d = '<svg>doubleBarline</svg>';
const Img_time_44 = '<svg>time_44</svg>';
const Img_note_arr = ['<svg>wholeNote</svg>', '<svg>halfNote</svg>', '<svg>quarterNote</svg>', '<svg>eighthNote</svg>', '<svg>sixteenthNote</svg>'];
const Img_dotted_note_arr = ['<svg>dottedWholeNote</svg>', '<svg>dottedHalfNote</svg>', '<svg>dottedQuarterNote</svg>', '<svg>dottedEighthNote</svg>', '<svg>dottedSixteenthNote</svg>'];
const Img_rest_arr = ['<svg>wholeRest</svg>', '<svg>halfRest</svg>', '<svg>quarterRest</svg>', '<svg>eighthRest</svg>', '<svg>sixteenthRest</svg>'];
const Img_tempo = ['<svg>tempo</svg>'];

const LearnRhythmData = [{
"pageId": 1,
"inst": `A <term>half note</term>${Img_note_arr[1]} is half the length of a <term>whole note</term>${Img_note_arr[0]}<br></br>A <term>quarter note</term>${Img_note_arr[2]} is half the length of a <term>half note</term>${Img_note_arr[1]}<br></br>How many times a <term>quarter note</term>${Img_note_arr[2]} is the sum of the notes to the right of the vertical line?`,
"inst_kr": `<term>2분음표</term>${Img_note_arr[1]}는 <term>온음표</term>${Img_note_arr[0]} 길이의 절반입니다.<br></br><term>4분음표</term>${Img_note_arr[2]}는 <term>2분음표</term>${Img_note_arr[1]} 길이의 절반입니다.<br></br> 아래의 악보 중 세로줄 오른쪽 부분은 <term>4분음표</term>${Img_note_arr[2]} 몇 개와 같을까요?`,
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
    "checkAnswer": ["9"],
    "inputMode": "text"
}, {
    "pageId": 2,
    "inst": `Each tail halves the length of the note.<br></br>A <term>eighth note</term>${Img_note_arr[3]} is half the length of a <term>quarter note</term>${Img_note_arr[2]}. A <term>sixteenth note</term>${Img_note_arr[4]} is half the length of a <term>eighth note</term>${Img_note_arr[3]}.<br></br>How many times the <term>sixteenth note</term>${Img_note_arr[4]} is the sum of the notes to the right of the vertical line?`,
    "inst_kr": `음표에 꼬리가 달릴 때마다 길이가 절반이 됩니다.<br></br> <term>8분음표</term>${Img_note_arr[3]}는 <term>4분음표</term>${Img_note_arr[2]}의 길이의 절반입니다. 마찬가지로, <term>16분음표</term>${Img_note_arr[4]}는 <term>8분음표</term>${Img_note_arr[3]}의 길이의 절반입니다.<br></br> 아래의 악보 중 세로줄 오른쪽 부분은 <term>16분음표</term>${Img_note_arr[4]} 몇 개의 길이와 같을까요?`,
    "ds": [{
            "objectType": "p",
            "bpm": 60,
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
    "checkAnswer": ["10"],
    "inputMode": "text"
}, {
    "pageId": 3,
    "inst": `The vertical lines are called <term>bar line</term>${Img_barline}. Between bar lines are called a <term>measure</term>.<br></br>However, the first measure doesn't have a starting bar line. At the end of the sheet music, there's a <term>terminal bar line</term>${Img_barline_t}<br></br>How many measures are there in the sheet music below?`,
    "inst_kr": `세로로 그어진 선들은 <term>세로줄</term></term><svg>barline</svg>이라고 부릅니다. 세로줄 사이는 <term>마디</term>라고 부릅니다.<br></br> 다만, 첫번째 마디의 경우에는 예외적으로 시작하는 세로줄이 없습니다. 악보의 끝에는 <term>끝세로줄</term>${Img_barline_t}이 있습니다. <br></br>아래 악보에는 몇 개의 마디가 있을까요?`,
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
    "checkAnswer": ["4"],
    "inputMode": "text"
}, {
    "pageId": 4,
    "inst": `Things like ${Img_time_44} are attached to the sheet music. It is called a <term>time signature</term>.<br></br>A music has a standard of note length called <term>beat</term>, and the denominator<svg>denominator_4</svg> represents a note that is the standard of a beat.<br></br>Which note is one beat here?`,
    "inst_kr": `악보를 보다 보면 ${Img_time_44}와 같은 것들을 발견할 수 있습니다. 이를 우리는 <term>박자표</term>라고 부릅니다.<br></br><term>박자</term>는 해당 악보에서 빠르기를 정의합니다. 분모<svg>denominator_4</svg>는 한 박자의 음표를 의미합니다.<br></br> 이 악보에서는 어떤 음표가 한 박자일까요?`,
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
        },  {
            "objectType": "n",
            "length": 1,
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
            "length": 3,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Input",
    "checkAnswer": ["4분음표", "quarter note", "quarter"],
    "inputMode": "text"
}, {
    "pageId": 5,
    "inst": `The numerator<svg>numerator_4</svg> indicates how many <term>beats</term> a measure has.<br></br>How many more bar lines should be drawn on this sheet music?`,
    "inst_kr": `분자<svg>numerator_4</svg>는 한 마디 안의 <term>박자</term>의 개수를 의미합니다.<br></br> 그렇다면, 이 악보에는 얼마나 더 많은 세로줄이 필요할까요?`,
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
        },  {
            "objectType": "n",
            "length": 1,
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
            "length": 3,
            "extend": false,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }
    ],
    "checkType": "Input",
    "checkAnswer": ["3"],
    "inputMode": "text"
}, {
    "pageId": 6,
    "inst": `A dot on a note means it is 1.5 times longer.<br></br>In the sheet music below, a <term>dotted half note</term>${Img_dotted_note_arr[1]} stands for three beats, so it takes up one measure.<br></br>How many more <term>eighth notes</term>${Img_note_arr[3]} can be added to the last measure?`,
    "inst_kr": `음표에 점이 붙으면 그 길이를 1.5배 증가시킵니다.<br></br>예를 들어, 아래의 <term>점2분음표</term>${Img_dotted_note_arr[1]}는 세 박자로, 한 마디를 차지합니다.<br></br> 아래의 악보에서 마지막 마디에 몇 개의 <term>8분음표</term>${Img_note_arr[3]} 가 추가될 수 있을까요?`,
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
            "length": 1,
            "extend": true,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "b"
        }, {
            "objectType": "n",
            "length": 3,
            "extend": true,
            "rest": false,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "t"
        }
    ],
    "checkType": "Input",
    "checkAnswer": ["3"],
    "inputMode": "text"
}, {
    "pageId": 7,
    "inst": `A <term>rest</term> means not to play that length.<br></br>How many beats does this rest ${Img_rest_arr[1]} means to rest?`,
    "inst_kr": `<term>쉼표</term>는 해당 박자를 연주하지 말라는 뜻입니다.<br></br> 그렇다면 이 쉼표는 ${Img_rest_arr[1]} 몇 박자를 쉬라는 뜻일까요?`,
    "ds": [{
            "objectType": "p",
            "bpm": 120,
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
            "length": 1,
            "extend": false,
            "rest": true,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "t"
        }
    ],
    "checkType": "Input",
    "checkAnswer": ["1"],
    "inputMode": "text"
}, {
    "pageId": 8,
    "inst": `A <term>whole rest</term>${Img_rest_arr[0]} is twice a <term>half rest</term>${Img_rest_arr[1]},<br></br> a <term>half rest</term>${Img_rest_arr[1]} is twice a <term>quarter rest</term>${Img_rest_arr[2]}, a <term>quarter rest</term>${Img_rest_arr[2]} is twice a <term>eighth rest</term>${Img_rest_arr[3]}.<br></br>From the <term>eighth rest</term>${Img_rest_arr[3]}, every head halves the length of the rest.<br></br>According to the sheet music below, how many beats in total should you <term>rest</term>?`,
    "inst_kr": `<term>온쉼표</term>${Img_rest_arr[0]}는 <term>이분쉼표</term>${Img_rest_arr[1]}의 길이의 두 배이고, <term>2분쉼표</term>${Img_rest_arr[1]} 는 <term>4분쉼표</term>${Img_rest_arr[2]}의 길이의 2배이고,<br></br><term>4분쉼표</term>${Img_rest_arr[2]} 는 <term>8분쉼표</term>${Img_rest_arr[3]}의 길이의 2배입니다.<term>8분쉼표</term>${Img_rest_arr[3]}부터는 머리가 추가될 때마다 그 길이가 절반이 됩니다.<br></br> 아래의 악보의 총 <term>쉼표</term>의 길이는 얼마인가요?`,
    "ds": [{
            "objectType": "p",
            "bpm": 120,
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
            "length": 0,
            "extend": false,
            "rest": true,
            "height": [1],
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
            "length": 1,
            "extend": false,
            "rest": true,
            "height": [0],
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
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": true,
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
            "length": 2,
            "extend": false,
            "rest": true,
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
            "length": 4,
            "extend": false,
            "rest": true,
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
            "length": 4,
            "extend": false,
            "rest": true,
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
            "length": 4,
            "extend": false,
            "rest": true,
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
            "objectType": "n",
            "length": 4,
            "extend": false,
            "rest": true,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "t"
        }
    ],
    "checkType": "Input",
    "checkAnswer": ["10"],
    "inputMode": "text"
}, {
    "pageId": 9,
    "inst": `<term>Rests</term> can also have dots. How many more bar lines ${Img_barline} should be drawn on the sheet music below?`,
    "inst_kr": `<term>쉼표</term>에도 점을 붙일 수가 있습니다. 아래의 악보에는 세로선을 몇 개를 더 그어야 할까요?`,
    "ds": [{
            "objectType": "p",
            "bpm": 240,
            "bpmUnit8": 1
        }, {
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "t",
            "numerator": 6,
            "denominator": 8
        }, {
            "objectType": "n",
            "length": 1,
            "extend": true,
            "rest": true,
            "height": [1],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 2,
            "extend": false,
            "rest": true,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 3,
            "extend": false,
            "rest": true,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 3,
            "extend": false,
            "rest": true,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 3,
            "extend": false,
            "rest": true,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 3,
            "extend": false,
            "rest": true,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 3,
            "extend": false,
            "rest": true,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 3,
            "extend": false,
            "rest": true,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 3,
            "extend": true,
            "rest": true,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 4,
            "extend": false,
            "rest": true,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 4,
            "extend": false,
            "rest": true,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "n",
            "length": 3,
            "extend": true,
            "rest": true,
            "height": [0],
            "accidental": ["x"],
            "noteDecoration": ["x"]
        }, {
            "objectType": "b",
            "type": "t"
        }
    ],
    "checkType": "Input",
    "checkAnswer": ["2"],
    "inputMode": "text"
}, {
    "pageId": 10,
    "inst": `The <term>tempo</term> notation ${Img_tempo[0]} indicates how many of the note is played in a minute.<br></br>In the case of the above, how many measures do you get to play per minute?`,
    "inst_kr": `<term>빠르기</term> 표기${Img_tempo[0]}는 1분에 연주될 수 있는 음표의 수를 의미합니다.<br></br> 아래의 악보의 경우에는 1분에 몇 개의 마디를 연주할 수 있을까요?`,
    "ds": [{
            "objectType": "p",
            "bpm": 100,
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
        }, {
            "objectType": "b",
            "type": "t"
        }
    ],
    "checkType": "Input",
    "checkAnswer": ["25"],
    "inputMode": "text"
}, /*{
    "pageId": 11,
    "inst": `Triplet`,
    "inst_kr": `셋잇단음표`,
    "ds": [{
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "t",
            "numerator": 2,
            "denominator": 4
        }, {
            "objectType": "r",
            "notes": [{
                    "length": 2,
                    "extend": false,
                    "rest": false,
                    "height": [0],
                    "accidental": ["x"],
                    "noteDecoration": ["o"]
                }, {
                    "length": 2,
                    "extend": false,
                    "rest": false,
                    "height": [0],
                    "accidental": ["x"],
                    "noteDecoration": ["3"]
                }, {
                    "length": 2,
                    "extend": false,
                    "rest": false,
                    "height": [0],
                    "accidental": ["x"],
                    "noteDecoration": ["c"]
                }, 
            ]
        }
    ],
    "checkType": "Input",
    "checkAnswer": ["3"],
    "inputMode": "text"
}, */{
    "pageId": 11,
    "inst": `When the beat changes, we draw a <term>double bar line</term>${Img_barline_d} and a new <term>time signature</term>${Img_time_44}.<br></br>There are no notes/rests on the sheet music below. How many <term>eighth notes</term>${Img_note_arr[3]} we should use to fill it?`,
    "inst_kr": `박자가 바뀌게 되면 <term>겹세로줄</term>${Img_barline_d}을 긋고, 새로운 <term>박자표</term>${Img_time_44}를 적습니다.<br></br>아래 악보에는 음표나 쉼표가 적혀있지 않습니다. 얼마나 많은 <term>8분음표</term>${Img_note_arr[3]}가 해당 악보를 채우기 위해 필요한가요?`,
    "ds": [{
            "objectType": "c",
            "treble": true
        }, {
            "objectType": "t",
            "numerator": 2,
            "denominator": 4
        }, {
            "objectType": "b",
            "type": "d"
        }, {
            "objectType": "t",
            "numerator": 4,
            "denominator": 4
        }, {
            "objectType": "b",
            "type": "b"
        }, {
            "objectType": "b",
            "type": "b"
        }, {
            "objectType": "b",
            "type": "d"
        }, {
            "objectType": "t",
            "numerator": 6,
            "denominator": 8
        }, {
            "objectType": "b",
            "type": "b"
        }, {
            "objectType": "b",
            "type": "t"
        }, 
    ],
    "checkType": "Input",
    "checkAnswer": ["40"],
    "inputMode": "text"
}

];

export default LearnRhythmData;
