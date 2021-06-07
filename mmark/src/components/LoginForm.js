import React from 'react';
import PropTypes from 'prop-types';
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
    if (name === 'username') document.querySelector('.username-empty').classList.remove('show');
    if (name === 'password') document.querySelector('.password-empty').classList.remove('show');
  };


  handleValidation = (data) => {
    let username = data.username;
    let password = data.password;
    let formIsValid = true;

    document.querySelector('.wrong-account').classList.remove('show');
    document.querySelector('.login-form').classList.remove('shake');


    if(!username){
      formIsValid = false;
      document.querySelector('.username-empty').classList.add('show');
    }else{
      document.querySelector('.username-empty').classList.remove('show');
    }

    if(!password){
      formIsValid = false;
      document.querySelector('.password-empty').classList.add('show');
    }else{
      document.querySelector('.password-empty').classList.remove('show');
    }


    if(username.match(/[^a-zA-Z0-9.+_@-]+/)){
      formIsValid = false;
      document.querySelector('.username-char').classList.add('show');
    }else{
      document.querySelector('.username-char').classList.remove('show');
    }

    if(password.match(/[^a-zA-Z0-9.+_@-]+/)){
      formIsValid = false;
      document.querySelector('.password-char').classList.add('show');
    }else{
      document.querySelector('.password-char').classList.remove('show');
    }
  
    return formIsValid;
  }

  togglePassword = (e) => {
    const passwordInput = e.currentTarget.parentNode.parentNode.childNodes[1].firstChild;
    passwordInput.classList.toggle('active');
    if(passwordInput.classList.contains('active')){
      passwordInput.setAttribute('type','input');
      e.currentTarget.innerHTML='<path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>';
    }else{
      passwordInput.setAttribute('type','password');
      e.currentTarget.innerHTML='<path d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z"/>';
    }
  }

  render() {
    return (
      <div className="login-form-with-message">
          <form onSubmit={e =>{ e.preventDefault(); if (this.handleValidation(this.state)) this.props.handle_login(e, this.state)}}>
            <div className="login-form">
              <div className="username-empty"><div className="username-empty-text speech-bubble-up">Username can't be empty</div></div>
              <div className="username-char"><div className="username-char-text speech-bubble-up">Username only includes English alphabets, numbers, ., -, +, _, @. </div></div>
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
                <div className="password-input">
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handle_change}
                  />
                  <svg onClick={this.togglePassword} width="24" height="24" viewBox="0 0 24 24">
                    <path d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z"/>
                  </svg>
                </div>
              </div>
              <div className="password-empty"><div className="password-empty-text speech-bubble-down">Password can't be empty</div></div>
              <div className="password-char"><div className="password-char-text speech-bubble-down">Password only includes English alphabets, numbers, ., -, +, _, @. </div></div>
            </div>
            <label>
            <input type="submit"/>
            <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 30.6939C24.1152 30.6939 30.6939 24.1152 30.6939 16C30.6939 7.88483 24.1152 1.30615 16 1.30615C7.88483 1.30615 1.30615 7.88483 1.30615 16C1.30615 24.1152 7.88483 30.6939 16 30.6939Z" stroke="#E0E0E0" stroke-width="2.3"/>
              <path d="M23.0418 16.5418C23.5519 16.0318 23.5519 15.2047 23.0418 14.6947L14.7297 6.38255C14.2196 5.87248 13.3926 5.87248 12.8826 6.38255C12.3725 6.89262 12.3725 7.71959 12.8826 8.22969L20.2711 15.6182L12.8826 23.0068C12.3725 23.5169 12.3725 24.3438 12.8826 24.8539C13.3926 25.364 14.2196 25.364 14.7297 24.8539L23.0418 16.5418ZM20.8121 16.9244H22.1182V14.3121H20.8121V16.9244Z" fill="#E0E0E0"/>
            </svg>
            </label>
          </form>
        <div className="wrong-account">Invalid Username or Password</div>
      </div>
    );
  }
}

export default LoginForm;