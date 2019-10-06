import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class Counter extends Component {
    constructor(){
        super();
        this.state={
            count:0

        }
    }
    increment(){
        // catch not work here 
        // this.state.count=this.state.count+1;
    
        // work only if set state
        // this.setState({
        //     count:this.state.count+1
        // })

        // 
        this.setState((prevState,props)=>({
            count:prevState.count+props.factor/1
        }))
        console.log(this.state.count);
        
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
            <p>Current counter is : {this.state.count}</p>
            <Button onClick={()=>{this.incrementFive()}} variant="contained" color="secondary">
            Increase Me
          </Button>
            </div>
        )
    }
}
