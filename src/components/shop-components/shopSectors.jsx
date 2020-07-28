import React from 'react';
import ShopSector from './shopSector'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function ShopSectors(props){
    return(
        <Row>
            {props.data.map((sector, i)=>{
                return(
                    <Col md={4} key={i}>
                        <ShopSector sector={sector}/>
                    </Col>
                )
            })}
        </Row>
    )
}