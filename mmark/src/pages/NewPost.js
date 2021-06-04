import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies, Cookies, useCookies } from "react-cookie";
import { Trans, useTranslation } from 'react-i18next';
import Sheet from '../components/Sheet';
import Logo from '../components/Logo';
import '../stylesheets/NewPost.css';

class NewPost extends Component {
    
    constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
            'title': ' ',
            'description': ' ',
            'sheet_ds': JSON.stringify([]),
            'logged_in': cookies.get('token') ? true : false,
            'username': cookies.get('name')
        };
    }

    updateDS = (ds) =>{
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState['sheet_ds'] = JSON.stringify(ds);
            return newState;
        });
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        });
    };

    handlePost = (e, data) => {
        e.preventDefault();
        fetch('http://3.36.217.44:8000/plz/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'X-CSRFToken' : csrftoken
            },
            body: JSON.stringify(data)
        }).then(
            this.props.history.push('/Community/')
        )
    };

    render() {
        return (
            <div className='NewPost'>
                <Logo className='logo' isLink={true}/>
                <Link className='CommunityButton' to='/Community'>Kkoekkoli</Link>
                <div className='Form'>
                    <form onSubmit={(e) => {this.handlePost(e, this.state)}}>
                        Title<br/>
                        <input className='textInput' type={"text"} name={"title"} onChange={this.handleChange} /><br />
                        Author<br/>
                        <div className="authorName" type={"text"} name={"author"}>{this.state.username}</div>
                        description<br/>
                        <Sheet className="Sheet" dataStructure={JSON.parse(this.state.sheet_ds)} name={"sheet_ds"} updateDS={this.updateDS}/>
                        description<br/>
                        <textarea className='textInput' rows={"10"} cols={"50"} name={"description"} onChange={this.handleChange}></textarea><br/>
                        <input className="PostButton" type={"submit"} value={"Post"}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default withCookies(NewPost);