import React from 'react'
import Button from '@material-ui/core/Button';
function ChildComponent(props) {
    return (
        <div>
        <Button  onClick={()=>props.handleClick("Child Component")} variant="contained" color="primary">
        Greet Parent From Child 
       </Button>
        </div>
    )
}

export default ChildComponent
