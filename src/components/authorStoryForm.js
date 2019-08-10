import React, { Component } from 'react';
import { connect } from 'react-redux'
import { storyUpload } from '../actions/authorCreateStoryAction';
import Button from 'react-bootstrap/Button'

class AuthorStoryForm extends Component {
  state = {
    story_content: '',    //need to be the same as stories table column name
    author_name: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.storyUpload(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <h4>Publishing your own story: </h4>
          <label>Story Content</label>
          <br></br>
          <textarea rows="5" cols="60" name="story_content" onChange={this.handleOnChange} value={this.state.content}></textarea>
          <br></br>
          <label>Author</label>
          <br></br>
          <input type="text" name="author_name" onChange={this.handleOnChange} value={this.state.name}></input>
          <br></br>
          <Button variant="outline-primary" type="submit">Submit</Button>
        </form>

      </div>
    )
  }
}

export default connect(null, {storyUpload})(AuthorStoryForm)
