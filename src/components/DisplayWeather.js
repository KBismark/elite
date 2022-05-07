import React from "react";
import "./displayweather.css";
function DisplayWeather(props) {
  const { data } = props;
  
  //Check the console for the weather data retrieved
  console.log(data);

  return (
    <div className="displayweather">
      {!data.error ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {data.location.name} , {data.location.country}. Weather
            </span>
            <span className="cardsubtitle">
              As of {new Date().toLocaleTimeString()}
            </span>

            <h1>
              {" "}
              {Math.floor(data.current.temp_c)}
              <sup>o</sup>
            </h1>
            <span className="weather-main">{/*data.weather[0].main*/""} </span>
            <img className="weather-icon" src={data.current.condition.icon} alt="" srcset="" />
            <span className="weather-description">
              {" "}
              {data.current.condition.text}
            </span>
          </div>
          <div className="weatherdetails">
            <div className="section1">
              <table>
                <tr>
                  <td>
                    <h4>High/Low</h4>
                  </td>
                  <td>
                    <span>
                      {Math.floor(/*data.main.temp_max*/568 - 273.15)}/
                      {Math.floor(/*data.main.temp_min*/353 - 273.15)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Humidity</h4>
                  </td>
                  <td>
                    <span>{data.current.humidity} %</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Pressure</h4>
                  </td>
                  <td>
                    <span>{data.current.pressure_in} hPa</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Visibility</h4>
                  </td>
                  <td>
                    <span>{data.current.vis_km} Km</span>
                  </td>
                </tr>
              </table>
            </div>

            <div className="section2">
              <table>
                <tr>
                  <td>
                    <h4>Wind</h4>
                  </td>
                  <td>
                    <span>{Math.floor(data.current.wind_kph)} km/hr</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Wind Direction</h4>
                  </td>
                  <td>
                    <span>
                      {data.current.wind_degree}
                      <sup>o</sup> deg
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunrise</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(/*data.sys.sunrise*/1.23 * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunset</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(/*data.sys.sunset*/0.117 * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.error.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;
