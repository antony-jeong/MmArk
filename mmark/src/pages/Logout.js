import React, { Component } from 'react';
import { withRouter, Redirect} from 'react-router';
import { withCookies, Cookies, useCookies } from "react-cookie";

class Logout extends Component {
    constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
            logged_in: cookies.get('token') ? true : false,
            username: cookies.get('name')
        };
    }

    componentDidMount() {
        this.handle_logout();
    }
    handle_logout = () => {
        const { cookies } = this.props;
        cookies.remove('token');
        cookies.remove('name');
        this.setState({ logged_in: false, username: undefined });
        this.props.history.push("/login");
    };

    render() {
        return null;
    }
}

export default withCookies(withRouter(Logout));