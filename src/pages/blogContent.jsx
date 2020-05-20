import React, { Component } from 'react';
import BlogHeader from '../components/blogHeader'
import Footer from '../components/footer'
import {Typography, Divider, Button} from 'antd'
import img1 from '/Users/yujiaxie/Desktop/LURA/src/img/531588778405_.pic.jpg'
import img2 from '/Users/yujiaxie/Desktop/LURA/src/img/521588778326_.pic.jpg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import video from '../video/LURAvideo.mp4'
import './blogContent.css'

const article = [{
    title: "Lura's Beginning", 
    url: img1,
    date: 'May 6, 2020'
}]

export default class BlogContent1 extends Component{ 

    render(){
        return(
            <div>
                <BlogHeader />
                <Typography className="content-main" style={{textAlign:'left'}}>
                    <Typography.Title className="content-title">Lura's Beginning</Typography.Title>
                    <div className="post-date"><span className='author-name'>Regina Morfin</span> Posted on May 6, 2020</div>
                        <Typography.Paragraph >About a year ago, I called Avantika discouraged. The somber mood reflected my thoughts about an article I had just read about the future of climate change.  I stumbled on this story at a low point. Avantika and I were shifting our professional gears following the demise of our eyebrow waxing business. I was not particularly encouraged when I read there is little hope for saving the environment. After sharing this information with Avantika, we decided on the next logical plan: use our entrepreneurial spirits to dismantle this argument. We had toyed with the idea of sustainable fashion before reaching this epiphany. With a newfound desperation, we solidified our decision to tackle climate change within the scope of the fashion industry.</Typography.Paragraph>
                        <Row style={{margin:0}}>
                        <Col md={4} style={{overflow:'hidden'}}><img src={img1} style={{width:'100%'}}></img></Col>
                        <Col md={8}>
                        <Typography.Paragraph >From the initial stages of Lura, we knew we did not want to start our own sustainable clothing brand. Instead, we focused our efforts on consulting pre-existing brands in the fashion industry to improve their sustainability.</Typography.Paragraph>

                        <Typography.Paragraph >We spent the first couple of months reading to understand sustainable production: how sustainable clothing is made, why it’s so expensive, learning the nitty gritty of sustainable textiles.</Typography.Paragraph>
                        <Typography.Paragraph >We then started interviewing smaller brands about their experiences with sustainable clothing production. Before Avantika and I began this effort, we assumed production costs would present the largest obstacle to creating sustainable apparel. While price certainly poses a challenge, efficient sourcing of textiles has emerged as the leading impediment to the process. The sustainable textile industry needs to take more steps to encourage designer creativity. Through our research, we consistently found designers frustrated with the limited fabric and design options. We began to envision the opportunity to create a modernized platform connecting manufacturers and brands.
</Typography.Paragraph>
                        </Col>
                        </Row>
                        <Row style={{display:'flex', justifyContent:'center', alignItems:'center', margin:0}}>
                            <Col md={7}>
                            <Typography.Paragraph >Our mission has become the need to set up an efficient system that does not limit small brands creatively or logistically. We hope to remove the roadblocks to producing sustainable fashion. At a challenging time for the climate, we plan to eliminate the hurdles for producing sustainably. We plan to address the most important question: why sustainable fashion doesn’t exist.</Typography.Paragraph>
                            </Col>
                            <Col md={5}>
                                <img src={img2} style={{width:'100%', padding:'20px'}}/>
                            </Col>
                        </Row>
                        <Divider style={{margin:'25px 0', border:'1px solid rgba(0,0,0,0.125)'}}/>
                        <Typography.Title>What Lura Does</Typography.Title>
                        <Typography.Paragraph>Lura’s mission: to eliminate many of the challenges that small apparel brands face so they can produce clothing sustainably. We want designers to spend their time designing while we handle the sustainable sourcing grunt work! We are working to modernize the fashion industry, specifically geared towards sustainability, by digitizing the relationship between brands and fabric manufacturers.</Typography.Paragraph>
                        <Typography.Paragraph>Our website will help brands navigate the subtleties in choosing sustainable fabrics so designers are able to find the fabrics that enhance the design process. Through our site, brands can order a sample or full orders of a fabric on the spot. The video below offers a sneak peak of the platform we are building. We are also putting out a free fabric manufacturer database in the next couple weeks to make the sourcing process easier while we build out our platform!</Typography.Paragraph>
                        <div className="video-container" style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'20px 0'}}>
                            <video loop autoPlay controls style={videoStyle}>
                                <source src={video} type='video/mp4'/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <Divider style={{margin:'25px 0', border:'1px solid rgba(0,0,0,0.125)'}}/>
                        <Typography.Title>The Blog</Typography.Title>
                        <Typography.Paragraph >Lastly, the blog. First off, welcome!  We are looking to solidify a community that brings together  sustainable fashion brands, textile manufacturers and anyone looking to enter this exciting space. We want to use this blog as a platform to discuss all matters relating to sustainable fashion: from DIY inspiration to breaking down the advantages of using linen versus hemp to helping guide conventional brands into the sustainable realm. We hope this destination provides many answers and discussions about an industry that desperately needs attention. So here’s to saving water, reducing carbon dioxide emissions, and saving the planet. Why should we have to sacrifice good style for the future of the Earth when we can accomplish both missions at the same time?</Typography.Paragraph>
                        <Typography.Paragraph >Wanna know more about us? Follow us on our instagram 
                        <a href='https://www.instagram.com/lura_fabrics/'> @lura_fabrics </a>
                        to see more about our free manufacturer database!</Typography.Paragraph>
                </Typography>
                <Footer/>
            </div>
        )
    }
}

const videoStyle = {
    width: '100%', 
    boxShadow: '0 0 50px 0 rgba(0,0,0,0.35)',
    borderRadius: '6px',
    backgroundColor:'#F8F8F8'
}