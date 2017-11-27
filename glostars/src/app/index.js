 import React from "react";
 import { render } from "react-dom";

 import { Header } from './components/Header';
 import { Footer } from './components/Footer';

 class App extends React.Component {
     render() {
         return(
             <div className="container">
                 <Header/>
                 <Footer/>
             </div>
         );
     }
 }

render(<App />, window.document.getElementById('app'));
