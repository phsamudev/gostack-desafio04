import React from 'react';
import './Comment.css';

function Comment({ comment }) {
  return (
    <li className="comment">
      <div className="comment__author-image">
        <img src={comment.author.avatar} alt={comment.author.name}/>
      </div>
      <div className="comment__content">
        <span className="comment__author-name">{comment.author.name}</span>
        {comment.content}
      </div>
    </li>
  );
}

export default Comment;