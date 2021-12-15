import React from "react";
import json from '../Users.json';
import {
Button,
TextField,
Grid,
Paper,
AppBar,
Typography,
} from "@material-ui/core";
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
class Login extends React.Component {
constructor(props) {
super(props);
this.state = { email: null, password:null,errors:{
    email:'',
    password:''
} };
}
handle=(event)=> {
let {name, value} = event.target;
let errors = this.state.errors;

switch(name){
    case 'email': errors.email = regForEmail.test(value)?'':'Enter Email correctly'
    break;
    case 'password': errors.password = value.length < 8?'Password must contain atleast 8 characters':''
    break;
    default:
        break;
}
this.setState({[name]:value, errors});
}
handleSubmit = (event)=> {
event.preventDefault();
let data = json.Users;
if (data.find(x=>x.email === this.state.email) && data.find(x=>x.password === this.state.password)) {
    let user = [];
    user.push(this.state.email);
   localStorage.setItem('users', JSON.stringify(user));
    alert('Login successful');
this.props.history.push("/dashboard");
} else {
alert('Incorrect Credntials!');
}
}
render() {
    const {errors} = this.state;
return (
<div className="conatiner" style={{backgroundColor:"darkred"}}>
{/* <AppBar position="static" alignitems="center" color="primary">

</AppBar> */}
<Grid container justify="center" direction="row">
<Grid item>
<Grid
container
direction="column"
justify="center"
spacing={2}
className="login-form"
>
<Paper
variant="elevation"
elevation={2}
className="login-background"
>
<Grid item>
<Typography component="h1" variant="h5" sx={{m:10}}>
Sign in
</Typography>
</Grid>
<Grid item>
<form onSubmit={this.handleSubmit}>
<Grid container direction="column" spacing={2}>
<Grid item>
<TextField type="email" placeholder="Email" fullWidth name="email"
variant="outlined"
value={this.state.email}
onChange={this.handle.bind()
}
required
autoFocus
/>
</Grid>
<Grid item>
    {errors.email.length>1 && <span style={{color: 'red'}}>{errors.email}</span>}
    </Grid>
<Grid item>
<TextField
type="password"
placeholder="Password"
fullWidth
name="password"
variant="outlined"
value={this.state.password}
onChange={this.handle.bind()
}
required
/>
</Grid>
<Grid item>
    {errors.password.length>1 && <span style={{color: 'red'}}>{errors.password}</span>}
    </Grid>
<Grid item>
<Button
variant="contained"
color="primary"
type="submit"
className="button-block"
>
Submit
</Button>
</Grid>
</Grid>
</form>
</Grid>

</Paper>
</Grid>
</Grid>
</Grid>
</div>
);
}
}
export default Login;