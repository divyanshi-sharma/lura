import React, { Component } from 'react';
import  HeaderImage from '../img/lura.png';
import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import lineImage from '../img/vickholius-nugroho-jt6QxZwSOCQ-unsplash.jpg'
import './header.css'
import {Navbar, Nav }from 'react-bootstrap'

export default class CustomHeader extends Component {
    constructor(props){
        super(props)
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
                        <Nav.Link href='#'>About Us</Nav.Link>
                        <Nav.Link href='/shop'>Shop</Nav.Link>
                        <Nav.Item><Icon type="search" style={{fontSize:'30px', color:'#707070'}}/></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


/**
 *             <div className="container">
                <Row>
                    <Col sm={12}>
                        <div className="header-image">
                            <Link to='/'><img src={HeaderImage} alt='header-image' style={{width:'35%', height:'80%'}}/></Link>
                        </div>
                    </Col>
                    <Col>
                        <div className="sides">
                            <text className="about-us">About Us</text>
                            <div className="Box">The Box</div>
                            <Link to='/shop' style={{textDecoration:'none', color:'#707070'}}><div className="shop">Shop</div></Link>
                            <Icon type="search" style={{fontSize:'30px', color:'#707070'}}/>
                        </div>
                    </Col>
                </Row>
            </div>
 */