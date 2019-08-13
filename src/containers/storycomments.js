import React, { Component } from 'react';
import CommentForm from '../components/commentForm';
import Comments from '../components/comments';
import StoryShow from '../components/storyShow';
import { connect } from 'react-redux';
// import { fetchStories } from '../actions/storyAction';
import { fetchSingleStory } from '../actions/singleStoryAction';
import fetchComments from '../actions/commentFetchAction'

class StoryComments extends Component {

  componentDidMount() {
    this.props.fetchSingleStory(this.props.match.params.id);
    this.props.fetchComments();
    }

  reloadSingleStory = () => {

    // debugger
    const story = this.props.singleStory

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
    singleStory: state.storyReducer.singleStory,
    comments: state.commentReducer.comments
  }
}

export default connect(mapStateToProps, {fetchSingleStory, fetchComments})(StoryComments)
