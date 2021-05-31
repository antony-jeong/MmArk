import React, { Component } from 'react';

class Community extends Component {
     state = {
        articles: [],
        users: [],
        tags: []
    };

    async componentDidMount() {
        try {
            const res_articles = await fetch('http://127.0.0.1:8000/api/articles');
            const articles = await res_articles.json();
            this.setState({
                articles
            });
            const res_users = await fetch('http://127.0.0.1:8000/api/users');
            const users = await res_users.json();
            this.setState({
                users
            });
            const res_tags = await fetch('http://127.0.0.1:8000/api/tags');
            const tags = await res_tags.json();
            this.setState({
                tags
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.articles.map(item => (
                    <div key={item.id}>
                        <h1>Title: {item.title}</h1>
                        <h2>{item.created_time} || {item.modified_time}</h2>
                        <h3>Desc: {item.description}</h3>
                        <h4>Sheet: {item.sheet_ds}</h4>
                        <h4>Author: {this.state.users[item.author-1]!=undefined? this.state.users[item.author-1].username: ""}</h4>
                        <h4>Tags: {item.tags.length > 0 ? item.tags.map(i => (
                            this.state.tags[i-1]!=undefined? this.state.tags[i - 1].name + " " : ""
                        )) : ""}</h4>
                        <h4>Favorites: {item.total_favorites.length > 0 ? item.total_favorites.map(i => (
                            this.state.users[i-1]!=undefined? this.state.users[i - 1].username + " " : ""
                        )) : ""}
                        </h4>
                        <hr></hr>
                    </div>
                    // console.log(this.state.users[iStem.author-1]!=undefined? this.state.users[item.author-1]: "")
                ))}
            </div>
        );
    }
}

export default Community;