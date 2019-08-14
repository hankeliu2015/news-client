import React from 'react';
import { NavLink } from 'react-router-dom'

const linkStyle = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

export default function Navbar() {
    return (
      <div >
        <NavLink to="/" style={linkStyle} activeStyle={{background: 'darkblue'}}>Home</NavLink>
        <NavLink to="/stories" style={linkStyle} activeStyle={{background: 'darkblue'}}>Stories</NavLink>
        <NavLink to="/storycomments" style={linkStyle} activeStyle={{background: 'darkblue'}}>Story Comments</NavLink>
        <NavLink to="/authorstories" style={linkStyle} activeStyle={{background: 'darkblue'}}>Author Stories</NavLink>
      </div>
    )
}
