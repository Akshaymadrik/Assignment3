import React, { Component } from 'react'
import json from '../Users.json'
import { InputLabel,Input,FormHelperText,Button,Grid,Container } from '@mui/material';
import FormControl from '@mui/material/FormControl';
export class Changepass extends Component {
   
    render() {
        return (
            <Container sx={{mt:2,width:1700}}>
            <Grid item xs={6} md={4} sx={{ml:45,border:2,bgcolor:"darkgray"}}>
    <h2>Changepassword From</h2>
    <FormControl>
  <InputLabel htmlFor="my-input">Old Password</InputLabel>
  <Input id="oldpassword"  type="password"  required />
  <FormHelperText id="my-helper-text">We'll never share your password.</FormHelperText>
            </FormControl><br/>
            <FormControl>
  <InputLabel htmlFor="my-password">Password</InputLabel>
  <Input id="my-password" type="password" required />
  <FormHelperText id="my-helper-text">We'll never share your password</FormHelperText>
            </FormControl><br/>
            <FormControl>
  <InputLabel htmlFor="my-confpassword">ConfirmPassword</InputLabel>
  <Input id="my-confpassword" type="password" required />
  <FormHelperText id="my-helper-text">We'll never share your password</FormHelperText>
            </FormControl>
            <br/>
            <Button variant="contained" href="/dashboard"  to="/dashboard"sx={{mb:3,mt:3}}>Submit</Button>
          
  </Grid>
  </Container>
        )
    }
}

export default Changepass
