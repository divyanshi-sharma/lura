import React, { Component } from 'react';
import BlogHeader from '../components/blogHeader'
import Footer from '../components/footer'
import {Typography, Divider, Button} from 'antd'
import Img1 from '/Users/yujiaxie/Desktop/LURA/src/img/6C6B3868-1668-42B3-A38A-3578B21856A0.jpeg'


export default class BlogContent5 extends Component{ 

    render(){
        return(
            <div>
                <BlogHeader />
                <Typography className="content-main" style={{textAlign:'left'}}>
                    <Typography.Paragraph>About Amelia: Amelia is the founder and host of Sustainability Of: podcast, which is available on all major platforms. She is deeply interested in the physical sciences, so the environmental sustainability and supply chain practices of fashion companies is a deep interest of hers. While currently a university student in the United States, she looks forward to entering the corporate business world to push sustainability practices after graduation next year. Check out Sustainability Of:’s episodes to learn more about companies making strides toward sustainability as well as different practices in the fashion industry, like the use of leather and synthetic fabrics. </Typography.Paragraph>
                    <img src={Img1} style={{width:'80%', padding:'20px'}}/>
                    <Divider style={{margin:'25px 0', border:'1px solid rgba(0,0,0,0.125)'}}/>
                    <Typography.Title>Why We Need to Know #WhoMadeOurClothes</Typography.Title>
                    <div className="post-date"><span className='author-name'>Amelia Easley</span> Posted on June 17, 2020</div>
                    <Typography.Paragraph>It is high time that consumers begin to think about the industries into which they pour their money. A phrase I sometimes hear while working at my place of employment, a small upscale retail shop that sells clothes, jewelry, and handmade leather goods--all produced in the United States by individuals and other small businesses-- is, “why is this so expensive?” I have yet to hear someone shopping at any fast-fashion outlet ask “why is this so cheap?” Since the conception of the fast fashion industry toward the end of the 20th century, major corporations have sought out the cheapest labor possible to keep up with the increasing demand for more and more clothes at lower and lower prices. This meant that large fashion companies outsourced labor to countries that lacked regulations governing the safety of workers and that ensured a decent wage. </Typography.Paragraph>
                    <Divider style={{margin:'25px 0', border:'1px solid rgba(0,0,0,0.125)'}}/>
                    <Typography.Title>Ethical Implications </Typography.Title>
                    <Typography.Paragraph>By sourcing sustainably made fabrics or natural, organic fabrics, we can begin to have the capability of tracing our supply chain. When we don’t, however, we are left to only imagine the horrible conditions that women garment workers, specifically, must endure. Before diving into the nitty-gritty of sustainably made and sourced clothes, we have to recognize and shine a light on the workers who farm and sew them. When it comes to factory conditions, research findings by Akhter et al. noted that: “the female workers reported that the floor is overcrowded and they have difficulties breathing due to fabric dust. There is no air conditioning, although there are electric fans on the production floor and the workers suffer heat exhaustion during summer, as the number of fans is not sufficient. They suffer due to the smell of sweat, the noise from 500 
machines in one large room, poor lighting, and having to climb up to 10 storeys of stairs twice a day, despite the presence of lifts. The lifts are reserved for the owners, managers, and their visitors” (Akhter et al.). These conditions are not uncommon. And when workers’ rights and higher pay begin to show up eventually in a country’s garment sector, influential fashion corporations move production elsewhere. By purchasing sustainably sourced textiles, through certifications and visits to factories, a consumer begins to gain confidence that the women who made their clothes were paid a living wage and worked under safe conditions. 
</Typography.Paragraph>

                    <Divider style={{margin:'25px 0', border:'1px solid rgba(0,0,0,0.125)'}}/>
                    <Typography.Title>The Initial Crop or Chemical</Typography.Title>
                    <Typography.Paragraph>The beginning of the supply chain starts with creating the fabric. When making a tee-shirt, for example, likely the fabric used was either cotton (which tends to be farmed using heavy chemicals) or polyester (which is made from petroleum). They begin with two very different processes that have similar impacts on the environment. Cotton begins in the field as an extremely water- and chemical-intensive crop. While certified organic cotton has standards that must be upheld like crop rotation and the fact that using synthetic fertilizers is prohibited, conventional cotton has none. Conventional cotton farmers must inhale toxic chemicals on a daily basis and, thanks to extremely low wages, they do not have access to protective equipment. Other findings, like those on this graphic by Fashion Revolution, note that the production of one cotton t-shirt requires 2,720 liters of wat
                        er, which is how much we drink over the course of three years. Polyester is especially shocking. Did you know that polyester, which makes up 60% of clothes sold on the fashion market today, is made out of the exact same material as single-use plastic bottles? It is a low-quality material that simply is not made to last- hence it’s popularity in the fast fashion industry. So, like plastic bottles, it might be easy to recycle, but there are a couple of issues with this. Only around 10% of plastic bottles are actually recycled, so I imagine that the percentage of PET clothes recycled is far lower. The extraction of natural resources also has major environmental consequences. In fact, and I mentioned this in my episode all about synthetic fabrics, an article titled <b><i>hat Synethic Materials Are Doing to Our Environment</i></b> from the Sustainable Fashion Collective said that in one year, 70 million barrels of oil were used to manufacture JUST polyester. That doesn’t account for rayon, acrylic, spandex, elastane, and all the other synthetic and semi-synthetic fabrics. </Typography.Paragraph>
                    
                    <Divider style={{margin:'25px 0', border:'1px solid rgba(0,0,0,0.125)'}}/>
                    <Typography.Title>Dyeing</Typography.Title>
                    <Typography.Paragraph>Once the textile is produced, it needs to be dyed. According to Chequer et al., the wastewater from the textile industry is more polluting than any other industrial sector. In many countries, wastewater is likely not treated at all. But, treated or untreated, chemical fabric dyeing has severe consequences to the biodiversity in the water and those who use that water source for everyday living needs like bathing. Be sure to listen to Sustainability Of:’s episode all about the sustainability issues surrounding the textile dyeing industry, which will come out soon, as there is so much more to say about its impacts. In the meantime, I will say its effects are grave. A significant portion, at least 40%, of the chemicals used to dye clothes are known carcinogens (a far greater percentage are suspected to be carcinogenic). Evidently, these dyes will thus cause major damage throughout the supply chain, including the communities producing clothes as well as the people who buy those clothes at the end of the linear supply chain we know today. By knowing our t-shirt is sustainably sourced and made, we can ask the supplier if there’s a possibility anyone’s livelihood was significantly damaged from its production and expect a truthful answer. </Typography.Paragraph>
                    <Typography.Paragraph>We need to know where our clothes come from. As a privileged individual that is not forced into the garment industry practices many describe as “modern slavery,” I need to do right by these people and fight for better working conditions and support businesses that are paying their employees a fair wage. Boycotting the fast fashion industry won’t fix our problem- it just means that millions of women are out of a job, which could have severe implications for their families and livelihoods. Campaigns like Fashion Revolution’s #WhoMadeMyClothes and the currently relevant Remake Our World’s #PayUp petition are great ways to show companies that consumers care about these issues. That we WANT transparency and accountability. </Typography.Paragraph>
                    
                    <Divider style={{margin:'80px 0', border:'1px solid transparent'}}/>
                    <Typography.Paragraph>Sources </Typography.Paragraph>
                    <Typography.Paragraph>Akhter, Sadika, et al. “Sewing Shirts with Injured Fingers and Tears: Exploring the Experience of Female Garment Workers Health Problems in Bangladesh.” <i><b>BMC International Health and Human Rights</b></i>, vol. 19, no. 1, 2019. <i><b>EBSCOHost</b></i>, doi:10.1186/s12914-019-0188-4. </Typography.Paragraph>
                    <Typography.Paragraph>Bick, Rachel, et al. “The Global Environmental Injustice of Fast Fashion.” <i><b>Environmental Health</b></i>, vol. 17, no. 1, 27 Dec. 2018. <i><b>EBSCOHost</b></i>, doi:10.1186/s12940-018-0433-7. </Typography.Paragraph>
                    <Typography.Paragraph>Chequer, Farah Maria Drumond, et al., “Textile Dyes: Dyeing Process and Environmental Impact.” <i><b>Eco-Friendly Textile Dyeing and Finishing</b></i>, INTECH Open Access Publisher, 2013,www.intechopen.com/books/eco-friendly-textile-dyeing-and-finishing/textile-dyes-dyein g-process-and-environmental-impact. </Typography.Paragraph>
                    <Typography.Paragraph>Ross, Charlie Bradley. “What Synthetic Materials Are Doing To Our Environment.” <i><b>The Sustainable Fashion Collective</b></i>, 11 Apr. 2017, www.the-sustainable-fashion-collective.com/2017/04/11/synthetic-materials-environment /. </Typography.Paragraph>
                </Typography>
                <Footer/>
            </div>
        )
    }
}
