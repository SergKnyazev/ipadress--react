import React from 'react'
import './IPAdress.css'

  function IPAdress (props) {
    const {country, city, ipAdress, loc} = props;
    return (
      <div>
        <h1>Country : {country}</h1>
        <h1>City : {city}</h1>
        <h1>IP : {ipAdress}</h1>
        <h1>Loc : {loc}</h1>
      </div>

    )
}

export default IPAdress
