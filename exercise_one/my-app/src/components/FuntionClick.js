import React from 'react'
import Button from '@material-ui/core/Button';
function handleClick(){
    console.log("you clicked me ");
    
}
function FuntionClick() {
    
    return (
        <div>
        <Button  onClick={handleClick} variant="contained" color="primary">
        Click Event via Function Component
      </Button>
        </div>
    )
}

export default FuntionClick
