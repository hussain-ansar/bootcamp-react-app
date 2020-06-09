import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fruits from './Fruits.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Fruits fName="Orange" shakeName ="Banana Shake"/>
        <br/>
        <Fruits fName="Cherr" shakeName ="Mango Shake"/>
        <br/>
        <Fruits fName="blueberry" shakeName ="Apple juice"/>
        <p>
          <h1>ZoZo Bootcamp 2020</h1>
        </p>
      </header>
    </div>
  );
}

export default App;
