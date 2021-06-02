import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import CommunityBlock from "../components/CommunityBlock";
import Sheet from '../components/Sheet';
import '../stylesheets/Community.css';

class Community extends Component {
     state = {
        articles: [],
        users: [],
        tags: []
    };

    async componentDidMount() {
        try {
            const res_articles = await fetch('http://3.36.217.441:8000/api/articles');
            const articles = await res_articles.json();
            this.setState({
                articles
            });
            const res_users = await fetch('http://3.36.217.44:8000/api/users');
            const users = await res_users.json();
            this.setState({
                users
            });
            console.log(users);
            const res_tags = await fetch('http://3.36.217.44:8000/api/tags');
            const tags = await res_tags.json();
            this.setState({
                tags
            });
            console.log(articles);
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        return (
            <div className='Community'>
                <Logo className="logo" isLink={true} />
                <div className="searchWrapper">
                    <div className="search">
                        <div className="searchText">
                            Searching is currently under construction..
                        </div>
                    </div>
                    <svg className="searchButton" width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13" cy="13" r="12" stroke="white" stroke-width="2"/>
                        <path d="M21.707 20.2928L31.4143 30" stroke="white" stroke-width="2"/>
                    </svg>
                </div>
                <Link className='newPostButton' to='/Community/newPost'>+ NEW POST</Link>
                <CommunityBlock className="listWrapper" articles={this.state.articles} users={this.state.users} tags={this.state.tags}/>
            </div>
        );
    }
}

export default Community;