import React from 'react';
import { Menu } from 'antd';
import * as Constants from '../pages/constants'

const {SubMenu} = Menu;

const options = Constants.options
const types = Constants.types
const minimums = Constants.minimums
const prices = Constants.prices
const weights = Constants.weights
var count = 0

export default class SideMenu extends React.Component {
    rootSubmenuKeys = ['composition', 'type', 'minimums','prices','weights'];
    state = {
        openKeys: ['type'],
      };

    onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({ openKeys });
    } else {
        this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
        });
    }
    };
    render(){
    return(
<Menu mode='inline' style={{ height: '100%', borderRight: 0, width:'256'}} openKeys={this.state.openKeys} onOpenChange={this.onOpenChange}>
    <h3 style={{padding:'40px 40px 20px 50px', fontSize:'30px'}}>Filter By</h3>
    <SubMenu key='composition' title={<span style={{fontSize:'25px', padding:'10px 0'}} >Fabric Composition</span>} mode='vertical' style={{padding:'20px 0'}}>
        {options.map((list,i)=>{return(
            <Menu.ItemGroup key="composition" title={<p style={{paddingTop:'20px', fontSize:'20px'}}>{list[0]}</p>}>
                {list.slice(1).map((option)=>{
                    count ++;
                    return(
                    <Menu.Item key={count} style={{paddingLeft:0, fontSize:'20px', display:'flex'}}>
                                <label className="checkbox-label">
                                    <input type="checkbox"/>
                                    <span className="checkbox-custom "></span>
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
                        <label className="checkbox-label">
                            <input type="checkbox"/>
                            <span className="checkbox-custom "></span>
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
                        <label className="checkbox-label">
                            <input type="checkbox"/>
                            <span className="checkbox-custom "></span>
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
                        <label className="checkbox-label">
                            <input type="checkbox"/>
                            <span className="checkbox-custom "></span>
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
                        <label className="checkbox-label">
                            <input type="checkbox"/>
                            <span className="checkbox-custom "></span>
                        </label>
                        <p>{option}</p>
            </Menu.Item>
            )
        })}
    </SubMenu>
</Menu>
    )}}