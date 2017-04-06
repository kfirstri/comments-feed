import React, { Component } from 'react'
import md5 from 'blueimp-md5'

class Comment extends Component {
  render() {
    var comment = this.props.comment;
    var gravatarURL = `https://www.gravatar.com/avatar/${md5(comment.email.trim().toLowerCase())}`;

    return (
      <div className="comment">
        <div className="image">
          <img src={ gravatarURL } />
        </div>
        <div className="content">
          <span className="comment-email">{ comment.email }</span>
          <span className="comment-text">{ comment.text }</span>
        </div>
      </div>
    )
  }
}

export default Comment;