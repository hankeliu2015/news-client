import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

export class Navbar extends Component {

  render() {

    return (
      <div>
      <NavLink to="/storylist" style={link} activeStyle={{background: 'darkblue'}}>Story List</NavLink>
      <NavLink to="/storycomments" style={link} activeStyle={{background: 'darkblue'}}>Story Comments</NavLink>
      </div>
    )
  }
}
