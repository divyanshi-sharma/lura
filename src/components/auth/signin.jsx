import React, { Component } from 'react';
import { Input, Button} from 'antd' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Auth } from 'aws-amplify'


export default class SignInSection extends Component {
    constructor(){
        super();
        this.state = {
            email: null,
            cognito: null
        }
    }
    handleChange = (event) => {
        this.setState({
            username: event.target.value,
            email: event.target.value
        })
    }
    handleSubmit = async event => {
        const email = this.state.email
        try {
            const signUpResponse = await Auth.signUp(
                {
                    username: this.state.email,
                    password: '123cD@78',
                    attributes: {
                        email: email
                    }
                })
        }
        catch(error){
            this.setState({
                cognito: error, 
            })
        }
        console.log(this.state.error)
    }
//Cognito
    

    render(){
        return(
            <div className="div">
                <Row className="email" style={{color:'#ABD3BB'}}>
                    <Col md={4}>
                        <Input placeholder='Email Address'
                        style={{border: '1px solid #BCE0FD', margin:'0 20px 20px 0', paddingLeft:'10px',
                        width:'210px', height:'40px', borderRadius: '4px', color: '#ABD3BB' 
                        }} onChange={this.handleChange}/>
                    </Col>
                    <Col md={3}>
                        <Button onClick={this.handleSubmit}
                        style={{backgroundColor:'#357004', 
                        borderRadius: '4px', height:'40px', width:'120px', marginBottom:'20px'}}>
                            <text style={{color:'white', fontWeight:'bold', fontSize:'15px'}}>SUBSCRIBE</text></Button>
                    </Col>
                </Row>
            </div>
        )
    }
}