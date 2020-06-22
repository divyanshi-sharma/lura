import React, { Component } from 'react';
import BlogHeader from '../components/blogHeader'
import Footer from '../components/footer'
import API from '../utils/API'
import {Typography, Divider} from 'antd'
import Button from 'react-bootstrap/Button'

const baseURL = 'https://blog.lura-services.com/ghost/api/v3/content/'
const key = '9ccaff5a3d3209e3bc3d212897'

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
    }
    componentDidMount = () => {
        this.getPostfromGhost()
    }
    render(){
        if(this.state.post){
            return(
                <div>
                    <BlogHeader />
                    <Button variant='info' href='/blog' style={{float:'right',margin:'20px'}}>Return</Button>
                    <Typography className="content-main" style={{textAlign:'left'}}>
                        <Typography.Title>{this.state.post.title}</Typography.Title>
            <div className="post-date"><span className='author-name'>{this.state.post.authors.map(author=>{return(<span>{author.name}</span>)})}</span> Posted on {this.state.post.published_at.slice(0,10)}</div>
                        <div dangerouslySetInnerHTML={{__html:this.state.post.html}} style={{display:'flex', justifyContent:'center', flexDirection:'column'}}></div>
                    </Typography>
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