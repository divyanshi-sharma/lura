import React, {Component} from 'react' 
import API from '../utils/API'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class AdminPage extends Component {
    constructor(){
        super()
        this.state = {
            manufacturers: []
        }
    }
    async getManufromDB (){
        await API.get('/manufacturers/all',{withCredentials:true})
        .then(res=>
            {console.log(res.data)
                this.setState({manufacturers: res.data.manufacturers})})
        .catch(err=>console.log(err))
    }
    componentDidMount = () => {
        this.getManufromDB()
    }
    async handleClick (id) {
        console.log(id)
        await API.delete(`/manufacturers/admin/delete/${id}`,{withCredentials:true})
        .then(res=>alert("Manufacturer deleted"))
        .catch(err=>console.log(err))
    }
    render(){
        return(
            <div style={{padding:'40px',display:'flex',justifyContent:'center',
            flexDirection:'column', alignItems:'center'}}>
                <Button href='/admin/create-manufacturer' variant='info'>Create New Manufacturer</Button>
                {this.state.manufacturers.length === 0?<></>:
                this.state.manufacturers.map(manu => {
                    return(
                        <Card style={{width:'70%'}}>
                            <Card.Header style={{display:'flex', alignItems:'flex-start',justifyContent:'space-between'}}>
                                <Card.Title>{manu.name}</Card.Title>
                                <Button variant="outline-danger" onClick={()=>this.handleClick(manu._id)} style={{margin:'0 20px'}}>Delete</Button>
                            </Card.Header>
                            <Card.Body style={{display:'flex',flexDirection:'column', alignItems:'flex-start'}}>
                                <Card.Text style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                                    <ul>Published: {manu.published?'Yes':'No'}</ul>
                                    <ul>Fabric Types: {manu.overview.fabricTypes}</ul>
                                    <ul>Minimum: {manu.overview.minimum}</ul>
                                    <ul>Pricing: {manu.overview.pricing}</ul>
                                    <ul>Lead Time: {manu.overview.leadTime}</ul>
                                </Card.Text>
                                <Button variant='outline-info' href={`/admin/edit/${manu._id}`} style={{width:'fit-content'}}>Edit</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        )
    }
}