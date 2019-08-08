import React, {Component} from 'react';
// import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import StoryList from './components/storyList';
// import { fetchStories } from './actions/storyAction'

import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import StoryComments from './containers/storycomments';
import { Navbar } from './components/navbar'

class App extends Component {

  // componentDidMount() {
  //   this.props.fetchStories()
  // }

  render () {
    // debugger
    return (
      <div>
        <Router>
          <Navbar />
          <Route path='/storylist' component={StoryList} />
          <Route exact path='/storycomments/:id' component={StoryComments} />
          <Route exact path='/authorstories' render={<h4>Here is a list of stories published by authors</h4>} />

        </Router>

      </div>
    );
  }
}

export default App

// const mapStatetoProps = state => {
//   return {
//     stories: state.storyReducer.stories,
//     loading: state.storyReducer.loading
//   }
// }
//
// export default connect(mapStatetoProps, {fetchStories})(App)
