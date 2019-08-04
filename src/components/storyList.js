import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/storyAction'


class StoryList extends Component {

  componentDidMount() {
    this.props.fetchStories()
  }

  render() {
    // debugger

    const list = this.props.stories.map((story, index) => <li key={index}><a href="/story" data-storyid={story.id}> {story.title}</a></li>)

    // const list = () => {
    //   if (this.props.stories.length ===0) {
    //     return (
    //       this.props.stories.map((story, index) => <li key={index}><a href="/story" data-storyid={story.id}> {story.title}</a></li>)
    //     )
    //     } else {
    //       return "...loading"
    //   }
    // }

    // debugger

    return (
      <div>
        <p>Hacker News Jobs Stroies display here</p>
        <hr></hr>
        <ol>
          {this.props.loading ? "...Stories loading" : list}
        </ol>
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    stories: state.storyReducer.stories,
    loading: state.storyReducer.loading
  }
}
export default connect(mapStatetoProps, {fetchStories})(StoryList)
