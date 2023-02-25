import React, { useState } from 'react';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Tampa');

  const fetchWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7dbc2301c817c152a4e6701b635a42ce`);
    const data = await response.json();
    setWeather(data);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ padding: 20, backgroundColor: '#f5f5f5', borderRadius: 5, textAlign: 'center' }}>
        <h1>Current Weather</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          fetchWeather();
        }}>
          <label htmlFor="city-input">Enter a city:</label>
          <input id="city-input" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          <button type="submit">Get Weather</button>
        </form>
        {weather && (
          <div>
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
