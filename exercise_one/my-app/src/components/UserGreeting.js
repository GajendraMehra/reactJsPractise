import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(){
        super();
        this.state={
            isLoggedIn:true
        }
    }
    render() {
        return (
            this.state.isLoggedIn && (<div>Welcome User</div>)
            // !this.state.isLoggedIn ? (<div>Welcome Guest</div>):(<div>Welcome User</div>)
        )
    }
}

export default UserGreeting
