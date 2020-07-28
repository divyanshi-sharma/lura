import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import * as Constants from '../../pages/constants'
import { RightOutlined, DownOutlined } from '@ant-design/icons'
import '../manuMenu.css'

const fabrics = Constants.shopFabrics

const colors = Constants.color
const locations = Constants.location
const prints = Constants.print
const prices = Constants.shop_prices
const weights = Constants.shop_weights
const detailings = Constants.detailing

export default class ShopSideMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            openComposition: false,
            openColor: false,
            openPrint: false,
            openLocation: false,
            openPri: false,
            openWeight:false,
            openDetail:false
          };
    }
    render(){
    return(
        <div>
        <h3 style={{padding:'40px 40px 20px 0px', fontSize:'30px', fontWeight:'200'}}>Sort By</h3>
        <Dropdown  onToggle={(isOpen)=>{this.setState({openType:isOpen})}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Dropdown.Toggle style={{padding:'20px 0'}}  className='btn-transparent'>Fabric Type</Dropdown.Toggle>
                {this.state.openType?<DownOutlined/>:<RightOutlined/>}
            </div>
            <Dropdown.Menu style={this.state.openType?{height:'fit-content',transition:'0.5s'}:{height:0,transition:'0.5s'}}>
                {fabrics.map((list,i)=>{return(
                    <div key={i}>
                            <Dropdown style={{padding:'0 10px'}}>
                                <Dropdown.Toggle className='sub-btn-transparent'>{list[0]}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {list.slice(1).map((option)=>{
                                        return(
                                            <Checkbox handleItemClick={this.props.handleItemClick} option={option}/>
                                        )
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                    </div>
                )})}
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown  onToggle={(isOpen)=>{this.setState({openColor:isOpen})}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Dropdown.Toggle style={{padding:'20px 0'}}  className='btn-transparent'>Color</Dropdown.Toggle>
                {this.state.openColor?<DownOutlined/>:<RightOutlined/>}
            </div>
            <Dropdown.Menu style={this.state.openColor?{height:'fit-content',transition:'0.5s'}:{height:0,transition:'0.5s'}}>
            {colors.map((option)=>{
                return(
                    <Checkbox handleItemClick={this.props.handleItemClick} option={option}/>
                )
            })}
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown onToggle={(isOpen)=>{this.setState({openPrint:isOpen})}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Dropdown.Toggle style={{padding:'20px 0'}}  className='btn-transparent'>Print</Dropdown.Toggle>
                {this.state.openPrint?<DownOutlined/>:<RightOutlined/>}
            </div>
            <Dropdown.Menu style={this.state.openPrint?{height:'fit-content',transition:'0.5s'}:{height:0,transition:'0.5s'}}>
            {prints.map((option)=>{
                return(
                    <Checkbox handleItemClick={this.props.handleItemClick} option={option}/>
                )
            })}
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown  onToggle={(isOpen)=>{this.setState({openLocation:isOpen})}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Dropdown.Toggle style={{padding:'20px 0'}}  className='btn-transparent'>Location</Dropdown.Toggle>
                {this.state.openLocation?<DownOutlined/>:<RightOutlined/>}
            </div>
            <Dropdown.Menu style={this.state.openLocation?{height:'fit-content',transition:'0.5s'}:{height:0,transition:'0.5s'}}>
                {locations.map((list,i)=>{return(
                    <div key={i}>
                            <Dropdown style={{padding:'0 10px'}}>
                                <Dropdown.Toggle className='sub-btn-transparent'>{list[0]}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {list.slice(1).map((option)=>{
                                        return(
                                            <Checkbox handleItemClick={this.props.handleItemClick} option={option}/>
                                        )
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                    </div>
                )})}
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown  onToggle={(isOpen)=>{this.setState({openPri:isOpen})}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Dropdown.Toggle style={{padding:'20px 0'}}  className='btn-transparent'>Price</Dropdown.Toggle>
                {this.state.openPri?<DownOutlined/>:<RightOutlined/>}
            </div>
            <Dropdown.Menu style={this.state.openPri?{height:'fit-content',transition:'0.5s'}:{height:0,transition:'0.5s'}}>
            {prices.map((option)=>{
                return(
                    <Checkbox handleItemClick={this.props.handleItemClick} option={option}/>
                )
            })}
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown onToggle={(isOpen)=>{this.setState({openWeight:isOpen})}}>  
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Dropdown.Toggle style={{padding:'20px 0'}}  className='btn-transparent'>Weight</Dropdown.Toggle>
                {this.state.openWeight?<DownOutlined/>:<RightOutlined/>}
            </div>
            <Dropdown.Menu style={this.state.openWeight?{height:'fit-content',transition:'0.5s'}:{height:0,transition:'0.5s'}}>
            {weights.map((option,i)=>{return(
                <Checkbox handleItemClick={this.props.handleItemClick} option={option}/>
                )
            })}
            </Dropdown.Menu>
        </Dropdown>

        <Dropdown onToggle={(isOpen)=>{this.setState({openDetail:isOpen})}}>  
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Dropdown.Toggle style={{padding:'20px 0'}}  className='btn-transparent'>Detailing</Dropdown.Toggle>
                {this.state.openDetail?<DownOutlined/>:<RightOutlined/>}
            </div>
            <Dropdown.Menu style={this.state.openDetail?{height:'fit-content',transition:'0.5s'}:{height:0,transition:'0.5s'}}>
            {detailings.map((option,i)=>{return(
                <Checkbox handleItemClick={this.props.handleItemClick} option={option}/>
                )
            })}
            </Dropdown.Menu>
        </Dropdown>
</div>
    )
}}

function Checkbox(props){
    function handleChange(e){
        props.handleItemClick(e)
    }
    const color_style = {
        backgroundColor:`${props.option.toLowerCase()}`,
        border:`1px solid ${props.option==='White'?'black':props.option.toLowerCase()}`,
        '--color-var':`${props.option==='White'?'black':'white'}`
    }
    return(
        <div style={{paddingLeft:0, display:'flex'}}>
            <label className="checkbox-label">
                <input type='checkbox' onChange={handleChange} id={props.option}/>
                <span className="checkbox-custom" 
                style={colors.includes(props.option)?color_style:{'--color-var':'white'}}></span>
            </label>
            <p style={{fontSize:'15px'}}>{props.option}</p>
        </div>
    )
}
