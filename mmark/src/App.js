import React from "react";
import {Route, Switch} from "react-router-dom";
import LearnNote from "./pages/LearnNote";
import Main from "./pages/Main";

function App() {
    return (
        <div>
            <Switch>
                <Route path="/LearnNote/:pagenum" component={LearnNote}/>
                <Route path="/" component={Main} />
            </Switch>
        </div>
    );
}

export default App;
