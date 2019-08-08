import React, { Component } from 'react';

class AuthorStories extends Component {

  render() {
    return (
      <div>
        <h4>Publishing your own story: </h4>
        <form>
          <label>Story Content</label>
          <br></br>
          <textarea rows="5" cols="60"></textarea>
          <br></br>
          <label>Author</label>
          <br></br>
          <input type="text"></input>
          <br></br>
          <button type="submit">Submit</button>
        </form>

      </div>
    )
  }
}

export default AuthorStories;
