import React, { Component } from 'react';
import CustomHeader from '../components/header'
import SideMenu  from '../components/manuMenu'
import ManuCard from '../components/manuCard'
import Button from 'react-bootstrap/Button'
import lineImage from '../img/vickholius-nugroho-jt6QxZwSOCQ-unsplash.jpg'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import API from '../utils/API'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './manufactures.css'



export default class Manufacture extends Component {
    constructor(){
        super()
        this.state={
            manufacturers: [],
            saved: [],
            collapse: true
        }
    }
    async getManufacturerfromDB () {
        await API.get('/manufacturers/all', {withCredentials:true})
        .then(res => {this.setState({manufacturers:res.data.manufacturers})})
        .catch(err=>console.log(err))
    }
    async getSavedfromDB () {
        await API.get('/manufacturers/save', {withCredentials:true})
        .then(res=>{this.setState({saved:res.data.saved})})
        .catch(err=>console.log(err))
    }
    componentDidMount = () => {
        this.getManufacturerfromDB()
        this.getSavedfromDB()
    }
    render(){
        return(
            <div>
                <div>
                    <CustomHeader />
                </div>
                <div className='database-title'>
                    <div className="image-text" style={ImageText}>MANUFACTURER DATABASE</div>
                </div>
                <Row style={{textAlign:'left',margin:'0',backgroundColor:'#FEF9F6'}} className='database-content'>
                    <Col md={4} xs={9} style={{border:'1px solid rgba(0,0,0,0.25)', boxShadow:'rgba(0, 0, 0, 0.25) 3px 0px 5px 0.5px', 
                backgroundColor:'white',minHeight:'100vh',display:this.state.collapse?'none':'block'}} className={`side-menu ${this.state.collapse?'collapse':'show'}`}>
                        <SideMenu />
                    </Col>
                    <Col xs={3} md={1} style={{backgroundColor:'#FEF9F6'}}>
                        <Button onClick={()=>{this.setState({collapse:!this.state.collapse})}} className='control-collapse'>{this.state.collapse?<RightOutlined />:<LeftOutlined />}</Button>
                    </Col>
                    <Col md={this.state.collapse?11:7} style={{flexDirection:'column', width:'100%', alignItems:'center',
                backgroundColor:'#FEF9F6', minHeight:'100vh',display:this.state.collapse?'flex':'none'}}>
                        {this.state.manufacturers.length !== 0 ? this.state.manufacturers.map((manu, i)=>{
                            return(
                                <ManuCard info={manu} index={i} saved={this.state.saved}/>
                            )
                        }):<h3>There is no manufacturer in the database...</h3>}
                    </Col>
                </Row>
            </div>
        )
    }
}

const ImageText = {
    backgroundImage: `url(${lineImage})`,
    width: '100vw', 
    height: '90px',
    position: 'fixed', 
    zIndex: -1, 
    color:'white',
    fontWeight: 'bold'
}
