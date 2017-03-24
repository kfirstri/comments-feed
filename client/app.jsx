import React, { Component } from 'react'
import {render} from 'react-dom'

import CommentsForm from './comments-form.jsx'
// import CommentsList from './comments-list.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.addComment = this.addComment.bind(this);

    this.loadComments();

    this.state = {
      comments: [],
      loadingComments: true
    };
  }

  addComment(email, text) {
    // do stuff
  }

  loadComments() {
    // load comments
  }

  render () {
    return (
      <div className="comments-container">
        <CommentsForm addComment={ this.addComment } />
        {/*<CommentsList comments={ this.state.comments } 
                      loadingComments={ this.state.loadingComments }/>*/}
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));