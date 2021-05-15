<<<<<<< HEAD
import React from "react";
import {Route} from "react-router-dom";
import Main from "./pages/Main";

function App() {
    return <Route path="/:category?" component={Main} />;
}

export default App;
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 5dd044beabe729075c49db3a018a93d9a7f10b76
