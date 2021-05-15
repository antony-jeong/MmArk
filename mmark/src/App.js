import React from "react";
import {Route} from "react-router-dom";
import Main from "./pages/Main";

function App() {
    return <Route path="/" component={Main} />;
}

export default App;
