import React, { useEffect, useState } from "react";
import {Route, Switch} from "react-router-dom";
import InvalidPage from "./pages/InvalidPage";
import LearnNote from "./pages/LearnNote";
import LearnRhythm from "./pages/LearnRhythm";
import LearnInterval from "./pages/LearnInterval";
import LearnChord from "./pages/LearnChord";
import LearnRoadmapSign from "./pages/LearnRoadmapSign";
import Community from "./pages/Community";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Main from "./pages/Main";
import NewPost from "./pages/NewPost";
import CommunityEdit from './pages/CommunityEdit';

function App() {
    // const [user, setUser] = useState("");
    // const [cookies, setCookie, removeCookie] = useCookies(['rememberText']);

    // useEffect(() => {
    //     if (cookies.user !== undefined) {
    //         setUser(cookies.user);
    //     }
    // }, []);

    return (
        <div>
            <Switch>
                <Route path="/LearnNote/:pagenum" component={LearnNote}/>
                <Route path="/LearnRhythm/:pagenum" component={LearnRhythm}/>
                <Route path="/LearnInterval/:pagenum" component={LearnInterval}/>
                <Route path="/LearnChord/:pagenum" component={LearnChord}/>
                <Route path="/LearnRoadmapSign/:pagenum" component={LearnRoadmapSign} />
                <Route path="/Community/NewPost" component={NewPost} />
                <Route path="/Community/edit/:id" component={CommunityEdit} />
                <Route path="/Community/:keyword" component={Community} />
                <Route path="/Community" component={Community} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/signup" component={Signup}/>
                <Route path="/" component={Main} />
            </Switch>
        </div>
    );
}

export default App;
