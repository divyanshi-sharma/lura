import React, { Component } from 'react';
import CustomHeader from '../components/header'
import CustomFooter from '../components/footer'
import { StarFilled } from '@ant-design/icons';
import { Breadcrumb, Rate, Input } from 'antd';
import img_1 from '../img/NAMIHOFFMAN_112419FABRIC-19.png'
import img_main from '../img/main_show_pic.png'
import ControlledCarousel from '../components/shop-components/shop_carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// const pics = [
//     '../img/NAMIHOFFMAN_112419FABRIC-19.png', '../img/main_show_pic.png'
// ]


export default class ShopItemPage extends Component {

    render(){
        return (
            <div>
                <div>
                <CustomHeader/>
                </div>
                <div className="main-container"style={{position:'relative', top:'200px'}}>
                    <div className="bread" style={{borderTop:'rgba(98, 97, 97, 0.3) solid 1px', margin: '0 40px', 
                    textAlign:'left', fontSize:'25px', borderBottom:'#626161 solid 1px'}}>
                        <Breadcrumb separator=" / " style={{padding:'20px', color:'#626161', opacity:'0.86'}}>
                            <Breadcrumb.Item>Shop</Breadcrumb.Item>
                            <Breadcrumb.Item>Athletic Fabrics</Breadcrumb.Item>
                            <Breadcrumb.Item>Bamboo</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Row className="shop-content" style={{borderColor:"black", height:'750px', margin:'20px 50px', display:'flex'}}>
                        <Col md={8} className='controlled-carousel' style={{}}>
                            <ControlledCarousel />
                        </Col>
                        <Col md={4} className="details" style={{padding:'20px 0',
                        display:'flex', flexDirection:'column'}}>
                            <div className="title" style={{display:"flex", flexDirection:'column', 
                            paddingBottom:'20px',borderBottom:'#707070 solid 1px'}}>
                                <div className="line1" style={{display:"flex", justifyContent:'space-between',
                                flexDirection:'row', alignItems:'center', padding:'10px 0'}}>
                                    <div className='name' style={{fontSize:'40px', fontWeight:'bold',
                                     color:'#626161', padding:'10px 0'}}>Fabric Name</div>
                                    <div className="price" style={{fontSize:'25px', color:'#707070'}}>$40/yd.</div>
                                </div>
                                <div className="line2" style={{display:"flex", justifyContent:'space-between',flexDirection:'row'}}>
                                    <div className="stars" style={{color:'#00000088', fontSize:'25px'}}>
                                        <StarFilled style={{padding:'5px'}} />
                                        <StarFilled style={{padding:'5px'}} />
                                        <StarFilled style={{padding:'5px'}} />
                                        <StarFilled style={{padding:'5px'}} />
                                        <StarFilled style={{padding:'5px'}} />
                                    </div>
                                    <div className="review" style={{fontSize:'19px', opacity:'0.65'}}>5.0 stars | see reviews</div>
                                </div>
                            </div>
                            <div className="colors" style={{paddingBottom:'20px',borderBottom:'#707070 solid 1px'}}>
                                <div className="color" style={{textAlign:'left', color:'#707070', fontSize:'22px', paddingTop:'10px'}}>Colors</div>
                                <div className="display-color" style={{display:'flex', flexDirection:'row', padding:'10px'}}>
                                    <div className="cirlce" style={{height:'40px', width:'40px', borderRadius:'50%', backgroundColor:'crimson', margin:'0 10px'}}></div>
                                    <div className="cirlce" style={{height:'40px', width:'40px', borderRadius:'50%', backgroundColor:'aquamarine', margin:'0 10px'}}></div>
                                    <div className="cirlce" style={{height:'40px', width:'40px', borderRadius:'50%', backgroundColor:'bisque', margin:'0 10px'}}></div>
                                </div>
                            </div>
                            <div className="info" style={{textAlign:'left', color:'#707070', paddingBottom:'20px'}}>
                                <div style={{color:'#707070', fontWeight:'bold', fontSize:'22px'}}>Fabric Information</div>
                                <ul>Thread count</ul>
                                <ul>Stretch</ul>
                                <ul>Commonly used for:</ul>
                                <ul>Other Things</ul>
                                <ul>Designers care about</ul>
                            </div>
                            <div className="size">
                                <div style={{fontSize:'22px', color:'#707070', textAlign:'left'}}><i>Select a fabric length</i></div>
                                <div className="size-input" style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
                                    <Input style={{backgroundColor:'#EDEDEDBA', borderStyle:'none',height:'55px', width:'80px', margin:'10px 10px'}}/> ft.
                                    <Input style={{backgroundColor:'#EDEDEDBA', borderStyle:'none',height:'55px', width:'80px', margin:'10px 10px'}}/> in.
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="creations" style={{height:'500px'}}>
                    </div>
                </div>
            </div>
        );
    }
}

//<img src={img_main} style={{height:'700px'}}></img> <ShopCarousel pics={pics}/>