import React from 'react';
import "./StyleSheet.css";

// objectType: (char) 
        // c - clef
        // t - time
        // k - key
        // b - barline
        // n - note

        // > if key
        // key: (int) 0 - c major, num added for sharps

const KeyObj = ({className}) => {
    switch (className) {
            case "s-1":
                return (<div className="s-1" style = {{width: "8px", display: "inline", position: "relative", }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_s_1.svg"} style = {{width: "8px", position: "relative", top: "-29px"}}  height = "81px"/>
                    </div> )
            case "s-2":
                return (<div className="s-2" style = {{width: "16px", display: "inline", position: "relative", }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_s_2.svg"} style = {{width: "16px", position: "relative", top: "-29px"}}  height = "81px"/>
                    </div>)
            case "s-3":
                return (<div className="s-3" style = {{width: "24px", display: "inline", position: "relative", }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_s_3.svg"} style = {{width: "24px", position: "relative", top: "-29px"}}  height = "81px"/>
                    </div>)
            case "s-4":
                return (<div className="s-4" style = {{width: "32px", display: "inline", position: "relative", }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_s_4.svg"} style = {{width: "32px", position: "relative", top: "-29px"}}  height = "81px"/>
                    </div>)
            case "s-5":
                return (<div className="s-5" style = {{width: "40px", display: "inline", position: "relative", }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_s_5.svg"} style = {{width: "40px", position: "relative", top: "-29px"}}  height = "81px"/>
                    </div>)
            case "s-6":
                return (<div className="s-6" style = {{width: "48px", display: "inline", position: "relative"}}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_s_6.svg"} style = {{width: "48px", position: "relative", top: "-29px"}}  height = "81px"/>
                    </div> )
            case "s-7":
                return (<div className="s-7" style = {{width: "56px", display: "inline", position: "relative"}}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_s_7.svg"} style = {{width: "56px", position: "relative", top: "-29px"}}  height = "81px"/>
                    </div>)
            case "0":
                return (<div className="0" style = {{width: "8px", display: "inline", position: "relative", }}></div>)
            case "f-1":
                return (<div className="f-1" style = {{width: "8px", display: "inline", position: "relative", }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_f_1.svg"} style = {{width: "8px", position: "relative", top: "-23px"}}  height = "81px"/>
                    </div> )
            case "f-2":
                return (<div className="f-2" style = {{width: "16px", display: "inline", position: "relative", }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_f_2.svg"} style = {{width: "16px", position: "relative", top: "-23px"}}  height = "81px"/>
                    </div>)
            case "f-3":
                return (<div className="f-3" style = {{width: "24px", display: "inline", position: "relative", }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_f_3.svg"} style = {{width: "24px", position: "relative", top: "-23px"}}  height = "81px"/>
                    </div>)
            case "f-4":
                return (<div className="f-4" style = {{width: "32px", display: "inline", position: "relative", }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_f_4.svg"} style = {{width: "32px", position: "relative", top: "-23px"}}  height = "81px"/>
                    </div>)
            case "f-5":
                return (<div className="f-5" style = {{width: "40px", display: "inline", position: "relative", }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_f_5.svg"} style = {{width: "40px", position: "relative", top: "-23px"}}  height = "81px"/>
                    </div>)
            case "f-6":
                return (<div className="f-6" style = {{width: "48px", display: "inline", position: "relative", }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_f_6.svg"} style = {{width: "48px", position: "relative", top: "-23px"}}  height = "81px"/>
                    </div> )
            case "f-7":
                return (<div className="f-7" style = {{width: "56px", display: "inline", position: "relative", }}>
                    <img src = {process.env.PUBLIC_URL + "/musical_symbols_svg/key_f_7.svg"} style = {{width: "56px", position: "relative", top: "-23px"}}  height = "81px"/>
                    </div>)
            default:
                return (<div>Invalid Object Obj</div>)
        }
};

const Key = ({obj}) => {
    return (
        <div style = {{width: "56px", display: "inline" }}>
            <KeyObj className={obj.key > 0 ? `s-${obj.key}` : obj.key < 0 ? `f${obj.key}`: "0"}/>
        </div>
    );
};

export default Key;