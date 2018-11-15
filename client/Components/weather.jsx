import React from 'react'
import request from 'superagent'

class Weather extends React.Component {
  state = {
    weather: {
      city: null,
      icon: null,
      temp: null,
      condition: null,
      humidity: null,
      updated: null
    },
    ip: {
      ipAddress: null,
      urlIPapi: null
    },
    location: {
      returnedCity: "hi"
    }
  }

  componentDidMount () {
    this.getIP()
    // this.getWeather()
  }

  getIP () {
    request.get('https://api.ipify.org?format=json')
    .then(res => {
      this.setState({
        ip: {
          ipAddress: res.body.ip,
          urlIPapi: 'https://geo.ipify.org/api/v1?apiKey=at_SEaLHHzyDOtWBhKfMMh9HiRxcVM1j&ipAddress=' + res.body.ip
        }
        
      })
      this.getCity ()
    })
  }

  getCity () {
    console.log(this.state.ip.urlIPapi)
    console.log(this.state)
    request.get(this.state.ip.urlIPapi)
    .then(res => {
      this.setState({
        location: {
          returnedCity: res.body.location.city
        }
      })
      console.log(this.state.location.returnedCity)
    })
  }

  // getWeather () {
  //   request.get('http://api.apixu.com/v1/current.json?key=3beb485786ef46ad9f8223822181311&q=auckland')
  //     .then(res => {
  //       this.setState({
  //           temp: res.body.current.temp_c + '°C',
  //           city: res.body.location.name,
  //           condition: res.body.current.condition.text,
  //           humidity: res.body.current.humidity + "%",
  //           icon: res.body.current.condition.icon,
  //           updated: res.body.current.last_updated
  //         }
  //       )
  //     })
  // }

  render () {
    return (
      <div>
        <h1>Current weather in {this.state.city}</h1>
        <h2>{this.state.condition}</h2>
        <img src={'http:' + this.state.icon}></img>
        <h3>The temparature is {this.state.temp} and the humidity is {this.state.humidity}.</h3>
        <p>Weather data last updated {this.state.updated}</p>

        <h4>ip: {this.state.ip.ipAddress}</h4>
        <h4>url generated: {this.state.ip.urlIPapi}</h4>
        <h4>returned city: {this.state.location.returnedCity}</h4>
      </div>
    )
  }
}

export default Weather