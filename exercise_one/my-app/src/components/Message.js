import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
class Message extends Component {
    constructor() {
        super()
        this.state={
            message:'Welcome Visitors'
        }
        
    }
    changeMessage(){
        this.setState({
            message:'Thanks for subscribing'
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <Button  onClick={()=>this.changeMessage()} variant="contained" color="primary">
                Subscribe
              </Button>
                <button>Subscribe</button>
            </div>
        )
    }
}
export default Message