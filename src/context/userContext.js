import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class UserContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
       user: "",
    }
  };
  
getUser = (user) => {
    this.setState({user: user });
};
  render() {
    return <Provider value={{user:this.state.user, getUser: this.getUser}}>{this.props.children}</Provider>;
  }
}

export { UserContextProvider, Consumer as UserContextConsumer };