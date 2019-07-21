import React from 'react';
import logo from './Focused_Sharingan.gif';
import logo2 from './icon128.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Eisen" />
        <p>
          Turkenstein
        </p>
        <div><img src={logo2} alt="Turkenstein" /></div>
      </header>
    </div>
  );
}

export default App;
