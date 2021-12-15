import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Slidebar1 from './Slidebar1';
import Changepass from './Changepass';
import { Grid } from '@mui/material';
export class Dashboard1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:null,change:true
        };
    }
    componentDidMount=()=>{
        let arr = JSON.parse(localStorage.getItem('users'));
        this.setState({user:arr[0]});
    }
    Changepassword=()=>{
      this.setState({change:false});

    }
    ChangeHome=()=>{
      this.setState({change:true});
    }
    Logout=()=>{
        localStorage.clear();
        this.props.history.push('/');
    }
    render() {
        return (
          <>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Button to="/dashboard"onClick={this.ChangeHome.bind()} color="inherit">HOME</Button>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Button onClick={this.Changepassword.bind()} color="inherit">Change Password</Button>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Button  color="inherit">WELCOME&nbsp;</Button>{this.state.user}
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Button color="inherit" onClick={this.Logout.bind()}>Logout</Button>
                </Typography>
              </Toolbar>
            </AppBar>
            </Box>< Grid container spacing={2} sx={{mt:1,height:660}} >
                <Grid item xs={4} md={4} sx={{border:2,bgcolor:"primary.main",color:"white"}}>
              
                <Typography variant="h1" >
                   
                <Button href="/category" variant="contained">Category</Button><br/>
                <Button  href="/products" variant="contained" >Products</Button><br/>
                <Button  href="/orders" variant="contained">Order</Button><br/>
                <Button  href="/feedback"  variant="contained" >Feedback</Button>
                
                </Typography>
                
                </Grid>
            <Grid item xs={8} md={8} sx={{mt:20 ,}} >

           {this.state.change?<Slidebar1 />:<Changepass />}
           </Grid>
           </Grid>
           </>
         
          
        )
    }
}

export default Dashboard1
