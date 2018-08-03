import React, { Component } from 'react';
import './App.css';



class App extends Component {
    state ={               
      displayValue:'0'
    }
    clearDisplay(digit) {
      this.setState({
        displayValue:  '0' 
      })
    }
    inputDigit(digit) {
      const {displayValue}=this.state;

      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit
      })
    }
      inputDot() {
        const {displayValue}=this.state;
        
        if (displayValue.lastIndexOf('.') === -1){
          this.setState({
            displayValue: displayValue + '.'
          })
        
        }
     
  }
  render() {
    const {displayValue}=this.state;
    return (
      <div className="App">
      <div className="calcDisplay">{displayValue}</div>
        <div className="keypad">
          <div className="inputKey">
            <div className="functionKey">
              <button className="appKey1 key" onClick={() => this. clearDisplay ()}>C</button>
              <button className="appKey1 key">+/-</button>
              <button className="appKey1 key">%</button>
            </div>
            <div className="digitKey">
              <button className="appKey2 key" onClick={() => this.inputDigit(7)} >7</button>
              <button className="appKey2 key" onClick={() => this.inputDigit(8)} >8</button>
              <button className="appKey2 key" onClick={() => this.inputDigit(9)} >9</button>
              <button className="appKey2 key" onClick={() => this.inputDigit(4)} >4</button>
              <button className="appKey2 key" onClick={() => this.inputDigit(5)} >5</button>
              <button className="appKey2 key" onClick={() => this.inputDigit(6)} >6</button>
              <button className="appKey2 key" onClick={() => this.inputDigit(1)} >1</button>
              <button className="appKey2 key" onClick={() => this.inputDigit(2)} >2</button>
              <button className="appKey2 key" onClick={() => this.inputDigit(3)} >3</button>
              <button className="appKey2 key zero" onClick={() => this.inputDigit(0)} >0</button>
              <button className="appKey2 key" onClick={() => this.inputDot()} >. </button>
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
