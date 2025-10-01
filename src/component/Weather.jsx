import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

const Weather = () => {

    const inputRef = useRef();
    const [weatherdata, setweatherdata] = useState(false)

    const search = async (city) => {

        if(city === '') {
            return null;
        }

        const API_KEY = '65dfa591eec921fba0e4d3c07cc39cf7'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        setweatherdata({
            humidity: data.main.humidity,
            temp: Math.floor(data.main.temp),
            location: data.name,
            description: data.weather[0].description,
            windSpeed: data.wind.speed,
            main: data.weather[0].main
        })
    }

    useEffect(() => {
        search("London");
    }, [])
    



  return (
    <div>
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{ duration: 1 }} className="w-full mx-auto sm:w-2/3 sm:mt-5 mt-7 flex flex-col items-center justify-center py-5 sm:px-10 px-5 bg-[#500ea4]">
            <div className="border flex rounded-full items-center w-full sm:gap-5 gap-3 border-gray-400">
                <input ref={inputRef} className='w-full outline-[#500ea4] py-1.5 pl-5 bg-violet-200 font-bold rounded-full' type="text" placeholder='Search'/>
                <img onClick={() => search(inputRef.current.value)} className='py-1.5 px-2 rounded-full bg-[#fff]' src="/Assets/search.png" alt="" />
            </div>

            <div className="sm:mb-10 mb-5 mt-5">
                {weatherdata.main === "Clouds" ? <img className='w-40' src='/Assets/cloud.png' alt='' /> : ""}
                {weatherdata.main === "Clear" ? <img className='w-40' src='/Assets/clear.png' alt='' /> : ""}
                {weatherdata.main === "Rain" ? <img className='w-40' src='/Assets/rain.png' alt='' /> : ""}
                {weatherdata.main === "Snow" ? <img className='w-40' src='/Assets/snow.png' alt='' /> : ""}
                {weatherdata.main === "Drizzle" ? <img className='w-40' src='/Assets/drizzle.png' alt='' /> : ""}
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="mb-5 flex items-center gap-5">
                    <p className='sm:text-5xl text-2xl font-bold text-[#ffffffd5]'>{weatherdata.temp}°C</p>
                </div>
                <p className='sm:text-5xl text-2xl font-bold text-[#ffffffd8]'>{weatherdata.location}</p>
                <p className='sm:text-4xl w-full mx-auto text-2xl font-bold mt-5 text-center text-[#ffffffce]'>{weatherdata.description}</p>
            </div>

            <div className="flex items-center w-full justify-between mt-13 sm:mt-20">
                <div className="flex items-center gap-5">
                    <img className='w-6' src="/Assets/humidity.png" alt="" />
                    <div className="">
                        <p className='sm:text-2xl text-lg text-[#ffffffcc]'>{weatherdata.humidity} %</p>
                        <p className='sm:text-2xl text-lg text-[#ffffffcc]'>Humidity</p>
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <img className='w-6' src="/Assets/wind.png" alt="" />
                    <div className="">
                        <p className='sm:text-2xl text-lg text-[#ffffffc5]'>{weatherdata.windSpeed} km/h</p>
                        <p className='sm:text-2xl text-lg text-[#ffffffd3]'>Wind Speeds</p>
                    </div>
                </div>

            </div>

        </motion.div>
    </div>
  )
}

export default Weather
