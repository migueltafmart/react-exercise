import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();
class NewsContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {
        author: "",
        title: "",
        description: "",
        content: "",
        urlToImage: "",
      },
      newsList: [],
    };
  }

  getNews = (news) => {
    this.setState({ newsList: [...this.state.newsList, news] });
  };

  render() {
    return (
      <Provider value={{ news: this.state.news, getNews: this.getNews }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { NewsContextProvider, Consumer as NewsContextConsumer };
