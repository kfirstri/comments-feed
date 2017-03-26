import React, { Component } from 'react'
import {render} from 'react-dom'
import Request from 'browser-request'

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

  /**
   * Add the comment to the DB and the current app state
   */
  addComment(email, text) {
    var newComment = {email, text};
    var newCommentsList = this.state.comments;
    newCommentsList.push(newComment);

    var dataToSend = {
      method: 'POST',
      url: '/comments',
      body: JSON.stringify(newComment),
      json: true
    };

    Request(dataToSend, (err, res) => {
      if (err) return console.log(err);
      console.log('saved comment');
    });

    this.setState({
      comments: newCommentsList
    });
  }

  /**
   * Load the comments from the db into the state
   */
  loadComments() {
    Request('/comments', (err, res, body) => {
      if (err) return console.log('Couldnt get comments - err');

      var commentsData = JSON.parse(body);
      this.setState({
        comments: commentsData,
        loadingComments: false
      });
    });
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