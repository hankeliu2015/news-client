import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions/storyAction';
import { Link } from 'react-router-dom'

class StoryList extends Component {

  componentDidMount() {
    this.props.fetchStories()
  }

  render() {

    const list = this.props.stories.map((story, index) => <li key={story.id}><Link to={`/storycomments/${story.id}`}> {story.title}</Link></li>)

    // const list = this.props.stories.map((story, index) => <li key={index}><Link to={`/storycomments/${story.id}`}> {story.title}</Link></li>)

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
          <h4 style={{ borderTop: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>News Feed from Hacker News </h4>

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
