import React, { Component } from 'react';
import  HeaderImage from '../img/lura.png';
import LoginForm from '../components/loginForm'
import Modal from 'react-bootstrap/Modal'
import { SearchOutlined } from '@ant-design/icons';
import './header.css'
import { Navbar, Nav }from 'react-bootstrap'
import API from '../utils/API'

// const config = {
//     headers: {
//         "Access-Control-Allow-Origin": 'https://localhost:3000',
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Credentials': true,
//     },
//     withCredentials: true,
// }


export default class CustomHeader extends Component {
    constructor(){
        super()
        this.state = {
            user: false,
            show: false
        }
    }
    getUserFromDB = () => {
        API.get('/home', {withCredentials: true,})
        .then(res=>{
            if(res.data.username) {
                this.setState({user:true})
            } 
        }).catch(err=>console.log(err))
    }
    componentDidMount = () => {
        this.getUserFromDB()
    }
    handleClick = () => {
        this.setState({show: true})
    }
    handleClose = () => {
        this.setState({show:false})
    }
    render(){
        return (
            <Navbar bg="light" expand="lg" style={{padding: '2% 3%'}} fixed="top">
            <Navbar.Brand href="/" style={{width:'40%', display:'flex'}}>
                <img src={HeaderImage} alt='header' style={{width:'35%', height:'80%'}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'flex-end'}}>
                    <Nav className='header-navs'>
                        <Nav.Link href='/shop'>Shop</Nav.Link>
                        <Nav.Link href="/manufactures">Manufactures</Nav.Link>
                        {this.state.user?<Nav.Link href='/account'>My Account</Nav.Link>:<></>}
                        {/*<Nav.Link href='/fabric-finder'>Fabric Consultation</Nav.Link>*/}
                        <Nav.Link href='/blog'>Blog</Nav.Link>
                        <Nav.Link onClick={this.handleClick}>Log In</Nav.Link>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton style={{backgroundColor:'#FBF6F2'}}>
                                    <Modal.Title>Login</Modal.Title>
                                </Modal.Header>
                                <Modal.Body style={{backgroundColor:'#FBF6F2'}}>
                                    <LoginForm />
                                </Modal.Body>
                            </Modal>
                        <Nav.Link href='/signup'>Sign Up</Nav.Link>
                        <Nav.Item><SearchOutlined style={{fontSize:'30px', color:'#707070'}} /></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

