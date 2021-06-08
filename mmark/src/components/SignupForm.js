import React from 'react';
import Popup from 'react-popup';
import { Cookies, withCookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Logo from './Logo';

class SignupForm extends React.Component {

	state = {
		checked: true,
	};

	constructor(props) {
		super(props);
		const { cookies } = this.props;
		this.state = {
			signup_error: cookies.get('signup_error')
		};
	}

	handle_change = e => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState(prevstate => {
		const newState = { ...prevstate };
		newState[name] = value;
		return newState;
		});
	};

	handleBack = () => {
		this.props.history.goBack();
	}

	checkUsername = (username) => {
		if (username === undefined) return "no_username";
		if (username.length > 10) return "length";
		for (var i = 0; i < username.length; i++) {
			const char = username.charAt(i)
			if (!char.match(/[a-zA-Z0-9]/i)) {
				return "alphabet";
			}
		}
		return "valid";
	}

	checkPassword = (password) => {
		for (var i = 0; i < password.length; i++) {
			const char = password.charAt(i)
			if (!char.match(/[^a-zA-Z0-9.+_@-]+/)) {
				return false;
			}
		}
		return true;
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const checkUsername = this.checkUsername(this.state.username);
		var errorType = "";
		if (checkUsername === "no_username" || checkUsername == "alphabet" || checkUsername ==="length") {
			errorType = checkUsername;
			return;
		}
		if (this.state.password == undefined) {
			errorType = "no_password";
			return;
		}
		if (!this.checkPassword(this.state.password)) {
			errorType = "password";
			return;
		}
		if (this.state.password != this.state.confirm_password) {
			errorType = "confirm";
			return;
		}
		if (errorType) {
			switch (errorType) {
				case "no_username":
					document.querySelector('.username-empty').classList.add('show');
				case "alphabet":
					document.querySelector('.username-char').classList.add('show');
				case "length":
					document.querySelector('.username-length').classList.add('show');
				case "no_password":
					document.querySelector('.password-empty').classList.add('show');
				case "password":
					document.querySelector('.password-char').classList.add('show');
				case "confirm":
					document.querySelector('.password-confirm').classList.add('show');
				default:
					document.querySelector('.username-empty').classList.remove('show');
					document.querySelector('.username-char').classList.remove('show');
					document.querySelector('.username-length').classList.remove('show'); 
					document.querySelector('.password-empty').classList.remove('show');
					document.querySelector('.password-char').classList.remove('show');
					document.querySelector('.password-confirm').classList.remove('show');
			}
			console.log(errorType);
			return;
		}
		this.props.history.add("/");
		this.props.post_signup(e, this.state);
	}
	
	render() {
		const { t } = this.props;
		return (
		<div className="sign-up">
			<span className={`LogoContainer`}>
                <Logo className={`Logo`} isLink={true}/>
            </span>
			<h3>{t("signup.signup")}</h3>
				<form onSubmit={e => this.handleSubmit(e)}>
				<div className="requiredWrapper">
					<h4>{t("signup.top_req")}</h4>
					<div className="usernameWrapper">
						<div className="username-alert">	
	             			<div className="username-empty"><div className="username-empty-text speech-bubble-up">Username can't be empty</div></div>
							<div className="username-char"><div className="username-char-text speech-bubble-up">Username only includes English alphabets and Numbers</div></div>
							<div className="username-length"><div className="username-length-text speech-bubble-up">Username should be maximum of 10 characters</div></div>	
						</div>
						<div className="username-context">	
							<label htmlFor="username">{t("signup.username")}</label>
							<input
								type="text"
								name="username"
								value={this.state.username}
								onChange={this.handle_change}
							/>
							<div className="inst usernameInstructions">{t("signup.username_inst")}</div>	
						</div>
					</div>
					<div className="passwordWrapper">
						<div className="password-context">
							<label htmlFor="password">{t("signup.password")}</label>
							<input
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.handle_change}
							/>
							<div className="inst passwordInstructions">{t("signup.password_inst")}</div>	
						</div>
						<div className="password-alert">
							<div className="password-empty"><div className="password-empty-text speech-bubble-down">Password can't be empty</div></div>
							<div className="password-char"><div className="password-char-text speech-bubble-down">Password only includes English alphabets, numbers, ., -, +, _, @. </div></div>
						</div>
					</div>
					<div className="confirmPasswordWrapper">
						<div className="confirm-context">
							<label htmlFor="confirm_password">{t("signup.confirm_password")}</label>
							<input
								type="password"
								name="confirm_password"
								value={this.state.confirm_password}
								onChange={this.handle_change}
							/>
							<div className="inst passwordInstructions">{t("signup.confirm_password_inst")}</div>
						</div>
					</div>
				</div>
				<div className="profileWrapper">
					<h4>{t("signup.top_pro")}</h4>
					{/* <div className="imageWrapper">
						<label htmlFor="image">{t("signup.image")}</label>
						<input
							type="file"
							name="image"
							value={this.state.image}
							onChange={this.handle_change}
						/>
						<div className="inst imageInstructions">{t("signup.image_inst")}</div>	
					</div> */}
					<div className="descWrapper">
						<div className="desc-context">
							<label htmlFor="desc">{t("signup.desc")}</label>
							<input
								type="text"
								name="desc"
								value={this.state.desc}
								onChange={this.handle_change}
							/>
							<div className="inst descInstructions">{t("signup.desc_inst")}</div>
						</div>
					</div>
					<div className="acceptWrapper">
						<input
							type="checkbox"
							name="acceptance"
							checked readonly
						/>
						<label htmlFor="acceptance">{t("signup.accept")}</label>
					</div>
				</div>
				<div className="buttonWrapper">
					<button onClick={this.handleBack}>{t("signup.back")}</button>
					<label>
					<input type="submit" />
						Sign Up	
					</label>
				</div>
			</form>
			</div>
		);
	}
}

export default withCookies(withRouter(withTranslation()(SignupForm)));