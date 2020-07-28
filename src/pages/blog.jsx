import React, { Component } from 'react';
import BlogHeader from '../components/blogHeader'
import Footer from '../components/footer'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import API from '../utils/API'
import Spinner from 'react-bootstrap/Spinner'
import {PageView, initGA} from '../components/Tracking';
import { Event } from "../components/Tracking";

import './blog.css'


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
        initGA('UA-171248811-1');
        PageView();
    }
    render(){
            return(
                <div>
                <BlogHeader />
                {this.state.posts?
                <div className="main-blog-content">
                    <div className="title" style={{padding: '30px',
                     color:'#00000091', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <h1 style={{fontWeight:'200'}}>MOST POPULAR</h1>
                    </div>
                    <div className="articles">
                    <div style={{display:'flex', flexDirection:'column', 
                justifyContent:'center', alignItems:'center',flexWrap:'wrap'}}>
                    {this.state.posts.map((article, i) => {
                        return(
                            <Card className='info-card' key={i} 
                            style={{width:"80%", margin:'10px 5px', flexDirection:'row', border:'none', borderBottom:'3px solid rgba(0,0,0,0.25)', 
                            padding:'30px', alignItems:'center'}}>
                                <img src={article.feature_image} style={{flex:'1'}} alt={`article-${i}`}/>
                                <Card.Body style={{display:'flex', flex:'2', alignItems:'flex-start',
                                justifyContent:'center', flexDirection:'column', textAlign:'left'}}>
                                    <Card.Title style={{color:'#00000091',fontWeight:'200'}}>{article.title.toUpperCase()}</Card.Title>
                                    <Card.Text style={{color:'#98D3B1', fontWeight:'200'}}>POSTED ON {article.published_at.slice(0,10)}</Card.Text>
                                    <Button className='btn-darkgreen' href={`/blogContent/${article.id}`} onClick={()=>Event("READ",`read article ${article.title}`, 'Blog Page')}>Read More</Button>
                                </Card.Body>
                            </Card>)
                    })}
                </div>
                    </div>
                </div>:<div style={{display:'flex', justifyContent:'center', padding:'40px',color:'#365247',minHeight:'100vh'}}>
                    <Spinner animation="border" style={{color:'#365247'}}/>
                    </div>}
                    <Footer/>
                </div>
            )
    }
}
