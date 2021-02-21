import React, { Component } from "react";
import "./Card.scss"
class Card extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  deleteSelf = () => {
    this.props.deleteSelf()
  }
  
  render() {
    return <article className="Card">
      <h3>{this.props.data.title}</h3>
      <h4>{this.props.data.author}</h4>
      <h5>{this.props.data.description}</h5>
      <img 
        src={this.props.data.urlToImage} 
        alt={this.props.data.title}/>
      <p>{this.props.data.content}</p>
      <button onClick={this.deleteSelf}> <span className="material-icons">delete</span> </button>
    </article>;
  }
}

export default Card;
