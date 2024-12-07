import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=f882782740ac0e3789353c65dfe8c279`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <>
      <div className="app">
        <div className="search">
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
          />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
            </div>
            <div className="discription">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {data.main != undefined && (
            <div className="bottom">
              <div className="feels">
                {data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}

                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? <p>{data.main.humidity}%</p> : null}

                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind ? <p>{data.wind.speed.toFixed()}MPH</p> : null}

                <p>Wind Speed</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
