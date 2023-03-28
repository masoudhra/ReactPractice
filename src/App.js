import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    componentDidMount(){
        axios
        .all([
            axios.get('http://jsonplaceholder.typicode.com/users'),
            axios.get('http://jsonplaceholder.typicode.com/posts'),
            axios.get('http://jsonplaceholder.typicode.com/albums'),
        ])
        .then(
            axios.spread((users, posts, albums) => {
                console.log(albums.data);
            })
        )
    }
    render() {
        return (
            <div>
                <h1>Masoud</h1>
            </div>
        );
    }
}

export default App;