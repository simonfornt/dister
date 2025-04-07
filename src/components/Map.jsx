import React from 'react'
import Incidents from './../pages/Incidents';

function Map() {
  return (
    <>
    
        <div className='max-w-xl   mx-auto py-8'>
            <div className=''>
                <h2 className='text-2xl font-ones font-bold'>Where's the Incidents?</h2>
                <p className='font-ones text-sm text-secondary my-4'>
                Enter a GPS, address. or pin point on the map. Try to be as accurate as
                 possible, or click:Jurisdiction Wide
                </p>
            </div>
            <div>
                <img src="img/map2.png" alt="" />
            </div>
        </div>
    </>
  )
}

export default Map;