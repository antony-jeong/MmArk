import React, { Component } from 'react';
import LoginNav from '../components/LoginNav';
import SignupForm from '../components/SignupForm';
import { useCookies } from "react-cookie";


function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
        logged_in: localStorage.getItem('token') ? true : false,
        username: ''
        };
    }
    
    handle_signup = (e, data) => {
        e.preventDefault();
        fetch('http://3.36.217.44:8000/api/test/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => {
            localStorage.setItem('token', json.token);
            this.setState({
                logged_in: true,
                username: json.username
            });
        });
    };

    handle_logout = () => {
        localStorage.removeItem('token');
        this.setState({ logged_in: false, username: '' });
    };

    render() {
        return (
            <div className="App">
                <LoginNav
                    logged_in={this.state.logged_in}
                    display_form={this.display_form}
                    handle_logout={this.handle_logout}
                />
                <SignupForm handle_signup={this.handle_signup} />;
                <h3>
                    {this.state.logged_in
                        ? `Hello, ${this.state.username}`
                        : 'Please Log In'}
                </h3>
            </div>
        );
    }
}

export default Signup;