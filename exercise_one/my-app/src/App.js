import React from 'react';
import Greet from './components/Greet';
import './App.css';
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Message from './components/Message'
import Counter   from './components/Counter'
import FunctionClick from './components/FuntionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
function App() {
  return (
    <div className="">
      <header className="App-header">
      <h3 className="App-link">REACT.JS PRACTICE</h3>
        <h5 className="App-link">Functional Component Demo</h5>
        <Greet name="john" age="12"></Greet>
        <Greet name="mark" age="23"></Greet>
        <Greet name="James" age="22"></Greet>
        <h5 className="App-link">Class Component Demo </h5>
        <Welcome name="Sandra"></Welcome>
        <Welcome name="Mark"></Welcome>
        <h5 className="App-link">Js and Jsx Demo</h5>
        <Hello></Hello>
        <h5 className="App-link">State Demo</h5>
        <Message></Message>
        <h5 className="App-link">State Change Demo</h5>
        <Counter factor='15'></Counter>
        <h5 className="App-link">Event Handling</h5>
       <FunctionClick></FunctionClick>
       <h5 className="App-link">Event Handling</h5>
       <ClassClick></ClassClick>
       <h5 className="App-link">Event Bind</h5>
       <EventBind></EventBind>
      </header>
     
    </div>
  );
}

export default App;
