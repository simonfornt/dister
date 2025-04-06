import React from 'react'
import { MapPin, RadioReceiver } from 'lucide-react';


function Locations() {
  return (
    <div className='max-w-7xl mx-auto py-10'>
      <div className='grid grid-cols-2 gap-6'>
       <div className=''>
          <div className='flex items-center gap-3 mb-6'>
            <MapPin/>
            <div>
              <p className='text-secondary font-ones text-sm'>Location</p>
              <h2 className='text-primary font-ones text-lg font-semibold'>Tulare Country, Los Angles, CA 23415</h2>
            </div>
          </div>
          <div className='flex items-center gap-3 border-b pb-10 border-slate-300'>
            <RadioReceiver/>
            <div>
              <p className='text-secondary font-ones text-sm'>Approx. Cost</p>
              <h2 className='text-primary font-ones text-lg font-semibold'>$60,607,456.00</h2>
            </div>
          </div>



           {/* descripition */}
       <div className='py-10 border-b border-slate-300'>
        <h4 className='text-primary font-bold font-ones'>Description</h4>
        <p className='font-ones text-[14px] text-secondary'>
        Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho 
         werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac
          mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit 
           general sac mascho werho
        </p>
       </div>


      {/* location */}

      <div>
        <div>
          <h4 className='my-3 font-ones font-semibold text-[14px]'>Locations</h4>
         <div className='grid grid-cols-3 gap-3 border-b border-slate-300 pb-10'>
         <div>
            <img src="img/building.png" alt="" />
            <div>
              <h2 className='font-ones text-primary font-bold'>Whitechapel Rd.</h2>
              <p className='text-secondary text-sm'>Tulare County,  Los Angles, CA 23415</p>
              <h2 className='font-ones font-bold'>$1,456,654.00</h2>
            </div>
          </div>
          <div>
            <img src="img/building2.png" alt="" />
            <div>
              <h2 className='font-ones text-primary font-bold'>Whitechapel Rd.</h2>
              <p className='text-secondary text-sm'>Tulare County,  Los Angles, CA 23415</p>
              <h2 className='font-ones font-bold'>$1,456,654.00</h2>
            </div>
          </div>
          <div>
            <img src="img/building.png" alt="" />
            <div>
              <h2 className='font-ones text-primary font-bold'>Whitechapel Rd.</h2>
              <p className='text-secondary text-sm'>Tulare County,  Los Angles, CA 23415</p>
              <h2 className='font-ones font-bold'>$1,456,654.00</h2>
            </div>
          </div>
          <div>
            <img src="img/building.png" alt="" />
            <div>
              <h2 className='font-ones text-primary font-bold'>Whitechapel Rd.</h2>
              <p className='text-secondary text-sm'>Tulare County,  Los Angles, CA 23415</p>
              <h2 className='font-ones font-bold'>$1,456,654.00</h2>
            </div>
          </div>
         </div>
        </div>
      </div>






       </div>


      




       {/* right side */}

       <div>
          <div className='ml-24'>
            <img src="img/map.png" alt="" />
          </div>
       </div>
      </div>
    </div>
  )
}

export default Locations;