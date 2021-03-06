import React, { Component } from 'react'
class CommentsForm extends Component {
  constructor(props) {
    super(props);

    this.addComment = this.addComment.bind(this);
    this.handleFormData = this.handleFormData.bind(this);
    
    this.state = {
      email: '',
      text: ''
    }
  }

  handleFormData(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addComment(e) {
    e.preventDefault();
    this.props.addComment(this.state.email, this.state.text);
    this.setState({ email: '', text: '' });
  }

  render() {
    return (
      <div className="comments-form">
        <form onSubmit={ this.addComment }>
          <input type="text" 
                 className="email" 
                 name="email" 
                 value={ this.state.email } 
                 placeholder="Email:"
                 onChange={ this.handleFormData } />
          <input type="text" 
                 className="textField" 
                 name="text" 
                 value={ this.state.text }
                 placeholder="Enter a Message:"
                 onChange={ this.handleFormData } />
          <input type="submit" className="submit" value="SUBMIT"/>
        </form>
      </div>
    )
  }
}

export default CommentsForm;