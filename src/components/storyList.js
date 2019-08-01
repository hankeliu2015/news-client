import React, { Component } from 'react'

class StoryList extends Component {
  render() {
    const list = this.props.stories.map((story, index) => <li key={index}>{story.id}: {story.title} </li>)

    return (
      <div>
        <p>Hacker News Jobs Stroies display here</p>
        {list}
      </div>
    )
  }
}

export default StoryList
