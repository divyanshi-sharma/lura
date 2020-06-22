import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import API from '../utils/API'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        'enctype': 'multipart/form-data'
    },
    withCredentials: true
}

export default class EditManuPage extends React.Component {
    constructor(props){
        super(props)
        this.name = React.createRef()
        this.bio = React.createRef()
        this.avatar = React.createRef()
        this.types = React.createRef()
        this.minimum = React.createRef()
        this.pricing = React.createRef()
        this.leadTime = React.createRef()
        this.brands = React.createRef()
        this.email = React.createRef()
        this.tel = React.createRef()
        this.cName = React.createRef()
        this.location = React.createRef()
        this.state = {
            info: null,
            overview: null,
            contact: null,
            error: null,
            published: false
        }

    }
    async getManuInfo () {
        await API.get(`/manufacturers/info/${this.props.match.params.ManuId}`,{withCredentials:true})
        .then(res=>this.setState(
            {info:res.data.info, 
            overview:res.data.info.overview,
            contact: res.data.info.contact,
            published: res.data.info.published
        }))
        .catch(err=>console.log(err))
    }
    componentDidMount = () => {
        this.getManuInfo()
    }
    publishManu = () => {
        console.log(this.props)
        API.patch(`/manufacturers/admin/publish/${this.props.match.params.ManuId}${this.state.published?"unpublish=true":""}`,{},config)
        .then(res=>alert('Manufacturer published'))
        .catch(err=>this.setState({error: err}))
    }
    async updateName () {
        await API.patch(`/manufacturers/admin/edit/${this.props.match.params.ManuId}/name`, {
            name:this.name.current.value?this.name.current.value:this.state.info.name, 
        }, config)
        .catch(err=>this.setState({error: err}))
    }
    async updateBio () {
        await API.patch(`/manufacturers/admin/edit/${this.props.match.params.ManuId}/bio`, {
            bio:this.bio.current.value?this.bio.current.value:this.state.info.bio, 
        }, config)
        .catch(err=>this.setState({error: err}))
    }
    async updateOverview () {
        await API.patch(`/manufacturers/admin/edit/${this.props.match.params.ManuId}/overview`, {
                fabricTypes: this.types.current.value?this.types.current.value:this.state.overview.fabricTypes,
                minimum: this.minimum.current.value?this.minimum.current.value:this.state.overview.minimum,
                pricing: this.pricing.current.value?this.pricing.current.value:this.state.overview.pricing,
                leadTime: this.leadTime.current.value?this.leadTime.current.value:this.state.overview.leadTime,
                brandsWorkedWith: this.brands.current.value?this.brands.current.value:this.state.overview.brandsWorkedWith
        }, config)
        .catch(err=>this.setState({error: err}))
    }
    async updateContact () {
        await API.patch(`https://lura-services.herokuapp.com/manufacturers/admin/edit/${this.props.match.params.ManuId}/contact`,
        {
            email: this.email.current.value?this.email.current.value:this.state.contact.email,
            tel: this.tel.current.value?this.tel.current.value:this.state.contact.tel,
            contactName:this.cName.current.value?this.cName.current.value:this.state.contact.contactName,
            location: this.location.current.value?this.location.current.value:this.state.contact.location
        })
        
    }
    
    handleClick = (e) => {
        e.preventDefault()
        this.updateBio()
        this.updateName()
        this.updateOverview()
        if(this.state.error === null){alert('updated all information')}
    }
    handlePublish = () => {
        this.publishManu()
    }
    render(){
        if(this.state.info){
        return(
            <div style={{margin:'40px', display:'flex',alignItems:'center',flexDirection:'column'}}>
                <h3>Edit Manufacturer</h3>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' ref={this.name} placeholder={this.state.info.name}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Bio</Form.Label>
                            <Form.Control type='text' ref={this.bio} placeholder={this.state.info.bio}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Fabric Types</Form.Label>
                            <Form.Control type='text' ref={this.types} placeholder={this.state.overview.fabricTypes}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Minimums</Form.Label>
                            <Form.Control type='text' ref={this.minimum} placeholder={this.state.overview.minimum}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Pricing</Form.Label>
                            <Form.Control type='text' ref={this.pricing} placeholder={this.state.overview.pricing}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Lead Time</Form.Label>
                            <Form.Control type='text' ref={this.leadTime} placeholder={this.state.overview.leadTime}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>Brands Worked With</Form.Label>
                        <Form.Control type='text' ref={this.brands} placeholder={this.state.overview.brandsWorkedWith}/>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={this.email} placeholder={this.state.contact.email}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Tel.</Form.Label>
                            <Form.Control ref={this.tel} placeholder={this.state.contact.tel}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Contact name</Form.Label>
                            <Form.Control ref={this.cName} placeholder={this.state.contact.contactName}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control ref={this.location} placeholder={this.state.contact.location}/>
                    </Form.Group>

                </Form>
                <Row >
                    <Button onClick={this.handleClick} variant='outline-info' style={{margin:'0 20px'}}>Save Changes</Button>
                    <Button onClick={this.handlePublish} variant='outline-danger'>{this.state.published?"Unpublish":"Publish"}</Button>
                </Row>
                <Button href='/admin' variant='success' style={{margin:'20px 0'}}>Back</Button>
            </div>
        )} else {
            return (<div></div>)
        }
    }
}