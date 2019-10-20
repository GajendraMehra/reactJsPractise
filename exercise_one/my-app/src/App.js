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
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import Form from './components/Form'
import CartoonComponent from './components/CartoonComponent'
import FragmentDemo from './components/FragmentDemo'
// import UserGreeting from './components/UserGreeting'
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
       <h5 className="App-link">Event Bind</h5>
       <ParentComponent></ParentComponent>
       <h5 className="App-link">User Greeting</h5>
       <UserGreeting></UserGreeting>
       <h5 className="App-link">Rendering List</h5>

       <CartoonComponent></CartoonComponent>
       <h5 className="App-link">Fragment Demo</h5>
       <FragmentDemo></FragmentDemo> 

       <h5 className="App-link">Form Demo</h5>
        <div className="white-wrapper">
     <Form></Form>
     
     </div>
      </header>
    </div>
  );
}

export default App;
