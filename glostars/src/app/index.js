 import React from "react";
 import { render } from "react-dom";

 import { Header } from './components/Header';
 import { Body } from './components/Body';
 import { Footer } from './components/Footer';

 class App extends React.Component {
     render() {
         return(
             <div className="container">
                 <Header/>
                 <body/>
                 <Footer/>
             </div>
         );
     }
 }

render(<App />, window.document.getElementById('app'));
