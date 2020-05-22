import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/nav'
import API from '../utils/API'
const CircularJSON = require('circular-json')

export default class LoginPage extends React.Component {
    constructor(props){
        super(props)
        this.username = React.createRef()
        this.password = React.createRef()
    }
    handleClick=(e)=>{
        e.preventDefault();
        this.userLogin();
    }
    userLogin = () => {
        try{
            const res = API.post('/authenticate/login', CircularJSON.stringify({
                username: this.username, 
                password: this.password
            }))
        } catch (err){
            console.log(err)
        }
    }
    render(){
        return(
            <div style={{display:'flex', justifyContent:'center'}}>
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
                            <Nav.Link href='/login'>Register</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Form>
            </div>
        )
    }
}