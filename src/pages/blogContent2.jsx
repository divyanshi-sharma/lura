import React, { Component } from 'react';
import BlogHeader from '../components/blogHeader'
import Footer from '../components/footer'
import {Typography, Divider, Button} from 'antd'
import img1 from '/Users/yujiaxie/Desktop/LURA/src/img/khakkis.jpg'
import img2 from '/Users/yujiaxie/Desktop/LURA/src/img/difficulty.JPG'
import img3 from '../img/Facetune_.JPG'
import img4 from '../img/alternative.JPG'
import img5 from '../img/43BEB8E5-BC59-4CB1-8073-089255212D70.JPG'
import img6 from '../img/FullSizeRender.jpg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import video from '../video/LURAvideo.mp4'
import './blogContent.css'

const article = [{
    title: "Why Should You Produce Sustainably?", 
    url: img1,
    date: 'May 20, 2020'
}]

export default class BlogContent2 extends Component{ 

    render(){
        return(
            <div>
                <BlogHeader />
                <Typography className="content-main" style={{textAlign:'left'}}>
                    <Typography.Title>Why Should You Produce Sustainably?</Typography.Title>
                    <div className="post-date"><span className='author-name'>Katie Karmin</span> Posted on May 20, 2020</div>
                        <Typography.Paragraph>The best part of my day usually involves getting dressed. Throughout the day, I find myself staring down at my outfit, cherishing the significance of each article of clothing. For example, I am currently wearing a pair of khakis and a ribbed tank top. I purchased the pants on a trip to Los Angeles with my mom- the tank top, I received on Christmas. I find myself taking note of the brands, and as superficial as this sounds, I am proud of the assortment of designers I have collected over the years. Whether thrifted, gifted or purchased, I am very selective about the brands I want to wear. While some tend to measure their collections through monetary worth, imagine if we all transitioned to a new mentality: instead of focusing on the extravagance of a Chanel handbag, we would start valuing our wardrobe selections based on the impact, or more importantly-lack of impact,  on the environment.
</Typography.Paragraph>
                        <Row style={{margin:0}}>
                        <Col md={4} style={{overflow:'hidden'}}><img src={img1} style={{width:'100%'}}></img></Col>
                        <Col md={8}>
                        <Typography.Paragraph>Conscious fashion means a connection between the buyer and the supplier. The process of educating the consumer begins with the label. Ten years ago, if you asked the average consumer to identify the industries that posed the biggest threat to the environment, the fashion industry surely would not top their lists. At this point in time, we are almost too late. 
                        The urgent necessity for brands to transition to sustainable production is on a timetable before the damage of the fashion industry is irreversible. The decision to produce and design sustainably  presents an opportunity to improve the environment while providing consumers with the choice to shop responsibly. According to a 2019 U.S. Consumer Sustainability Survey, over two-thirds of Americans consider sustainability when making a purchase.
                         In addition, they are also willing to pay more for sustainable products. 
</Typography.Paragraph>
                        <Typography.Paragraph>While some critics might attribute the survey to the desire to appear trendy, consumers clearly have become more environmentally conscious when it comes to fashion.</Typography.Paragraph>
                        </Col>
                        </Row>
                        <Typography.Paragraph>The spending habits of consumers clearly reflect where we are headed in the fashion industry. As we see stores like Forever 21 and Macy’s facing bankruptcy, it is clear that customers are more invested than ever in the narrative and quality of their wardrobe choices. Buy less, love more, wear longer. </Typography.Paragraph>
                        <Typography.Paragraph>While some critics might attribute the survey to the desire to appear trendy, consumers clearly have become more environmentally conscious when it comes to fashion.</Typography.Paragraph>
                        <Row style={{margin: '5px 0', display:'flex', justifyContent:'center'}}>
                            <img src={img2} style={{width:'80%', padding:'20px'}}/>
                        </Row>
                        <Typography.Paragraph>This analysis, my friends, is the 2020 hack to retail. And let’s face it, it is nearly impossible, with ⅔ of American consumers ranking sustainability as a priority, for brands to thrive without prioritizing sustainability. As a company, we are committed to sourcing sustainable products. Below you will find a list of the top reasons why we believe every brand should consider producing sustainably.</Typography.Paragraph>
                        <Divider style={{margin:'25px 0', border:'1px solid rgba(0,0,0,0.125)'}}/>
                        <Typography.Title>Sustainable clothes are not only better for the environment, but they are also better for our bodies.</Typography.Title>
                        <Typography.Paragraph>The clothing content should be as transparent as the nutrition label on the back of a snack bag. In fast fashion, there are up to 8000 chemicals used in the production process.  They include carcinogens and hormone disruptors. The clothing we put on our bodies should not threaten our health and safety. Hazardous chemicals found in clothing dye are linked to liver, kidney and lung disorders, not to mention the skin irritation caused by cheaply made fabrics. By opting for healthier fabrics such as organic cotton, organic wool, hemp and tencel, you are supporting your future and the future of your customers. </Typography.Paragraph>
                        <Row style={{margin: '5px 0', display:'flex', justifyContent:'center'}}>
                            <img src={img3} style={{width:'60%', padding:'20px'}}/>
                            <figcaption style={{width:'70%'}}>“Their dresses are really flattering and I love Reformation’s patterns. I also care about sustainability in fashion, and I’m proud to support a brand who believes in that.”</figcaption>
                        </Row>
                        <Divider style={{margin:'25px 0', border:'1px solid rgba(0,0,0,0.125)'}}/>
                        <Typography.Title>Sustainable clothing production will help insure a safe and healthy workforce.</Typography.Title>
                        <Typography.Paragraph>Ethical and sustainable fashion lead to happier and healthier work environments. Fabric manufacturers often provide unhealthy work space for their employees who are exposed to unsafe chemicals while earning low wages. Many times workers are put at risk by proximity  to toxic chemicals for the fabric dyes and poor ventilation leading to lasting complications such as asthma, lung disorders and cancer. Pivoting a brand’s focus towards sustainability includes overseeing the improvement of the workers.  Is the price of cheap production worth the compromised livelihoods and health of our employees?</Typography.Paragraph>
                        <Divider style={{margin:'25px 0', border:'1px solid rgba(0,0,0,0.125)'}}/>
                        <Typography.Title>Saving natural resources=Saving $$$</Typography.Title>
                        <Typography.Paragraph>You may have heard the myth that sustainable fashion is too expensive. While there is a cost to producing environmentally conscious products, the sustainable options will last far longer than the cheaper counterparts. The production of one cotton t-shirt requires 2700 liters of water. Simply replacing conventional cotton for organic cotton reduces water consumption by up to 91%. Water is a resource, but it is also costly. This means spending 91% less on water bills. In manufacturing, water is paid for twice: once when it is delivered to the facility and again when it is released and sent to water treatment facilities. With the tightening pinch of natural resources, the price of water has only increased.  Less consumption= lower prices. Using less water will reduce the operating costs, a benefit not privy to materials such as cotton. Overall, the expense of natural resources in production and distribution are significantly reduced when compared to fast fashion.</Typography.Paragraph>
                        <Row style={{margin: '5px 0', display:'flex', justifyContent:'center'}}>
                            <img src={img4} style={{width:'50%', padding:'20px'}}/>
                        </Row>
                        <Divider style={{margin:'25px 0', border:'1px solid rgba(0,0,0,0.125)'}}/>
                        <Typography.Title>Higher quality pieces</Typography.Title>
                        <Row style={{margin:0}}>
                            <Col md={6}>
                            <Typography.Paragraph>As we return to seeking higher quality pieces, brands that refuse to embrace environmentally conscious standards will pay the price. Clothing tells a story, and most consumers care about the narrative. As the market becomes more inundated with brands, it is crucial that part of your brand’s narrative is durability and a clear commitment to each article of clothing. As studies prove that consumers are becoming smarter about their shopping choices, brands that do not invest in a thoughtful mission will lag far behind.  We are obsessed with Alternative Apparel’s commitment to sustainable and ethical production. This brand has pivoted their label around thoughtful manufacturing and packaging. They use low-impact dyes, organic cotton and recycled packaging. Their materials are eco-friendly without sacrificing priorities like softness and lasting fabric.</Typography.Paragraph>
                            </Col>
                            <Col md={6}>
                            <img src={img5} style={{width:'80%', padding:'20px'}}/>
                            <figcaption style={{height:'10%'}}>“I bought this jumpsuit after researching the designer Ilana Kohn. After finding out all her pieces are made in NYC and she uses eco-conscious materials. Most of her pieces, the classic jumpsuit I am wearing is made of linen.”</figcaption>
                            </Col>
                        </Row>
                        
                        
                        <Divider style={{margin:'25px 0', border:'1px solid rgba(0,0,0,0.125)'}}/>
                        <Typography.Title>More marketable</Typography.Title>
                        <Row style={{margin: '5px 0', display:'flex', justifyContent:'center'}}>
                            <img src={img6} style={{width:'65%', padding:'20px'}}/>
                            <figcaption style={{width:'70%'}}>“I read about Girlfriend Collective a lot on different blogs and I really loved their priorities on sustainable and ethical fashion.” Talia’s response to not buying more mainstream workout brands such as Nike.</figcaption>
                        </Row>
                        <Typography.Paragraph>Last but not least, sustainability sells. Lyst, the fashion equivalent of Wikipedia, tracked over 100 million searches across 5 million products and found a 66 percent increase in searches for sustainable fashion between 2018-2019. Organic cotton searches are up 16% annually, and sustainable denim site visits have surged 187%. Vegan leather searches have increased 119% over a span of six months. Over the past year, “slow fashion” has seen 90 million impressions on social media. The evidence speaks for itself: consumers want brands that value the quality and production of their clothing. Say goodbye to fast fashion, and convert your passion for quality pieces into the fabric. It’s simple: buy less, love more, wear longer.  </Typography.Paragraph>
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