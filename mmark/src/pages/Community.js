import React, { Component } from 'react';

class Community extends Component {
     state = {
        posts: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/');
            const posts = await res.json();
            this.setState({
                posts
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.posts.map(item => (
                    <div key={item.id}>
                        <h1>{item.email}</h1>
                        <h2>{item.username}</h2>
                        <span>{item.desc}</span>
                        <b>{item.language}</b>
                    </div>
                ))}
            </div>
        );
    }
}

export default Community;