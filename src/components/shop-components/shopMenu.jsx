import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import　Button from 'react-bootstrap/Button'
import * as Constants from '../../pages/constants'
import { RightOutlined, DownOutlined } from '@ant-design/icons'
import '../manuMenu.css'

const fabrics = Constants.shopFabrics


const options = Constants.options
const types = Constants.types
const minimums = Constants.minimums
const prices = Constants.prices
const weights = Constants.weights

export default class ShopSideMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            openComposition: false,
            openType: false,
            openMin: false,
            openPri: false,
            openWeight:false,
          };
    }
    render(){
    return(
        <div>
        <h3 style={{padding:'40px 40px 20px 50px', fontSize:'30px'}}>Sort By</h3>
        <Dropdown  onToggle={(isOpen)=>{this.setState({openType:isOpen})}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Dropdown.Toggle style={{padding:'20px 0'}}  className='btn-transparent'>Fabric Type</Dropdown.Toggle>
            {this.state.openType?<DownOutlined/>:<RightOutlined/>}
        </div>
        <Dropdown.Menu>
            {fabrics.map((list,i)=>{return(
                <div key={i}>
                    <Dropdown.Header>{list[0]}</Dropdown.Header>
                    {list.slice(1).map((option)=>{
                        return(
                            <Checkbox handleItemClick={this.props.handleItemClick} option={option}/>
                        )
                    })}
                </div>
            )})}
        </Dropdown.Menu>
        </Dropdown>
        <Dropdown  onToggle={(isOpen)=>{this.setState({openMin:isOpen})}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Dropdown.Toggle style={{padding:'20px 0'}}  className='btn-transparent'>Color</Dropdown.Toggle>
            {this.state.openMin?<DownOutlined/>:<RightOutlined/>}
        </div>
        <Dropdown.Menu>
        {minimums.map((option)=>{
            return(
                <Checkbox handleItemClick={this.props.handleItemClick} option={option}/>
            )
        })}
        </Dropdown.Menu>
        </Dropdown>
        <Dropdown  onToggle={(isOpen)=>{this.setState({openPri:isOpen})}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Dropdown.Toggle style={{padding:'20px 0'}}  className='btn-transparent'>Pattern</Dropdown.Toggle>
            {this.state.openPri?<DownOutlined/>:<RightOutlined/>}
        </div>
        <Dropdown.Menu>
        {prices.map((option)=>{
            return(
                <Checkbox handleItemClick={this.props.handleItemClick} option={option}/>
            )
        })}
        </Dropdown.Menu>
        </Dropdown>
        <Dropdown onToggle={(isOpen)=>{this.setState({openWeight:isOpen})}}>  
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Dropdown.Toggle style={{padding:'20px 0'}}  className='btn-transparent'>Sustainability</Dropdown.Toggle>
            {this.state.openWeight?<DownOutlined/>:<RightOutlined/>}
        </div>
        <Dropdown.Menu>
        {weights.map((option,i)=>{return(
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
    return(
        <div style={{paddingLeft:0, display:'flex'}}>
            <label className="checkbox-label">
                <input type='checkbox' onChange={handleChange} id={props.option}/>
                <span className="checkbox-custom" ></span>
            </label>
            <p>{props.option}</p>
        </div>
    )
}

