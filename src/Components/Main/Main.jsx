import axios from "axios";
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import NewsForm from "./NewsForm/NewsForm";
import NewsList from "./NewsList/NewsList";
import "./Main.scss"
class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       newsList: [],
       redirect: false
    }
  ;}
  componentDidMount () {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=0723688816724ff3bcbe3b6c65af6229"
      )
      .then((newsList) => this.setState({ newsList:[...newsList.data.articles] }))
      .catch((err) => console.log(err));
  }

  deleteNews = k => {
    return this.setState({newsList:this.state.newsList.filter((v, i) => i !== k) })
  };

  postNews = n => {
    this.setState({newsList: [ n ,...this.state.newsList]})
  };
  shouldRedirect = (p) => {
    this.setState({redirect: p});
  }
  render() {
    return (
      <main className="Main">
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/admin">
            {this.state.redirect ? <Redirect to="/feed"/>  :  <NewsForm postNews={this.postNews} shouldRedirect={this.shouldRedirect}/>}
          </Route>
          <Route path="/feed" component={ () => <NewsList data={this.state.newsList} deleteNews={this.deleteNews} shouldRedirect={this.shouldRedirect} />}  />
      </Switch>
      </main>
      
    );
  };
};

export default Main;
