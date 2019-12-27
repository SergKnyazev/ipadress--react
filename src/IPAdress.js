import React from 'react'
import './IPAdress.css'

  function IPAdress (props) {
    return (
      <div>
        <h1>Country : {props.country}</h1>
        <h1>City : {props.city}</h1>
        <h1>IP : {props.ipAdress}</h1>
        <h1>Loc : {props.loc}</h1>
      </div>

    )
}

export default IPAdress
