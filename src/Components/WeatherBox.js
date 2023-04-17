import React from 'react'
import { Input } from 'antd';
import SearchBar from './SearchBar';
import UpArrow from './UpArrow.png'
import DownArrow from './DownArrow.png'
import Forecast from './Forecast';

function WeatherBox({name, temp, img, weatherDesc, humidity, feelslike}) {
      

  return (
    <div className='weather-box'>
      <div className='current'>
        <div className='main-info'>
          <h2>{name}</h2>
          <p className='temp'>{`${temp} \u00b0C`}</p>
          <h3>{weatherDesc}</h3>
        </div>

        <div className='image'>
          
        </div>

        <div className='other-info'>
          <h3>Feels Like {`${feelslike} \u00b0C`}</h3>
          <div className='max-min'>
            <img src={UpArrow}/>
            <h3>{`${feelslike} \u00b0C`}</h3>
            <img src={DownArrow}/>
            <h3>{`${feelslike} \u00b0C`}</h3>
          </div>
          <h3>Humidity: {humidity} %</h3>
          <h3>Pressure: 1020 hPa</h3>
        </div>
      </div>
    </div>
  )
}

export default WeatherBox