import React, { Component } from 'react';
import './App.css';



class App extends Component {

  constructor(){
    super();
    this.state ={
      expression:'0'
    }
  }
  render() {
    return (
      <div className="App">
      <div className="calcDisplay">0</div>
        <div className="keypad">
          <div className="inputKey">
            <div className="functionKey">
              <button className="appKey1 key">AC</button>
              <button className="appKey1 key">AC</button>
              <button className="appKey1 key">AC</button>
            </div>
            <div className="digitKey">
              <button className="appKey2 key">7</button>
              <button className="appKey2 key">8</button>
              <button className="appKey2 key">9</button>
              <button className="appKey2 key">4</button>
              <button className="appKey2 key">5</button>
              <button className="appKey2 key">6</button>
              <button className="appKey2 key">1</button>
              <button className="appKey2 key">2</button>
              <button className="appKey2 key">3</button>
              <button className="appKey2 key zero">0</button>
              <button className="appKey2 key">.</button>
            </div>
          </div>
          <div className="operatorKey">
            <button className="appKey3 key">+</button>
            <button className="appKey3 key">-</button>
            <button className="appKey3 key">/</button>
            <button className="appKey3 key">x</button>
            <button className="appKey3 key">=</button>
          </div>
        </div>
      </div>
    );
  
}
}
export default App;
