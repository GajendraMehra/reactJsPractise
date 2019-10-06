import React from 'react';
import Greet from './components/Greet';
import './App.css';
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Message from './components/Message'
import Counter   from './components/Counter'
function App() {
  return (
    <div className="">
      <header className="App-header">
        <p>Hello World </p>
        <h2 className="App-link">Functional Component Demo</h2>
        <Greet name="demoname"></Greet>
        <h2 className="App-link">Class Component Demo </h2>
        <Welcome name="parent props"></Welcome>
        <h2 className="App-link">Js and Jsx Demo</h2>
        <Hello></Hello>
        <h2 className="App-link">State Demo</h2>
        <Message></Message>
        <h2 className="App-link">State Change Demo</h2>
        <Counter factor='15'></Counter>
      </header>
     
    </div>
  );
}

export default App;
