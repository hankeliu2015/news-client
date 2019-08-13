import React, { Component } from 'react';
import CommentForm from '../components/commentForm';
import Comments from '../components/comments';
import StoryShow from '../components/storyShow';
import { connect } from 'react-redux';
// import { fetchStories } from '../actions/storyAction';
import { fetchSingleStory } from '../actions/singleStoryAction'

class StoryComments extends Component {

  componentDidMount() {
    this.props.fetchSingleStory(this.props.match.params.id)
    }

  reloadSingleStory = () => {
    // const story = this.props.stories.find(story => story.id === parseInt(this.props.match.params.id))

    const story = this.props.singleStory

    // Display the story published time - wip
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
          <StoryShow story={story} />
          <hr></hr>
          <CommentForm storyId={story.id} />
          <hr></hr>
          <Comments storyId={story.id}/>
          <hr></hr>
        </div>
      )
    } else {
      return (
        <div> ...loading </div> //need another condition to remind user back to storylist.
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
    stories: state.storyReducer.stories,
    singleStory: state.storyReducer.singleStory
  }
}

export default connect(mapStateToProps, {fetchSingleStory})(StoryComments)
