import React, { Component } from 'react'
import md5 from 'blueimp-md5'

class Comment extends Component {
  render() {
    var comment = this.props.comment;
    var gravatarURL = `https://www.gravatar.com/avatar/${md5(comment.email.trim().toLowerCase())}`;

    return (
      <div className="comment">
        <img src={ gravatarURL } />
        <h3>{ comment.email }</h3>
        <h2>{ comment.text }</h2>
      </div>
    )
  }
}

export default Comment;