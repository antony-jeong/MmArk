import React from 'react';

function ParserHelper({ desc }){
    var groups = desc.match(/(?:^|[<>])[^<>]+/g);
    for (var i=0; i<groups.length; i++) {
        if(groups[i].startsWith(">")) {
            groups[i] = groups[i].replace(/^>/, "");
        } else if (groups[i].startsWith("<")) {
            groups[i] += ">";
        }
    }

    function stripb(desc) {
        return desc.replace("<", "").replace(">", "");
    }

    var layer = [];
    var temp = [];
    for (var j = 0; j < groups.length; j++) {
        if (groups[j].startsWith("</")) {
            let poppin = layer.pop();
            if ('/'+poppin.key === stripb(groups[j])) {
                if (temp.length === 0) {
                    if(poppin.index !== 0) temp.push({ start: 0, end: poppin.index - 1, depth: 0, class: "text" });
                } else if (temp[temp.length-1].end < poppin.index - 1) {
                    temp.push({ start: temp[temp.length-1].end + 1, end: poppin.index - 1, depth: 0, class: "text" });                    
                }
                temp.push({ start: poppin.index, end: j, depth: layer.length, class: poppin.key });
            } else {
                console.error("ERROR : DATA CLOSURE UNVALID");
            }
        } else if (groups[j].startsWith("<")) {
            layer.push({ key: stripb(groups[j]), index: j });
        } else if (j===groups.length-1 && temp[temp.length-1] && temp[temp.length-1].end!==j)
           temp.push({start: j, end: j, depth: 0, class: "text"});
    }

    //console.log(temp);
    if (temp.length === 0) return groups[0];
    return temp.map((obj) => {
        switch (obj.class) {
            case "text":
                return `${groups.slice(obj.start, obj.end + 1).join("")}`;
            case "br":
                return "<br/>";
            case "svg":
                switch (groups.slice(obj.start+1, obj.end).join("")) {
                    case "wholeNote":
                        return `<svg id="svg1437" x="0px" y="0px" viewBox="0 0 15 10" style="enable-background:new 0 0 15 10; width:1.2rem"><
                            style type="text/css">.st0{opacity: 0.9;enable-background:new;}</style>
                            <path id="path3937" class="st0" d="M7,0C3,0.2-0.1,2.3-0.1,5c0,2.8,3.4,5,7.5,5s7.5-2.2,7.5-5s-3.4-5-7.5-5C7.3,0,7.1,0,7,0z M5.7,1
                                C6.8,0.8,8,1.4,9.1,2.6c1.6,1.8,2.2,4.2,1.3,5.5l0,0C9.4,9.3,7.3,9,5.6,7.2C4,5.5,3.4,3,4.4,1.7C4.7,1.2,5.2,1,5.7,1z"/>
                            </svg>`;
                    case "halfNote":
                        return `<svg id="svg1463" x="0px" y="0px" viewBox="0 0 15 45" style="enable-background:new 0 0 15 45; width:0.8rem">
                            <style type="text/css">
                                .st0{opacity:0.9;fill-rule:evenodd;clip-rule:evenodd;enable-background:new    ;}
                                .st1{fill:none;stroke:#000000;stroke-width:2;}
                            </style>
                            <g id="g10997" transform="matrix(-1,0,0,-1,247.8306,258.8548)">
                                <path id="path10999" class="st0" d="M237.4,215.2c-3.5,2-5.4,5.6-4.2,8.3c1.2,2.9,5.4,3.7,9.4,1.8c4-1.9,6.2-5.8,4.9-8.6
                                    s-5.4-3.7-9.4-1.8C237.9,215,237.6,215.1,237.4,215.2z M238.5,217.7c0.2-0.1,0.5-0.2,0.8-0.4c3.4-1.6,6.6-1.7,7.3-0.2
                                    s-1.6,4-4.9,5.7c-3.4,1.6-6.6,1.7-7.3,0.2C233.8,221.6,235.6,219.3,238.5,217.7z"/>
                                <path id="path11001" class="st1" d="M233.6,222.1v36.7"/>
                            </g>
                            </svg>`;
                    case "quarterNote":
                        return `<svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                            y="0px" viewBox="0 0 15 45" style="enable-background:new 0 0 15 45; width:0.8rem;">
                        <style type="text/css">
                            .st1{fill:none;stroke:#000000;stroke-width:2;}
                        </style>
                        <line class="st1" x1="14.3" y1="36.7" x2="14.3" y2="0"/>
                        <ellipse transform="matrix(0.897 -0.442 0.442 0.897 -16.3282 7.2995)" cx="7.5" cy="38.7" rx="7.8" ry="5.9"/>
                        </svg>`;
                    case "eighthNote":
                        return `<svg version="1.1" id="svg1533" xmlns:svg="http://www.w3.org/2000/svg"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 45"
                                    style="enable-background:new 0 0 25 45; width:1.35rem">
                            <style type="text/css">
                                .st0{opacity:0.9;fill-rule:evenodd;clip-rule:evenodd;enable-background:new    ;}
                                .st1{fill:none;stroke:#000000;stroke-width:2;}
                                .st2{fill-rule:evenodd;clip-rule:evenodd;}
                            </style>
                            <g id="g12994" transform="translate(-427.1495,-34.28441)">
                                <path id="path12112" class="st0" d="M431.6,68.1c-3.4,2-5.2,5.6-4.1,8.3c1.2,2.9,5.3,3.7,9.1,1.8c3.9-1.9,6-5.8,4.8-8.7
                                    c-1.2-2.9-5.3-3.7-9.1-1.8C432.1,67.9,431.8,68,431.6,68.1z"/>
                                <path id="path12114" class="st1" d="M441.3,71.1V34.3"/>
                                <path id="path12116" class="st2" d="M441.2,35.3c-0.6,6.9,4.9,9.4,7.5,12.6c2.5,3.1,3.5,6.6,3.4,9.9c0,0.9-0.2,4.7-2.6,8.5
                                    c3.2-9.6,0.2-13.5-2.7-16.5C443.3,46.1,440.7,42.6,441.2,35.3z"/>
                            </g>
                            </svg>`
                    
                    case "sixteenthNote":
                        return `<svg id="svg1572"x="0px" y="0px" viewBox="0 0 25 45"
                                    style="enable-background:new 0 0 25 45; width:1.35rem">
                            <style type="text/css">
                                .st0{opacity:0.9;fill-rule:evenodd;clip-rule:evenodd;enable-background:new    ;}
                                .st1{fill:none;stroke:#000000;stroke-width:1.5;}
                                .st2{fill-rule:evenodd;clip-rule:evenodd;}
                            </style>
                            <g id="g16559" transform="translate(-393.8446,-234.1771)">
                                <path id="path16482" class="st0" d="M398.4,268.8c-3.5,1.9-5.3,5.2-4.2,7.7c1.2,2.7,5.4,3.4,9.3,1.7c3.9-1.8,6.1-5.4,4.9-8
                                    c-1.2-2.7-5.4-3.4-9.3-1.7C398.9,268.6,398.6,268.7,398.4,268.8z"/>
                                <path id="path16484" class="st1" d="M408.2,271.6v-37.5"/>
                                <path id="path16486" class="st2" d="M407.7,234.9c-0.6,6.4,5,8.7,7.7,11.7c2.6,2.8,3.5,6.1,3.4,9.1c0,0.8-0.3,4.4-2.7,7.9
                                    c3.2-8.9,0.2-12.5-2.7-15.3C409.8,244.9,407.2,241.7,407.7,234.9z"/>
                                <path id="path16488" class="st2" d="M407.5,241c-0.6,6.4,5,8.7,7.7,11.7c2.6,2.8,3.5,6.1,3.4,9.1c0,0.8-0.3,4.4-2.7,7.9
                                    c3.2-8.9,0.2-12.5-2.7-15.3C409.6,251,406.9,247.8,407.5,241z"/>
                            </g>
                            </svg>`;
                        case "barline":
                            return `<svg x="0px" y="0px" viewBox="0 0 1.5 50" style="enable-background:new 0 0 1 50; height:50px;">
                                <rect x="0" y="0" width="1.5" height="50"/>
                                </svg>`;
                        case "terminalBarline":
                            return `<svg x="0px" y="0px" viewBox="0 0 6 50" style="enable-background:new 0 0 6 50; width:6px">
                                    <rect x="0" y="0" width="1.1" height="50"/>
                                    <rect x="2.3" y="0" width="3.7" height="50"/>
                                    </svg>
                                    `;
                        case "time_44":
                            return `<span
                                        class="option-cell"
                                        style="width:27px"
                                    >
                                        <svg id="svg9919" viewBox="0 0 27 23" style="width:27px; padding:0; margin:0;"><defs><style>.cls-1{isolation:isolate;}</style></defs><g class="cls-1"><path d="M13.14,15.31H5.52v-2.5L15.67.24h2.89V13h2.92v2.3H18.56v3.34a6.39,6.39,0,0,0,.11,1.55,1.27,1.27,0,0,0,.64.67,2.74,2.74,0,0,0,1.32.29h.85V23H10.12V21.16H11a2.9,2.9,0,0,0,1.49-.28,1.22,1.22,0,0,0,.57-.61,6.24,6.24,0,0,0,.11-1.47Zm0-2.3V6.32L7.65,13Z"/></g></svg>
                                        <span style = "width: 27px; height: 1px; border-top: 2px solid black;"></span>
                                        <svg id="svg9919" viewBox="0 0 27 23" style="width:27px; padding:0; margin:0;"><defs><style>.cls-1{isolation:isolate;}</style></defs><g class="cls-1"><path d="M13.14,15.31H5.52v-2.5L15.67.24h2.89V13h2.92v2.3H18.56v3.34a6.39,6.39,0,0,0,.11,1.55,1.27,1.27,0,0,0,.64.67,2.74,2.74,0,0,0,1.32.29h.85V23H10.12V21.16H11a2.9,2.9,0,0,0,1.49-.28,1.22,1.22,0,0,0,.57-.61,6.24,6.24,0,0,0,.11-1.47Zm0-2.3V6.32L7.65,13Z"/></g></svg>
                                    </span>
                                `;
                        case "denominator_4":
                            return `<span
                            class="option-cell"
                            style="width:27px"
                                >
                                    <span style = "width: 27px; height: 1px; border-top: 2px solid black;"></span>
                                    <svg id="svg9919" viewBox="0 0 27 23" style="width:27px; padding:0; margin:0;"><defs><style>.cls-1{isolation:isolate;}</style></defs><g class="cls-1"><path d="M13.14,15.31H5.52v-2.5L15.67.24h2.89V13h2.92v2.3H18.56v3.34a6.39,6.39,0,0,0,.11,1.55,1.27,1.27,0,0,0,.64.67,2.74,2.74,0,0,0,1.32.29h.85V23H10.12V21.16H11a2.9,2.9,0,0,0,1.49-.28,1.22,1.22,0,0,0,.57-.61,6.24,6.24,0,0,0,.11-1.47Zm0-2.3V6.32L7.65,13Z"/></g></svg>
                                </span>
                            `;
                        case "numerator_4":
                            return `<span
                                        class="option-cell"
                                        style="width:27px"
                                    >
                                        <svg id="svg9919" viewBox="0 0 27 23" style="width:27px; padding:0; margin:0;"><defs><style>.cls-1{isolation:isolate;}</style></defs><g class="cls-1"><path d="M13.14,15.31H5.52v-2.5L15.67.24h2.89V13h2.92v2.3H18.56v3.34a6.39,6.39,0,0,0,.11,1.55,1.27,1.27,0,0,0,.64.67,2.74,2.74,0,0,0,1.32.29h.85V23H10.12V21.16H11a2.9,2.9,0,0,0,1.49-.28,1.22,1.22,0,0,0,.57-.61,6.24,6.24,0,0,0,.11-1.47Zm0-2.3V6.32L7.65,13Z"/></g></svg>
                                        <span style = "width: 27px; height: 1px; border-top: 2px solid black;"></span>
                                    </span>
                                `;
                        case "dottedWholeNote":
                            return `<svg x="0px" y="0px" viewBox="0 0 18 10"
                            style="enable-background:new 0 0 18 10; height:10px">
                            <style type="text/css">
                                .st0{opacity:0.9;enable-background:new    ;}
                            </style>
                            <path id="path3937" class="st0" d="M6.5,0C2.9,0.2,0,2.3,0,5c0,2.8,3.1,5,7,5s7-2.2,7-5s-3.1-5-7-5C6.9,0,6.7,0,6.5,0z M5.4,1
                                c1-0.2,2.2,0.4,3.2,1.6c1.5,1.8,2.1,4.2,1.2,5.5l0,0C8.9,9.3,6.9,9,5.3,7.2C3.7,5.5,3.3,3,4.1,1.7C4.5,1.2,4.9,1,5.4,1z"/>
                            <path d="M16.6,3.3c-0.7,0-1.3-0.8-1.3-1.7c0.1-1,0.7-1.7,1.4-1.7C17.4,0,18,0.7,18,1.7S17.4,3.3,16.6,3.3L16.6,3.3z"/>
                            </svg>
                            `;
                        case "dottedHalfNote":
                            return `<svg x="0px" y="0px" viewBox="0 0 21 45" style="enable-background:new 0 0 21 45; height:40px">
                                <style type="text/css">
                                    .st0{opacity:0.9;fill-rule:evenodd;clip-rule:evenodd;enable-background:new    ;}
                                    .st1{fill:none;stroke:#000000;stroke-width:1.5;}
                                </style>
                                <g id="g10997" transform="matrix(-1,0,0,-1,247.8306,258.8548)">
                                    <path id="path10999" class="st0" d="M237.4,215.2c-3.5,2-5.4,5.6-4.2,8.3c1.2,2.9,5.4,3.7,9.4,1.8s6.2-5.8,4.9-8.6
                                        s-5.4-3.7-9.4-1.8C237.9,215,237.6,215.1,237.4,215.2z M238.5,217.7c0.2-0.1,0.5-0.2,0.8-0.4c3.4-1.6,6.6-1.7,7.3-0.2
                                        s-1.6,4-4.9,5.7c-3.4,1.6-6.6,1.7-7.3,0.2C233.8,221.6,235.6,219.3,238.5,217.7z"/>
                                    <path id="path11001" class="st1" d="M233.6,222.1v36.7"/>
                                </g>
                                <path d="M18.9,36.5c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2.1-1.9c1.1,0,2,0.9,2,2c0,1.1-0.9,1.9-2,1.9H18.9z"/>
                                </svg>
                                `;
                        case "wholeRest":
                            return `<span
                                        class="option-cell"
                                        style="width:28px"
                                    >
                                    <span style = "width: 31px; height: 1px; border-bottom: 2px solid black;"></span>
                                    <svg x="0px" y="0px" viewBox="0 0 22 9" style="enable-background:new 0 0 22 9; width:21">
                                    <sodipodi:namedview  bordercolor="#666666" borderopacity="1" fit-margin-bottom="0" fit-margin-left="0" fit-margin-right="0" fit-margin-top="0" gridtolerance="10" guidetolerance="10" id="namedview30" inkscape:current-layer="svg2" inkscape:cx="15.812761" inkscape:cy="-4.8799132" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-height="1018" inkscape:window-maximized="1" inkscape:window-width="1920" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:zoom="8.3531602" objecttolerance="10" pagecolor="#ffffff" showgrid="false">
                                        </sodipodi:namedview>
                                    <a id="a18" transform="translate(-13.174896,-3.8302961)">
                                        <path id="path20" inkscape:connector-curvature="0" d="M34.5,12.8H13.8c-0.4,0-0.7-0.2-0.7-0.7V4.5c0-0.4,0.2-0.7,0.7-0.7h20.7
                                            c0.4,0,0.7,0.2,0.7,0.7v7.9C35.2,12.6,35,12.8,34.5,12.8z"/>
                                    </a>
                                    </svg>
                                    </span>
                                `;
                        case "halfRest":
                            return `<span
                                        class="option-cell"
                                        style="width:28px"
                                    >
                                    <svg x="0px" y="0px" viewBox="0 0 22 9" style="enable-background:new 0 0 22 9; width:21">
                                    <sodipodi:namedview  bordercolor="#666666" borderopacity="1" fit-margin-bottom="0" fit-margin-left="0" fit-margin-right="0" fit-margin-top="0" gridtolerance="10" guidetolerance="10" id="namedview30" inkscape:current-layer="svg2" inkscape:cx="15.812761" inkscape:cy="-4.8799132" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-height="1018" inkscape:window-maximized="1" inkscape:window-width="1920" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:zoom="8.3531602" objecttolerance="10" pagecolor="#ffffff" showgrid="false">
                                        </sodipodi:namedview>
                                <a id="a18" transform="translate(-13.174896,-3.8302961)">
                                    <path id="path20" inkscape:connector-curvature="0" d="M34.5,12.8H13.8c-0.4,0-0.7-0.2-0.7-0.7V4.5c0-0.4,0.2-0.7,0.7-0.7h20.7
                                        c0.4,0,0.7,0.2,0.7,0.7v7.9C35.2,12.6,35,12.8,34.5,12.8z"/>
                                </a>
                                </svg>
                                <span style = "width: 31px; height: 1px; border-top: 2px solid black;"></span>
                                    </span>
                                `;
                        case "quarterRest":
                            return `<svg =x="0px" y="0px" viewBox="0 0 13 40"
                                            style="enable-background:new 0 0 13 40; width:11">
                                    <sodipodi:namedview  bordercolor="#666666" borderopacity="1" fit-margin-bottom="0" fit-margin-left="0" fit-margin-right="0" fit-margin-top="0" gridtolerance="10" guidetolerance="10" id="namedview84" inkscape:current-layer="svg2" inkscape:cx="246.92931" inkscape:cy="-42.69206" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-height="1018" inkscape:window-maximized="1" inkscape:window-width="1920" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:zoom="2" objecttolerance="10" pagecolor="#ffffff" showgrid="false">
                                        </sodipodi:namedview>
                                    <a id="a56" transform="translate(-24.2844,-5.0813001)">
                                        <path id="path58" inkscape:connector-curvature="0" d="M24.3,33.7c0-1.6,0.5-2.3,2-2.3c1.6,0,3.8,0.7,5.8,1.7l-6.5-8.8
                                            c-0.3-0.5-0.5-0.9-0.5-1.4c0-1.9,2.4-3.7,4.3-5.5c1.2-1.2,1.8-2.9,1.8-4.6c0-1.3-0.4-2.7-1.2-3.9l-1.7-2.3C28.1,6.3,28,6.1,28,5.9
                                            c0-0.5,0.4-0.8,0.8-0.8c0.2,0,0.4,0.1,0.5,0.3l7.4,10.1c0.3,0.5,0.5,0.9,0.5,1.4c0,1.9-2.4,3.7-4.3,5.5c-1.2,1.2-1.8,2.9-1.8,4.6
                                            c0,1.3,0.3,2.7,1.2,3.9l4.1,5.5c0.1,0.2,0.2,0.4,0.2,0.6c0,0.5-0.4,0.9-0.8,0.9c-0.2,0-0.4-0.1-0.6-0.3c-0.9-1.2-3.1-2.1-4.7-2.1
                                            c-2,0-2.6,1.5-2.6,3.7c0,2,0.5,4.1,1.4,5.3c0.2,0.3,0,0.7-0.3,0.7c-0.1,0-0.2,0-0.3-0.1C26.6,42,24.3,36.7,24.3,33.7z"/>
                                    </a>
                                    </svg>`;
                        case "eighthRest":
                                return `<svg x="0px" y="0px" viewBox="0 0 15 27"
                                            style="enable-background:new 0 0 15 27; width: 14px">
                                    <sodipodi:namedview  bordercolor="#666666" borderopacity="1" fit-margin-bottom="0" fit-margin-left="0" fit-margin-right="0" fit-margin-top="0" gridtolerance="10" guidetolerance="10" id="namedview84" inkscape:current-layer="svg2" inkscape:cx="233.64363" inkscape:cy="-80.051987" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-height="1018" inkscape:window-maximized="1" inkscape:window-width="1920" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:zoom="2" objecttolerance="10" pagecolor="#ffffff" showgrid="false">
                                        </sodipodi:namedview>
                                    <a id="a68" transform="translate(-41.4163,-5.8453001)">
                                        <path id="path70" inkscape:connector-curvature="0" d="M45.9,32.2L53,13.3c-2,0.7-4.1,1.4-6.4,1.4c-2.8,0-5.3-2-5.3-4.5
                                            c0-2.3,2-4.3,4.3-4.3c1.5,0,2.8,0.9,3.3,2.3c0.5,1.6,0.3,3.4,2,3.4c1,0,3.3-2.7,3.6-3.6c0.3-0.7,1.3-0.7,1.8,0L49,32.2
                                            c-0.5,0.5-1,0.7-1.5,0.7C46.9,32.7,46.4,32.7,45.9,32.2z"/>
                                    </a>
                                    </svg>`;
                        case "tempo":
                            return `<span
                                        class="tempo-svg"
                                        style="width:27px: margin:0 10px"
                                    >
                                        <svg x="0px" y="0px" viewBox="0 0 15 45" style="enable-background:new 0 0 15 45; width:0.5rem;">
                                        <style type="text/css">
                                            .st1{fill:none;stroke:#000000;stroke-width:2;}
                                        </style>
                                        <line class="st1" x1="14.3" y1="36.7" x2="14.3" y2="0"/>
                                        <ellipse transform="matrix(0.897 -0.442 0.442 0.897 -16.3282 7.2995)" cx="7.5" cy="38.7" rx="7.8" ry="5.9"/>
                                        </svg>
                                        <span style="font-size:1rem">= 100</span>
                                    </span>
                                `;
                        case "doubleBarline":
                            return `<svg x="0px" y="0px" viewBox="0 0 6 50" style="enable-background:new 0 0 6 50; width:6px">
                            <rect x="0" y="0" width="1.3" height="50"/>
                            <rect x="3.7" y="0" width="1.3" height="50"/>
                            </svg>`;
                    default:
                        return '';
                }
            default:
                return `<span class=${obj.class}>${ParserHelper({ desc: groups.slice(obj.start+1, obj.end).join("") })}</span>`;
        };
    }).join("");
};

const Parser = ({ desc }) => {
    return (
        <span dangerouslySetInnerHTML={{__html: ParserHelper({desc:desc})}}></span>
    );
};

export default Parser;
