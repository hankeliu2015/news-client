import React, { Component } from 'react'

class StoryList extends Component {
  render() {
    const list = this.props.stories.map((story, index) => <li key={index}><a href="/story" data-storyid={story.id}> {story.title}</a></li>)

    return (
      <div>
        <p>Hacker News Jobs Stroies display here</p>
        <ol>
          {list}
        </ol>
      </div>
    )
  }
}

export default StoryList
