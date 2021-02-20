import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import NewsForm from "./NewsForm/NewsForm";
import NewsList from "./NewsList/NewsList";
import "./Main.scss"
class Main extends Component {
  render() {
    return (
      <main className="Main">
        <Switch>
        <div className="wrapper">
          <Route path="/" component={LoginForm} exact />
          <Route path="/admin" component={NewsForm} />
          <Route path="/feed" component={NewsList} />
        </div>
      </Switch>
      </main>
      
    );
  }
}

export default Main;
