import React, { Component } from 'react';
import BlogHeader from '../components/blogHeader'
import Footer from '../components/footer'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import API from '../utils/API'
import Img1 from '/Users/yujiaxie/Desktop/LURA/src/img/521588778326_.pic.jpg'; 
import Img2 from '../img/khakkis.jpg'
import Img3 from '../img/WechatIMG236.jpeg'
import Img4 from '../img/WechatIMG199.jpeg'
import Img5 from '../img/6C6B3868-1668-42B3-A38A-3578B21856A0.jpeg'

import './blog.css'

const articles = [{
    title: "Lura's Beginning", 
    url: Img1,
    date: 'May 6, 2020', 
    href: '/article/first'
}, {
    title: "Why Should You Produce Sustainably?", 
    url: Img2, 
    date: "May 20, 2020",
    href: '/article/second'
},{
    title:'How can we sustainably design trends?',
    url: Img3, 
    date: 'May 29, 2020', 
    href:'/article/third'
},{
    title:'Why Do Social Justice and Environmental Justice Go Hand in Hand?',
    url: Img4,
    date:'June 06, 2020',
    href:'/article/fourth'
},{
    title:'Why We Need to Know #WhoMadeOurClothes',
    url: Img5,
    date:'June 17, 2020',
    href:'/article/fifth'
}]


export default class BlogPage extends Component{
    constructor(){
        super()
        this.state = {
            posts: null
        }
    }
    async getPostsfromGhost () {
        await API.get('https://blog.lura-services.com/ghost/api/v3/content/posts/?key=9ccaff5a3d3209e3bc3d212897&include=authors,tag')
        .then(res=>{console.log(res)
            this.setState({posts:res.data.posts})
        })
        .catch(err=>console.log(err))
    }
    componentDidMount(){
        this.getPostsfromGhost()
    }
    render(){
        if(this.state.posts){
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
                    {this.state.posts.map((article, i) => {
                        return(
                        <Card className='info-card' key={i} 
                        style={{width:"80%", margin:'10px 5px', flexDirection:'row', border:'none', borderBottom:'3px solid rgba(0,0,0,0.25)', 
                        padding:'30px', alignItems:'center'}}>
                            <img src={article.feature_image} style={{flex:'1'}} alt={`article-${i}`}/>
                            <Card.Body style={{display:'flex', flex:'2', alignItems:'flex-start',
                            justifyContent:'center', flexDirection:'column', textAlign:'left'}}>
                                <Card.Title style={{color:'#00000091'}}>{article.title}</Card.Title>
                                <Card.Text style={{color:'#98D3B1', fontWeight:'700'}}>Posted on {article.published_at.slice(0,10)}</Card.Text>
                                <Button variant="outline-info" href={`/blogContent/${article.id}`}>Read More</Button>
                            </Card.Body>
                        </Card>)
                    })}
                </div>
                    </div>
                </div>
                    <Footer/>
                </div>
            )
        } else {
            return (<h3>Fetching posts...</h3>)
        }
    }
}

//<img src={article.url} style={{flex:'1'}} alt={`article-${i}`}/>