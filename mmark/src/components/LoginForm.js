import React from 'react';
import "../stylesheets/Login.css";

class LoginForm extends React.Component {
	state = {
		username: '',
		password: ''
	};

	handle_change = e => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState(prevstate => {
		const newState = { ...prevstate };
		newState[name] = value;
		return newState;
		});
	};

	render() {
		return (
		<form onSubmit={e => this.props.handle_login(e, this.state)}>
			<div className="login-form">
			<div className="login-username">
				<label htmlFor="username">Username</label>
				<input
				type="text"
				name="username"
				value={this.state.username}
				onChange={this.handle_change}
				/>
			</div>
			<div className="login-password">
			<label htmlFor="password">Password</label>
			<input
				type="password"
				name="password"
				value={this.state.password}
				onChange={this.handle_change}
			/>
			</div>
			</div>
			<label>
			<input type="submit"/>
			<svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M16 30.6939C24.1152 30.6939 30.6939 24.1152 30.6939 16C30.6939 7.88483 24.1152 1.30615 16 1.30615C7.88483 1.30615 1.30615 7.88483 1.30615 16C1.30615 24.1152 7.88483 30.6939 16 30.6939Z" stroke="#E0E0E0" stroke-width="2.3"/>
			<path d="M23.0418 16.5418C23.5519 16.0318 23.5519 15.2047 23.0418 14.6947L14.7297 6.38255C14.2196 5.87248 13.3926 5.87248 12.8826 6.38255C12.3725 6.89262 12.3725 7.71959 12.8826 8.22969L20.2711 15.6182L12.8826 23.0068C12.3725 23.5169 12.3725 24.3438 12.8826 24.8539C13.3926 25.364 14.2196 25.364 14.7297 24.8539L23.0418 16.5418ZM20.8121 16.9244H22.1182V14.3121H20.8121V16.9244Z" fill="#E0E0E0"/>
			</svg>
			</label>
		</form>
		);
	}
}

export default LoginForm;