import React from 'react'
import { UilArrowUp,UilArrowDown,UilTemperature,UilTear,UilWind,UilSun,UilSunset } from '@iconscout/react-unicons'

function TemperatureAndDetails() {
  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-400'>
       <p> Cloudy</p>
       </div>
       <div className='flex items-center justify-between py-3 text-white'>
        <img 
        src='https://static5.depositphotos.com/1000448/512/v/950/depositphotos_5128500-stock-illustration-sun-weather-forecast-glossy-icon.jpg'
        alt='sunny'
        className='w-20'></img>
        <p className='text-5xl'>40°</p>
        <div className='flex flex-col space-y-2'>
            <div className='flex justify-center items-center text-sm font-light'>
                <UilTemperature size={18} className='mr-1'/>
                Real fell
                <span className='font-medium ml-1'>32°</span>
            </div>
            <div className='flex justify-center items-center text-sm font-light'>
                <UilTear size={18} className='mr-1'/>
                Humidity
                <span className='font-medium ml-1'>45%</span>
            </div>
            <div className='flex justify-center items-center text-sm font-light'>
                <UilWind size={18} className='mr-1'/>
                 Wind
                <span className='font-medium ml-1'>11 kmph</span>
            </div>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center space-x-2 text-white text-sm py-3'>
        <UilSun />
        <p className='font-light'>Rise: <span className='font-medium ml-1'>06:30 am</span></p>
        <p className='font-light'>|</p>
        <UilSunset />
        <p className='font-light'>Set: <span className='font-medium ml-1'>06:30 pm</span></p>
        <p className='font-light'>|</p>
        <UilSun />
        <p className='font-light'>High: <span className='font-medium ml-1'>43</span></p>
        <p className='font-light'>|</p>
        <UilSun />
        <p className='font-light'>Low: <span className='font-medium ml-1'>14</span></p>
      </div>
    </div>
  )
}

export default TemperatureAndDetails