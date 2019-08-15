import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import { connect } from 'react-redux';
import StoriesContainer from './containers/storiescontainer';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import StoryComments from './containers/storycomments';
import Navbar from './components/navbar';
import AuthorStories from './containers/authorstories';

import Container from 'react-bootstrap/Container';
import User from './containers/userContainer';
import { withCookies } from 'react-cookie'

class App extends Component {

  render () {
    return (
      <div>
        <Router>
          <Navbar />
          <br></br>
          <Container>
            <Route exact path='/' render={() => (<User cookies={this.props.cookies} />)} />
            <Route path='/stories' component={StoriesContainer} />
            <Route exact path='/storycomments/:id' component={StoryComments} />
            <Route exact path='/authorstories' component={AuthorStories} />
          </Container>
        </Router>
      </div>
    );
  }
}

export default withCookies(App)
