import React from 'react'

function Forecast(props) {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
         <p className='text-white font-medium uppercase'>{props.title}</p>
        </div>
        <hr className='my-2'/>
        <div className='flex flex-row justify-between items-center text-white'>
         <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                04:30 pm
            </p>
            <img 
        src='https://static5.depositphotos.com/1000448/512/v/950/depositphotos_5128500-stock-illustration-sun-weather-forecast-glossy-icon.jpg'
        alt='sunny'
        className='w-12 my-1'/>
        <p className='font-medium'>25deg</p>
         </div>
         <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                04:30 pm
            </p>
            <img 
        src='https://static5.depositphotos.com/1000448/512/v/950/depositphotos_5128500-stock-illustration-sun-weather-forecast-glossy-icon.jpg'
        alt='sunny'
        className='w-12 my-1'/>
        <p className='font-medium'>25deg</p>
         </div>
         <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                04:30 pm
            </p>
            <img 
        src='https://static5.depositphotos.com/1000448/512/v/950/depositphotos_5128500-stock-illustration-sun-weather-forecast-glossy-icon.jpg'
        alt='sunny'
        className='w-12 my-1'/>
        <p className='font-medium'>25deg</p>
         </div>
         <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                04:30 pm
            </p>
            <img 
        src='https://static5.depositphotos.com/1000448/512/v/950/depositphotos_5128500-stock-illustration-sun-weather-forecast-glossy-icon.jpg'
        alt='sunny'
        className='w-12 my-1'/>
        <p className='font-medium'>25deg</p>
         </div>
         <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                04:30 pm
            </p>
            <img 
        src='https://static5.depositphotos.com/1000448/512/v/950/depositphotos_5128500-stock-illustration-sun-weather-forecast-glossy-icon.jpg'
        alt='sunny'
        className='w-12 my-1'/>
        <p className='font-medium'>25deg</p>
         </div>

        </div>
    </div>
  )
}

export default Forecast