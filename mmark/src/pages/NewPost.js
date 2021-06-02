import Sheet from '../components/Sheet';
import React, { Component } from 'react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

// function getCookie(name) {
//     var cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         var cookies = document.cookie.split(';');
//         for (var i = 0; i < cookies.length; i++) {
//             var cookie = cookies[i].trim();
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }

// var csrftoken = getCookie('csrftoken');

class NewPost extends Component {

    state = {
        'title': ' ',
        'description': ' ',
        'sheet_ds': JSON.stringify([])
    };

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
        fetch('http://3.35.175.101:8000/plz/', {
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
            <>
            <Logo isLink={true}/>
            <Link to='/Community'>Community</Link>
            <form onSubmit={(e) => {this.handlePost(e, this.state)}}>
                제목<br/>
                <input type={"text"} name={"title"} onChange={this.handleChange}/><br/>
                내용<br/>
                <Sheet className="Sheet" dataStructure={JSON.parse(this.state.sheet_ds)} name={"sheet_ds"} updateDS={this.updateDS}/>
                description<br/>
                <textarea rows={"10"} cols={"50"} name={"description"} onChange={this.handleChange}></textarea><br/>
                <input type={"submit"} value={"Post"}/>
            </form>
            </>
        );
    }
}

export default NewPost;