import React from 'react';
import {Link} from 'react-router-dom';

const LoginNav = (props) => {
    
    const logged_out_nav = (
        <>
            {/* <Link to = {`/login`} >
                <button className="loginButton">Log In</button>
            </Link>
            <Link to = {`/signup`} >
                <button className="signupButton">Sign Up</button>
            </Link> */}
            <li onClick={() => props.display_form('login')}>login</li>
            <li onClick={() => props.display_form('signup')}>signup</li>
        </>
    )

    const logged_in_nav = (
        <>
            {/* <Link to={`/logout`} >
                <button className="logoutButton">Log Out</button>
            </Link> */}
            <li onClick={props.handle_logout}>logout</li>
        </>
    )

    return (
        <div className={"loginWrapper"}>
            {props.logged_in ? logged_in_nav : logged_out_nav}
        </div>
    );
};

export default LoginNav;