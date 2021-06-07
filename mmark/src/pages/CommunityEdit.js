import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies, Cookies, useCookies } from "react-cookie";
import { Trans, useTranslation, withTranslation } from 'react-i18next';
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
            'tags': [""],
            'tags_total': [],
            'sheet_ds': JSON.stringify([]),
            'logged_in': cookies.get('token') ? true : false,
            'username': cookies.get('name'),
            focusNow: "o",
            initialDs: []
        };
        const { t, i18n } = withTranslation();
    }

    async componentDidMount() {
        try {
            const res_tags = await fetch('http://3.36.217.44:8000/api/tags');
            const tags_total = await res_tags.json();
            this.setState({
                tags_total
            });
        } catch (e) {
            console.log(e);
        }
    }

    genGetFocusNow = (f) => {
        return () => {
            this.setState(prevstate => {
                return {...prevstate, focusNow: f};
            });
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
        );
    };

    inTag = (tagName) => {
        for (var i = 0; i < this.state.tags.length; i++) {
            if(tagName == this.state.tags[i]) return true;
        }
        return false;
    }

    handleTagClick = (e) => {
        (this.genGetFocusNow("o"))();
        const target_tag = e.target.innerText
        if (target_tag != undefined) {            
            if (this.inTag(target_tag)) {
                this.setState(prevstate => {
                    const newState = { ...prevstate };
                    newState['tags'].pop(target_tag);
                    e.target.classList.remove("clicked");
                    return newState;
                });
            } else {
                this.setState(prevstate => {
                    const newState = { ...prevstate };
                    newState['tags'].push(target_tag);
                    e.target.classList.add("clicked");
                    return newState;
                });
            }
        }
    }

    render() {
        const {t} = this.props;
        return (
            <div className='NewPost'>
                <Logo className='logo' isLink={true}/>
                <div className='Form'>
                    <form onSubmit={(e) => {this.handlePost(e, this.state)}}>
                        {t("post.title")}<br/>
                        <input className='textInput' type={"text"} name={"title"} onChange={this.handleChange} onClick={this.genGetFocusNow("o")}/><br />
                        {t("post.author")} {this.state.username}<br />
                        {t("post.tags")} <br />
                        <div className="tagWrapper">
                            {this.state.tags_total.map(item => (
                                <div className="tagButton" style={{background: `${item.color}`}} onClick={this.handleTagClick}>{item.name}</div>
                            ))}
                        </div>
                        <Sheet className="Sheet" dataStructure={this.state.initialDs} updateDS={this.updateDS} viewMode={"create"} focusNow={this.state.focusNow} getFocusNow={this.genGetFocusNow("s")}/>
                        {t("post.description")}<br/>
                        <textarea className='textInput' rows={"5"} cols={"50"} name={"description"} onChange={this.handleChange} onClick={this.genGetFocusNow("o")}></textarea><br/>
                        <div className='newPost-ButtonWrapper'>
                            <Link className='DiscardButton' to='/Community'>{t("post.discard")}</Link>
                            <input className="PostButton" type={"submit"} value={t("post.add")}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withCookies(withTranslation()(NewPost));
