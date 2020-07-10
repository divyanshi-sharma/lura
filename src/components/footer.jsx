import React, { Component } from 'react';
import { Icon} from 'antd' 
import { InstagramOutlined } from '@ant-design/icons';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './footer.css'
import Button from 'react-bootstrap/Button'


export default class CustomFooter extends Component {
    render(){
        return(
            <div className="footer-container">
                <Row className="line-1">
                    <Col className="subscribe" xs={12} lg={7}>
                        <p>Be the first to know when we launch</p>
                        <p>Enter your email so that you can be informed when we launch. 
                            We promise we will only communicate important updates!
                        </p>
                        <Button href="/signup" className='btn-darkgreen'>Sign Up</Button>
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
                    <p style={{color:'white', fontSize:'15px'}}>© Lura 2019</p>
                    </Col>
                    <Col xs={5} className="icons" 
                    style={{display:'flex', color: 'white', fontSize: '20px'}}>
                        <InstagramOutlined />
                        <Icon type="twitter" />
                        <Icon type="facebook" />
                    </Col>
                </Row>
            </div>
        )
    }
}
