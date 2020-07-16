import React from 'react'
import CustomHeader from '../../components/header'
import Form from 'react-bootstrap/Form'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import background from '../../img/NAMIHOFFMAN_112419FABRIC-15.png'
import stiff from '../../img/stiff.png'
import stretchy from '../../img/stretchy2.png'
import silky from '../../img/silky.png'
import comfy from '../../img/comfy.png'
import airy from '../../img/airy.png'
import './quiz.css'

export default class QuizPage extends React.Component { 
    constructor(){
        super()
        this.state={
            index:5
        }
    }
    render(){
        return(
            <div>
                <CustomHeader/>
                <Carousel indicators={false} activeIndex={this.state.index}>
                    <Carousel.Item style={{backgroundImage:`url(${background})`,backgroundSize:'cover',height:'105vh',width:'105vw'}}>
                        <div style={{position:'absolute',right:'10vw', bottom:'10vh', width:'320px'}}>
                            <p style={{color:'#3E5540',fontWeight:'200',fontSize:'25px'}}>FIND THE PERFECT FABRIC FOR YOUR DESIGN</p>
                            <Button style={{fontSize:'15px',backgroundColor:'#F5EBE9',color:'black',borderRadius:'5px',border:'none', padding:'10px 20px'}}
                            onClick={()=>this.setState({index:1})}>Start your consultation</Button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundColor:'#FBF6F2',backgroundSize:'cover',height:'100vh'}}>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'20vh',flexDirection:'column'}}>
                            <p style={{color:'#44524A',fontSize:'30px'}}>BEFORE WE GET STARTED, TITLE YOUR PROJECT!</p>
                            <p>You can refer to all your projects in "My fabric matchings"</p>
                            <Form.Control style={{backgroundColor:'#F5EBE9',boxShadow:'3px 3px 8px 0px rgba(0, 0, 0, 0.15)',width:'40vw',margin:'10vh'}}></Form.Control>
                            <Button style={{backgroundColor:'#375247',color:'white',width:'10vw',border:'none',borderRadius:'5px'}} onClick={()=>this.setState({index:2})}>NEXT</Button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundColor:'#FBF6F2',backgroundSize:'cover',height:'100vh'}}>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'20vh',flexDirection:'column'}}>
                            <p style={{color:'#44524A',fontSize:'30px'}}>WHAT ARE YOU DESIGNING WITH THIS FABRIC?</p>
                            <Row className='fabric-choice'>
                                <Col><Button className='pink-box'>Swimwear</Button></Col>
                                <Col><Button className='pink-box'>Denim jackets, Pants, Tops</Button></Col>
                                <Col><Button className='pink-box'>Summer dresses, Tops, Skirts</Button></Col>
                                <Col><Button className='pink-box'>Trousers, Slacks, Bottoms</Button></Col>
                            </Row>
                            <Row className='fabric-choice'>
                                <Col><Button className='pink-box'>Leather/Suede</Button></Col>
                                <Col><Button className='pink-box'>Knitwear</Button></Col>
                                <Col><Button className='pink-box'>{'Shirts & Blouses'}</Button></Col>
                                <Col><Button className='pink-box'>Activewear</Button></Col>
                            </Row>
                            <Row className='fabric-choice'>
                                <Col><Button className='pink-box'>{'Blazers & Coats'}</Button></Col>
                                <Col><Button className='pink-box'>Hoodies</Button></Col>
                                <Col><Button className='pink-box'>{'Smart casual & Formal dresswear'}</Button></Col>
                                <Col><Button className='pink-box'>Other</Button></Col>
                            </Row>
                            <Row>
                                <strong>Lura tip: </strong><p> if your design matches more than one category, choose all that work!</p>
                            </Row>
                            <Row style={{justifyContent:'center',alignItems:'center'}}>
                                <Col>
                                    <Button style={{backgroundColor:'#375247',color:'white',width:'10vw',border:'none',borderRadius:'5px',}} onClick={()=>this.setState({index:1})}>BACK</Button>
                                </Col>
                                <Col>
                                    <Button style={{backgroundColor:'#375247',color:'white',width:'10vw',border:'none',borderRadius:'5px'}} onClick={()=>this.setState({index:3})}>NEXT</Button>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundColor:'#FBF6F2',backgroundSize:'cover',height:'100vh'}}>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'20vh',flexDirection:'column'}}>
                            <p style={{color:'#44524A',fontSize:'30px'}}>WHAT KIND OF FEEL ARE YOU LOOKING FOR?</p>
                            <Row>
                                <Col className='img-pink-box'>
                                    <Button>
                                        <img src={silky}/>
                                        <p>Silky</p>
                                    </Button>
                                </Col>
                                <Col className='img-pink-box'>
                                    <Button>
                                        <img src={stiff}/>
                                        <p>Stiff, holds form</p>
                                    </Button>
                                </Col>
                                <Col className='img-pink-box'>
                                    <Button>
                                        <img src={airy}/>
                                        <p>Airy, Easy Wearable</p>
                                    </Button>
                                </Col>
                            </Row>

                            <Row>
                                <Col className='img-pink-box'>
                                    <Button>
                                        <img src={stretchy}/>
                                        <p>Stretchy</p>
                                    </Button>
                                </Col>
                                <Col className='img-pink-box'>
                                    <Button>
                                        <img src={comfy}/>
                                        <p>Comfy, Cozy, Soft, Plush</p>
                                    </Button>
                                </Col>
                                <Col className='img-pink-box'>
                                    <Button >
                                        <p>Other</p>
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <strong>Lura tip: </strong><p>  Choose based on the description that matches what you want, not the image!</p>
                            </Row>
                            <Row style={{justifyContent:'center',alignItems:'center'}}>
                                <Col>
                                    <Button style={{backgroundColor:'#375247',color:'white',width:'10vw',border:'none',borderRadius:'5px',}} onClick={()=>this.setState({index:2})}>BACK</Button>
                                </Col>
                                <Col>
                                    <Button style={{backgroundColor:'#375247',color:'white',width:'10vw',border:'none',borderRadius:'5px'}} onClick={()=>this.setState({index:4})}>NEXT</Button>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundColor:'#FBF6F2',backgroundSize:'cover',height:'100vh'}}>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'20vh',flexDirection:'column'}}>
                            <p style={{color:'#44524A',fontSize:'30px'}}>WHAT’S THE FIT ON THE BODY?</p>
                            <Row className='body-choice'>
                                <Col><Button className='pink-box'>Body fit: stretches to hug body</Button></Col>
                                <Col><Button className='pink-box'>Loose, comfy, easy fit</Button></Col>
                                <Col><Button className='pink-box'>Fabric holds its fit but is comfy on body</Button></Col>
                                <Col><Button className='pink-box'>Fits body at some points, loose at others</Button></Col>
                            </Row>
                            <Row className='body-choice'>
                                <Col><Button className='pink-box'>Oversized, baggy</Button></Col>
                                <Col><Button className='pink-box'>Structured, sharp</Button></Col>
                                <Col><Button className='pink-box'>Drapes over body</Button></Col>
                                <Col><Button className='pink-box'>Other</Button></Col>
                            </Row>
                            <Row>
                                <strong>Lura tip: </strong><p> if your design matches more than one category, choose all that work!</p>
                            </Row>
                            <Row style={{justifyContent:'center',alignItems:'center'}}>
                                <Col>
                                    <Button style={{backgroundColor:'#375247',color:'white',width:'10vw',border:'none',borderRadius:'5px',margin:'20px 0'}} onClick={()=>this.setState({index:3})}>BACK</Button>
                                </Col>
                                <Col>
                                    <Button style={{backgroundColor:'#375247',color:'white',width:'10vw',border:'none',borderRadius:'5px',margin:'20px 0'}} onClick={()=>this.setState({index:5})}>NEXT</Button>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundColor:'#FBF6F2',backgroundSize:'cover',height:'100vh'}}>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'20vh',flexDirection:'column'}}>
                            <p style={{color:'#44524A',fontSize:'30px'}}>WHAT WEIGHT ARE YOU LOOKING FOR?</p>
                            <Row className='weight'>
                                <Col><Button>Lightweight, barely there feel (thin chiffons, loose airy summer dresses)</Button></Col>
                                <Col><Button>Medium, normal weight (basic cotton shirts, trousers)</Button></Col>
                                <Col><Button>Heavy weight (thick hoodies, thick jeans, coats)</Button></Col>
                                <Col><Button>Flexible on weight</Button></Col>
                            </Row>
                            <Row style={{justifyContent:'center',alignItems:'center'}}>
                                <Col>
                                    <Button style={{backgroundColor:'#375247',color:'white',width:'10vw',border:'none',borderRadius:'5px',margin:'40px 0'}} onClick={()=>this.setState({index:4})}>BACK</Button>
                                </Col>
                                <Col>
                                    <Button style={{backgroundColor:'#375247',color:'white',width:'10vw',border:'none',borderRadius:'5px',margin:'40px 0'}} onClick={()=>this.setState({index:6})}>NEXT</Button>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}