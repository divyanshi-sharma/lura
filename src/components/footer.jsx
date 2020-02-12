import React, { Component } from 'react';
import { Input, Button, Icon} from 'antd' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './footer.css'

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
                        <Row className="email" style={{color:'#ABD3BB'}}>
                            <Col md={4}>
                            <Input placeholder='Email Address'
                            style={{border: '1px solid #BCE0FD', margin:'0 20px 20px 0', paddingLeft:'10px',
                            width:'210px', height:'40px', borderRadius: '4px', color: '#ABD3BB'}}/>
                            </Col>
                            <Col md={3}>
                            <Button style={{backgroundColor:'#ABD3BB', 
                            borderRadius: '4px', height:'40px', width:'120px', marginBottom:'20px'}}>
                                <text style={{color:'white', fontWeight:'bold', fontSize:'15px'}}>SUBSCRIBE</text></Button>
                            </Col>
                        </Row>
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
