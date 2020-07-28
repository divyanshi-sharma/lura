import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/nav'
import API from '../utils/API'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import {PageView, initGA} from '../components/Tracking';
import { Event } from "../components/Tracking";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "https://localhost:3000",
        'Content-Type': 'application/json'
    },
    withCredentials:true
}

export default class LoginPage extends React.Component {
    constructor(props){
        super(props)
        this.username = React.createRef()
        this.password = React.createRef()
        this.state = {
            redirect: false
        }
    }
    componentDidMount = () => {
        initGA('UA-171248811-1');
        PageView();
    }
    handleClick=(e)=>{
        e.preventDefault();
        this.userLogin();
    }
    userLogin = () => {
         API.post('/authenticate/login', {
                username: this.username.current.value, 
                password: this.password.current.value
            }, config)
            .then(res => {
                alert('Login Successfully')
                Event("LOGIN", 'user login', "login page")
                this.setRedirect()
            })
            .catch(err => {
                if(err.response){
                    if(err.response.status == "403"){
                        alert('User already logged in')
                        this.setRedirect()
                    } else if(err.response.status == '401'){
                        alert('Invalid username or password')
                    } else if(err.response.status == "400"){
                        alert("Server error, please check your network connection")
                    }
                } else {
                    alert(err.message)
                }
            })
    }
    setRedirect = () =>{
        this.setState({redirect:true})
    }
    renderRedirect = () =>{
        if(this.state.redirect){
            return(
            <Switch>
                <Redirect from='/login' to='/'/>
            </Switch>
            )
        }
    }
    render(){
        return(
            <div style={{display:'flex', justifyContent:'center'}}>
                {this.renderRedirect()}
                <Form style={{textAlign:'left', width:"50%"}}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={this.username}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={this.password}/>
                    </Form.Group>
                    <Button type='submit' variant='outline-info' onClick={this.handleClick}>submit</Button>
                    <Nav variant="pills" type="submit" style={{margin:"20px"}}>
                        <Nav.Item>
                            <Nav.Link href='/signup'>Register</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Form>
            </div>
        )
    }
}