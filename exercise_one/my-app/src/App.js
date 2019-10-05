import React from 'react';
import Greet from './components/Greet';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Hello From App.js</h4>
        <Greet></Greet>
        <Welcome></Welcome>
      </header>
     
    </div>
  );
}

export default App;
