import React from 'react'
import '../pages/account.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import API from '../utils/API'

export default class EditModal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }
    render(){
        const type = this.props.type
        console.log(type)
        return(
            <div className='edit-modal'>
            <Button variant='link' onClick={()=>{this.setState({show:true})}}>EDIT</Button>
            <Modal size='lg' show={this.state.show} onHide={()=>{this.setState({show:false})}} centered
            style={{borderRadius:'50px',border:'none'}}>
                <Modal.Header closeButton style={{backgroundColor:'#EBDCD8'}}>
                <Modal.Title style={{color:'#4A645C', fontWeight:200}}>EDIT {type.toUpperCase()}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:'#EBDCD8'}}>
                    <Row>
                        <Col xs={4} className="modal-setting-list">
                            <li>Current {type}: </li>
                            <li>New {type}: </li>
                            <li>Confirm New {type}: </li>
                        </Col>
                        <Col xs={7} className='modal-setting'>
                            <Form.Control type={type}></Form.Control>
                            <Form.Control type={type}></Form.Control>
                            <Form.Control type={type}></Form.Control>
                        </Col>
                    </Row>
                    <Row style={{justifyContent:'flex-end', padding:'0 20px'}}>
                        <Button type='submit' style={{backgroundColor:'#4A645C',color:'white',borderRadius:'25px'}}>SUBMIT</Button>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
        )
    }
}