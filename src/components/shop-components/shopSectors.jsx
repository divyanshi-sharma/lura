import React from 'react';
import ShopSector from './shopSector'
import * as Constants from '../../pages/constants'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function ShopSectors(props){
    return(
        <Row>
            {props.data.map((sector, i)=>{
                return(
                    <Col md={4}>
                        <ShopSector key={i} sector={sector}/>
                    </Col>
                )
            })}
        </Row>
    )
}