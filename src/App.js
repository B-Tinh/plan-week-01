import React, {Component} from 'react';
import ArrowFunction from './components/ArrowFunction';
import './App.css';
import VarLetConst from './components/VarLetConst';
import ShortHand from './components/ShortHand';

class App extends Component {
  render(){
    return(
      <div>
        <ArrowFunction />
        <VarLetConst />
        <ShortHand />

      </div>
      );
  }
}

export default App;
