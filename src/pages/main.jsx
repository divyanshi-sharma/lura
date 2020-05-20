import React, { Component } from 'react';
import CustomHeader from '../components/header'
import CustomFooter from '../components/footer'
import lineImage from '../img/vickholius-nugroho-jt6QxZwSOCQ-unsplash.jpg'
import MainContent from '../components/mainContent'
import video_offical from '../video/LURAvideo.mp4'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './main.css'


export default class MainPage extends Component {
    constructor(){
        super()
        this.state = {
            height: 400,
            sticky: false, 
            autoplay: false,
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
     }  
    handleScroll=(e)=>{
        this.setState({height: 400 - window.scrollY})
        console.log(400 - window.scrollY)
        if(400 - window.scrollY<230){
            this.setState({sticky:true, autoplay: true})
        }else {
            this.setState({sticky:false})
        }
    }
    render(){
        return(
            <div >
                <CustomHeader/>
                <div className="main-container" style={{position:'relative'}}>
                <div className="line-image" style={LineImage}>
                    <img src={lineImage} alt='leaves' style={{width:'100%'}}></img>
                </div>
                <div className="content" style={{position:'relative', top:'100px'}}>
                <div className="main-text" style={{position:'relative', display:'flex', justifyContent:'center'}} >
                    <text 
                    style={{ color:'#357F59', width:'63%', position:'fixed', zIndex:-1}}>
                        YOUR ONE-STOP SHOP TO SOURCE AND ORDER SUSTAINABLE TEXTILES </text>
                </div>
                <Row style={videoSection}>
                    <Col md={7}>
                    <div className="video-container" >
                        <video id='displayingVideo' loop style={video} autoPlay controls>
                            <source src={video_offical} type='video/mp4'/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    </Col>
                    <Col md={5}>
                        <div className="storyBoard">
                            <div className="story-title" style={{fontWeight:'bold', fontSize:'30px'}}>What's Coming</div>
                            <p style={{padding:'0 20px', fontSize:'20px'}}>We’re working modernising the fashion industry by 
                            digitising the relationship between brands and manufacturers. 
                            Stay updated to rebuild your supply chain in the most sustainable way.</p>
                        </div>
                    </Col>

                </Row>
                <MainContent />
                <CustomFooter />
                </div>
                </div>
            </div>
        )
    }
}


const LineImage = {
    width: '100vw', 
    height: '100px',
    overflow: 'hidden' ,
    position: 'fixed', 
    zIndex: -1, 
}


const videoSection = {
    height: '500px', 
    backgroundColor: '#fbf6f2',
    alignItems:'center'
}

const video = {
    width: '80%', 
    boxShadow: '0 0 50px 0 rgba(0,0,0,0.35)',
    borderRadius: '6px',
    backgroundColor:'#F8F8F8'
}