import React, { Component } from 'react';

export default function ShopSector(props){
    const sector =props.sector
    return(
        <div className={sector.tags}>
            <div  style={{backgroundColor:'gray',width:'200px',height:'200px'}}>
                {/*<img src={img} alt={name} style={{width:'70%',height:'70%'}}/>*/}
            </div>
            <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'white'}}>
                <p>{sector.name}</p>
                <p>{`$${sector.price}`}</p>
            </div>
        </div>
    )
}