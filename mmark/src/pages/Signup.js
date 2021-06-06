import React, { Component } from 'react';
import EmbeddedSignup from '../components/EmbeddedSignup';
import { withCookies, Cookies } from "react-cookie";

class Signup extends Component{
    
    render() {
        return (
            <div className="App">
                <EmbeddedSignup/>
            </div>
        );
    }
}

export default Signup;