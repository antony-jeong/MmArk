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
        const {t} = this.props;
        return (
            <div className='NewPost'>
                <Logo className='logo' isLink={true}/>
                <div className='Form'>
                    <form onSubmit={(e) => {this.handlePost(e, this.state)}}>
                        {t("post.title")}<br/>
                        <input className='textInput' type={"text"} name={"title"} onChange={this.handleChange} /><br />
                        {t("post.author")}<br/>
                        <div className="authorName" type={"text"} name={"author"}>{this.state.username}</div>
                        <Sheet className="Sheet" dataStructure={JSON.parse(this.state.sheet_ds)} name={"sheet_ds"} updateDS={this.updateDS}/>
                        {t("post.description")}<br/>
                        <textarea className='textInput' rows={"10"} cols={"50"} name={"description"} onChange={this.handleChange}></textarea><br/>
                        <Link className='discardButton' to='/Community'>{t("post.discard")}</Link>
                        <input className="PostButton" type={"submit"} value={t("post.add")}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default withCookies(withTranslation()(NewPost));
