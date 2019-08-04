import React, { Component } from 'react'

class Comment extends Component {

  render() {

    return (
      <div>
        <form>
          <label>Please add your comment</label>
          <br></br>
          <textarea></textarea>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    )

  }
}

export default Comment
