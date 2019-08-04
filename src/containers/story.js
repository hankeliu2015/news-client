import React, { Component } from 'react'
import Comment from '../components/commentForm'

export class Story extends Component {
  render() {
    return (
      <div>
        <h4>Single Story Show Page</h4>
        <hr></hr>
        <p> Story contents</p>
        <hr></hr>
        <Comment />
        <hr></hr>
        <h3>All Users Comments...</h3>
        <hr></hr>
      </div>
    )
  }
}
