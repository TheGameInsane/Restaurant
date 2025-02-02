import React from 'react'

const Card = ({name, image, desc, type}) => {
  return (
    <>
        <div className='card'>
            <div className='relative'>
            {type ===  "veg" ? <h1 className='badge bg-green-400' >Veg</h1> : <h1 className='badge bg-red-400' >Non-Veg</h1>}
            <img src={image} alt={name} className='rounded-4xl inset-shadow-2xs inset-shadow-black' />
            </div>
            <div className='p-4'>
            <h1 className=' font-bold text-3xl font-playwrite mb-4'>{name}</h1>
            </div>
        </div>
    </>
  )
}

export default Card