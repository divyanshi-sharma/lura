import React from 'react'
import CustomHeader from '../../components/header'
import Form from 'react-bootstrap/Form'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import background from '../../img/NAMIHOFFMAN_112419FABRIC-15.png'
import stiff from '../../img/stiff.png'
import stretchy from '../../img/stretchy2.png'
import silky from '../../img/silky.png'
import comfy from '../../img/comfy.png'
import airy from '../../img/airy.png'
import './quiz.css'
import { Switch, Redirect } from 'react-router-dom'

export default class QuizPage extends React.Component { 
    constructor(){
        super()
        this.state={
            index:0,
            redirect:false,
            show:false
        }
    }
    renderRedirect = () =>{
        if(this.state.redirect){
            return(
                <Switch>
                    <Redirect from='/fabric-finder' to='/account'/>
                </Switch>
            )
        }
    }
    render(){
        return(
            <div>
                <CustomHeader/>
                {this.renderRedirect()}
                <Carousel indicators={false} activeIndex={this.state.index}>
                    <Carousel.Item style={{backgroundImage:`url(${background})`,backgroundSize:'cover',height:'105vh',width:'105vw'}}>
                        <div style={{position:'absolute',right:'10vw', bottom:'10vh', width:'320px'}}>
                            <p style={{color:'#3E5540',fontWeight:'200',fontSize:'25px'}}>FIND THE PERFECT FABRIC FOR YOUR DESIGN</p>
                            <Button style={{fontSize:'15px',backgroundColor:'#F5EBE9',color:'black',borderRadius:'5px',border:'none', padding:'10px 20px'}}
                            onClick={()=>this.setState({index:1})}>Start your consultation</Button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='quiz-background'>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'20vh',flexDirection:'column'}}>
                            <p style={{color:'#44524A',fontSize:'30px'}}>BEFORE WE GET STARTED, TITLE YOUR PROJECT!</p>
                            <p>You can refer to all your projects in "My fabric matchings"</p>
                            <Form.Control style={{backgroundColor:'#F5EBE9',boxShadow:'3px 3px 8px 0px rgba(0, 0, 0, 0.15)',width:'40vw',margin:'10vh'}}></Form.Control>
                            <Button className='move-on-btn' onClick={()=>this.setState({index:2})}>NEXT</Button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='quiz-background'>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'20vh',flexDirection:'column'}}>
                            <p style={{color:'#44524A',fontSize:'30px'}}>WHAT ARE YOU DESIGNING WITH THIS FABRIC?</p>
                            <Row className='fabric-choice'>
                                <Col><Button variant='pink'>Swimwear</Button></Col>
                                <Col><Button variant='pink'>Denim jackets, Pants, Tops</Button></Col>
                                <Col><Button variant='pink'>Summer dresses, Tops, Skirts</Button></Col>
                                <Col><Button variant='pink'>Trousers, Slacks, Bottoms</Button></Col>
                            </Row>
                            <Row className='fabric-choice'>
                                <Col><Button variant='pink'>Leather/Suede</Button></Col>
                                <Col><Button variant='pink'>Knitwear</Button></Col>
                                <Col><Button variant='pink'>{'Shirts & Blouses'}</Button></Col>
                                <Col><Button variant='pink'>Activewear</Button></Col>
                            </Row>
                            <Row className='fabric-choice'>
                                <Col><Button variant='pink'>{'Blazers & Coats'}</Button></Col>
                                <Col><Button variant='pink'>Hoodies</Button></Col>
                                <Col><Button variant='pink'>{'Smart casual & Formal dresswear'}</Button></Col>
                                <Col><Button variant='pink'>Other</Button></Col>
                            </Row>
                            <Row className='lura-tip'>
                                <strong>Lura tip: </strong><p> if your design matches more than one category, choose all that work!</p>
                            </Row>
                            <Row style={{justifyContent:'center',alignItems:'center'}}>
                                <Col>
                                    <Button className='move-on-btn' onClick={()=>this.setState({index:1})}>BACK</Button>
                                </Col>
                                <Col>
                                    <Button className='move-on-btn' onClick={()=>this.setState({index:3})}>NEXT</Button>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='quiz-background'>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'20vh',flexDirection:'column'}}>
                            <p style={{color:'#44524A',fontSize:'30px'}}>WHAT KIND OF FEEL ARE YOU LOOKING FOR?</p>
                            <Row>
                                <Col className='img-pink-box'>
                                    <Button variant='pink'>
                                        <img src={silky}/>
                                        <p>Silky</p>
                                    </Button>
                                </Col>
                                <Col className='img-pink-box'>
                                    <Button variant='pink'>
                                        <img src={stiff}/>
                                        <p>Stiff, holds form</p>
                                    </Button>
                                </Col>
                                <Col className='img-pink-box'>
                                    <Button variant='pink'>
                                        <img src={airy}/>
                                        <p>Airy, Easy Wearable</p>
                                    </Button>
                                </Col>
                            </Row>

                            <Row>
                                <Col className='img-pink-box'>
                                    <Button variant='pink'>
                                        <img src={stretchy}/>
                                        <p>Stretchy</p>
                                    </Button>
                                </Col>
                                <Col className='img-pink-box'>
                                    <Button variant='pink'>
                                        <img src={comfy}/>
                                        <p>Comfy, Cozy, Soft, Plush</p>
                                    </Button>
                                </Col>
                                <Col className='img-pink-box'>
                                    <Button variant='pink'>
                                        <p>Other</p>
                                    </Button>
                                </Col>
                            </Row>
                            <Row className='lura-tip'>
                                <strong>Lura tip: </strong><p>  Choose based on the description that matches what you want, not the image!</p>
                            </Row>
                            <Row style={{justifyContent:'center',alignItems:'center'}}>
                                <Col>
                                    <Button className='move-on-btn' onClick={()=>this.setState({index:2})}>BACK</Button>
                                </Col>
                                <Col>
                                    <Button className='move-on-btn' onClick={()=>this.setState({index:4})}>NEXT</Button>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='quiz-background'>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'20vh',flexDirection:'column'}}>
                            <p style={{color:'#44524A',fontSize:'30px'}}>WHAT’S THE FIT ON THE BODY?</p>
                            <Row className='body-choice'>
                                <Col><Button variant='pink'>Body fit: stretches to hug body</Button></Col>
                                <Col><Button variant='pink'>Loose, comfy, easy fit</Button></Col>
                                <Col><Button variant='pink'>Fabric holds its fit but is comfy on body</Button></Col>
                                <Col><Button variant='pink'>Fits body at some points, loose at others</Button></Col>
                            </Row>
                            <Row className='body-choice'>
                                <Col><Button variant='pink'>Oversized, baggy</Button></Col>
                                <Col><Button variant='pink'>Structured, sharp</Button></Col>
                                <Col><Button variant='pink'>Drapes over body</Button></Col>
                                <Col><Button variant='pink'>Other</Button></Col>
                            </Row>
                            <Row className='lura-tip'>
                                <strong>Lura tip: </strong><p> if your design matches more than one category, choose all that work!</p>
                            </Row>
                            <Row style={{justifyContent:'center',alignItems:'center'}}>
                                <Col>
                                    <Button className='move-on-btn' style={{margin:'20px 0'}}onClick={()=>this.setState({index:3})}>BACK</Button>
                                </Col>
                                <Col>
                                    <Button style={{margin:'20px 0'}} className='move-on-btn' onClick={()=>this.setState({index:5})}>NEXT</Button>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='quiz-background'>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'20vh',flexDirection:'column'}}>
                            <p style={{color:'#44524A',fontSize:'30px'}}>WHAT WEIGHT ARE YOU LOOKING FOR?</p>
                            <Row className='weight'>
                                <Col><Button variant='pink'>Lightweight, barely there feel (thin chiffons, loose airy summer dresses)</Button></Col>
                                <Col><Button variant='pink'>Medium, normal weight (basic cotton shirts, trousers)</Button></Col>
                                <Col><Button variant='pink'>Heavy weight (thick hoodies, thick jeans, coats)</Button></Col>
                                <Col><Button variant='pink'>Flexible on weight</Button></Col>
                            </Row>
                            <Row style={{justifyContent:'center',alignItems:'center'}}>
                                <Col>
                                    <Button style={{margin:'40px 0'}} className='move-on-btn' onClick={()=>this.setState({index:4})}>BACK</Button>
                                </Col>
                                <Col>
                                    <Button style={{margin:'40px 0'}} className='move-on-btn' onClick={()=>this.setState({index:6})}>NEXT</Button>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='quiz-background'>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'20vh',flexDirection:'column'}}>
                            <p style={{color:'#44524A',fontSize:'30px'}}>ANY PARTICULAR DETAILING?</p>
                            <Row className='detailing'>
                                <Col><Button variant='pink'>Lace</Button></Col>
                                <Col><Button variant='pink'>Metallic, shiny</Button></Col>
                                <Col><Button variant='pink'>Glitter, sequins</Button></Col>
                                <Col><Button variant='pink'>Patterns</Button></Col>
                            </Row>
                            <Row className='detailing'>
                                <Col><Button variant='pink'>Customizable patterns</Button></Col>
                                <Col><Button variant='pink'>Lace</Button></Col>
                                <Col><Button variant='pink'>Mesh</Button></Col>
                                <Col><Button variant='pink'>Embroidered</Button></Col>
                            </Row>
                            <Row className='detailing'>
                                <Col><Button variant='pink'>Silk, satin</Button></Col>
                                <Col><Button variant='pink'>None of the above</Button></Col>
                            </Row>
                            <Row className='lura-tip'>
                                <strong>Lura Tip: </strong><p> Choose based on the description that matches what you want, not the image!</p>
                            </Row>
                            <Row style={{justifyContent:'center',alignItems:'center'}}>
                                <Col>
                                    <Button style={{margin:'40px 0'}} className='move-on-btn' onClick={()=>this.setState({index:5})}>BACK</Button>
                                </Col>
                                <Col>
                                    <Button style={{margin:'40px 0'}} className='move-on-btn' onClick={()=>this.setState({index:7})}>NEXT</Button>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='quiz-background'>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'20vh',flexDirection:'column'}}>
                            <p style={{color:'#44524A',fontSize:'30px'}}>SHEERNESS?</p>
                            <Row className='weight'>
                                <Col><Button variant='pink'>See through, sheer </Button></Col>
                                <Col><Button variant='pink'>Partially sheer </Button></Col>
                            </Row>
                            <Row className='weight'>
                                <Col><Button variant='pink'>Opaque</Button></Col>
                                <Col><Button variant='pink'>No preference</Button></Col>
                            </Row>
                            <Row className='lura-tip'>
                                <strong>Lura Tip: </strong><p> Choose based on the description that matches what you want, not the image!</p>
                            </Row>
                            <Row style={{justifyContent:'center',alignItems:'center'}}>
                                <Col>
                                    <Button style={{margin:'40px 0'}} className='move-on-btn' onClick={()=>this.setState({index:6})}>BACK</Button>
                                </Col>
                                <Col>
                                    <Button style={{margin:'40px 0'}} className='move-on-btn' onClick={()=>this.setState({index:8})}>NEXT</Button>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='quiz-background'>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'20vh',flexDirection:'column'}}>
                            <p style={{color:'#44524A',fontSize:'30px'}}>UPLOAD AN SKETCH OF YOUR DESIGN</p>
                            <Row>
                                <Form.File id='custom-file-upload' label='Choose file' custom></Form.File>
                            </Row>
                            <Button onClick={()=>{this.setState({show:true})}} className='upload-button'>Upload</Button>
                            <Modal show={this.state.show} onHide={()=>{this.setState({show:false})}} centered style={{border:'none', borderRadius:'25px'}} className='upload-modal'>
                                <Modal.Body style={{display:'flex',justifyContent:'center',padding:'40px',flexDirection:'column',alignItems:'center'}}>
                                    <div>
                                        <p style={{fontSize:'40px'}}>SUCCESS!</p>
                                    </div>
                                    <div>
                                        <p>Upload confirmed.</p>
                                    </div>
                                    <div className='return-button'>
                                        <Button onClick={()=>{this.setState({show: false})}}>Return</Button>
                                    </div>
                                </Modal.Body>
                            </Modal>
                            <Row style={{margin:'80px'}}>
                                <strong>Lura Tip: </strong><p style={{width:'60vw'}}>  Uploading a design helps us understand your needs better, however, this is optional! Upload a .jpg, .png, or .jpeg. If you don’t want to upload anything, hit next.</p>
                            </Row>
                            <Row style={{justifyContent:'center',alignItems:'center'}}>
                                <Col>
                                    <Button style={{margin:'40px 0'}} className='move-on-btn' onClick={()=>this.setState({index:7})}>BACK</Button>
                                </Col>
                                <Col>
                                    <Button style={{margin:'40px 0'}} className='move-on-btn' onClick={()=>this.setState({index:9})}>NEXT</Button>
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='quiz-background'>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'20vh',flexDirection:'column'}}>
                                <p style={{color:'#44524A',fontSize:'30px'}}>THANK YOU!</p>
                                <div style={{width:'50vw'}}>
                                    <p>Your results will be available within 24 hours through your Lura login, in your account page. You'll get an email when they are ready. </p>
                                </div>
                                <Button onClick={()=>{this.setState({redirect:true})}}style={{margin:'40px 0'}} className='move-on-btn' style={{width:'30vw'}}>My Account</Button>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}