import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//js files..
import Header from './components/ProfilePage/Header';
import Profile from './components/ProfilePage/Profile';
import Competition from './components/ProfilePage/Competition';
import Public from './components/ProfilePage/Public';
import Mutual from './components/ProfilePage/Mutual';
import Fade from './components/ProfilePage/Fade';

//css files
import './components/cssComponents/profilePage.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Profile/>
        <Competition/>
        <Public/>
        <Mutual/>
        <Fade/>
      </div>
    );
  }
}

export default App;