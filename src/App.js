import React, {Component} from 'react'
// import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import StoryList from './components/storyList'

class App extends Component {
  render () {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>

        <hr></hr>
        <h4>Welcome to React Redux Job News</h4>
        <StoryList />

      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    // stories: state.storyReducer.stories
  }
}

export default connect(mapStatetoProps)(App)
