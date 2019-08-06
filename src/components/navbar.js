import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

const linkStyle = {
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
      <NavLink to="/storylist" style={linkStyle} activeStyle={{background: 'darkblue'}}>Story List</NavLink>
      <NavLink to="/storycomments" style={linkStyle} activeStyle={{background: 'darkblue'}}>Story Comments</NavLink>
      </div>
    )
  }
}
