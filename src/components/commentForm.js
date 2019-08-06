import React, { Component } from 'react'

class Comment extends Component {

  state = {
    comment: ""
  }

  handleOnChange = event => {
    // debugger
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    //pass the state.comments to Rails API
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

export default Comment
