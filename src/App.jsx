import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import React, { Component } from 'react'


class App extends Component {
  render () {
    return (
    <>
      <Header />
      <BrowserRouter>
        <Main />
        <Footer />
        <NavBar/>
      </BrowserRouter>
      
    </>
  );
  }
  
}

export default App;
