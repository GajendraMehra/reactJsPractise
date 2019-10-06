import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class EventBind extends Component {
    constructor(){
        super();
        this.state={
            message:"hello"
        }
        this.makeHello=this.makeHello.bind(this)
    }
    handleClick(){
        this.setState({
            message:"Good Bye"
        })
    }
    sayBye=()=>{
        this.setState({
            message:"Bye "
        })
    }
    makeHello(){
        this.setState({
            message:"Hello"
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <Button  onClick={this.handleClick.bind(this)} variant="contained" color="primary">
               Event Bind approach 1
              </Button>
              <Button  onClick={()=>this.handleClick()} variant="contained" color="primary">
               Event Bind approach 2
              </Button>
              <Button  onClick={this.makeHello} variant="contained" color="secondary">
              Say Hello approach 3 Perfect
             </Button>
             <Button  onClick={this.sayBye} variant="contained" color="primary">
             Say Bye  approach 4
            </Button>
            </div>
        )
    }
}

export default EventBind
