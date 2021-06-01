import Sheet from '../components/Sheet';
import React, { Component } from 'react';

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
        'sheet_ds': '[]'
    };

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
        console.log(JSON.stringify(data));
        e.preventDefault();
        fetch('http://localhost:8000/plz/', {
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
            <form onSubmit={(e) => {this.handlePost(e, this.state)}}>
                제목<br/>
                <input type={"text"} name={"title"} onChange={this.handleChange}/><br/>
                내용<br/>
                <Sheet className="Sheet" dataStructure={[{
                        "objectType": "p",
                        "bpm": 360,
                        "bpmUnit8": 2
                    }, {
                        "objectType": "c",
                        "treble": true
                    }, {
                        "objectType": "k",
                        "key": 0
                    }, {
                        "objectType": "n",
                        "length": 2,
                        "extend": false,
                        "rest": false,
                        "height": [-2],
                        "accidental": ["x"],
                        "noteDecoration": ["x"]
                    }, {
                        "objectType": "n",
                        "length": 2,
                        "extend": false,
                        "rest": false,
                        "height": [-1],
                        "accidental": ["x"],
                        "noteDecoration": ["x"]
                    }, {
                        "objectType": "n",
                        "length": 2,
                        "extend": false,
                        "rest": false,
                        "height": [0],
                        "accidental": ["x"],
                        "noteDecoration": ["x"]
                    }, {
                        "objectType": "n",
                        "length": 2,
                        "extend": false,
                        "rest": false,
                        "height": [1],
                        "accidental": ["x"],
                        "noteDecoration": ["x"]
                    }, {
                        "objectType": "n",
                        "length": 2,
                        "extend": false,
                        "rest": false,
                        "height": [2],
                        "accidental": ["x"],
                        "noteDecoration": ["x"]
                    }, {
                        "objectType": "n",
                        "length": 2,
                        "extend": false,
                        "rest": false,
                        "height": [3],
                        "accidental": ["x"],
                        "noteDecoration": ["x"]
                    }, {
                        "objectType": "n",
                        "length": 2,
                        "extend": false,
                        "rest": false,
                        "height": [4],
                        "accidental": ["x"],
                        "noteDecoration": ["x"]
                    }, {
                        "objectType": "n",
                        "length": 2,
                        "extend": false,
                        "rest": false,
                        "height": [5],
                        "accidental": ["x"],
                        "noteDecoration": ["x"]
                    }
                ]} name={"sheet_ds"}/>
                description<br/>
                <textarea rows={"10"} cols={"50"} name={"description"} onChange={this.handleChange}></textarea><br/>
                <input type={"submit"} value={"Post"}/>
            </form>
        );
    }
}

export default NewPost;