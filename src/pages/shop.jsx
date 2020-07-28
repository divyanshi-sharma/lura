import React, { Component } from 'react';
import CustomHeader from '../components/header'
import CustomFooter from '../components/footer'
import ShopSideMenu from '../components/shop-components/shopMenu'
import ShopSectors from '../components/shop-components/shopSectors'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Switch, Redirect } from 'react-router-dom'
import * as Constants from './constants'

const types = Constants.shopFabrics
const sectors = Constants.shopSectors

export default class ShopPage extends Component {
    constructor(){
        super()
        this.state = {
            redirect: false,
            selected: [], 
            data: sectors,
            filtered: sectors
        }
    }
    handleItemClick = (e) => {
        var newSelected = [...this.state.selected]
        if(this.state.selected.includes(e.target.id.toLowerCase())){
            newSelected.pop()
            this.setState({filtered:sectors})
        }
        else{newSelected.push(e.target.id.toLowerCase())}
        window.setTimeout(function(){
            this.setState({selected:newSelected})
            this.listProducts()
        }.bind(this), 0)
    }
    listProducts = () => {
        if(this.state.selected.length !== 0){
            console.log(this.state.selected, 'lowercase')
            var filtered = [...this.state.filtered]
            this.state.selected.forEach(tag=>{
                filtered=filtered.filter(item=>item.tags.includes(tag))
            })
            //filtered = filtered.filter(item => item.tags.includes(this.state.selected[0]))
            console.log('filtered', filtered)
            this.setState({filtered:filtered})
        } else {
            this.setState({filtered:sectors})
        }
    }
    renderRedirect = () => {
        if(this.state.redirect){
            return(
                <Switch>
                    <Redirect from='/shop' to='/fabric-finder'/>
                </Switch>
            )
        }
    }
    render(){
        return( 
            <div>
                {this.renderRedirect()}
                <CustomHeader/>
                <div className='shop-main-content' style={{position:'relative',top:'120px'}}>
                    <Row>
                        <Col className='side-filter' md={3}>
                            <ShopSideMenu selected={this.state.selected} handleItemClick={this.handleItemClick}/>
                        </Col>
                        <Col className='shop-main' md={9}>
                            <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',margin:'20px'}}>
                                <p>Need helping finding a fabric to suit your needs? Take our free fabric matching quiz!</p>
                                <Button onClick={()=>{this.setState({redirect:true})}} className='btn-darkgreen'>START CONSULTATION</Button>
                            </div>
                            <Breadcrumb>
                                <Breadcrumb.Item href='/shop'>Shop</Breadcrumb.Item>
                                <Breadcrumb.Item href='/shop'>Fabrics</Breadcrumb.Item>
                            </Breadcrumb>
                            <h3>Fabric</h3>
                            <div className='shop-sectors' style={{margin:'2vw'}}>
                                <ShopSectors data={this.state.filtered}/>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div style={{position:'relative',top:'120px'}}>
                    <CustomFooter/>
                </div>
            </div>
        )
    }
}