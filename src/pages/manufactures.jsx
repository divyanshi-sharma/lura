import React, { Component } from 'react';
import CustomHeader from '../components/header'
import SideMenu  from '../components/manuMenu'
import ManuCard from '../components/manuCard'
import lineImage from '../img/vickholius-nugroho-jt6QxZwSOCQ-unsplash.jpg'
import { Layout, Button } from 'antd';
import API from '../utils/API'
import './manufactures.css'
import { ErrorSection } from 'aws-amplify-react';

const { Header, Sider, Content } = Layout;



export default class Manufacture extends Component {
    constructor(){
        super()
        this.state={
            manufacturers: [],
            saved: []
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
                <Layout>
                    <Header><CustomHeader /></Header>
                    <div style={{position:'relative', top:'120px', zIndex:1000}}>
                        <div className="image-text" style={ImageText}>MANUFACTURER DATABASE</div>
                    </div>
                    <Layout style={{position:'relative', top:'210px', height:'fit-content', textAlign:'left', display:'flex', }}>
                        <Sider width='30%' style={{border:'1px solid rgba(0,0,0,0.25)', boxShadow:'rgba(0, 0, 0, 0.25) 3px 0px 5px 0.5px', 
                    backgroundColor:'white'}} breakpoint='lg' collapsedWidth="0">
                        <SideMenu />
                        </Sider>
                        <Content style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%', alignItems:'center',
                    backgroundColor:'#FEF9F6', height:'fit-content'}}>
                            {this.state.manufacturers.length != 0 ? this.state.manufacturers.map((manu, i)=>{
                                return(
                                    <ManuCard info={manu} index={i} saved={this.state.saved}/>
                                )
                            }):<h3>There is no manufacturer in the database...</h3>}
                        </Content>
                    </Layout>
                </Layout>
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
