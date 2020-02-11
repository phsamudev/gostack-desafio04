import React from 'react';
import './Post.css';

import Comment from '../Comment/Comment';

function Post({ post }) {
  return (
    <li className="post">
      <div className="post__content">
        <div className="post__content-header">
          <div className="post__author-image">
            <img src={post.author.avatar} alt={post.author.name} />
          </div>
          <div className="post__info">
            <div className="post__author-name">
              {post.author.name}
            </div>
            <div className="post__date">
              {post.date}
            </div>
          </div>
        </div>
        <div className="post__content-text">
          {post.content}
        </div>
      </div>
      <ul>
        {post.comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
          />
        ))}
      </ul>
    </li>
  );
}

export default Post;