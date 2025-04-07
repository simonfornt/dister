import React from 'react'


function Map() {
  return (
    <>
    
        <div className='max-w-5xl mx-auto py-10 px-4'>
            <div className='mb-6'>
                <h2 className='text-2xl sm:text-3xl text-primary font-ones font-bold'>Where's the Incidents?</h2>
                <p className='font-ones text-sm sm:text-sm text-secondary mt-2'>
                Enter a GPS, address. or pin point on the map. Try to be as accurate as
                 possible, or click:Jurisdiction Wide
                </p>
            </div>
            <div className='rounded-lg overflow-hidden shadow-md'>
                <img src="img/map2.png" alt="" className='w-full h-auto object-cover' />
            </div>
        </div>
    </>
  )
}

export default Map;