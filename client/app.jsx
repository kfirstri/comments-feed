import React, { Component } from 'react'
import {render} from 'react-dom'

import CommentsForm from './comments-form.jsx'
import CommentsList from './comments-list.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.addComment = this.addComment.bind(this);
    this.loadComments = this.loadComments.bind(this);

    this.loadComments();

    this.state = {
      comments: [],
      loadingComments: true
    };
  }

  addComment(email, text) {
    // add the new comment
    var newCommentsList = this.state.comments;
    newCommentsList.push({ email, text });

    this.setState({
      comments: newCommentsList
    });
  }

  loadComments() {
    // load comments
    setTimeout(function(w) {
      w.setState({
        comments: [],
        loadingComments: false
      });
    }, 3000, this);
  }

  render () {
    return (
      <div className="comments-container">
        <CommentsForm addComment={ this.addComment } />
        <CommentsList comments={ this.state.comments } 
                      loadingComments={ this.state.loadingComments }/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));