import React, { Component } from 'react';
import AuthorStoryForm from '../components/authorStoryForm';
import AuthorCreatedStories from '../components/authorCreatedStories';
import { connect } from 'react-redux';
import fetchAuthorsCreatedStories from '../actions/authorCreatedStoriesFetchAction'

class AuthorStories extends Component {

  componentDidMount() {
    this.props.fetchAuthorsCreatedStories();
  }

  render() {
    const authorStories = this.props.authorStories.map((story, index) => <li key={story.id}>{story.story_content} Created at: {story.created_at}</li>)

    const allAuthorsStories = this.props.allAuthorsStories.slice(0).reverse().map((story, index) => <li key={story.id}>{story.story_content} Created at: {story.created_at}</li>)

    return (
      <div>
          <AuthorStoryForm />
          <AuthorCreatedStories authorStories={authorStories} allAuthorsStories={allAuthorsStories} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    authorStories: state.storyReducer.authorStories,
    allAuthorsStories: state.storyReducer.allAuthorsStories
  }
}

export default connect(mapStateToProps, {fetchAuthorsCreatedStories})(AuthorStories)
