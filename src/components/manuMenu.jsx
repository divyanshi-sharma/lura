import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import * as Constants from '../pages/constants'
import { RightOutlined, DownOutlined } from '@ant-design/icons'
import './manuMenu.css'


const options = Constants.options
const types = Constants.types
const minimums = Constants.minimums
const prices = Constants.prices
const weights = Constants.weights
var count = 0

export default class SideMenu extends React.Component {
    state = {
        openComposition: false,
        openType: false,
        openMin: false,
        openPri: false,
        openWeight:false
      };

    render(){
    return(
        <div>
        <h3 style={{padding:'40px 40px 20px 50px', fontSize:'30px'}}>Filter By</h3>
        <Dropdown onToggle={(isOpen)=>{this.setState({openComposition:isOpen})}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Dropdown.Toggle eventKey='composition' style={{padding:'20px 0'}}  className='btn-transparent'>Fabric Composition</Dropdown.Toggle>
            {this.state.openComposition?<DownOutlined/>:<RightOutlined/>}
        </div>
        <Dropdown.Menu>
            {options.map((list,i)=>{return(
                <div>
                    <Dropdown.Header>{list[0]}</Dropdown.Header>
                    {list.slice(1).map((option)=>{
                        count ++;
                        return(
                        <div key={count} style={{paddingLeft:0, display:'flex'}}>
                                    <label className="checkbox-label">
                                        <input type="checkbox"/>
                                        <span className="checkbox-custom"></span>
                                    </label>
                                    <p>{option}</p>
                        </div>
                        )
                    })}
                </div>
            )})}
        </Dropdown.Menu>
        </Dropdown>
        <Dropdown  onToggle={(isOpen)=>{this.setState({openType:isOpen})}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Dropdown.Toggle style={{padding:'20px 0'}}  className='btn-transparent'>Fabric Type</Dropdown.Toggle>
            {this.state.openType?<DownOutlined/>:<RightOutlined/>}
        </div>
        <Dropdown.Menu>
        {types.map((option)=>{
            count++;
            return(
            <div key={count} style={{paddingLeft:0,display:'flex'}}>
                        <label className="checkbox-label">
                            <input type="checkbox"/>
                            <span className="checkbox-custom "></span>
                        </label>
                        <p>{option}</p>
            </div>
            )
        })}
        </Dropdown.Menu>
        </Dropdown>
        <Dropdown  onToggle={(isOpen)=>{this.setState({openMin:isOpen})}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Dropdown.Toggle style={{padding:'20px 0'}}  className='btn-transparent'>Minimums</Dropdown.Toggle>
            {this.state.openMin?<DownOutlined/>:<RightOutlined/>}
        </div>
        <Dropdown.Menu>
        {minimums.map((option)=>{count++;
            return(
            <div key={count} style={{paddingLeft:0, display:'flex'}}>
                        <label className="checkbox-label">
                            <input type="checkbox"/>
                            <span className="checkbox-custom "></span>
                        </label>
                        <p>{option}</p>
            </div>
            )
        })}
        </Dropdown.Menu>
        </Dropdown>
        <Dropdown  onToggle={(isOpen)=>{this.setState({openPri:isOpen})}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Dropdown.Toggle style={{padding:'20px 0'}}  className='btn-transparent'>Pricing</Dropdown.Toggle>
            {this.state.openPri?<DownOutlined/>:<RightOutlined/>}
        </div>
        <Dropdown.Menu>
        {prices.map((option)=>{count++;
            return(
            <div key={count} style={{paddingLeft:0, display:'flex'}}>
                        <label className="checkbox-label">
                            <input type="checkbox"/>
                            <span className="checkbox-custom "></span>
                        </label>
                        <p>{option}</p>
            </div>
            )
        })}
        </Dropdown.Menu>
        </Dropdown>
        <Dropdown onToggle={(isOpen)=>{this.setState({openWeight:isOpen})}}>  
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Dropdown.Toggle style={{padding:'20px 0'}}  className='btn-transparent'>Weights</Dropdown.Toggle>
            {this.state.openWeight?<DownOutlined/>:<RightOutlined/>}
        </div>
        <Dropdown.Menu>
        {weights.map((option,i)=>{return(
            <div key={i} style={{paddingLeft:0, display:'flex'}}>
                        <label className="checkbox-label">
                            <input type="checkbox"/>
                            <span className="checkbox-custom "></span>
                        </label>
                        <p>{option}</p>
            </div>
            )
        })}
        </Dropdown.Menu>
        </Dropdown>
</div>
    )
}}