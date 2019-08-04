import React, {Component} from 'react';
// import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import StoryList from './components/storyList';
import { fetchStories } from './actions/storyAction'

import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Story } from './components/story';
import { Navbar } from './components/navbar'

class App extends Component {

  componentDidMount() {
    this.props.fetchStories()
  }

  render () {

    return (
      <div>
        <Router>
          <Navbar />
          <hr></hr>
          <Route path='/news' component={StoryList} />
          <Route exact path='/story' component={Story} />
        </Router>

        // {this.props.loading ? "...Stories loading" : <StoryList stories={this.props.stories} />}

      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    stories: state.storyReducer.stories,
    loading: state.storyReducer.loading
  }
}

export default connect(mapStatetoProps, {fetchStories})(App)
