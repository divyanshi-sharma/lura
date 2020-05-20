import React, { Component } from 'react';
import CustomHeader from '../components/header'
import { SideMenu } from '../components/manuMenu'
import ManuCard from '../components/manuCard'
import lineImage from '../img/vickholius-nugroho-jt6QxZwSOCQ-unsplash.jpg'
import { Layout, Button } from 'antd';
import './manufactures.css'
import * as Constants from './constants'

const { Header, Sider, Content } = Layout;


const manuInfo = Constants.manuInfo

export default class Manufacture extends Component {
    handleClick = e => {
        console.log('click ', e);
      };
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
                    backgroundColor:'rgb(250, 244, 227)', height:'fit-content'}}>
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

/**
 *                                 <Card key={`card-${i}`} style={{border:'none', borderRadius:'20px', width:'90%', 
                                boxShadow:'rgba(0,0,0,0.125) 5px 5px 10px 5px', margin: '20px 0'}}>
                                    <Card.Body>
                                        <Card.Title style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                            <h3>{info.name}</h3><BookOutlined />
                                        </Card.Title>
                                        <Card.Text>
                                            <Row>
                                            <Col md={10}>
                                            <ul><span style={{margin:'5px'}}><EnvironmentFilled/></span>{info.location}</ul>
                                            <ul><span>Fabrics produced: </span>{info.production}</ul>
                                            <ul><span>Minimum: </span>{info.Minimum}</ul>
                                            <ul><span>Average Price: </span>{info.price}</ul>
                                            <ul><span>Brands worked with: </span>{info.Brands}</ul>
                                            </Col>
                                            <Col md={2}>
                                                <Button type="primary">Primary</Button>
                                            </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
 */