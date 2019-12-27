import React, {Component} from 'react'
import IPAdress from './IPAdress'

class IPAdressContainer extends Component {
  constructor (props) {
    super (props);
    
    this.state = {
      country : '',
      city : '',
      ipAdress : '',
      loc : ''
    }

    // this.processRequest = this.processRequest.bind(this)
  }

  async componentDidMount () {
    const url = 'https://ipinfo.io?token=6c6f02ef23ccab'
    try {
      let response = await fetch(url);   
      let json = await response.json();
          // city: "Voronezh"
          // country: "RU"
          // hostname: "236.156.32.95.dsl-dynamic.vsi.ru"
          // ip: "95.32.156.236"
          // loc: "51.6720,39.1843"
          // org: "AS12389 PJSC Rostelecom"
          // postal: "394000"
          // region: "Voronezj"
          // timezone: "Europe/Moscow"
      const {city, country, ip, loc} = json;

      this.setState({
        country,
        city,
        ipAdress : ip,
        loc
      })

    } catch (err) {
      console.log("Ошибка : " + err);
    }
  }

  render () {
    return (
      <IPAdress 
        country = {this.state.country}
        city = {this.state.city}
        ipAdress = {this.state.ipAdress}
        loc = {this.state.loc}
      />
    )
  }
}

export default IPAdressContainer