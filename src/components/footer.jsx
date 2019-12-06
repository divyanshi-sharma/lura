import React, { Component } from 'react';
import { Input, Button, Col} from 'antd' 
import './footer.css'

export default class CustomFooter extends Component {
    render(){
        return(
            <div className="footer-container">
                <div className="line-1">
                    <div className="subscribe">
                        <text>Subscribe to Our Newsletter</text>
                        <p>For weekly updates, fabric spotlights, and sustainable
                             brand profiles, subscribe to our newsletter!</p>
                        <div className="email" style={{color:'#ABD3BB'}}>
                            <Input placeholder='Email Address'
                            style={{border: '1px solid #BCE0FD', marginRight:'20px', paddingLeft:'10px',
                            width:'210px', height:'40px', borderRadius: '4px', color: '#ABD3BB'}}/>
                            <Button style={{backgroundColor:'#ABD3BB', 
                            borderRadius: '4px', height:'40px', width:'120px'}}>
                                <text style={{color:'white', fontWeight:'bold'}}>SUBSCRIBE</text></Button>
                        </div>
                    </div>
                    <div className="more-info">
                        <Col>
                            <ul>CONTACT US</ul>
                            <ul>{'ORDERING & PAYMENT'}</ul>
                            <ul>SHIPPING</ul>
                            <ul>RETURNS</ul>
                            <ul>FAQ</ul>
                        </Col>
                        <Col>
                            <ul>ABOUT US</ul>
                            <ul>WORK WITH US</ul>
                            <ul>PRIVACY POLICY</ul>
                            <ul>{'TERMS & CONDITIONS'}</ul>
                            <ul>PRESS ENQUIRIES</ul>
                        </Col>
                    </div>
                </div>
                <div className="line-2">
                    <text style={{color:'white', fontSize:'15px', padding:'50px'}}>© Lura 2019</text>
                    <div className="icons">
                        
                    </div>
                </div>
            </div>
        )
    }
}
