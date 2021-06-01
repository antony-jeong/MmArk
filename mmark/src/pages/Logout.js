import React, { Component } from 'react';
import { withCookies, Cookies } from "react-cookie";

class Logout extends Component {
    constructor(props) {
    super(props);
    this.state = {
            logged_in: localStorage.getItem('token') ? true : false,
            username: ''
        };
    }
    
    handle_logout = () => {
        localStorage.removeItem('token');
        this.setState({ logged_in: false, username: '' });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                {this.handle_logout()}
            </div>
        );
    }
}

export default Logout;