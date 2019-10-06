import React,{Component} from 'react'
class Welcome extends Component {
    render() {
        console.log("this is props in class componet");
        console.log(this.props);
        
        return(
            <h2>Hello from Class Component having propery from parent ${this.props.name}</h2>
        )
    }
}
export default Welcome