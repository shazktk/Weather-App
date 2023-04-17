import './App.css';
import 'antd/dist/reset.css'
import WeatherBox from './Components/WeatherBox';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import Forecast from './Components/Forecast';
const { Search } = Input;


function App() {

  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)

  // useEffect(() => {
  // axios.get('http://api.weatherapi.com/v1/current.json?key=1910c89e16a04a4ca7a201502232203&q=London&aqi=yes')
  //   .then(response => {
  //     console.log(response)
  //     setWeatherData(response)
  //   })
  //   .catch(Error => console.log(Error))

  // },[weatherData])


  const getWeather = (value) => {
     console.log(value)
     axios.get(`http://api.weatherapi.com/v1/current.json?key=1910c89e16a04a4ca7a201502232203&q=${value}&aqi=yes`)
     .then(response => {
       console.log(response)
       setWeatherData(response)
     })
     .catch(Error => console.log(Error))

     axios.get(`http://api.weatherapi.com/v1/forecast.json?key=1910c89e16a04a4ca7a201502232203&q=${value}&days=7&aqi=no&alerts=yes`)
     .then(response => {
       console.log(response)
       setForecastData(response.data.forecast.forecastday)
     })
     .catch(Error => console.log(Error))
  }

  const forecastArray = forecastData ? 
      forecastData.map(forecastData => {
        return <Forecast 
            timeday={forecastData.date}
            img={forecastData.day.condition.icon}
            weatherDesc={forecastData.day.condition.text}
            max={forecastData.day.maxtemp_c}
            min={forecastData.day.mintemp_c}
          /> 
        }) : 'none' ;


  return (
      <div className="App">
          <Search
            placeholder="Location"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={(value) => getWeather(value)}
            className='search-bar'
          />
        
        { weatherData ?
          <WeatherBox 
            name={weatherData.data.location.name}
            temp={weatherData.data.current.temp_c}
            img={weatherData.data.current.condition.icon}
            weatherDesc={weatherData.data.current.condition.text}
            humidity={weatherData.data.current.humidity}
            feelslike={weatherData.data.current.feelslike_c}
            /> :
          ''
        }
        <div className='forecast'>
          { forecastData ? forecastArray : null }
        </div>
      </div>
    );
}
export default App;
