import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import { connect } from 'react-redux';
import StoryList from './components/storyList';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import StoryComments from './containers/storycomments';
import { Navbar } from './components/navbar';
import AuthorStories from './containers/authorstories';

import Container from 'react-bootstrap/Container'

class App extends Component {

  render () {
    return (
      <div>
        <Router>
          <Navbar />
          <br></br>
          <Container>
            <Route path='/storylist' component={StoryList} />
            <Route exact path='/storycomments/:id' component={StoryComments} />
            <Route exact path='/authorstories' component={AuthorStories} />

          </Container>

        </Router>

      </div>
    );
  }
}

export default App
