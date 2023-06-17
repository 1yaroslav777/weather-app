import React from 'react';
import axios from 'axios';
import City from './components/City';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [weatherData, setWeatherData] = React.useState({});
  const [currentCity, setCurrentCity] = React.useState('Poltava');

  const onSetLocation = React.useCallback((input) => {
    if (input) {
      setCurrentCity(input);
    }
  });

  React.useEffect(() => {
    getWeather();
  }, [currentCity]);

  async function getWeather() {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=a4fb49ca4c1ae238a30711c58b1c2388`,
      )
      .then((res) => setWeatherData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }

  const weatherCode = weatherData?.weather?.[0]?.description;

  const weatherName = weatherCode?.charAt(0)?.toUpperCase() + weatherCode?.slice(1);

  return (
    <div className="app-wrapper">
      {weatherData && <WeatherInfo weatherName={weatherName} weatherData={weatherData} />}
      <City currentCity={currentCity} onSetLocation={onSetLocation} />
    </div>
  );
}

export default App;
