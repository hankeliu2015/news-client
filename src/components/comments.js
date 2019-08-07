import React, { Component } from 'react';
import { connect } from 'react-redux'

class Comments extends Component {

  render(){

    //iterate through the comments in Redux.
    const displayComments = this.props.comments.map((comment, index) => <li key={index}>{comment.story_comment}</li> )

    return (
      <div>
        <h3>Comments</h3>
        <p>Display the comments about a single story from Redux State and Database </p>
        {displayComments}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.commentReducer.comments
  }
}

export default connect(mapStateToProps)(Comments)
