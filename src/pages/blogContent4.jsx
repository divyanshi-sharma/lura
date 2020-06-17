import React, { Component } from 'react';
import BlogHeader from '../components/blogHeader'
import Footer from '../components/footer'
import {Typography, Divider, Button} from 'antd'


export default class BlogContent4 extends Component{ 

    render(){
        return(
            <div>
                <BlogHeader />
                <Typography className="content-main" style={{textAlign:'left'}}>
                     <Typography.Title>Why Do Social Justice and Environmental Justice Go Hand in Hand?</Typography.Title>
                    <div className="post-date"><span className='author-name'>Katie Karmin</span> Posted on June 06, 2020</div>
                        <Typography.Paragraph style={{display:'flex', justifyContent:'center'}}>“Injustice anywhere is a threat to justice everywhere.”-MLK Jr. </Typography.Paragraph>

                        <Divider style={{margin:'20px 0'}}/>
                        <Typography.Paragraph>In wake of the devastating deaths of George Floyd, Breonna Taylor, Ahmaud Arbery, and countless others, we at Lura have reflected on our purpose and reinforced the undeniable truth in how integral social justice is to the pursuit of environmental justice. Embedded in the meaning of conscious fashion is ethical fashion. This includes humane treatment of employees, sustainable usage of land, and accessibility to all demographics.</Typography.Paragraph>
                        <Divider style={{margin:'20px 0'}}/>
                        <Typography.Paragraph>Fashion has a marred history of abusing Earth’s resources. We are actively working to reverse this trend through conscious production. While environmental justice is in humanity’s best interest, the absence of it disproportionately affects POC. This is called environmental racism. It is the skewed designation of polluting industries to reside near less affluent and more diverse neighborhoods, in particular black communities. It is the unequal distribution of toxic and hazardous waste based on race and income. 
                            <a href='https://www.theguardian.com/environment/2019/mar/08/climate-changed-racism-environment-south'>An estimated 70% of U.S. contaminated waste sites are located near low-income housing.</a> 
                            Sociologist Robert Bullard determined that black children are five times more likely to have lead poisoning(leading environmental health threat to children) than white children. These communities are prayed upon and taken advantage of for undesirable land use which translates into lax enforcement of zoning policies and environmental regulations. Both corporate and governmental officials are equally to blame. These practices are exactly the values Lura aims to dismantle and in wake of the racial injustices that have occurred will continue to disrupt with even more urgency. </Typography.Paragraph>
                        <Divider style={{margin:'20px 0'}}/>
                        <Typography.Paragraph>One of our core priorities is monitoring the production of fabrics. This includes eliminating the usage of non-toxic chemicals that many factories use in manufacturing clothing. While a benefit of this elimination is for the consumers, it is equally as just as intended for the individuals who spend 40 hours a week in these settings producing the articles. In eliminating toxic waste and chemicals, we aim to minimize the damage imparted on the neighborhood of the manufacturer. </Typography.Paragraph>
                        <Divider style={{margin:'20px 0'}}/>
                        <Typography.Paragraph>We at Lura are seeking a textile revolution. One where employees are not subject to inhumane work environments, wages and benefits. One where the cost of production is not suffered on behalf of black citizens and where our factories are not placed in predominantly black and low income communities. We are committed to relentless investigation of where our fabric is coming from and how it is affecting others. This alone is not enough. We are reading, protesting, donating and educating ourselves daily to create a more sustainable future for all individuals. </Typography.Paragraph>
                        <Divider style={{margin:'25px 0', border:'1px solid rgba(0,0,0,0.125)'}}/>

                        <Typography.Paragraph>Listed below are more sources to learn about environmental racism and its impact:</Typography.Paragraph>
                        <ul>
                            <a href='https://www.nytimes.com/2020/06/03/climate/black-environmentalists-talk-about-climate-and-anti-racism.html'>https://www.nytimes.com/2020/06/03/climate/black-environmentalists-talk-about-climate-and-anti-racism.html</a>
                            <Divider style={{margin:'20px 0'}}/>
                            <a href='https://insideclimatenews.org/news/02062020/george-floyd-racial-justice-police-brutality-environment-climate-activism'>https://insideclimatenews.org/news/02062020/george-floyd-racial-justice-police-brutality-environment-climate-activism</a>
                            <Divider style={{margin:'20px 0'}}/>
                            <a href='https://www.latimes.com/environment/newsletter/2020-06-04/why-communities-fighting-for-fair-policing-also-demand-environmental-justice-boiling-point'>https://www.latimes.com/environment/newsletter/2020-06-04/why-communities-fighting-for-fair-policing-also-demand-environmental-justice-boiling-point</a>
                        </ul>
                        
                </Typography>
                <Footer/>
            </div>
        )
    }
}
