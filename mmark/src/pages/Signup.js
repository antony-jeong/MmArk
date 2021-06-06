import React, { Component } from 'react';
import { withCookies, Cookies } from "react-cookie";
import EmbeddedSignup from '../components/EmbeddedSignup';

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