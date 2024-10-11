import React from 'react'

const TimeLocation = ({
  weather: {formattedLocalTime, name , country },
}) => {
  return (
    <div className="text-center">
      <div className='flex flex-col sm:flex-row items-center justify-center my-6'>
<p className='text-white text-xl font-extralight sm:mr-4'>
    
    {formattedLocalTime}
    </p>

      </div>
      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>{`${name},${country}`}
        </p>
         </div>
    
    </div>
  )
}

export default TimeLocation

