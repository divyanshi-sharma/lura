import React, { Component } from 'react';
import BlogHeader from '../components/blogHeader'
import Footer from '../components/footer'
import {Typography, Divider, Button} from 'antd'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img1 from '../img/IMG_1877.jpg'
import img2 from '../img/IMG_1888.JPG'
import img3 from '../img/IMG_1930.jpg'
import './blogContent.css'


export default class BlogContent3 extends Component{ 

    render(){
        return(
            <div>
                <BlogHeader />
                <Typography className="content-main" style={{textAlign:'left'}}>
                     <Typography.Title>How can we sustainably design trends?</Typography.Title>
                    <div className="post-date"><span className='author-name'>Katie Karmin</span> Posted on May 29, 2020</div>
                        <Typography.Paragraph>The best part of my day usually involves getting dressed. Throughout the day, I find myself staring down at my outfit, cherishing the significance of each article of clothing. For example, I am currently wearing a pair of khakis and a ribbed tank top. I purchased the pants on a trip to Los Angeles with my mom- the tank top, I received on Christmas. I find myself taking note of the brands, and as superficial as this sounds, I am proud of the assortment of designers I have collected over the years. Whether thrifted, gifted or purchased, I am very selective about the brands I want to wear. While some tend to measure their collections through monetary worth, imagine if we all transitioned to a new mentality: instead of focusing on the extravagance of a Chanel handbag, we would start valuing our wardrobe selections based on the impact, or more importantly-lack of impact,  on the environment.
</Typography.Paragraph>

                        <Typography.Paragraph>Quarantine has certainly made it known what is in and what is out: ribbed, tie dye, biker short, sweatpants, one shoulder tops, just to name a few. And I know what you’re thinking-- tie dye, again?! Really?!  Sweatpants, or sweatsuits to be more accurate, sellouts were up 79% from February to April in the U.S. mass market. While overall retail sales are lacking, these items are difficult to track down. Trends are a tricky concept to stomach, especially from a sustainable fashion approach. Their very nature demands quick turnaround, endless disposal of unused product and rapid production given the ever changing pace of trends. It feels like just yesterday snake skin was all over my feed. It could be argued that trends are the very perpetrators of fast fashion-the culprits. But as unapologetic fashion lovers, we at Lura admit we do love watching this industry’s ever constant hunger for creation and community. 
                            Because that is what trends at their very core are about-- inspiring our peers with our visions and designs. Thus, it would be hypocritical of us to completely banish the concept of trends- it takes a lot of the fun out of fashion.  But there is a way we can trend sustainably without our products ending up in landfills when next season rolls around. It is critical to our values that we evaluate the longevity of different clothing phenomena before deciding which are worth tackling. And there is also a viable option to produce trend driven apparel without consuming a monstrous amount of water. We sought out how best to responsibly produce this season’s trends without sacrificing our values. 
</Typography.Paragraph>
                        <Divider style={{margin:'25px 0', border:'1px solid rgba(0,0,0,0.125)'}}/>
                        <Typography.Title>Ribbed</Typography.Title>
                        <Typography.Paragraph>We firmly believe the ribbed craze is worth investing in. The pieces are timeless, chic and a refreshing basic amidst the tie dye chaos. From ribbed pants, to biker shorts to a racer back tank, you will not regret this purchase come next season. We consulted our friends at Heliopolis in seeking the most sustainable fabric to recreate the ribbed look and found tencel ribbing! Tencel is a sustainable alternative to cotton, made from tree wood pulp. Tencel is grown responsibly both socially and physically earning Tencel producing forests the Forest Steward Council Certification. Practices such as elimination of pesticides, minimizing excessive water consumption and usage of nontoxic chemicals to produce the fibers all contribute to Tencel’s raving review.  </Typography.Paragraph>
                        <Row style={{margin: '5px 0', display:'flex', justifyContent:'center'}}>
                            <img src={img1} style={{width:'40%', padding:'20px'}}/>
                        </Row>
                        
                        <Divider style={{margin:'25px 0', border:'1px solid rgba(0,0,0,0.125)'}}/>
                        <Typography.Title>Tie Dye</Typography.Title>
                        <Typography.Paragraph>Tie dye, in its truest form, pays homage to sustainability. The earliest derivation of tie dye used the colorings of fruits and vegetables to accomplish one’s desired hue. Think raspberries, onion peels, carrots, and so forth. We recognize factories are not going to transition to this primitive way of production, but we believe many brands have the capability of pivoting in this simplified direction. Nowadays, tie dyes used at the mass market level pose grave threats to both humanity and nature. The process requires intense water consumption, and the recycled water rarely returns to its original form. Frequently, it retires to bodies of water in a chemical infused state, with harmful substances such as alkalis and acid and teeming with other decomposed additives. </Typography.Paragraph>
                        <Row style={{margin:0}}>
                            <Col md={6}>
                            <Typography.Paragraph>This contaminated water inhibits the ability for plants and wildlife to obtain the nutrients they require, ultimately eating at ecosystems. Needless to say, WE MISS THE OG TIE DYE! We believe the Lura community boasts the ideal candidates to pursue sustainable tie dying methods: independent, locally sourced and small-scale. Sourcing the sustainable fabrics to die, we’ve got you covered. From there on, there are a variety of methods we recommend from
                                 traditional Japanese dyeing techniques, to ice dying. If your demand is simply too large to satisfy with household turmeric and berries, a hybrid between natural and synthetic dies does exist. There is no magic formula to successfully satisfy the juxtaposed market demands and an ability 
                                 to produce without damages to the environment, but by seeking improved options we are doing our part. Look out for the Lura team naturally dyeing our own textiles in house using low impact dies with this <a href='https://www.marthastewart.com/1518254/natural-dyes-from-vegetables-and-plants'>recipe</a> on Instagram!
</Typography.Paragraph>
                            </Col>
                            <Col md={6}>
                            <img src={img2} style={{width:'80%', padding:'20px'}}/>
                            </Col>
                        </Row>

                        <Divider style={{margin:'25px 0', border:'1px solid rgba(0,0,0,0.125)'}}/>
                        <Typography.Title>Sweatpants</Typography.Title>
                        <Row style={{margin:0}}>
                            <Col md={6}>
                                <img src={img3} style={{width:'80%', padding:'20px'}}/>
                            </Col>
                            <Col md={6}>
                            <Typography.Paragraph>Sweatpants are arguably the easiest of the trends to replicate sustainably: a minimalist design and an emphasis on comfort. Contrary to popular belief, sustainable sweatpants offer a variety of benefits in comparison to their counterparts. Sweats made of hemp, merino wool or linen are not only softer on the body but don’t preserve odors the same way synthetic fibers do. And you know, the added benefit of saving the planet. In other words, permission granted to stay in your sustainably sourced sweatpants for as long you so desire. We recommend using organic cotton, and tencel for best results. Tencel minimizes water usage and organic cotton ensures the buttery touch of sweatpants we all crave.</Typography.Paragraph>
                            </Col>
                        </Row>
                        
                        
                </Typography>
                <Footer/>
            </div>
        )
    }
}
