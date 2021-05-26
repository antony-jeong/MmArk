import React from 'react';

// desc is a instruction text fetched from json file, using our grammar

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
