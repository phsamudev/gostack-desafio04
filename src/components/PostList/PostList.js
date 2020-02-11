import React, { Component } from 'react';
import './PostList.css';

import Post from '../Post/Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Lucas Adorno",
          avatar: "https://avatars3.githubusercontent.com/u/24576655?s=400&v=4"
        },
        date: "03 Feb 2020",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Pedro Samú",
              avatar: "https://avatars1.githubusercontent.com/u/47437086?s=460&v=4"
            },
            content: "Não sei dizer..."
          },
          {
            id: 2,
            author: {
              name: "Felipe Maia",
              avatar: "https://avatars3.githubusercontent.com/u/1574224?s=400&v=4"
            },
            content: "Creio que estejam! Dá uma olhada lá no Discord!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Pedro Samú",
          avatar: "https://avatars1.githubusercontent.com/u/47437086?s=460&v=4"
        },
        date: "20 Jan 2020",
        content: "Lorem ipsum dolor sit amet.",
        comments: [
          {
            id: 3,
            author: {
              name: "Lucas Adorno",
              avatar: "https://avatars3.githubusercontent.com/u/24576655?s=400&v=4"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut metus at ligula accumsan rutrum vel sit amet sem. Ut imperdiet varius dignissim."
          },
          {
            id: 4,
            author: {
              name: "Felipe Maia",
              avatar: "https://avatars3.githubusercontent.com/u/1574224?s=400&v=4"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed justo convallis, porta neque at, dignissim velit. Suspendisse potenti. Morbi in aliquam lacus. Quisque rutrum enim at orci euismod, a imperdiet diam blandit. Vestibulum egestas ligula eu ex lacinia, sit amet faucibus metus dapibus. Integer semper ut massa quis consequat. Aliquam vehicula varius neque, eget ullamcorper enim lacinia tincidunt. Praesent ut metus felis. Donec eleifend consequat vulputate. Proin quis metus augue. Fusce sit amet urna non elit pharetra pulvinar. Cras ornare nisi sit amet leo mollis rhoncus id quis magna. Nulla facilisi. Curabitur in rhoncus est."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Felipe Maia",
          avatar: "https://avatars3.githubusercontent.com/u/1574224?s=400&v=4"
        },
        date: "13 Jan 2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante nunc, sagittis eget elit at, suscipit mattis ligula. Sed volutpat mollis scelerisque. Nam purus sem, sollicitudin sed pellentesque id, sodales a augue. Mauris et hendrerit justo. In hac habitasse platea dictumst. Suspendisse dapibus nisl nec risus mattis, at finibus odio bibendum.",
        comments: [
          {
            id: 5,
            author: {
              name: "Lucas Adorno",
              avatar: "https://avatars3.githubusercontent.com/u/24576655?s=400&v=4"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut metus at ligula accumsan rutrum vel sit amet sem. Ut imperdiet varius dignissim."
          },
          {
            id: 6,
            author: {
              name: "Lucas Adorno",
              avatar: "https://avatars3.githubusercontent.com/u/24576655?s=400&v=4"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed justo convallis, porta neque at, dignissim velit. Suspendisse potenti. Morbi in aliquam lacus. Quisque rutrum enim at orci euismod, a imperdiet diam blandit. Vestibulum egestas ligula eu ex lacinia, sit amet faucibus metus dapibus. Integer semper ut massa quis consequat. Aliquam vehicula varius neque, eget ullamcorper enim lacinia tincidunt. Praesent ut metus felis. Donec eleifend consequat vulputate. Proin quis metus augue. Fusce sit amet urna non elit pharetra pulvinar. Cras ornare nisi sit amet leo mollis rhoncus id quis magna. Nulla facilisi. Curabitur in rhoncus est."
          }
        ]
      },
    ]
  };

  render() {
    return (
      <ul className="post-list">
        {this.state.posts.map(post => (
          <Post
            key={post.id}
            post={post}
          />
        ))}
      </ul>
    );
  }
}

export default PostList;