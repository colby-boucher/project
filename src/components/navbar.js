import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand" to='/'>Home</Link>
          <Link className="nav-item nav-link active" to='About'>About</Link>
          <Link className="nav-item nav-link disabled" href="#">Disabled</Link>
        </nav>
      </div>
    )
  }
}