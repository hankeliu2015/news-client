import React, { Component } from 'react';
import { connect } from 'react-redux'

class AuthorPubStories extends Component {
  render() {
    return (
      <div>
        <h4>List all author published stories:</h4>

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
