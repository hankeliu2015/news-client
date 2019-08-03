import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/story">Story</NavLink>
    </div>
  )
}
