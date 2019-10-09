import React ,{Component}from "react";
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
export default class Form extends Component {
  constructor(){
    super();
    this.state={
      username:'',
      profile:'react'
    }
  }
  handleusernamechange=(event)=>{
this.setState({
  username:event.target.value
})


  }
  handleprofilechange=(event)=>{
    this.setState({
      profile:event.target.value
    })
  }
  handleSubmit=(event)=>{
   alert(`${this.state.username} loves ${this.state.profile}`)
  }
render(){
  return (
    <div>
    <form action="" onSubmit={this.handleSubmit}>
      <TextField
        id="filled-simple-start-adornment"
        variant="filled"
        value={this.state.username}
        label="UserName"
        onChange={this.handleusernamechange}

      />
      <Select onChange={this.handleprofilechange} value={this.state.profile} >
      <MenuItem value="react">React</MenuItem>
      <MenuItem value="vue">Vue</MenuItem>
      <MenuItem value="angular">Angular</MenuItem>
    </Select>
    <Button type="submit" variant="contained" color="secondary" >
        Save
      </Button>
      
    </form>
    </div>
  );
}
  
}
