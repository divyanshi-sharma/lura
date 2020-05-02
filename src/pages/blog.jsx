import React, { Component } from 'react';
import BlogHeader from '../components/blogHeader'
import Footer from '../components/footer'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Img1 from '../img/office.png'; 
import Img2 from '../img/closet.png'; 
import Img3 from '../img/sincerely-media-9nhxEa3PK30-unsplash.png'
import Img4 from '../img/sports.png'
import './blog.css'

const articles = [{
    title: "HOW SUSTAINABLE IS YOUR LIFESTYLE?", 
    url: Img1,
    date: 'Feb 27, 2020'
}, {
    title:'TIPS FOR STARTING YOUR SUSTAINABLE BRAND', 
    url: Img2, 
    date: 'Feb. 23, 2020'
}, {
    title: 'OUR FAVORITE SUSTAINABLE FABRICS', 
    url: Img3, 
    date: 'Feb 20, 2020'
}, {
    title: 'THE FUTURE OF SUSTAINABLE SPORTSWEAR', 
    url: Img4, 
    date: 'Feb 17, 2020'
}]


export default class BlogPage extends Component{
    constructor(){
        super()
        this.state = {
            articles: []
        }
    }
    getInfoFromDB=()=>{}
    componentDidMount(){
        this.getInfoFromDB()
        this.setState({articles: articles})
    }
    render(){
        return(
            <div>
            <BlogHeader />
            <div className="main-blog-content">
                <div className="title" style={{paddingTop: '30px',
                 color:'#00000091', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <h1>MOST POPULAR</h1>
                </div>
                <div className="articles">
                <div style={{display:'flex', flexDirection:'column', 
            justifyContent:'center', alignItems:'center'}}>
                {this.state.articles.map((article, i) => {
                    return(
                    <Card className='info-card' key={i} 
                    style={{width:"80%", margin:'10px 5px', flexDirection:'row', border:'none', borderBottom:'3px solid rgba(0,0,0,0.25)', 
                    padding:'30px', alignItems:'center'}}>
                        <img src={article.url} style={{flex:'1'}} alt={`article-${i}`}/>
                        <Card.Body style={{display:'flex', flex:'2', alignItems:'flex-start',
                        justifyContent:'center', flexDirection:'column', textAlign:'left'}}>
                            <Card.Title style={{color:'#00000091', fontWeight:'bold'}}>{article.title}</Card.Title>
                            <Card.Text style={{color:'#98D3B1', fontWeight:'700'}}>Posted on {article.date}</Card.Text>
                            <Button variant="outline-info">Read More</Button>
                        </Card.Body>
                    </Card>)
                })}
            </div>
                </div>
            </div>
                <Footer/>
            </div>
        )
    }
}