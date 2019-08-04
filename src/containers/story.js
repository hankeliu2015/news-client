import React, { Component } from 'react'
import Comment from '../components/commentForm'
import StoryComments from '../components/storyComments'

export class Story extends Component {
  render() {
    return (
      <div>
        <h4>Single Story Show Page</h4>
        <hr></hr>
        <p> Content of a story</p>
        <hr></hr>
        <Comment />
        <hr></hr>
        <StoryComments />
        <hr></hr>
      </div>
    )
  }
}
