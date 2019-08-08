import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchComments from '../actions/commentFetchAction'

class Comments extends Component {

  componentDidMount() {
    this.props.fetchComments();
  }

  render(){
     // debugger
    const storyComments = this.props.comments.filter(comment => parseInt(comment.story_id) ===  this.props.storyId)

    const displayComments = storyComments.map((comment, index) => <li key={index}>{comment.story_comment} created at: {comment.created_at}</li>)

    return (
      <div>
        <h3>Comments</h3>
        <p>Story comments of current user and other users's comment fetched from Database  </p>
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

export default connect(mapStateToProps, {fetchComments})(Comments)
