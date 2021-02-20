import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
function App() {
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

export default App;
