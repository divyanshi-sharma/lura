import React, { Component } from 'react';
import CustomHeader from '../components/header'
import SideMenu  from '../components/manuMenu'
import ManuCard from '../components/manuCard'
import lineImage from '../img/vickholius-nugroho-jt6QxZwSOCQ-unsplash.jpg'
import { Layout, Button } from 'antd';
import './manufactures.css'
import * as Constants from './constants'

const { Header, Sider, Content } = Layout;


const manuInfo = Constants.manuInfo

export default class Manufacture extends Component {
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
                            {manuInfo.map((info, i)=>{
                                return(
                                    <ManuCard info={info} index={i}/>
                                )
                            })}
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
