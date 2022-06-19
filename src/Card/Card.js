/* eslint-disable react/style-prop-object */
import React from 'react'

export default function Card(props) {
  return (
    <div className="container mt-2 ms-auto">
        <div className="card" style={{
            width:'95%'
        }}>
        <img src={props.img} style={{
            height: '100px',
            width: '80px'
        }} className="card-img-top mt-2 mx-auto " alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center">{props.name}</h5>
            <div className="card-text ps-5 border-top pt-2">
            <p className="card-text mb-1"><strong>Current Price:</strong> {props.price}$</p>
            <p className="card-text mb-1"><strong>Market Cap:</strong> {props.cap*100}%</p>
            <p className="card-text mb-1"><strong>Symbol:</strong> {props.symbol}</p>
            <p className="card-text mb-3"><strong>Highest Price:</strong> {props.high}$</p>
            </div>
            <p className="card-text mb-1 text-center border-top"><small className="text-muted">Updated on {props.date}</small></p>
        </div>
    </div>
    </div>
    
    
  )
}
