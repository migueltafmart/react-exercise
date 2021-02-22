import React, { Component } from "react";
import { UserContextConsumer } from "../../../context/userContext";

class NewsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentWillUnmount() {
    this.props.shouldRedirect(false);
  }
  onSubmit = (e) => {

    e.preventDefault();
    let author = document.querySelector("input[name='author']");
    let title = document.querySelector("input[name='title']");
    let desc = document.querySelector("input[name='desc']");
    let content = document.querySelector("textarea");
    let urlToImage = document.querySelector("input[name='url']");
    this.props.postNews({
      author: author.value,
      title: title.value,
      desc: desc.value,
      content: content.value,
      urlToImage: urlToImage.value,
    });
    author.value = "";
    title.value = "";
    desc.value = "";
    content.value = "";
    urlToImage.value = "";
    this.props.shouldRedirect(true);
  
  };
  render() {
    return (
      <div className="wrapper">
        <form onSubmit={(event) => this.onSubmit(event)}>
          <h3>Post some news:</h3>
          <UserContextConsumer>
            {(uContext) => (
              <input
                type="text"
                defaultValue={uContext.user}
                name="author"
                id="_author"
                placeholder="Author"
                autoComplete="off"
              />
            )}
          </UserContextConsumer>
          <input type="text" name="title" id="_title" placeholder="Title" />
          <input
            type="text"
            name="desc"
            id="_desc"
            placeholder="Description"
            autoComplete="off"
          />
          <textarea
            name="content"
            id="_content"
            placeholder="Noticia"
            autoComplete="off"
          />
          <input
            type="text"
            name="url"
            id="_url"
            placeholder="Imagen"
            autoComplete="off"
          />
          <input type="submit" value="ADD" />
        </form>
      </div>
    );
  }
}

export default NewsForm;
