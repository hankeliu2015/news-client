import React, {Component} from 'react';
// import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import StoryList from './components/storyList';
import { fetchStories } from './actions/storyAction'

class App extends Component {

  componentDidMount() {
    this.props.fetchStories()
  }

  render () {

    return (
      <div>
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
        {this.props.loading ? "...Stories loading" : <StoryList stories={this.props.stories} />}

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
