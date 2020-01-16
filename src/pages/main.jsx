import React, { Component } from 'react';
import CustomHeader from '../components/header'
import CustomFooter from '../components/footer'
import lineImage from '../img/vickholius-nugroho-jt6QxZwSOCQ-unsplash.jpg'
import storyImage from '../img/steinar-engeland-BfMbxUu0EGE-unsplash.jpg'
import MainContent from '../components/mainContent'


export default class MainPage extends Component {
    constructor(){
        super()
        this.state = {
            height: 400,
            sticky: false
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
            this.setState({sticky:true})
        }else {
            this.setState({sticky:false})
        }
    }
    render(){
        return(
            <div >
                <CustomHeader/>
                <div className="main-container" style={{position:'relative', top:'186px'}}>
                <div className="line-image" style={LineImage}>
                    <img src={lineImage} alt='leaves' style={{width:'100%'}}></img>
                </div>
                <div className="content" style={{position:'relative', top:'100px'}}>
                <div className="main-text" style={{height:this.state.height, position:'relative', display:'flex', justifyContent:'center'}} >
                    <text 
                    style={{wordBreak:'break-all', color:'#357F59', width:'63%',
                    fontSize:'40px', position:'fixed', top:'380px', zIndex:-1}}>
                        YOUR ONE-STOP SHOP TO SOURCE AND ORDER SUSTAINABLE TEXTILES </text>
                </div>
                <div className='story-board' style={storyBoard}>
                    <div style={{background:`url(${storyImage}) padding-box`,
                    backgroundSize:'contain',
                    height:'100%', display:'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-around',}}>
                        <div style={{width:'20px', lineHeight:1}}><text style={{color: 'white', fontSize:'80px', width:'30%'}}>Our Story</text></div>
                        <div className='video-block'
                        style={{height:'80%', width:'60%', backgroundColor:'rgba(255,255,255,0.5)'}}></div>
                    </div>
                </div>
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


const storyBoard = {
    height: '500px', 
}

