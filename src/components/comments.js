import React, { Component } from 'react';
import { connect } from 'react-redux'

class Comments extends Component {

  render(){
    return (
      <p>Display the comments about a single story</p>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.commentReducer.comments
  }
}

export default connect(mapStateToProps)(Comments)
