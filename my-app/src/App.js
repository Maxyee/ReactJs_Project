import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';



import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Fade from './components/Fade';

import './components/cssComponents/NAV.css';
// import './components/cssComponents/normalize.css';





class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Body/>
        <Footer/>
        <Fade/>
      </div>
    );
  }
}

export default App;
