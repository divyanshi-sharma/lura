import React, { Component } from 'react';
import CustomHeader from '../components/header'
import CustomFooter from '../components/footer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import API from '../utils/API'


export default class AccountPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
            firstName: null, 
            lastName: null, 
            email: null, 
            password: null,
            phone: null, 
            saved: null, 
        }
    }
    componentDidMount = () => {
        this.getUserFromDB()
    }
    async getUserFromDB() {
        await API.get(`/home`, {withCredentials:true})
        .then(res=>{
            console.log(res)
            this.setState({
                firstName: res.data.firstName, 
                lastName: res.data.lastName || " ",
                email: res.data.username, 
                password: res.data.password,
                saved: res.data.savedManufacturers
            })
        })
        .catch(err=>console.log(err))
    }
    handleClose = () => {
        this.setState({show: false})
    }
    handleOpen = () => {
        this.setState({show: true})
    }
    render(){
        return(
            <div>
                <CustomHeader />
                <div className="account-main" style={{ top:'120px', position:'relative',backgroundColor:'#FBF6F2', height:'80vh'}}>
                    <div className="account-title">
                        <h3 style={{color:'grey'}}>Hello, {this.state.firstName}</h3>
                    </div>
                    <Row className='account'>
                        <Col md={4} className="account-info">
                            <div className="avatar-line" style={{display:'flex',justifyContent:'center',flexDirection:'row', alignItems:'center', height:'30vh'}}>
                                <div className="avatar" style={{borderRadius:'50px', backgroundColor:'#4A645C',color:"white", width:'80px', height:'80px'}}>
                                    <span style={{fontSize:'35px'}}>{this.state.firstName?this.state.firstName[0]:""}{this.state.lastName?this.state.lastName[0]:""}</span>
                                </div>
                                <div style={{color:'#4A645C', marginLeft:'20px'}}>MY ACCOUNT</div>
                            </div>
                            <div style={{display:'flex',flexDirection:'column', height:'30vh'}}>
                                <Button style={{border:0, color:'grey', backgroundColor:'transparent', textDecoration:'underline', margin:'10px'}} onClick={this.handleOpen}>Saved Manufacturers</Button>
                                    <Modal show={this.state.show} onHide={this.handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Saved Manufacturers</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>{this.state.saved && this.state.saved.length != 0?this.state.saved.map(manu => {return(<ul>{manu.name}</ul>)}):"Oops, you have not saved any manufacturer yet."}</Modal.Body>
                                    </Modal>
                                <Button style={{border:0, color:'grey', backgroundColor:'transparent', textDecoration:'underline',margin:'10px'}}>My Fabric Matchings</Button>
                            </div>
                        </Col>
                        <Col md={1.5} style={{textAlign:'left',display:'flex',flexDirection:'column', marginTop:'15vh'}}>
                        <div style={{padding:'10px', color:'grey'}}><span style={{paddingRight:'10px'}}>First Name: </span></div>
                        <div style={{padding:'10px', color:'grey'}}><span style={{paddingRight:'10px'}}>Last Name: </span></div>
                        <div style={{padding:'10px', color:'grey'}}><span style={{paddingRight:'10px'}}>Email: </span></div>
                        <div style={{padding:'10px', color:'grey'}}><span style={{paddingRight:'10px'}}>Password: </span></div>
                        <div style={{padding:'10px', color:'grey'}}><span style={{paddingRight:'10px'}}>Phone: </span></div>
                        </Col>
                        <Col md={6} className='account-setting' style={{textAlign:'left',display:'flex',flexDirection:'column',marginTop:'15vh'}}>
                            <div style={{padding:'10px', color:'grey'}}>{this.state.firstName}</div>
                            <div style={{padding:'10px', color:'grey'}}>{this.state.lastName}</div>
                            <div style={{padding:'10px', color:'grey', display:'flex'}}>
                                <Form.Control placeholder={this.state.email} style={{width:'50%',backgroundColor:'#EBE0D8',borderColor:'#EBE1D9'}}></Form.Control>
                            </div>
                            <div style={{padding:'10px', color:'grey', display:'flex'}}>
                                <Form.Control placeholder={this.state.password}  style={{width:'50%',backgroundColor:'#EBE0D8',borderColor:'#EBE1D9'}}></Form.Control>
                            </div>
                            <div style={{padding:'10px', color:'grey', display:'flex'}}>
                                <Form.Control placeholder={this.state.phone}  style={{width:'50%',backgroundColor:'#EBE0D8',borderColor:'#EBE1D9'}}></Form.Control>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div style={{position:'relative', top:'120px'}}>
                    <CustomFooter props={'without 1st line'}/>
                </div>
            </div>
        )
    }
}