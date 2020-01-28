import React, { Component } from 'react';
import { Carousel } from 'antd';
import './carousel.css'
import img_main from '../img/main_show_pic.png'
import img_1 from '../img/NAMIHOFFMAN_112419FABRIC-19.png'
export default class ShopCarousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            pics: this.props.pics
        }
        this.populatePics=this.populatePics.bind(this)
    }

    populatePics=(pics)=>{
        pics.map((pic, i)=> {
            console.log(pic)
            return(
            <div id={i} className='pic'>
                <img src={pic} style={{height: '700px'}}/>
            </div>)
        })
    }
    render(){
        return(
            <div>
                <Carousel>
                    <div>
                        <img src={img_main} style={{height:'700px'}}/>
                    </div>
                    <div>
                        <img src={img_main} style={{height:'700px'}}/>
                    </div>
                </Carousel>
            </div>
        )
    }
}
//  ../img/NAMIHOFFMAN_112419FABRIC-19.png
//                        const store ='../img/NAMIHOFFMAN_112419FABRIC-19.png'
//const picture = require(store)
/**
 *                             <div key={i} className='pic'>
                            <img src={`${process.env.PUBLIC_URL}/src/img/NAMIHOFFMAN_112419FABRIC-19.png`} style={{height: '700px'}}/>
                        </div> 
 */