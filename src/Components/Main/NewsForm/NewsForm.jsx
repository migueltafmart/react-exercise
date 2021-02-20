import React, { Component } from "react";
import { UserContextConsumer } from "../../../context/userContext";
import { NewsContextConsumer } from "../../../context/newsContext";

class NewsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  onSubmit = (e, c) => {
    e.preventDefault();
    let author = document.querySelector("input[name='author']").value;
    let title = document.querySelector("input[name='title']").value;
    let desc = document.querySelector("input[name='desc']").value;
    let content = document.querySelector("textarea").value;
    let urlToImage = document.querySelector("input[name='url']").value;
    c.getNews({
      author: author,
      title: title,
      desc: desc,
      content: content,
      urlToImage: urlToImage,
    });
  };
  render() {
    return (
      <NewsContextConsumer>
        {(newsContext) => {
          return <form onClick={(e) => this.onSubmit(e, newsContext)}>
            <h3>Add a movie:</h3>
            <UserContextConsumer>
              {(userContext) => (
                <input
                  type="text"
                  defaultValue={userContext.user}
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
            <textarea name="content" id="_content" placeholder="Noticia" autoComplete="off" />
            <input type="text" name="url" id="_url" placeholder="Imagen" autoComplete="off" />
            <input type="submit" value="ADD" />
          </form>;
        }}
      </NewsContextConsumer>
    );
  }
}

export default NewsForm;
