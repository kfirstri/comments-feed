import React, { Component } from 'react'
import md5 from 'blueimp-md5'

class CommentsList extends Component {
  constructor(props) {
    super(props);

    this.showComments = this.showComments.bind(this);
  }

  showComments() {
    if (this.props.comments.length == 0) {
      return <h2> There are no comments currently </h2>
    }

    return this.props.comments.map((comment, index) => {
      var gravatarURL = `https://www.gravatar.com/avatar/${md5(comment.email.trim().toLowerCase())}`;

      return (
        <div className="comment" key={ index }>
          <img src={ gravatarURL } />
          <h3>{ comment.email }</h3>
          <h2>{ comment.text }</h2>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="comments-list">
        { this.props.loadingComments ? "loading comments..." : this.showComments() }
      </div>
    )
  }
}

export default CommentsList;