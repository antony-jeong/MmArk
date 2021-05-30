import React from "react";
import {Route, Switch} from "react-router-dom";
import InvalidPage from "./pages/InvalidPage";
import LearnNote from "./pages/LearnNote";
import LearnRhythm from "./pages/LearnRhythm";
import LearnInterval from "./pages/LearnInterval";
import LearnChord from "./pages/LearnChord";
import LearnRoadmapSign from "./pages/LearnRoadmapSign";
import Community from "./pages/Community";
import Main from "./pages/Main";

function App() {
    return (
        <div>
            <Switch>
                <Route path="/LearnNote/:pagenum" component={LearnNote}/>
                <Route path="/LearnRhythm/:pagenum" component={LearnRhythm}/>
                <Route path="/LearnInterval/:pagenum" component={LearnInterval}/>
                <Route path="/LearnChord/:pagenum" component={LearnChord}/>
                <Route path="/LearnRoadmapSign/:pagenum" component={LearnRoadmapSign} />
                <Route path="/Community" component={Community} />
                <Route path="/" component={Main} />
            </Switch>
        </div>
    );
}

export default App;
