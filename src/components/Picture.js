import React from 'react'
import hero from "../images/Hero_Startbild.jpg"


const Picture = () => {
  return (

        <div className='relative w-screen'>
      <div className='absolute z-1   top-1/4 left-12 md:left-48 px-12 py-7  bg-white bg-opacity-75'>
        <h3 className='text-4xl text-center text-teal-700'>Herzlich Wilkommen</h3>
        <p className='text-xl text-center'>bei der Sicherheit Nord GmbH & Co. KG</p>
      </div>
    <img className='w-full' src={hero} alt="car driving woman" />
    </div>
  )
}

export default Picture