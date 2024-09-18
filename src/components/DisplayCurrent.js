import React from 'react'
import "../output.css"


export const DisplayCurrent = ({weather}) => {
  return (
        <div className='details'>
          <div className='tables'>
          <table className='table1'>
            <tbody>
            <tr>
              <th>Temperature</th>
              <td>{weather.current.temp_c}°C</td>
            </tr>
            <tr>
              <th>Humidity</th>
              <td>{weather.current.humidity}%</td>
            </tr>
            <tr>
              <th>Wind</th>
              <td>{weather.current.wind_mph} m/h</td>
            </tr>
            <tr>
              <th>Heat Index</th>
              <td>{weather.current.heatindex_c}°C</td>
            </tr>
            <tr>
              <th>UV Index</th>
              <td>{weather.current.uv}°C</td>
            </tr>
            <tr>
              <th>Wind Direction</th>
              <td>{weather.current.wind_dir}</td>
            </tr>
            </tbody>
            <img src={weather.current.condition.icon} alt="condition" className='condition'/>
          </table>
          <table className='table2'>
          <tbody>
            <tr>
              <th>Carbon Monoxide (μg/m3)</th>
              <td>{weather.current.air_quality.co}</td>
            </tr>
            <tr>
              <th>Ozone (μg/m3)</th>
              <td>{weather.current.air_quality.o3}</td>
            </tr>
            <tr>
              <th>Nitrogen dioxide (μg/m3)</th>
              <td>{weather.current.air_quality.no2}</td>
            </tr>
            <tr>
              <th>Sulphur dioxide (μg/m3)</th>
              <td>{weather.current.air_quality.so2}</td>
            </tr>
            <tr>
              <th>PM2.5 (μg/m3)</th>
              <td>{weather.current.air_quality.pm2_5}</td>
            </tr>
            <tr>
              <th>PM10 (μg/m3)</th>
              <td>{weather.current.air_quality.pm10}</td>
            </tr>
            </tbody>
            <img src={weather.current.condition.icon} alt="condition" className='condition'/>
          </table>
          <table className='table3'>
            <tbody>
            <tr>
              <th>Country</th>
              <td>{weather.location.country}</td>
            </tr>
            <tr>
              <th>Latitude</th>
              <td>{weather.location.lat}</td>
            </tr>
            <tr>
              <th>Longitude</th>
              <td>{weather.location.lon}</td>
            </tr>
            <tr>
              <th>Local time</th>
              <td>{weather.location.localtime}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{weather.location.name}</td>
            </tr>
            <tr>
              <th>Time Zone</th>
              <td>{weather.location.tz_id}</td>
            </tr>
            </tbody>
            <img src={weather.current.condition.icon} alt="condition" className='condition'/>
          </table>
          </div>
        </div>  
  )
}
