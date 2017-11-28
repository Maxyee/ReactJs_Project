import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';



import Header from './components/LandingPage/Header';
import Body from './components/LandingPage/Body';
import Footer from './components/LandingPage/Footer';
import Fade from './components/LandingPage/Fade';

import './components/cssComponents/NAV.css';



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