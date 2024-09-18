import React, { useState } from 'react';
import { DisplayCurrent } from './DisplayCurrent';
import { DisplayForecast} from './DisplayForecast'



const WeatherReport = () => {
  const [city, setCity] = useState('Shillong');
  const [city2, setCity2] = useState('');
  const [days, setDays] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const getCurrentWeatherReport = async (city) => {
    try {
      if(city!=='')
      {
        
        const res = await fetch("http://api.weatherapi.com/v1/current.json?key=b6c462720ea9421a933195817241206&q="+city+"&aqi=yes");
        const data = await res.json();
        setWeather(data);
        setForecast(null)
      }
      else
      {
        setWeather(null)
      }
      
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const getWeatherForecast = async (city2, days) => {
    try {
      if(city2!=='' && days!=='')
      {
        const res = await fetch("http://api.weatherapi.com/v1/forecast.json?key=b6c462720ea9421a933195817241206&q="+city2+"&days="+days+"&aqi=yes&alerts=yes");
        const data = await res.json();
        setForecast(data);
        setWeather(null)
      }
      else
      {
        setForecast(null)
      }
      
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div>

      {weather !== null && forecast==null? ( 

        <DisplayCurrent weather={weather}/>
        
       
      ) : (
       
        forecast !== null && weather === null ? (
        <DisplayForecast forecast={forecast}/>):('')
      )}

     <div className='container'>
      <div className='c1'>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          style={{border: "1px solid grey", borderRadius:"5px", padding:"5px"}}
        />
        <button className="getToday" onClick={() => getCurrentWeatherReport(city)}>Get Current Report</button>
        </div>
        <div className='c2'>
          <input
            type="text"
            value={city2}
            onChange={(e) => setCity2(e.target.value)}
            placeholder="Enter city name"
            style={{border: "1px solid grey", borderRadius:"5px", padding:"5px"}}
          />
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            placeholder="Days"
            min="2"
            max="3"
            style={{border: "1px solid grey", borderRadius:"5px", padding:"5px"}}
          />
          <button className="getToday" onClick={() => getWeatherForecast(city2,days)}>Get Days Forecast</button>
        </div>
     </div>
  </div>
  );
};

export default WeatherReport;
