import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss"
class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <div className="wrapper">
          <Link to="/">
            <span className="material-icons">home</span> 
            <p>HOME</p>
          </Link>
          <Link to="/admin">
            <span className="material-icons">queue</span> 
            <p>ADD</p>  
          </Link>
          <Link to="/feed">
            <span className="material-icons">library_books</span> 
            <p>NEWS</p>
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
