import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { Cookies, withCookies } from 'react-cookie';
import * as JsSearch from 'js-search';
import ReactDom from 'react-dom';
import Popup from 'react-popup';
import Logo from '../components/Logo';
import CommunityBlock from "../components/CommunityBlock";
import Sheet from '../components/Sheet';
import LanguageSelectButton from '../components/LanguageSelectButton'
import '../stylesheets/Community.css';
import '../stylesheets/Popup.css';
import MyProfile from '../components/MyProfile';

class Community extends Component {

    state = {
        articles: [],
        users: [],
        tags: [],
        total_articles: [],
        curUser: ''
    };

    async componentDidMount() {
        const { cookies } = this.props;
        try {
            const res_articles = await fetch('http://3.36.217.44:8000/api/articles');
            const total_articles = await res_articles.json();
            this.setState({
                total_articles 
            });
            const res_users = await fetch('http://3.36.217.44:8000/api/users');
            const users = await res_users.json();
            this.setState({
                users
            });
            const res_tags = await fetch('http://3.36.217.44:8000/api/tags');
            const tags = await res_tags.json();
            this.setState({
                tags
            });
            if (this.props.match.params.keyword) {
                var search = new JsSearch.Search('title');
                search.addIndex('author_name');
                search.addIndex('description');
                search.addIndex('title');
                search.addDocuments(this.state.total_articles);
                const search_articles = search.search(this.props.match.params.keyword.trim());
                this.setState(prevState => {
                    return {
                        ...prevState,
                        search: this.props.match.params.keyword,
                        articles: search_articles,
                        curUser: users.find(obj => { return obj.username === cookies.get('name') }) || ""
                    }
                });
                const searchText = document.getElementById("searchInput");
                searchText.value = this.props.match.params.keyword;
            } else {
                this.setState(prevState => {
                    return {
                        ...prevState,
                        articles: total_articles,
                        curUser: users.find(obj => { return obj.username === cookies.get('name') }) || ""
                    }
                })
            }
        } catch (e) {
            console.log(e);
        }
    };

    searchArticles = (keyword) => {
        const total = this.state.total_articles;
        var search = new JsSearch.Search('title');
        search.addIndex('author_name');
        search.addIndex('description');
        search.addIndex('title');
        search.addDocuments(total);
        return search.search(keyword);
    }
    
    handleSubmit = (e) => {
        const searchText = document.getElementById("searchInput");
        this.setState(prevState => {
            return {
                ...prevState,
                search: searchText.value,
                articles: this.searchArticles(searchText.value)
            };
        });
        this.props.history.push("/Community/" + searchText.value);
        return true
    }

    
    handleDelete = (e) => {
        const articleId = Number(e.currentTarget.getAttribute('value'));
        e.preventDefault();
        console.log(articleId);
        fetch(`http://3.36.217.44:8000/plz/`, {
            method: 'DELETE',
            body: (articleId)
        }).then(() => {
            this.setState(prevState => {
                const total_articles = prevState.total_articles.filter(article => article.id !== articleId)
                const show_articles = prevState.articles.filter(article => article.id !== articleId)
                return {
                    ...prevState,
                    total_articles: total_articles,
                    articles: show_articles
                }
            })
        });
    };

    handleFav = (e) => {
        e.preventDefault();
        const { cookies } = this.props;
        const articleId = Number(e.currentTarget.getAttribute('value'));
        if (cookies.get('name')){
        fetch(`http://3.36.217.44:8000/fav/`, {
            method: 'POST',
            body: JSON.stringify({ articleId: articleId, user: cookies.get('name') })
        }).then(async () => {
            const res_articles = await fetch('http://3.36.217.44:8000/api/articles');
            const total_articles = await res_articles.json();
            const res_users = await fetch('http://3.36.217.44:8000/api/users');
            const users = await res_users.json();
            let show_articles = total_articles;
            if (this.props.match.params.keyword) {
                var search = new JsSearch.Search('title');
                search.addIndex('author_name');
                search.addIndex('description');
                search.addIndex('title');
                search.addDocuments(total_articles);
                show_articles = search.search(this.props.match.params.keyword.trim());
            }
            this.setState(prevState => {
                return {
                    ...prevState,
                    total_articles: total_articles,
                    articles: show_articles,
                    users: users,
                    curUser: users.find(obj => { return obj.username === cookies.get('name') }) || ""
                }
            });
        });}
        else {Popup.create({
            content: 'Please Log In to use Favorites',
            buttons: {
                left: [{
                    text: 'Cancel',
                    action: function () {
                        Popup.close();
                    }
                }],
                right: [{
                    text: 'Move to Login Page',
                    className: 'success',
                    action: this.goToLogin
                }]
            }
        });
        }
    }

    handleNewPost = () => {
        if (this.props.cookies.get('name'))
            this.props.history.push('/Community/newPost/');
        else {
            {Popup.create({
                content: 'Please Log In to Post',
                buttons: {
                    left: [{
                        text: 'Cancel',
                        action: function () {
                            Popup.close();
                        }
                    }],
                    right: [{
                        text: 'Move to Login Page',
                        className: 'success',
                        action: this.goToLogin
                    }]
                }
            });
            }
        }
    }

    goToLogin = () => {
        Popup.close();
        this.props.history.push('/login');
    }

    render() {
        const {t} = this.props;
        return (
            <div className='Community'>
                <Popup />
                <Logo className="logo" isLink={true} />
                <LanguageSelectButton className={"Language-Select-Dark"}/>
                <div className="searchWrapper">
                    <form className="search" onSubmit={this.handleSubmit}>
                        <input type="text" className="searchInput" id="searchInput" placeholder={t("community.search_placeholder")}></input>
                    </form>
                    <div className="searchButtonWrapper" onClick={this.handleSubmit}>
                        <svg className="searchButton" width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="13" cy="13" r="12" stroke="white" stroke-width="2"/>
                            <path d="M21.707 20.2928L31.4143 30" stroke="white" stroke-width="2"/>
                        </svg>
                    </div>
                </div>
                <button className='newPostButton' onClick={this.handleNewPost}>{t("community.new_post")}</button>
                {
                    this.state.curUser
                    ?<>
                        <CommunityBlock className="listWrapper" articles={this.state.articles} users={this.state.users} curUser={this.state.curUser} tags={this.state.tags} handleDelete={this.handleDelete} handleFav={this.handleFav}/>
                        <MyProfile />
                    </>
                    :
                        <CommunityBlock className="listWrapper" articles={this.state.articles} users={this.state.users} tags={this.state.tags} handleFav={this.handleFav}/>
                }
            </div>
            
        );
    }
}

export default withCookies(withRouter(withTranslation()(Community)));