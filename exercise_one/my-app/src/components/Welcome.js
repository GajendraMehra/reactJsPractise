import React,{Component} from 'react'
class Welcome extends Component {
    render() {
        console.log("this is props in class componet");
        console.log(this.props);
        
        return(
            <p>Hello from Class Component having propery from parent {this.props.name}</p>
        )
    }
}
export default Welcome