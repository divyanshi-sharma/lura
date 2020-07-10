import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Divider } from 'antd'
import API from '../utils/API'
import { Switch, Redirect } from 'react-router-dom';
import './signupPage.css'
import {PageView, initGA} from '../components/Tracking';
import { Event } from "../components/Tracking";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
    }
}

export default class SignUpPage extends React.Component {
    constructor(props){
        super(props)
        this.firstname = React.createRef();
        this.lastname = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.apparel = React.createRef();
        this.employees = React.createRef();
        this.produced = React.createRef();
        this.state = {
            redirect: false,
            status: null
        }
    }
    componentDidMount = () =>{
        initGA('UA-171248811-1');
        PageView();
    }
    handleClick = (e) => {
        e.preventDefault();
        if(this.firstname.current.value && this.lastname.current.value &&
             this.email.current.value && this.password.current.value){
            this.userRegister()
            Event("SIGNUP", 'user sign up', "signup page")
        } else {
            alert('Please fill the required fields.')
        }
    }
    userRegister = () => {
        API.post('/register',{
            firstName: this.firstname.current.value,
            lastName: this.lastname.current.value, 
            username: this.email.current.value, 
            password: this.password.current.value, 
            apparel: this.apparel.current.value, 
            employees: this.employees.current.value, 
            produced: this.produced.current.value
        }, config)
        .then(res => {console.log(res)
            alert("Sign up successfully!")
            this.setRedirect(res.status)})
        .catch(err => {
            if(err.response){
                if(err.response.status==='403'){
                    alert("User already logged into the system.")
                    this.setRedirect(err.response.status)
                } else if (err.response.status==='401'){
                    alert('User already registered')
                    this.setRedirect(err.response.status)
                }
            } else {
                alert(err.message)
            }
        })
    }
    setRedirect = (code) => {
        this.setState({redirect: true, status:code})
    }
    renderRedirect = () =>{
        if(this.state.redirect){
            if(this.state.status === "403"){
            return (
                <Switch>
                    <Redirect from='/signup' to='/'/>
                </Switch>
            )}
            else if (this.state.status === "401"){
                return (
                    <Switch>
                        <Redirect from='/signup' to='/login'/>
                    </Switch>
                )
            } else {
                return (
                    <Switch>
                        <Redirect from='/signup' to='/login'/>
                    </Switch>
                )
            }
        }
    }
    render(){
        return(
            <div style={{display:'flex', justifyContent:'center', backgroundColor:'#fbf6f2', padding:'40px 0'}}>
                {this.renderRedirect()}
                <Form className="signup-form" style={{textAlign:'left', borderRadius:'20px', backgroundColor:'white',
                boxShadow:'0px 0px 10px 2px rgba(0,0,0,0.25)', padding:'30px 60px'}}>
                    <Form.Text style={{fontSize:'30px'}}>Sign Up</Form.Text>
                    <Divider style={{border:'2px solid rgba(0,0,0,0.25)', margin:'30px 0'}}/>
                    <Row>
                        <Col>
                            <Form.Group controlId='firstname'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="first name" ref={this.firstname} required></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId='lasttname'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="last name" ref={this.lastname} required></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" ref={this.email} required/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" ref={this.password} required/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Text style={{fontSize:'25px'}}>Optional Questions</Form.Text>
                    <Form.Group>
                        <Form.Label>1) Are you an apparel brand?</Form.Label>
                        <Form.Control as='select' ref={this.apparel}>
                            <option>  </option>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>
                        <Form.Label>2) How many employees do you have?</Form.Label>
                        <Form.Control as='select' ref={this.employees}>
                            <option>  </option>
                            <option>1-5</option>
                            <option>5-10</option>
                            <option>10+</option>
                        </Form.Control>
                        <Form.Label>3) How many pieces do you produce in a collection?</Form.Label>
                        <Form.Control as='textarea' ref={this.produced} rows='1'>
                        </Form.Control>
                    </Form.Group>
                    <Form.Row style={{justifyContent:'center'}}>
                        <Button className='btn-darkgreen' type="submit" onClick={this.handleClick}>
                                Register
                        </Button>
                    </Form.Row>
                    <div className="login" style={{fontSize:'20px', display:'flex', alignItems:'center', flexDirection:'column', marginTop:'20px'}}>
                        <Form.Text className="text-muted">
                            Already have an account?
                            </Form.Text>
                        <Form.Row>
                            <Button className='btn-darkgreen'type="submit" 
                            href='/'>Login
                            </Button>
                        </Form.Row>
                    </div>
                    </Form>
            </div>
        )
    }
}
