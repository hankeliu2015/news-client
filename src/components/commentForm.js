import React, { Component } from 'react'
import { commentUpload } from '../actions/commentAction'

class Comment extends Component {

  state = {
    comment: ""
  }

  handleOnChange = event => {
     // debugger
    this.setState({
      [event.target.name]: event.target.value,
      story_id: this.props.storyId
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    //to pass the state.comments to fetch rails API create action.
    //create a commentAction to fetch Rails API.
    //how to pass the comments?

  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Please add your comment</label>
          <br></br>
          <textarea value={this.state.comment} name="comment" onChange={this.handleOnChange}></textarea>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    )

  }
}

//add the dispatch here.
export default Comment
