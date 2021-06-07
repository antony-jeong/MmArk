
import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import LoginNav from '../components/LoginNav';
import LoginForm from '../components/LoginForm';
import { withRouter } from 'react-router-dom';
import { withCookies, Cookies } from "react-cookie";


function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

class EmbeddedLogin extends Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      //logged_in: localStorage.getItem('token') ? true : false,
      logged_in: cookies.get('token') ? true : false,
      username: cookies.get('name')
    };
  }
    
  componentDidMount() {
    const { cookies } = this.props;
  }


  handle_login = (e, data) => {
    const { cookies } = this.props;
    e.preventDefault();
    fetch('http://3.36.217.44:8000/token-auth/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(handleErrors)
        .then(res => res.json())
        .then(json => {
            //localStorage.setItem('token', json.token);
          cookies.set('name', json.user.username, { path: '/' });
          cookies.set('token', json.token, { path: '/' });
            if (typeof json.user != "undefined") {
                this.setState({
                    logged_in: true,
                    username: json.user.username
                });
            }
        })
        .catch(function () {
            document.querySelector('.wrong-account').classList.add('show');
            document.querySelector('.login-form').classList.add('shake');
        });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

    render() {
        return (
            <div className="embedded-login">
                {
                  this.state.logged_in?
                  <div className="embedded-login-logined">
                    <Link to={`/logout`} >
                      <button className="logoutButton">Log Out</button>
                    </Link>
                    {`Hello, ${this.state.username}`}
                  </div>
                  :
                  <div className="embedded-login-loggedout">
                    <LoginForm handle_login={this.handle_login} />
                    <div className="login-signup">
                      <div>don't have an acount?</div>
                      <Link to = {`/signup`}>
                        <button className="signupButton">Sign Up</button>
                      </Link>
                    </div>
                  </div>
                }
            </div>
        );
    }
}

export default withCookies(withRouter(EmbeddedLogin));