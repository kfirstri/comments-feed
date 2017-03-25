import React, { Component } from 'react'
import Comment from './comment.jsx'

class CommentsList extends Component {
  constructor(props) {
    super(props);

    this.showComments = this.showComments.bind(this);
    this.handleFilter = this.handleFilter.bind(this);

    this.state = {
      filter: ''
    };
  }

  showComments(filter) {
    if (this.props.loadingComments) {
      return <h2> Loading comments... </h2>;
    }

    if (this.props.comments.length == 0) {
      return <h2> There are no comments currently </h2>
    }

    return this.props.comments.filter(comment => {
      return comment.email.includes(filter) || comment.text.includes(filter);
    })
    .map((comment, index) => {
      return <Comment key={ index } comment={ comment } />
    });
  }

  /**
   * Update state with the typed filter
   */
  handleFilter(event) {
    this.setState({
      filter: event.target.value
    });
  }

  render() {
    return (
      <div className="comments-list">
        <input type="text" 
               placeholder="filter" 
               name="filter" 
               value={ this.state.filter } 
               onChange={ this.handleFilter }/>
        { this.showComments(this.state.filter) }
      </div>
    )
  }
}

export default CommentsList;