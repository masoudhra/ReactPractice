// import React, { Component } from 'react';

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       postData: [],
//     }
//   }

//   getPost = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//           .then((response) => response.json())
//           .then((json) => console.log(json));
//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//           .then((response) => response.json())
//           .then((json) => this.setState({
//             postData: json
//           }));

//   }


//   render() {
//     return (
//       <div>
//         <button onClick={this.getPost}>get post</button>
//         <h1>Posts: </h1>
//         {this.state.postData.map(post => <p key={post.id}>{post.title}</p>)}
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
import axios from "axios";
import Post from './components/Post';
import SendPost from './components/SendPost';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postData: [],
    }
  }

 
  componentDidMount (){
    axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => this.setState({postData: response.data}))
  }


  render() {
    const {postData} = this.state ;
    return (
      <div>
          {/* <button onClick={this.getPost}>get post</button> */}
          {/* {this.state.postData.map(post => <p key={post.id}>{post.title}</p>)} */}
          <SendPost/>
          <h1>Posts:</h1>
          {postData.map(post => <Post key={post.id} title= {post.title} body={post.body} />)}
      </div>
    );
  }
}

export default App;