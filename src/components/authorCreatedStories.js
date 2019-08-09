import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchAuthorsCreatedStories from '../actions/authorCreatedStoriesFetchAction'

class AuthorCreatedStories extends Component {

  componentDidMount() {
    this.props.fetchAuthorsCreatedStories();
  }

  render() {
    const authorStories = this.props.authorStories.map((story, index) => <li key={index}>{story.story_content} Created at: {story.created_at}</li>)

    const allAuthorsStories = this.props.allAuthorsStories.map((story, index) => <li key={index}>{story.story_content} Created at: {story.created_at}</li>)

    return (
      <div>
        <h4>Your story is successfully published:</h4>
        {authorStories}

        <h5>Please check others authors published story:</h5>
        {allAuthorsStories}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authorStories: state.storyReducer.authorStories,
    allAuthorsStories: state.storyReducer.allAuthorsStories
  }
}

export default connect(mapStateToProps, {fetchAuthorsCreatedStories})(AuthorCreatedStories)
