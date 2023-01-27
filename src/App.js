import './index.css';
import Header from "./components/Header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import "./App.css"
import Picture from './components/Picture';
import React, {useState} from "react";

export const Context = React.createContext();

function App() {
  const [newsDropdown, setNewsDropdown] = useState(false);
  const [partnerDropdown, setPartnerDropdown] = useState(false);




  return (
    <div className="App">
      <Context.Provider value={[newsDropdown, setNewsDropdown]}>
      <Header/>

      <Navbar/>
      <Picture/>
      <Content/>
      <Footer/>
      </Context.Provider>
    </div>
  );
}

export default App;
