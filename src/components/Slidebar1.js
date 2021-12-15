import React, { Component } from 'react'
import { Typography,Container} from '@mui/material';
import json from '../Users.json'
import {Card,CardHeader,Avatar,CardMedia,CardContent} from '@mui/material';
export class Slidebar1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:null,userData:{}
        };
    }
    componentDidMount=()=>{
        let arr = JSON.parse(localStorage.getItem('users'));
        let data = json.Users;
        let ind = data.findIndex(x=>x.email===arr[0]);
        this.setState({user:arr[0], userData:data[ind]});
    
    }
    render() {
        const {userData} = this.state;
        return (
            
            <Container >
            
                <Card sx={{ maxWidth: 450,ml:40 ,height:450,bgcolor:'skyblue'}}>
      <CardHeader
        avatar={
          <Avatar sx={{bgcolor:"red"}}>
            A
          </Avatar>
        }
       
        title={userData.username}
        subheader="October 14, 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image="1.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <Typography variant="h6">
                      {userData.email}
                </Typography>
                <Typography variant="h6">
                     {userData.city}
                </Typography>
                <Typography variant="h">
                      {userData.state}
                </Typography>
        </Typography>
      </CardContent>
      
      
    </Card>
                </Container>
            
        )
    }
}

export default Slidebar1;
