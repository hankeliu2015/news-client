import React, { Component } from 'react';
import AuthorStoryForm from '../components/authorStoryForm';
import AuthorCreatedStories from '../components/authorCreatedStories'

class AuthorStories extends Component {

  render() {
    return (
      <div>
          <AuthorStoryForm />
          <AuthorCreatedStories />
      </div>
    )
  }
}

export default AuthorStories;
