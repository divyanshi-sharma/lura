import React from 'react'; 
import { BookOutlined, EnvironmentFilled, BookFilled } from '@ant-design/icons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import API from '../utils/API'
import './manuCard.css'
export default class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            info: null,
            saved: localStorage.getItem(`savedArticle-${this.props.index}`) || false,
            show: false,
        }
    }
//from API 

    getSavedfromDB = () => {
        API.get('/manufacturers/save').then(res=>console.log(res)).catch(err=>console.log(err))
    }

    componentDidMount = () => {
        this.getSavedfromDB()
    }
//end
    handleClick = (e) => {
        console.log(this.state.saved)
        console.log(e.target)
        this.setState({saved: !this.state.saved})
        localStorage.setItem('savedArticle', this.state.saved)
    }
    componentDidUpdate = () => {
        console.log('updated', this.state.saved)
        localStorage.setItem(`savedArticle-${this.props.index}`, this.state.saved)
    }
    handleButtonClick = () => {
        this.setState({show:true})
    }
    handleClose = () => {
        this.setState({show:false})
    }
    render(){
        const {info} = this.props
        console.log(info)
        return(
            <div>
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>{info.name}</h3>
                            <Button onClick={this.handleClick} 
                            style={{backgroundColor:'none', border:'none'}}>
                                {this.state.saved?<BookFilled/>:<BookOutlined/>}
                            </Button>
                        </div>
                        <div className="card-text">
                        <Row>
                            <Col md={9}>
                            <ul><span style={{margin:'5px'}}><EnvironmentFilled/></span>{info.contact.location}</ul>
                            <ul><span>Fabrics produced: </span>{info.overview.fabricTypes}</ul>
                            <ul><span>Minimum: </span>{info.overview.minimum}</ul>
                            <ul><span>Average Price: </span>{info.overview.pricing}</ul>
                            <ul><span>Brands worked with: </span>{info.overview.brandsWorkedWith}</ul>
                            </Col>
                            <Col md={3} style={{display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                                <Button variant="outline-info" href={`/manufacture-database/${info._id}`}>More Info</Button>
                                <Button variant='outline-success' onClick={this.handleButtonClick}>Contact</Button>
                                <Modal show={this.state.show} onHide={this.handleClose} centered style={{border:0}}>
                                    <Modal.Header closeButton style={{backgroundColor:'rgba(171, 211, 187,0.5)'}}>
                                        <Modal.Title>CONTACT</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body style={{backgroundColor:'rgba(171, 211, 187,0.5)', color:'rgba(0,0,0,0.75)'}}>
                                        <div><span style={{fontWeight:'bold',fontSize:'20px'}}>Email</span> {info.contact.email}</div>
                                        <div><span style={{fontWeight:'bold',fontSize:'20px'}}>Tel.</span>  {info.contact.tel}</div>
                                        <div><span style={{fontWeight:'bold',fontSize:'20px'}}>Contact Name: </span>  {info.contact.contactName}</div>
                                        <div><span style={{fontWeight:'bold',fontSize:'20px'}}>Brands worked with: </span>  {info.overview.brandsWorkedWith}</div>
                                    </Modal.Body>
                                </Modal>
                            </Col>
                        </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}