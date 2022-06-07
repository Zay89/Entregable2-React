import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardWeather from './components/CardWeather'
import Loader from './components/Loader'

function App() {

  const [latLon, setLatLon] = useState({})
  const [weather, setWeather] = useState({})
  const [isCelsius, setIsCelsius] = useState(true)
  const [temperature, setTemperture] = useState()
  const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
    const success = pos => {
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      setLatLon({lat, lon})
    }

    navigator.geolocation.getCurrentPosition(success)   
  }, [])

  useEffect(() => {
    if (latLon.lat !== undefined) {
      
      const API_KEY = '45e7f4bba9c49d808f1afc01e580c75d'  
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${API_KEY}&units=metric`

       axios.get(URL)
      .then( res => {
        setWeather(res.data)
        const celcius = res.data.main.temp
        const farenheit = res.data.main.temp * 9 / 5 + 32
        setTemperture({celcius, farenheit})
        setIsLoading(false)
      })
      .catch(err => console.log(err))
     }
  }, [latLon])
  console.log(weather)

  /*button*/
  const changeTemperture = () => setIsCelsius(!isCelsius)

  
  return (
    <div className="App">

      {
        isloading?
          <Loader />
      :
        <CardWeather 
            weather={weather}
            isCelsius={isCelsius}
            temperature={temperature}
            changeTemperture={changeTemperture}
          />
      }


      
    </div>
  )
  }

export default App
