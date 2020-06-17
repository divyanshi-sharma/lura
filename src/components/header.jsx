import React, { Component } from 'react';
import  HeaderImage from '../img/lura.png';
import { Icon } from 'antd'
import './header.css'
import {Navbar, Nav }from 'react-bootstrap'
import API from '../utils/API'

const config = {
    headers: {
        "Access-Control-Allow-Origin": 'https://localhost:3000',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
    },
    withCredentials: true,
    'Origin':'https://localhost:3000'
}


export default class CustomHeader extends Component {
    constructor(){
        super()
        this.state = {
            user: false
        }
    }
    getUserFromDB = () => {
        API.get('/home', {withCredentials: true,})
        .then(res=>{
            if(res.data) {
                this.setState({user:true})
            } 
        }).catch(err=>console.log(err))
    }
    componentDidMount = () => {
        this.getUserFromDB()
    }
    render(){
        return(
            <Navbar bg="light" expand="lg" style={{padding: '2% 3%'}} fixed="top">
            <Navbar.Brand href="/" style={{width:'40%', display:'flex'}}>
                <img src={HeaderImage} alt='header-image' style={{width:'35%', height:'80%'}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'flex-end'}}>
                    <Nav className='header-navs'>
                        {/*<Nav.Link href='/shop'>Shop</Nav.Link>*/}
                        <Nav.Link href='/blog'>Blog</Nav.Link>
                        <Nav.Link href='/login'>Log In</Nav.Link>
                        <Nav.Link href='/signup'>Sign Up</Nav.Link>
                        <Nav.Link href="/manufactures">Manufactures</Nav.Link>
                        {this.state.user?<Nav.Link href='/account/:ManuId'>My Account</Nav.Link>:<></>}
                        <Nav.Item><Icon type="search" style={{fontSize:'30px', color:'#707070'}}/></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

