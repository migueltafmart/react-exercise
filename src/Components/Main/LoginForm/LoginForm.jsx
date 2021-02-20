import React, { Component } from "react";
import { UserContextConsumer } from "../../../context/userContext";
import "./LoginForm.scss";
class LoginForm extends Component {
  postUser = (e, context) => {
    e.preventDefault();
    let user = document.querySelector("input[type='text']").value;
    context.getUser(user);
    document.querySelector("input[type='text']").value = "";
  };
  render() {
    return (
      <UserContextConsumer>
        {(context) => {
          return (
            <>
              <form
                className="Form"
                onSubmit={(event) => this.postUser(event, context)}
              >
                <h3>Log in</h3>
                <input
                  type="text"
                  name="user"
                  id="_user"
                  autoComplete="off"
                  placeholder="Username"
                />
                <input type="submit" value="Log In" />
              </form>
            </>
          );
        }}
      </UserContextConsumer>
    );
  }
}

export default LoginForm;
