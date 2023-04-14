import React from 'react'

export default function TopButtons() {
    const cities = [
        {
            id:1,
            title:"Tokyo",
        },
        {
            id:2,
            title:"Sydney",
        },
        {
            id:3,
            title:"New Delhi",
        },
        {
            id:4,
            title:"Hyderabad",
        },
    ]
  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city) => {
            return(
            <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
            )
        })}
    </div>
  )
}
