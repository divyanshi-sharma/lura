import React from 'react'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/nav'

export default class LoginPage extends React.Component {
    render(){
        return(
            <div style={{display:'flex', justifyContent:'center'}}>
                <Form style={{textAlign:'left', width:"50%"}}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Nav variant="pills" type="submit" style={{margin:"20px"}}>
                        <Nav.Item>
                            <Nav.Link href='/login'>Sign In</Nav.Link>
                        </Nav.Item>
                    </Nav>
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