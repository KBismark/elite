import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";
var cloud = require("../cloudy.png");
var sun = require("../sun.png");
var rain = require("../rainy-day.png");

// set initial sample displayed to false
var accra_displayed=false;
function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  // Sample weather data for Accra.
  var accra = {"location":{"name":"Accra","region":"Greater Accra","country":"Ghana","lat":5.55,"lon":-0.22,"tz_id":"Africa/Accra","localtime_epoch":1651855646,"localtime":"2022-05-06 16:47"},"current":{"last_updated_epoch":1651854600,"last_updated":"2022-05-06 16:30","temp_c":23.0,"temp_f":73.4,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png","code":1000},"wind_mph":6.9,"wind_kph":11.2,"wind_degree":300,"wind_dir":"WNW","pressure_mb":1009.0,"pressure_in":29.8,"precip_mm":5.8,"precip_in":0.23,"humidity":94,"cloud":0,"feelslike_c":25.2,"feelslike_f":77.3,"vis_km":10.0,"vis_miles":6.0,"uv":5.0,"gust_mph":38.9,"gust_kph":62.6}};
  
  //This APIKEY may not be useful after sometimee.
  // If not working, get a copy for free at https://weatherapi.com
  const APIKEY = "ae8799cf19e64191943134949220605";

  // displays the sample weather data for Accra whenever page loads
  function displayAccraOnload(){
    if(!accra_displayed){
      setWeather({ data: accra });
      //sets accra_displayed to true to prevent it from display again anytime page rerenders.
      accra_displayed=true;
    }
  };

  // This function retrieves weather data
  async function weatherData(e) {
    e.preventDefault();
    if (form.city == "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${form.city.toLowerCase()}&aqi=no`
      )
        .then((res) => res.json())
        .then((data) => data);
      
      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
  };
  return (
    <div className="weather"  onLoad={displayAccraOnload} >
      <div className="topicons">
        <img src={sun} width={100} height={100} />
        <img src={rain} width={100} height={100} />
        <img src={cloud} width={100} height={100} />
      </div>
      <div className="title">
          Check Weather Condition
      </div>
      <br />
      <form>
        <input
          type="text"
          placeholder="Enter your city. e.g, accra"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        <div style={{"textAlign":"center",marginTop:20}}>
          <button className="getweather" onClick={(e) => weatherData(e)}>
            Check Weather
          </button>
        </div>
      </form>
      
      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
