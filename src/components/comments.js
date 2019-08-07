import React, { Component } from 'react';
import { connect } from 'react-redux'

class Comments extends Component {

  render(){
    return (
      <div>
        <h3>Comments</h3>
        <p>Display the comments about a single story from Redux State or Database? </p>

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
