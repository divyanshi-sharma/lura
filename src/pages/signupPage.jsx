import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

export default class SignUpPage extends React.Component {
    render(){
        return(
            <div style={{display:'flex', justifyContent:'center'}}>
                <Form style={{textAlign:'left', width:"50%"}}>
                    <Form.Group controlId='firstname'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="first name"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='lasttname'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="last name"></Form.Control>
                    </Form.Group>
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
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label>Favorite Fabric</Form.Label>
                        <Form.Check type="radio" label="Silk" />
                        <Form.Check type="radio" label="Cottom" />
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