import React, { Component } from 'react';
import { Icon } from 'antd' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './footer.css'
import SignInSection from '../components/auth/signin'

export default class CustomFooter extends Component {
    render(){
        return(
            <div className="footer-container">
                <Row className="line-1">
                    <Col className="subscribe" xs={12} lg={7}>
                        <text>BE THE FIRST TO KNOW WHEN WE LAUNCH!</text>
                        <p>Enter your email so that you can be informed when we launch. 
                            We promise we will only communicate important updates!
                        </p>
                        <SignInSection />
                    </Col>
                    <Col className="more-info" md={5}>
                        <Col>
                            <ul>CONTACT US</ul>
                            <ul>{'ORDERING & PAYMENT'}</ul>
                            <ul>FAQ</ul>
                        </Col>
                        <Col>
                            <ul>ABOUT US</ul>
                            <ul>WORK WITH US</ul>
                            <ul>{'TERMS & CONDITIONS'}</ul>
                        </Col>
                    </Col>
                </Row>
                <Row className="line-2">
                    <Col xs={7}>
                    <text style={{color:'white', fontSize:'15px', padding:'50px'}}>© Lura 2019</text>
                    </Col>
                    <Col xs={5} className="icons" 
                    style={{display:'flex', color: 'white', fontSize: '20px'}}>
                        <Icon type="instagram" />  
                        <Icon type="twitter" />
                        <Icon type="facebook" />
                    </Col>
                </Row>
            </div>
        )
    }
}
