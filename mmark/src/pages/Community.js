import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import * as JsSearch from 'js-search';
import Logo from '../components/Logo';
import CommunityBlock from "../components/CommunityBlock";
import Sheet from '../components/Sheet';
import '../stylesheets/Community.css';

class Community extends Component {
    state = {
        articles: [],
        users: [],
        tags: [],
        total_articles: []
    };
    


    async componentDidMount() {
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
                        articles: search_articles
                    }
                });
                const searchText = document.getElementById("searchInput");
                searchText.value = this.props.match.params.keyword;
            } else {
                this.setState(prevState => {
                    return {
                        ...prevState,
                        articles: total_articles
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
        this.props.history.push("/Community/"+searchText.value);
        return true
    }


    render() {
        const {t} = this.props;
        return (
            <div className='Community'>
                <Logo className="logo" isLink={true} />
                <div className="searchWrapper">
                    <form className="search" onSubmit={this.handleSubmit}>
                        <input type="text" className="searchInput" id="searchInput" placeholder="Search Placeholder"></input>
                    </form>
                    <div className="searchButtonWrapper" onClick={this.handleSubmit}>
                        <svg className="searchButton" width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="13" cy="13" r="12" stroke="white" stroke-width="2"/>
                            <path d="M21.707 20.2928L31.4143 30" stroke="white" stroke-width="2"/>
                        </svg>
                    </div>
                </div>
                <Link className='newPostButton' to='/Community/newPost'>{t("community.new_post")}</Link>
                <CommunityBlock className="listWrapper" articles={this.state.articles} users={this.state.users} tags={this.state.tags}/>
            </div>
        );
    }
}

export default withRouter(withTranslation()(Community));