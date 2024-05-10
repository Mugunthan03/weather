import cloud from "./assets/cloudy.png";
import wind from "./assets/wind.png";
import humidity from "./assets/thermometer.png";
import search from "./assets/search.png";
import { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("chennai");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=131b8eebd03e0ed9a9e7aee3ab50892c&units=metric`);
      setData(response.data);
      setError(false);
    }
     catch (err) {
      setError(true);
      setData(null);
    }
  };
  useEffect(() => {
    fetchData(city);
  }, [city]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        
        <div className="flex items-center  justify-center gap-2  p-1 w-96 mt-2">
          <input
            type="search"
            placeholder="Enter the City name"
            className="p-2 mt-2 w-[70%] outline-none rounded-md bg-transparent border-2 border-white text-white text-xl font-mono font-bold"
            value={city}
            onChange={handleInputChange}
          />
          <img
            src={search}
            alt="cloud "
            className="w-9 h-9 cursor-pointer"
            onClick={() => fetchData(city)}
          />
        </div>

        <div>
          <img src={cloud} alt="" className="w-32 mt-8" />
        </div>

        {data && (
          <div className="mt-5 text-center">
            <h1 className="text-white text-4xl font-bold">
              {data?.main?.temp}</h1>
            <p className="text-white text-2xl font-bold">{data?.name}</p>
          </div>
        )}

        {error && <div className="text-red-500">city not found.</div>}
      </div>

      <div className="flex justify-around mt-10 mb-20">
        <div className="flex justify-center items-center gap-2">
          <div>
            <img src={humidity} alt="" className="w-12  filter invert" />
          </div>
          <div>
            <p className="text-white text-lg md:text-2xl">
              {data?.main?.humidity}%
            </p>
            <p className="text-white text-base">Humidity</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2">
          <div>
            <img src={wind} alt="" className="w-12  filter invert" />
          </div>
          <div>
            <p className="text-white text-lg md:text-2xl">
              {data?.wind?.speed}km/h
            </p>
            <p className="text-white text-base">Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
