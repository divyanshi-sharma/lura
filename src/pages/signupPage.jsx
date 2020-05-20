import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import { Divider } from 'antd'
import API from '../utils/API'

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
    }

    handleClick = () => {
        if(this.firstname.current.value && this.lastname.current.value &&
             this.email.current.value && this.password.current.value){
            this.userRegister()
        } else {
            alert('Please fill the required fields.')
        }
    }
    userRegister = () => {
        console.log('postin')
        try {API.post('/register', {
            firstname: this.firstname,
            lastname: this.lastname, 
            username: this.email, 
            password: this.password, 
            apparel: this.apparel, 
            employees: this.employees, 
            produced: this.produced
            
        })} catch(err) {
            console.log(err)
        }
    }
    render(){
        return(
            <div style={{display:'flex', justifyContent:'center', backgroundColor:'#fbf6f2', padding:'40px 0'}}>
                <Form style={{textAlign:'left', width:"40%", borderRadius:'20px', backgroundColor:'white',
                boxShadow:'0px 0px 10px 2px rgba(0,0,0,0.25)', padding:'30px 60px'}}>
                    <Form.Text style={{fontSize:'30px'}}>Sign Up</Form.Text>
                    <Divider style={{border:'2px solid rgba(0,0,0,0.25)', margin:'30px 0'}}/>
                    <Form.Group controlId='firstname'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="first name" ref={this.firstname} onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='lasttname'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="last name" ref={this.lastname}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={this.email}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={this.password}/>
                    </Form.Group>
                    <Form.Text style={{fontSize:'25px'}}>Optional Questions</Form.Text>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label>1) Are you an apparel brand?</Form.Label>
                        <Form.Control as='select' ref={this.apparel}>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>
                        <Form.Label>2) How many employees do you have?</Form.Label>
                        <Form.Control as='select' ref={this.employees}>
                            <option>1-5</option>
                            <option>5-10</option>
                            <option>10+</option>
                        </Form.Control>
                        <Form.Label>3) How many pieces do you produce in a collection?</Form.Label>
                        <Form.Control as='textarea' ref={this.produced} rows='1'>
                        </Form.Control>
                    </Form.Group>
                    <Form.Row style={{justifyContent:'center'}}>
                        <Button variant="outline-info" type="submit" onClick={this.handleClick}>
                                <div style={{color:'black', fontWeight:'bold'}}>Register</div>
                        </Button>
                    </Form.Row>
                    <div className="login" style={{fontSize:'20px', display:'flex', alignItems:'center', flexDirection:'column', marginTop:'20px'}}>
                        <Form.Text className="text-muted">
                            Already have an account?
                            </Form.Text>
                        <Form.Row>
                            <Button variant="outline-info" type="submit">
                                    <Nav.Link href='/login' style={{color:'black', fontWeight:'bold'}}>Login</Nav.Link>
                            </Button>
                        </Form.Row>
                    </div>
                    </Form>
            </div>
        )
    }
}

/**
 *         this.state = {
            firstname: null, 
            lastname: null, 
            email: null, 
            password: null, 
            apparel: null, 
            employees: null, 
            produced: null,
        }
 */