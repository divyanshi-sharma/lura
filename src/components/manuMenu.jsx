import React from 'react';
import { Menu } from 'antd';
import * as Constants from '../pages/constants'

const SubMenu = Menu.SubMenu;

const options = Constants.options
const types = Constants.types
const minimums = Constants.minimums
const prices = Constants.prices
const weights = Constants.weights
var count = 0

export function SideMenu () {
    return(
<Menu mode="verticle" style={{ height: '100%', borderRight: 0, width:'256'}} multiple={true}>
    <h3 style={{padding:'40px 40px 20px 50px', fontSize:'30px'}}>Filter By</h3>
    <SubMenu key='composition' title={<span style={{fontSize:'25px', padding:'10px 0'}}>Fabric Composition</span>} mode='vertical' style={{padding:'20px 0'}}>
        {options.map((list,i)=>{return(
            <Menu.ItemGroup key={`g${i}`} title={<p style={{paddingTop:'20px', fontSize:'20px'}}>{list[0]}</p>}>
                {list.slice(1).map((option)=>{
                    count ++;
                    return(
                    <Menu.Item key={count} style={{paddingLeft:0, fontSize:'20px', display:'flex'}}>
                                <label class="checkbox-label">
                                    <input type="checkbox"/>
                                    <span class="checkbox-custom "></span>
                                </label>
                                <p>{option}</p>
                    </Menu.Item>
                    )
                })}
            </Menu.ItemGroup>
        )})}
    </SubMenu>
    <SubMenu key='type' title={<span style={{fontSize:'25px'}}>Fabric Type</span>}
    style={{padding:'20px 0'}} mode='inline'>
        {types.map((option)=>{count++;
            return(
            <Menu.Item key={count} style={{paddingLeft:0, fontSize:'20px', display:'flex'}}>
                        <label class="checkbox-label">
                            <input type="checkbox"/>
                            <span class="checkbox-custom "></span>
                        </label>
                        <p>{option}</p>
            </Menu.Item>
            )
        })}
    </SubMenu>
    <SubMenu key='minimums' title={<span style={{fontSize:'25px'}}>Minimums</span>} mode="inline" 
    style={{padding:'20px 0'}}>
        {minimums.map((option)=>{count++;
            return(
            <Menu.Item key={count} style={{paddingLeft:0, fontSize:'20px', display:'flex'}}>
                        <label class="checkbox-label">
                            <input type="checkbox"/>
                            <span class="checkbox-custom "></span>
                        </label>
                        <p>{option}</p>
            </Menu.Item>
            )
        })}
    </SubMenu>
    <SubMenu key='prices' title={<span style={{fontSize:'25px'}}>Price Per Yard</span>}
    style={{padding:'20px 0'}} mode='inline'>
        {prices.map((option)=>{count++;
            return(
            <Menu.Item key={count} style={{paddingLeft:0, fontSize:'20px', display:'flex'}}>
                        <label class="checkbox-label">
                            <input type="checkbox"/>
                            <span class="checkbox-custom "></span>
                        </label>
                        <p>{option}</p>
            </Menu.Item>
            )
        })}
    </SubMenu>
    <SubMenu key='weights' title={<span style={{fontSize:'25px'}}>Weights</span>}
    style={{padding:'20px 0'}} mode='inline'>
        {weights.map((option,i)=>{return(
            <Menu.Item key={i} style={{paddingLeft:0, fontSize:'20px', display:'flex'}}>
                        <label class="checkbox-label">
                            <input type="checkbox"/>
                            <span class="checkbox-custom "></span>
                        </label>
                        <p>{option}</p>
            </Menu.Item>
            )
        })}
    </SubMenu>
</Menu>
    )}