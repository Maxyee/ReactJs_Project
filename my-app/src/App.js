import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//js files..
import Header from './components/HomePage/Header';
import Slider from './components/HomePage/Slider';
import Body from './components/HomePage/Body';
import Fade from './components/HomePage/Fade';


//css files
import './components/cssComponents/Home.css';
// import './components/cssComponents/gallerybox.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Slider/>
        <Body/>
        <Fade/>
      </div>
    );
  }
}

export default App;
