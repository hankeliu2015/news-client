import React, { Component } from 'react';
import Comment from '../components/commentForm';
import Comments from '../components/comments';
import { connect } from 'react-redux'

class StoryComments extends Component {

  render() {

    const story = this.props.stories.find(story => story.id === parseInt(this.props.match.params.id))
    // debugger
    // storyDate = new Date(this.story.time)  //might need a condition to get it running first time wehn story is undefined.
    return (
      <div>
        <h4>{story.title}</h4>
        <p>{story.text}</p>
        <p>Time: {story.time}</p>

        <hr></hr>
        <p> </p>
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
  return {
    stories: state.storyReducer.stories
  }
}

export default connect(mapStatetoProps)(StoryComments)
