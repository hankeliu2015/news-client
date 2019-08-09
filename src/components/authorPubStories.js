import React, { Component } from 'react';
import { connect } from 'react-redux'

class AuthorPubStories extends Component {
  render() {

    const authorStories = this.props.authorStories.map((story, index) => <li key={index}>{story.story_content} Created at: {story.created_at}</li>)

    return (
      <div>
        <h4>Please see below your story published:</h4>
        {authorStories}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authorStories: state.storyReducer.authorStories
  }
}

export default connect(mapStateToProps)(AuthorPubStories)
