
import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import SignupForm from './SignupForm';
import { withRouter } from 'react-router-dom';
import { withCookies, Cookies } from "react-cookie";
import '../stylesheets/Signup.css'

function handleErrors(response) {
		if (!response.ok) {
			throw Error(response.statusText);
		}
		return response;
	}

class EmbeddedSignup extends Component {
	constructor(props) {
		super(props);
		const { cookies } = props;
		this.state = {
		logged_in: cookies.get('token') ? true : false,
		username: cookies.get('name')
		};
	}
		
	componentDidMount() {
		const { cookies } = this.props;
	}

	display_form = form => {
		this.setState({
		displayed_form: form
		});
	};

	handle_signup = (e, data) => {
		console.log(data);
        const { cookies } = this.props;
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
			console.log(json)
		});
    };

	render() {
		return (
			<div className="embedded-signup">
				<SignupForm handle_signup={this.handle_signup} />
				<div className="login-signup">
				<div>Do you have an account?</div>
				<Link to = {`/login`}>
					<button className="signupButton">Log In</button>
				</Link>
				</div>
			</div>
		);
	}
}

export default withCookies(withRouter(EmbeddedSignup));