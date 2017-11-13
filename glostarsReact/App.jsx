import React from 'react';
import Header from './components/Header';
import Signup from './components/Signup';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Signup/> 
         </div>
      );
   }
}
export default App;