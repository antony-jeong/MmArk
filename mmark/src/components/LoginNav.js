import React from 'react';
import {Link} from 'react-router-dom';

const LoginNav = ({logged_in}) => {
    
    const logged_out_nav = (
        <>
            <Link to = {`/login`} >
                <button className="loginButton">Log In</button>
            </Link>
            <Link to = {`/signup`} >
                <button className="signupButton">Sign Up</button>
            </Link>
        </>
    )

    const logged_in_nav = (
        <>
            <Link to={`/logout`} >
                <button className="logoutButton">Log Out</button>
            </Link>
        </>
    )

    return (
        <div className={"loginWrapper"}>
            {logged_in ? logged_in_nav : logged_out_nav}
        </div>
    );
};

export default LoginNav;