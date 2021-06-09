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
                <Route exact path="/LearnNote/:pagenum" component={LearnNote}/>
                <Route exact path="/LearnRhythm/:pagenum" component={LearnRhythm}/>
                <Route exact path="/LearnInterval/:pagenum" component={LearnInterval}/>
                <Route exact path="/LearnChord/:pagenum" component={LearnChord}/>
                <Route exact path="/LearnRoadmapSign/:pagenum" component={LearnRoadmapSign} />
                <Route exact path="/Community/NewPost" component={NewPost} />
                <Route exact path="/Community/:keyword" component={Community} />
                <Route exact path="/Community/edit/:id" component={CommunityEdit} />
                <Route exact path="/Community" component={Community} />
                {/* <Route exact path="/login" component={Login} /> */}
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/" component={Main} />
                <Route component={InvalidPage} />
            </Switch>
        </div>
    );
}

export default App;
