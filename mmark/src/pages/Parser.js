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
                        case "openRepeat":
                            return `<svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                            y="0px" viewBox="0 0 14 50" style="enable-background:new 0 0 14 50;" xml:space="preserve" height="50px">
                       <rect x="4.9" y="0" width="1.1" height="50"/>
                       <rect y="0" width="3.7" height="50"/>
                       <path d="M11.6,29.1c1.3,0,2.4,1.2,2.4,2.5c-0.2,1.5-1.3,2.5-2.6,2.5C10.1,34,9,32.9,9,31.5S10.1,29.1,11.6,29.1L11.6,29.1z"/>
                       <path d="M11.6,16.9c1.3,0,2.4,1.2,2.4,2.5c-0.2,1.5-1.3,2.5-2.6,2.5C10.1,21.7,9,20.7,9,19.2S10.1,16.9,11.6,16.9L11.6,16.9z"/>
                       </svg>`;
                        case "closeRepeat":
                            return `<svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                            y="0px" viewBox="0 0 14 50" style="enable-background:new 0 0 14 50;" xml:space="preserve" height="50px">
                       <rect x="8" y="0" width="1.1" height="50"/>
                       <rect x="10.3" y="0" width="3.7" height="50"/>
                       <path d="M2.4,20.9c-1.3,0-2.4-1.2-2.4-2.5c0.2-1.5,1.3-2.5,2.6-2.5C3.9,16,5,17.1,5,18.5S3.9,20.9,2.4,20.9L2.4,20.9z"/>
                       <path d="M2.4,33.1c-1.3,0-2.4-1.2-2.4-2.5c0.2-1.5,1.3-2.5,2.6-2.5C3.9,28.3,5,29.3,5,30.8C5,32.2,3.9,33.1,2.4,33.1L2.4,33.1z"/>
                       </svg>`;
                       case "dacapo":
                            return `<svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                            y="0px" viewBox="0 0 26 12" style="enable-background:new 0 0 26 12;" xml:space="preserve" height="20px">
                       <g id="레이어_2_1_">
                           <g id="레이어_1-2">
                               <path id="path2008" d="M3.1,0.3L3.2,0h3.6C8-0.1,9.1,0.1,10.2,0.6C11,1,11.6,1.6,12,2.3c0.4,0.8,0.7,1.7,0.7,2.6
                                   c0,0.8-0.1,1.6-0.4,2.3C12,7.8,11.7,8.4,11.4,9c-0.4,0.5-0.9,1-1.4,1.5c-0.7,0.5-1.4,0.9-2.2,1.2C6.8,11.9,5.8,12,4.9,12H0
                                   l0.1-0.3c0.3,0,0.6,0,0.9-0.1c0.2-0.1,0.4-0.2,0.5-0.4c0.2-0.5,0.4-1,0.5-1.5l2-7.2C4.1,2,4.2,1.5,4.3,1.1c0-0.2-0.1-0.4-0.2-0.5
                                   C3.8,0.4,3.5,0.3,3.2,0.3H3.1z M6.1,0.7l-2.5,9c-0.1,0.4-0.2,0.8-0.3,1.3c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.1,0.1,0.2,0.2
                                   c0.2,0.1,0.5,0.1,0.7,0.1c0.8,0,1.6-0.1,2.4-0.3c0.7-0.1,1.3-0.4,1.9-0.9C9.3,9.7,9.9,8.9,10.3,8c0.4-1,0.6-2.2,0.6-3.3
                                   C11,3.6,10.6,2.5,10,1.7c-0.8-0.7-1.8-1.1-2.8-1L6.1,0.7z"/>
                               <path id="path2010" d="M11.7,10.2c0.5,0,0.8,0.4,0.8,0.9v0c0,0.2-0.1,0.5-0.2,0.6c-0.2,0.2-0.4,0.3-0.6,0.3
                                   c-0.5,0-0.8-0.4-0.8-0.9c0,0,0,0,0,0C10.9,10.6,11.3,10.2,11.7,10.2L11.7,10.2z"/>
                               <path id="path2012" d="M25.2,0l-0.8,3.7h-0.3V2.8c0-0.3-0.1-0.6-0.2-0.9c-0.1-0.3-0.2-0.5-0.4-0.7C23.2,1,23,0.8,22.7,0.8
                                   c-0.3-0.1-0.7-0.2-1-0.2c-0.9,0-1.8,0.3-2.5,0.8c-1,0.8-1.7,1.8-2.1,3c-0.4,1-0.6,2.1-0.6,3.2c0,1,0.3,1.9,0.9,2.7
                                   c0.6,0.7,1.5,1,2.4,1c0.7,0,1.4-0.2,2-0.5c0.6-0.4,1.2-1,1.6-1.6h0.4c-0.5,0.9-1.2,1.6-1.9,2.2C21,11.8,20.1,12,19.2,12
                                   c-0.8,0-1.6-0.2-2.4-0.6c-0.7-0.4-1.2-1-1.6-1.7c-0.4-0.7-0.5-1.5-0.5-2.3c0-1.3,0.3-2.5,0.9-3.7c0.6-1.1,1.5-2.1,2.6-2.8
                                   c1-0.7,2.2-1,3.3-1.1c0.6,0,1.2,0.2,1.8,0.4c0.2,0.1,0.4,0.1,0.6,0.2c0.1,0,0.2,0,0.3-0.1c0.2-0.1,0.3-0.3,0.5-0.5H25.2z"/>
                               <path id="path2014" d="M25.2,10.2c0.5,0,0.8,0.4,0.8,0.9v0c0,0.2-0.1,0.5-0.2,0.6c-0.2,0.2-0.4,0.3-0.6,0.3
                                   c-0.5,0-0.8-0.4-0.8-0.9c0,0,0,0,0,0C24.3,10.6,24.7,10.2,25.2,10.2L25.2,10.2z"/>
                           </g>
                       </g>
                       </svg>`;
                        case "coda":
                           return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.95 24.97" height="30px"><g id="레이어_2" data-name="레이어 2"><g id="레이어_2-2" data-name="레이어 2"><path d="M0,12.7,0,12l4,0a8.49,8.49,0,0,1,7-8V0h.56l0,12.56ZM11,4.81c-2.7.86-3.09,5.41-3.14,7.07l3,0Z"/><path d="M23,12.7c0-1.53,0,.71,0-.7l-4,0a8.49,8.49,0,0,0-7-8V0h-.55l0,12.56C15.37,12.57,18.88,12.7,23,12.7Zm-11-7.89c2.7.86,3.09,5.41,3.14,7.07l-3,0Z"/><path d="M0,12.27c0,1.53,0-.71,0,.7l4,0a8.49,8.49,0,0,0,7,8v4h.56l0-12.56Zm11,7.89c-2.7-.86-3.09-5.41-3.14-7.07l3,0Z"/><path d="M23,12.27l0,.7-4,0a8.49,8.49,0,0,1-7,8v4h-.55l0-12.56C15.37,12.4,18.88,12.27,23,12.27Zm-11,7.89c2.7-.86,3.09-5.41,3.14-7.07l-3,0Z"/></g></g></svg>`;
                        case "fine":
                            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 12" height="20px"><g id="레이어_2" data-name="레이어 2"><g id="레이어_2-2" data-name="레이어 2"><path d="M12.82,0c-.16.66-.32,1.26-.47,1.79s-.28,1.1-.39,1.68h-.69c0-1,0-1.66-.08-1.86a.56.56,0,0,0-.26-.43,1.7,1.7,0,0,0-.76-.11H7.22C6.86,2.19,6.47,3.59,6,5.27h.86A1.78,1.78,0,0,0,8,5.05a7.47,7.47,0,0,0,.83-1.28c0-.06,0-.1.06-.1h.69L9,5.72c-.2.7-.39,1.42-.56,2.16a1.07,1.07,0,0,1-.07.35h-.7c.07-.9.1-1.4.1-1.5,0-.26-.07-.42-.22-.48a2.94,2.94,0,0,0-.93-.09H5.76L4.88,9.49q-.33,1.29-.33,1.35c0,.14.08.22.24.25l1.79.32L6.43,12c-1.2-.06-2.23-.09-3.06-.09S1.45,11.94,0,12l.18-.59a2.38,2.38,0,0,1,.42-.08,9.24,9.24,0,0,0,1-.25c.12-.05.26-.28.43-.69s.35-1,.55-1.65l.87-3c.38-1.33.67-2.37.87-3.13a8.68,8.68,0,0,0,.3-1.36A.24.24,0,0,0,4.54,1,5.53,5.53,0,0,0,3.77.76L3.05.61,3.21,0c1.87.07,3.5.1,4.88.1S11.14.07,12.82,0Z"/><path d="M11.72,6.05c1.64-1.46,2.75-2.19,3.35-2.19.29,0,.43.15.43.47a5.69,5.69,0,0,1-.3,1.16L13.83,9.6a1.64,1.64,0,0,0-.06.36q0,.18.15.18c.16,0,.51-.24,1.07-.71l.39.4a11.48,11.48,0,0,1-2,1.6,3.22,3.22,0,0,1-1.46.57c-.34,0-.51-.15-.51-.44A13.35,13.35,0,0,1,12.18,9l.6-1.71a5.58,5.58,0,0,0,.34-1.16c0-.14-.06-.22-.16-.22a2.63,2.63,0,0,0-.86.57Zm3.86-6a.79.79,0,0,1,.63.28,1,1,0,0,1,.26.67,1.87,1.87,0,0,1-.37,1.1,1,1,0,0,1-.88.52.89.89,0,0,1-.64-.25,1,1,0,0,1-.28-.76A1.74,1.74,0,0,1,14.67.49,1.08,1.08,0,0,1,15.58,0Z"/><path d="M24.47,9.84C22.93,11.28,21.79,12,21.06,12c-.37,0-.56-.18-.56-.53a1.88,1.88,0,0,1,.06-.38,12,12,0,0,1,.36-1.19l1.13-3.49a1,1,0,0,0,.09-.4q0-.24-.21-.24a1.56,1.56,0,0,0-.87.51A8.19,8.19,0,0,0,20,7.51,6.64,6.64,0,0,0,19.17,9c-.2.51-.49,1.43-.87,2.77a15.85,15.85,0,0,0-2.08.09c.85-2.66,1.39-4.41,1.64-5.25a1,1,0,0,0,.08-.38c0-.15-.05-.23-.15-.23a1.18,1.18,0,0,0-.48.27,4.63,4.63,0,0,0-.42.32l-.37-.4c1.56-1.54,2.69-2.31,3.37-2.31.27,0,.41.15.41.45a12.83,12.83,0,0,1-.93,2.9l0,0C21.11,5,22.54,3.86,23.67,3.86c.51,0,.77.24.77.73a2,2,0,0,1-.07.51L22.94,9.65a1.05,1.05,0,0,0-.05.26.15.15,0,0,0,.17.17,2.26,2.26,0,0,0,1-.65Z"/><path d="M30.8,10.26A6.37,6.37,0,0,1,27.06,12a1.53,1.53,0,0,1-1.32-.64,2.82,2.82,0,0,1-.47-1.75,5.92,5.92,0,0,1,1.58-3.94,4.87,4.87,0,0,1,3.8-1.81c.9,0,1.35.34,1.35,1A2.66,2.66,0,0,1,30.88,7,8,8,0,0,1,27.4,8.4c0,.21,0,.4,0,.56,0,1.08.33,1.61,1,1.61a1.87,1.87,0,0,0,.76-.18c.28-.13.68-.35,1.22-.67ZM27.52,7.63a4,4,0,0,0,1.95-1,2,2,0,0,0,.62-1.41c0-.36-.14-.54-.44-.54a1.57,1.57,0,0,0-1.11.69A6.47,6.47,0,0,0,27.52,7.63Z"/></g></g></svg>`;
                        case "segno":
                            return `<svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                            y="0px" viewBox="0 0 13 20" style="enable-background:new 0 0 13 20;" xml:space="preserve" height="30px">
                       <g id="레이어_2_1_">
                           <g id="레이어_1-2">
                               <path d="M0,3.8C0,4.3,0,4.8,0.1,5.4c0.2,0.7,0.5,1.4,0.9,2.1c0.6,0.8,1.3,1.5,2.1,2.1c0.7,0.5,1.3,0.9,1.9,1.3
                                   C3.5,13.7,1.5,17.2,0,20h1.8c1.6-2.7,3.3-5.9,4.7-8.3c0.6,0.3,1.1,0.7,1.6,1.1c0.5,0.4,0.9,0.9,1.3,1.3c0.4,0.5,0.7,1.1,1,1.7
                                   c0.4,0.9,0.3,2-0.2,2.8C9.8,19,9.3,19.2,8.8,19c-0.5-0.1-0.8-0.5-1-0.9c0.1-0.2,0.4-0.2,0.6-0.6c0.3-0.5,0.5-1.1,0.4-1.7
                                   c-0.1-0.5-0.4-1-0.8-1.3c-0.3-0.2-0.6-0.2-0.9-0.2c-0.3,0-0.6,0-0.9,0.1c-0.2,0.2-0.4,0.4-0.6,0.7c-0.1,0.3-0.2,0.7-0.2,1
                                   c0,0.6,0.2,1.2,0.5,1.8c0.7,1.3,2.1,2.1,3.6,2c0.9-0.1,1.7-0.5,2.3-1.1c0.7-0.7,1.1-1.6,1.2-2.6c0.1-0.5,0-1.1-0.1-1.6
                                   c-0.1-0.4-0.2-0.8-0.4-1.2c-0.3-0.7-0.8-1.4-1.4-1.9c-0.4-0.4-0.9-0.8-1.3-1.2C9.2,9.9,8.5,9.6,7.8,9.2C9.5,6.3,11.4,2.8,13,0
                                   h-1.8C9.6,2.7,7.8,5.9,6.5,8.3C5.9,8,5.3,7.7,4.9,7.3C4.4,6.9,3.9,6.4,3.5,5.9c-0.4-0.5-0.8-1.1-1-1.8C2.4,3.8,2.3,3.4,2.3,2.9
                                   C2.1,2.3,2.3,1.7,2.8,1.2c0.4-0.4,0.9-0.5,1.4-0.3c0.5,0.1,0.9,0.4,1,0.9C5,2.1,4.8,2.1,4.6,2.4C4.3,2.9,4.1,3.5,4.2,4.1
                                   c0.1,0.5,0.4,1,0.8,1.3c0.3,0.2,0.6,0.2,0.9,0.2c0.3,0,0.6,0,0.8-0.1C7,5.3,7.2,5.1,7.4,4.8c0.1-0.4,0.2-0.7,0.2-1.1
                                   C7.5,3.1,7.3,2.5,7,2C6.7,1.4,6.3,1,5.9,0.6c-0.3-0.2-0.7-0.4-1-0.5C4.3,0,3.7,0,3.2,0.1C2.8,0.1,2.5,0.2,2.1,0.4
                                   C1.8,0.6,1.4,0.8,1.2,1.2C0.5,1.9,0.1,2.8,0,3.8z M9.8,8c0,0.4,0.2,0.7,0.5,0.9C10.7,9,11,9,11.3,8.8c0.2-0.2,0.3-0.4,0.3-0.7
                                   c0-0.4-0.3-0.8-0.7-0.9c-0.3-0.1-0.6,0-0.8,0.2C9.9,7.5,9.8,7.8,9.8,8z M1.6,12.5C1.8,12.8,2.1,13,2.4,13c0.4,0,0.7-0.2,0.8-0.5
                                   c0.2-0.3,0.1-0.8-0.2-1c-0.2-0.3-0.7-0.4-1-0.2c-0.3,0-0.4,0.3-0.5,0.5C1.4,12,1.4,12.3,1.6,12.5z"/>
                           </g>
                       </g>
                       </svg>`;
                       case "dalsegno":
                           return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.95 11.98" height="20px"><g id="레이어_2" data-name="레이어 2"><g id="레이어_1-2" data-name="레이어 1"><path id="path2569" d="M2.87.33,3,0H6.62a8.1,8.1,0,0,1,3.43.55,4.14,4.14,0,0,1,1.78,1.76,5.06,5.06,0,0,1,.67,2.55,6.83,6.83,0,0,1-.39,2.28,6.34,6.34,0,0,1-.87,1.77,7.86,7.86,0,0,1-1.48,1.46,6.84,6.84,0,0,1-2.18,1.19,9.67,9.67,0,0,1-2.92.38H0l.11-.33A2.61,2.61,0,0,0,1,11.49a1.08,1.08,0,0,0,.5-.4A6.07,6.07,0,0,0,2.05,9.6l2-7.22A5.34,5.34,0,0,0,4.31,1,.67.67,0,0,0,4.09.51,1.46,1.46,0,0,0,3.23.33Zm3,.33L3.38,9.6a6.65,6.65,0,0,0-.28,1.24.48.48,0,0,0,.09.27.43.43,0,0,0,.24.18,2.37,2.37,0,0,0,.71.08,10.49,10.49,0,0,0,2.45-.28,5,5,0,0,0,1.86-.86A5.62,5.62,0,0,0,10.1,8a8.25,8.25,0,0,0,.61-3.27,4.34,4.34,0,0,0-.94-3.07A3.57,3.57,0,0,0,7,.63Z"/><path id="path2571" d="M11.56,10.22a.81.81,0,0,1,.61.25.86.86,0,0,1-.61,1.47.8.8,0,0,1-.6-.25.87.87,0,0,1,0-1.22A.8.8,0,0,1,11.56,10.22Z"/><path id="path2573" d="M14,11.94,15,7.7h.31c0,.41-.07.75-.07,1a2.4,2.4,0,0,0,.81,1.88,3,3,0,0,0,2.1.73A2.39,2.39,0,0,0,20,10.65a2.25,2.25,0,0,0,.62-1.56A2,2,0,0,0,20.35,8,17.12,17.12,0,0,0,18,5.58a7.57,7.57,0,0,1-1.17-1.25A2.62,2.62,0,0,1,17.42.85,3.64,3.64,0,0,1,19.92,0a5.1,5.1,0,0,1,1,.09,8.17,8.17,0,0,1,1,.34l.59.21a1.29,1.29,0,0,0,.29,0,.88.88,0,0,0,.46-.13A2.11,2.11,0,0,0,23.73,0h.35l-1,3.79h-.31c0-.34,0-.61,0-.82a2.1,2.1,0,0,0-.73-1.66A2.82,2.82,0,0,0,20.16.66a2.3,2.3,0,0,0-1.55.51A1.53,1.53,0,0,0,18,2.36a1.9,1.9,0,0,0,.38,1.13,13.77,13.77,0,0,0,1.75,1.74,8.88,8.88,0,0,1,1.79,1.89,2.71,2.71,0,0,1,.41,1.44,3.14,3.14,0,0,1-.51,1.68,3.21,3.21,0,0,1-1.44,1.25,4.66,4.66,0,0,1-2.05.45,5.56,5.56,0,0,1-1-.09,13,13,0,0,1-1.53-.46,2,2,0,0,0-.6-.12c-.36,0-.64.22-.85.67Z"/><path id="path2575" d="M24.09,10.26a.79.79,0,0,1,.6.25.85.85,0,0,1,0,1.22.8.8,0,0,1-.6.25.82.82,0,0,1-.61-.25.9.9,0,0,1,0-1.22A.82.82,0,0,1,24.09,10.26Z"/></g></g></svg>`;
                        case "fermata":
                            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 12" height="15px"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><g id="레이어_2" data-name="레이어 2"><g id="레이어_2-2" data-name="레이어 2"><g id="layer1"><path id="path1884" class="cls-1" d="M13.22,9.8A2.22,2.22,0,1,1,11,7.59,2.21,2.21,0,0,1,13.22,9.8Z"/><path id="path2772" d="M0,11.83C.94,5.57,5.38,0,11,0S21.06,5.57,22,11.83c.05.23-1.12.23-1.17,0C19.66,7.42,16.62,3.25,11,3.25S2.34,7.42,1.17,11.83C1.12,12.06,0,12.06,0,11.83Z"/></g></g></g></svg>`;
                        case "doubleBarline":
                            return `<svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                            y="0px" viewBox="0 0 4 50" style="enable-background:new 0 0 4 50;" xml:space="preserve" height="10px">
                       <rect x="-0.1" y="0" width="1.1" height="50"/>
                       <rect x="2.9" y="0" width="1.1" height="50"/>
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
