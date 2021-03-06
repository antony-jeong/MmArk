
import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import LoginNav from '../components/LoginNav';
import LoginForm from '../components/LoginForm';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { withCookies, Cookies } from "react-cookie";
import MyProfile from './MyProfile';


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
        const { t } = this.props;
        return (
            <div className="embedded-login">
                {
                  this.state.logged_in?
                  <div className="embedded-login-logined">
                    <MyProfile />
                  </div>
                  :
                  <div className="embedded-login-loggedout">
                    <LoginForm handle_login={this.handle_login} />
                    <div className="login-signup">
                      <div>{t("login.message")}</div>
                      <Link to = {`/signup`}>
                        <button className="signupButton">{t("login.signup")}</button>
                      </Link>
                    </div>
                  </div>
                }
            </div>
        );
    }
}

export default withCookies(withRouter(withTranslation()(EmbeddedLogin)));