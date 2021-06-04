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

class Login extends Component {
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      //logged_in: localStorage.getItem('token') ? true : false,
      logged_in: cookies.get('token') ? true : false,
      username: cookies.get('name')
    };
  }

    handleRoute() {
        this.props.history.push('/');
    }
    
  componentDidMount() {
    const { cookies } = this.props;
    if (this.state.logged_in) {
      fetch('http://3.36.217.44:8000/api/test/current_user/', {
        headers: {
          Authorization: `JWT ${cookies.get('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
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
                  this.handleRoute();
              }
          })
          .catch(function (error) {
              console.log(error);
          });
  };

  handle_signup = (e, data) => {
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
        // localStorage.setItem('token', json.token);
        cookies.set('name', json.user.username, { path: '/' });
        cookies.set('token', json.token, { path: '/' });
        this.setState({
          logged_in: true,
          username: json.username
        });
      });
  };

  

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

    render() {
        return (
            <div className="App">
                <LoginNav
                logged_in={this.state.logged_in}
                history={this.props.history}
                />
                <LoginForm handle_login={this.handle_login} />
                <h3>
                    {this.state.logged_in
                        ? `Hello, ${this.state.username}`
                        : 'Please Log In'}
                </h3>
            </div>
        );
    }
}

export default withCookies(withRouter(Login));