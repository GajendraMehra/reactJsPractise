import React,{Component} from 'react'
class Welcome extends Component {

   
    render() {
        const {name}=this.props
        console.log("this is props in class componet");
        console.log(this.props);
        
        return(
            <p>Hello from {name}</p>
        )
    }
}
export default Welcome