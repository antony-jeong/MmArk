import React, { Component } from 'react';
import '../stylesheets/Community.css';

const handleOnClick = function () {
    const descButtonWrapper = document.getElementById("descButtonWrapper");
    const descriptionWrapper = document.getElementById("descriptionWrapper");
    if (descButtonWrapper.classList.contains("show")) {
        descButtonWrapper.classList.remove("show");
        descButtonWrapper.classList.add("hide");
        descriptionWrapper.classList.remove("hidden");
        descButtonWrapper.innerText = "Hide Description";
    } else if (descButtonWrapper.classList.contains("hide")) {
        descButtonWrapper.classList.remove("hide");
        descButtonWrapper.classList.add("show");
        descButtonWrapper.innerText = "Show Description";
        descriptionWrapper.classList.add("hidden");
    }
}

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
    };

    

    render() {
        return (
            <div className="listWrapper">
                {this.state.articles.map(item => (
                    <div key={item.id} className="itemWrapper">
                        <div className="authorWrapper">Author: {this.state.users[item.author-1]!=undefined? this.state.users[item.author-1].username: ""}</div>
                        <div className="titleWrapper">
                            <div className="title">
                            {item.title}
                            </div>
                            <div className="date">{item.created_time} || {item.modified_time}</div>
                        </div>
                        <div className="descWrapperWrapper">
                            <div className="descWrapper">
                                <div className="sheetWrapper">Sheet: {item.sheet_ds}</div>
                                <div className="favWrapper">Favorites: {item.total_favorites.length}</div>
                                <div className="tagWrapper">{item.tags.length > 0 ? item.tags.map(i => (
                                    <div className="tag">#{this.state.tags[i - 1] != undefined ? this.state.tags[i - 1].name + " " : ""} / color: {this.state.tags[i - 1] != undefined ? this.state.tags[i - 1].color + " " : ""}</div>
                                    )) : ""}
                                </div>
                                <div className="descButtonWrapper show" id="descButtonWrapper" onClick={handleOnClick}>Show Description</div>
                            </div>
                            <div className="descriptionWrapper hidden" id="descriptionWrapper">Desc: {item.description}</div>
                        </div>
                    </div>
                    // console.log(this.state.users[iStem.author-1]!=undefined? this.state.users[item.author-1]: "")
                ))}
            </div>
        );
    }
}

export default Community;