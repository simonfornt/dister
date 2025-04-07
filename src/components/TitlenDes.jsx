import React from 'react'
import Button from './Button';
import { useNavigate, Navigate } from 'react-router-dom';


function TitlenDes() {
  const navigate = useNavigate();
  return (
    <>
    
    <div>
      <div>
      <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Title Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 font-ones mb-1">Let’s give the incident a title?</h2>
        <p className="text-sm text-secondary font-ones mb-2">Make a title that will easily identify the incidents</p>
        <input
          type="text"
          placeholder="Add title here"
          className="w-full px-4 py-3 border font-ones text-sm border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Description Section */}
      <div>
        <h2 className="text-2xl font-bold font-ones mb-1">Describe what happened during the incident?</h2>
        <p className="text-sm text-secondary font-ones mb-2">
          Share some information about the incident. The when, where, how.
        </p>
        <textarea
          placeholder="Type here"
          rows="6"
          className="w-full px-4 py-3 border text-sm font-ones border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>
      </div>
    </div>
      </div>

    <div className='flex justify-center'>
      <Button text='Next step' onClick={()=> navigate('/map')} className='bg-button text-white text-[12px]'/>
    </div>

    </div>
    </>
  )
}

export default TitlenDes;