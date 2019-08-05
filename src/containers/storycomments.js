import React, { Component } from 'react';
import Comment from '../components/commentForm';
import Comments from '../components/comments';
import { connect } from 'react-redux'

class StoryComments extends Component {
  render() {
    return (
      <div>
        <h4>Single Story Show Page</h4>
        <hr></hr>
        <p> Content of a story</p>
        <hr></hr>
        <Comment />
        <hr></hr>
        <Comments />
        <hr></hr>
      </div>
    )
  }
}

const mapStatetoProps = state => {

  // return {
  //
  //   story: this.state.stories.map((story, index) => story.id === linkId)
  //
  // }
}

export default connect(mapStatetoProps)(StoryComments)
