import React, { Component } from "react";
import { UserContextConsumer } from "../../context/userContext";
import "./Header.scss"
class Header extends Component {
  render() {
    return <header className="Header">
      <div className="wrapper">
        <UserContextConsumer>
          {context => {
            return context.user === ""? <a href="/"><button>Log In</button> </a>: <a href="/">Logged in as <b>{context.user}</b></a>
          }}
        </UserContextConsumer>
       
      </div>
       
    </header>;
  }
}

export default Header;
