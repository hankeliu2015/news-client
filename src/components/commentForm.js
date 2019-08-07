import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commentUpload } from '../actions/commentAction'

class Comment extends Component {

  state = {
    story_comment: ""
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      story_id: this.props.storyId
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.commentUpload(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Please add your comment</label>
          <br></br>
          <textarea value={this.state.comment} name="story_comment" onChange={this.handleOnChange}></textarea>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {commentUpload})(Comment)
