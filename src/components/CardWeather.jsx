import React from 'react'

const CardWeather = ({weather, isCelsius, temperature, changeTemperture}) => {

  return (
    <div className='card'>
        <div className="container">
        <div className='weatherApp'>
          <h1 className='tittleApp'>Weather App</h1>
        </div>
          <div className='text_tittle'>
            <p className='city'><b>{weather.name}, {weather.sys?.country}</b></p>
          </div>
        <div className="container2">
          <div className='icon'>
            <img src={weather && `http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@4x.png`} />
          <div className='temperature'>
            <p><b>Temperature: </b>{isCelsius ? `${temperature?.celcius} °C`  : `${temperature?.farenheit} °F` }</p>
            <button className='changeButton' onClick={changeTemperture}>Change °C/°F</button>
          </div>
        </div>
        
        <div className='weather'>
          <div>
            <p className='description'><b>{weather.weather?.[0].description}</b> </p>
          </div>
            <p className='wind'><i class='bx bx-wind'></i> <b>Wind Speed: </b>{weather.wind?.speed}</p>
            <p className='clouds'><i class='bx bxs-cloud'></i><b>Clouds: </b>{weather.clouds?.all}</p>
            <p className='pressure'><i class='bx bxs-thermometer'></i><b>Pressure: </b>{weather.main?.pressure}</p>
            <p className='humidity'><i class='bx bxs-droplet'></i><b>Humidity: </b>{weather.main?.humidity}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardWeather