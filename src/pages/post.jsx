import React, { Component } from 'react';
import BlogHeader from '../components/blogHeader'
import Footer from '../components/footer'
import API from '../utils/API'
import {Typography} from 'antd'
import Button from 'react-bootstrap/Button'
import {PageView, initGA} from '../components/Tracking';
import './blogContent.css'

export default class PostPage extends Component { 
    constructor(){
        super()
        this.state = {
            post: null
        }
    }
    async getPostfromGhost () {
        const id = this.props.match.params.blogId
        await API.get(`https://blog.lura-services.com/ghost/api/v3/content/posts/${id}/?key=9ccaff5a3d3209e3bc3d212897&include=authors,tag`)
        .then(res=>{console.log(res)
            this.setState({post:res.data.posts[0]})
        })
        .catch(err=>console.log(err))
        initGA('UA-171248811-1');
        PageView();
    }
    componentDidMount = () => {
        this.getPostfromGhost()
        // const script = document.createElement("script");
        // script.src = "https://c1.ty-cdn.net/-/talkyard-comments.min.js";
        // script.async = true;
        // document.body.appendChild(script);
        const script = document.createElement('script');
        script.src = "https://ghost-comments.herokuapp.com/js/commento.js";
        script.async = true;
        document.body.appendChild(script)
    }
    render(){
        if(this.state.post){
            return(
                <div>
                    <BlogHeader />
                    <Button href='/blog' style={{float:'right',margin:'20px'}} className='btn-darkgreen'>Return</Button>
                    <Typography className="content-main" style={{textAlign:'left'}}>
                        <Typography.Title>{this.state.post.title}</Typography.Title>
            <div className="post-date"><span className='author-name'>{this.state.post.authors.map((author,i)=>{return(<span key={i}>{author.name}</span>)})}</span> Posted on {this.state.post.published_at.slice(0,10)}</div>
                        <div dangerouslySetInnerHTML={{__html:this.state.post.html}} style={{display:'flex', justifyContent:'center', flexDirection:'column'}} className='article-content'></div>
                    </Typography>
{/* 

                    <div className="talkyard-comments" data-discussion-id={this.state.post.comment_id} style={{marginTop: '45px'}}>
                        <Button>Add Comment</Button>
                        <noscript>Please enable Javascript to view comments.</noscript>
                        <p style={{marginYop: '25px', opacity: 0.9, fontSize: '96%'}}>Comments powered by
                        <a href="https://www.talkyard.io">Talkyard</a>.</p>
                    </div> */}
                    <div id={`commento`}style={{padding:'0 10%', textAlign:'left'}}></div>
                    <Footer/>
                </div>
                )
        } else {
            return (
                <h3>Loading...</h3>
            )
        }

    }
}