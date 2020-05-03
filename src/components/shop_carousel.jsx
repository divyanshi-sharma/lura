import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './carousel.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img_main from '../img/main_show_pic.png'
import img_1 from '../img/NAMIHOFFMAN_112419FABRIC-19@2x.png'
import img_2 from '../img/NAMIHOFFMAN_112419FABRIC-4@2x.jpg'
import img_3 from '../img/NAMIHOFFMAN_112419FABRIC-7@2x.jpg'
import img_4 from '../img/NAMIHOFFMAN_112419FABRIC-10@2x.jpg'
import img_5 from '../img/img_5.jpg'
import img_6 from '../img/NAMIHOFFMAN_112419FABRIC-11@2x.jpg'
import Button from 'react-bootstrap/Button'

const smallPics = [{
    name: img_1, 
    index: 1, 
},{
    name: img_2, 
    index: 2, 
},{
    name: img_3, 
    index: 3, 
},{
    name: img_4, 
    index: 4, 
},{
    name: img_5, 
    index: 5, 
},{
    name: img_6, 
    index: 6, 
}]

export default class ControlledCarousel extends React.Component {
    constructor(){
        super()
        this.state = {
            index: 0,
        }
        this.handleClick.bind(this)
    }
    handleClick = (e) => {
        console.log(e.target.alt)
        e.persist();
        this.setState(()=>{
            return {index: parseInt(e.target.alt,10)}
        })
    }
  
    handleSelect = (selectedIndex, e) => {
        console.log(selectedIndex)
      this.setState(()=>{
          return {index: selectedIndex}
      })
    };
    render(){
        return (
                <Row className="justify-content-md-center">
                    <Col md={2} className="small-pics" style={{height:'fit-content', 
                        display:"flex",flexDirection:'column', alignItems:'center', justifyContent:'space-evenly'}}>
                            {smallPics.map((pic)=>{
                                return(
                                    <div style={{padding:'5px 0'}}>
                                    <img src={pic.name} alt={pic.index} style={{height: '120px', width:'120px', cursor:'pointer'}} onClick={this.handleClick}/>                    
                                    </div>
                                )
                            })}
                    </Col>
                    <Col md={8} className='main-pics' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Carousel activeIndex={this.state.index} onSelect={this.handleSelect} pause={'hover'}>
                            {smallPics.map((pic)=>{
                                return(
                                    <Carousel.Item>
                                        <img className="main-pic" src={pic.name} alt={pic.index} style={{width:'500px', height:'600px'}}/>
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </Col>
            </Row>
        )};
  }
  /**
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img_main}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                            </Carousel.Item>
   */