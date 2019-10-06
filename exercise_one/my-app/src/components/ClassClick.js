import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
export class ClassClick extends Component {
    handleClick(){
        console.log("Click The handle");
        
    }
    render() {
        return (
            <div>
            <Button  onClick={this.handleClick} variant="contained" color="primary">
            Click Event via Class Component
          </Button>
            </div>
            
        )
    }
}

export default ClassClick
