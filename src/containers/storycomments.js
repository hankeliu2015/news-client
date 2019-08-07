import React, { Component } from 'react';
import Comment from '../components/commentForm';
import Comments from '../components/comments';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/storyAction'

class StoryComments extends Component {

  componentDidMount() {
    this.props.fetchStories()
    }

  reloadSingleStory = () => {
    const story = this.props.stories.find(story => story.id === parseInt(this.props.match.params.id))

    // if (story) {
    //   let storyDate = new Date(story.time)
    //   let dateString = storyDate.toDateString()
    // } else {
    //   let dateString = "Date is not available"
    // }

// debugger

    if (story) {
      return  (
        <div>
          <h4>{story.title}</h4>
          <p>{story.text}</p>
          <p>Date: {story.time}</p>

          <hr></hr>
          <p> </p>
          <hr></hr>
          <Comment storyId={story.id} />
          <hr></hr>
          <Comments />
          <hr></hr>
        </div>
      )
    } else {
      return (
        <div> ...loading. Need another condition to remind user back to storylist.</div>
      )
    }
  }

  render() {

    return (
      <div>
        {this.reloadSingleStory()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    stories: state.storyReducer.stories
  }
}

export default connect(mapStateToProps, {fetchStories})(StoryComments)
