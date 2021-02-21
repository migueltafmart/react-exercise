import React, { Component } from "react";
import Card from "./Card/Card";

class NewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onData = () => {
    return this.props.data.map((news, i) => {
      return (
        <Card key={i} data={news} deleteSelf={() => this.props.deleteNews(i)} />
      );
    });
  };
  componentWillUnmount () {
    this.props.shouldRedirect(false);
  }
  render() {
    return (
      <div className="wrapper">
        <section>
          <h2>Latest News</h2>
          {this.onData()}
        </section>
      </div>
    );
  }
}

export default NewsList;
