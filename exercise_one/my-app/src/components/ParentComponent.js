import React, { Component } from 'react'
// import Button from '@material-ui/core/Button';
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(){
        super();
        this.state={
            parentName:'Parent'
        }
        this.greetParent=this.greetParent.bind(this)
        
    }

    greetParent(data){
        alert("hello from "+data)
    }

    render() {
        return (
            
           <ChildComponent handleClick={this.greetParent}></ChildComponent>
        )
    }
}

export default ParentComponent
