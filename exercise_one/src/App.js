import React  from "react";
 import  logo  from "./logo.jpg";

import  "./App.css";
// function App() {
//   return (  
//     <div className="App">
//     <header className="App-header">
//     <img src={logo} className="App-logo" alt=""/>
//     <h3>HELLO DEAR</h3>
//     </header>
//     <h2>Hello World </h2>
//     </div>
  
//   );
// }

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      list:[],
      newItem:""
    }
  }
  addItem(todovalue){
    if (todovalue!=="") {
      const newItem={
        id:Date.now(),
        value:todovalue,
        isdone:false
      }
    }

  }
  render(){
    return (
      <div className="container ">
      <img src={logo} alt="" width="100px" height="100px" />
      
      <div className="heading">
     <h2>TODO App</h2>
      </div>
      <h3>
      Todo List
      </h3>
      <input type="text" name="" id="" placeholder="Write a TODO"/>
      <button>Add Todo</button>

      </div>
     
    )
  }
}
export default App;

