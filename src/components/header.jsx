import React, { Component } from 'react';
import  HeaderImage from '../img/lura.png';
import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import lineImage from '../img/vickholius-nugroho-jt6QxZwSOCQ-unsplash.jpg'
import './header.css'
import {Navbar, Nav }from 'react-bootstrap'
import SignInModal from '../components/auth/signinModal'

export default class CustomHeader extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }
    loginModalRef = ({handleShow}) => {
        this.showModal = handleShow;
     }
     
     onLoginClick = () => {
       this.showModal();
     }
     
    render(){
        return(
            <Navbar bg="light" expand="lg" style={{padding: '2% 3%'}} fixed="top">
            <Navbar.Brand href="/" style={{width:'65%', display:'flex'}}>
                <img src={HeaderImage} alt='header-image' style={{width:'35%', height:'80%'}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'flex-end'}}>
                    <Nav style={{fontSize:'22px'}}>
                        {/*<Nav.Link href='#'>About Us</Nav.Link>*/}
                        {/*<Nav.Link href='/shop'>Shop</Nav.Link>*/}
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Item>
                            <Nav.Link eventKey='open-modal' onSelect={this.onLoginClick}>Sign In</Nav.Link>
                            <SignInModal ref={this.loginModalRef}></SignInModal>
                        </Nav.Item>
                        <Nav.Item><Icon type="search" style={{fontSize:'30px', color:'#707070'}}/></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

