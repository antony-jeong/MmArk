import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
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

	handleBack = () => {
		this.props.history.goBack();
	}

	render() {
		return (
		<>
			<h3>Sign Up</h3>
			<form onSubmit={e => this.props.handle_signup(e, this.state)}>
				<div className="requiredWrapper">
					<h4>Required Fields</h4>
					<div className="usernameWrapper">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.handle_change}
						/>	
					</div>
					<div className="passwordWrapper">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handle_change}
						/>							
					</div>
					<div className="confirmPasswordWrapper">
						<label htmlFor="confirm_password">Confirm Password</label>
						<input
							type="password"
							name="confirm_password"
							value={this.state.confirm_password}
							onChange={this.handle_change}
						/>
					</div>
				</div>
				<div className="profileWrapper">
					<h4>Account Profile</h4>
					<div className="imageWrapper">
						<label htmlFor="image">Profile Image</label>
						<input
							type="file"
							name="image"
							value={this.state.image}
							onChange={this.handle_change}
						/>							
					</div>
					<div className="descWrapper">
						<label htmlFor="desc">User Description</label>
						<input
							type="text"
							name="desc"
							value={this.state.desc}
							onChange={this.handle_change}
						/>		
					</div>
					<div className="acceptWrapper">
						<input
							type="checkbox"
							name="acceptance"
							checked readonly
						/>
						<label htmlFor="acceptance">Since MmArk doesn't handle any of the user's private info, we regard Privacy Terms are accepted by all users</label>
					</div>
				</div>
					<button onClick={this.handleBack}>Back</button>
				<label>
				<input type="submit" />
					<svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16 30.6939C24.1152 30.6939 30.6939 24.1152 30.6939 16C30.6939 7.88483 24.1152 1.30615 16 1.30615C7.88483 1.30615 1.30615 7.88483 1.30615 16C1.30615 24.1152 7.88483 30.6939 16 30.6939Z" stroke="#E0E0E0" stroke-width="2.3"/>
					<path d="M23.0418 16.5418C23.5519 16.0318 23.5519 15.2047 23.0418 14.6947L14.7297 6.38255C14.2196 5.87248 13.3926 5.87248 12.8826 6.38255C12.3725 6.89262 12.3725 7.71959 12.8826 8.22969L20.2711 15.6182L12.8826 23.0068C12.3725 23.5169 12.3725 24.3438 12.8826 24.8539C13.3926 25.364 14.2196 25.364 14.7297 24.8539L23.0418 16.5418ZM20.8121 16.9244H22.1182V14.3121H20.8121V16.9244Z" fill="#E0E0E0"/>
					</svg>		
				</label>
			</form>
			</>
		);
	}
}

export default withRouter(SignupForm);