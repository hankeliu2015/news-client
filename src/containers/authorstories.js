import React, { Component } from 'react';
import AuthorStoryForm from '../components/authorStoryForm';
import AuthorPubStories from '../components/authorPubStories'

class AuthorStories extends Component {

  render() {
    return (
      <div>
        <AuthorStoryForm />
        <AuthorPubStories />
      </div>
    )
  }
}

export default AuthorStories;
