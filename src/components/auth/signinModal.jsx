import React, { Component } from 'react';
import { Input, Button} from 'antd' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import { Auth } from 'aws-amplify'

export default class SignInModal extends Component {
    constructor(props){
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            email: null,
            cognito: null,
            show: false, 
            success: false
        }
    }
    handleChange = (event) => {
        this.setState({
            username: event.target.value,
            email: event.target.value,
            cognito: null, 
            success: null,
        })
    }
    handleSubmit = async event => {
        //Cognito
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
            this.setState({success: true})
        }
        catch(error){
            console.log(this.state.error)
            this.setState({
                cognito: error, 
            })
        }
    }
    handleShow() {
        console.log(this.state)
        this.setState({ show: true })
    }
    handleClose(){
        this.setState({ show: false })
    }

    render(){
        const {open} = this.props
        console.log(this.state.open, this.props)
        return(
            <div className="div">
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Subscribe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{display:"flex", alignItems:'center', flexDirection:'column'
                ,justifyContent:'center'}}>
                        <Row xs={12} style={{color: "#357F59", padding:"0 10px"}}>
                        <p style={{fontSize:"30px"}}>BE THE FIRST TO KNOW WHEN WE LAUNCH!</p>
                        <p>Enter your email so that you can be informed when we launch. 
                            We promise we will only communicate important updates!
                        </p>
                    </Row>
                    <Row className="email" style={{color:'#ABD3BB'}} >
                        <Col md={7}>
                            <Input placeholder='Email Address'
                            style={{border: '1px solid #BCE0FD', margin:'0 20px 20px 0', paddingLeft:'10px',
                            width:'210px', height:'40px', borderRadius: '4px', color: '#ABD3BB' 
                            }} onChange={this.handleChange}/>
                            {this.state.cognito?<p style={{color:'red'}}>Invalid Email</p>:<></>}
                            {this.state.success?<p style={{color:'#ABD3BB'}}>Subscribed Successfully!</p>:<></>}
                        </Col>
                        <Col md={5}>
                        <Button onClick={this.handleSubmit}
                        style={{backgroundColor:'#ABD3BB', 
                        borderRadius: '4px', height:'40px', width:'120px', marginBottom:'20px'}}>
                            <text style={{color:'white', fontWeight:'bold', fontSize:'15px'}}>SUBSCRIBE</text>
                        </Button>
                        </Col>
                    </Row>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}