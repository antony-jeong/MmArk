
import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import SignupForm from './SignupForm';
import Popup from 'react-popup';
import { withTranslation } from 'react-i18next';
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
			username: cookies.get('name'),
			desc: "Default Description"
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

	post_signup = (e, data) => {
        const { cookies } = this.props;
        e.preventDefault();
        fetch('http://3.36.217.44:8000/api/test/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
		.then(res => res.json());
		this.props.history.push("/");
    };

	render() {
		const { t } = this.props;
		return (
			<div className="embedded-signup">
				<SignupForm post_signup={this.post_signup} />
				<div className="login-signup">
				<div>{t("signup.message")}</div>
				<Link to = {`/login`}>
					<button className="signupButton">{t("signup.login")}</button>
				</Link>
				</div>
			</div>
		);
	}
}

export default withCookies(withRouter(withTranslation()(EmbeddedSignup)));