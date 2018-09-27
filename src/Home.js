import React, { Component } from 'react'
import Search from './Search'

const getWeather = function(city) {
  let cityURL = city.split(' ').join('%20')
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityURL}&appid=${process.env.REACT_APP_WEATHERAPI}`)
  .then(resp => resp.json())
  .then(data => console.log(data))
}


const getCity = function(lat,long) {
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.REACT_APP_MYAPIKEY}`)
    .then(resp => resp.json())
    .then(data => {
      // debugger
      console.log(data);
      
      let city = data.results[0].address_components.find(obj => obj.types[0] === "locality")
      console.log(city.long_name);
      getWeather(city.long_name)
      
    })
}

export default class Home extends Component {

  // state = {
  //   findCity: 
  // // }

  getUserLocation = () => {
    console.log('HitgetUserLocation');
    
    var startPos;
    var geoSuccess = function(position) {
      startPos = position;
      let lat = startPos.coords.latitude;
      let long = startPos.coords.longitude;
      console.log(lat);
      console.log(long);
      getCity(lat,long)
    };
    function error() {
      console.log("Well something broke here");
    };
    
    navigator.geolocation.getCurrentPosition(geoSuccess, error);
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    let city = event.target.value;
    console.log(city);
    
    getWeather(city);
  }

  // componentDidMount() {
  //   this.getUserLocation()
  // }

  render() {
    
    return (
      <div>
        <button onClick={this.getUserLocation}>Get the Address</button>
        <Search onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
