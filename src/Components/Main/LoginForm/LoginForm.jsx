import React, { Component } from "react";
import { UserContextConsumer } from "../../../context/userContext";
import "./LoginForm.scss";

class LoginForm extends Component {

  postUser = (e, c) => {
    e.preventDefault();
    let user = document.querySelector("input[type='text']");
    c.getUser(user.value);
    user.value = "";
  };
  
  render() {
    return (
      <div className="wrapper">
        <UserContextConsumer>
          {(c) => {
            return (
              <>
                <form
                  className="Form"
                  onSubmit={(e) => this.postUser(e, c)} >
                  <h3>Log in</h3>
                  <input
                    type="text"
                    name="user"
                    id="_user"
                    autoComplete="off"
                    placeholder="Username" />
                  <input 
                    type="submit" 
                    value="Log In" />
                </form>
              </>
            );
          }}
        </UserContextConsumer>
      </div>
    );
  }
}

export default LoginForm;
