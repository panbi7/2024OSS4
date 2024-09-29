import React from 'react';
import logo from './logo.svg';
import './App.css';
import './button.css';
import { changeBackgroundColor } from './changeBackgroundColor';
import { showCurrentTime } from './showCurrentTime';
import { toggleTextSize } from './toggleTextSize';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!!
        </p>
        <div className="time-display" style={{ margin: '20px 0', fontSize: '18px', color: 'white' }}>
          Current time will be displayed here.
        </div>
        <button className="custom-button" onClick={changeBackgroundColor}>
          Toggle Background Color
        </button>
        <button className="custom-button" onClick={showCurrentTime}>
          Show Current Time
        </button>
        <button className="custom-button" onClick={toggleTextSize}>
          Toggle Text Size
        </button>
      </header>
    </div>
  );
}

export default App;
