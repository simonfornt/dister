import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import Button from './Button';

const incidentTypes = [
  { id: 1, name: 'Avalanche', icon: 'img/icon1.svg' },
  { id: 2, name: 'Biologial', icon: 'img/icon2.svg' },
  { id: 2, name: 'Blizzard', icon: 'img/icon3.svg' },
  { id: 2, name: 'Cold/Freezing', icon: 'img/icon4.svg' },
  { id: 2, name: 'Drought', icon: 'img/icon5.svg' },
  { id: 3, name: 'Earthquake', icon: 'img/icon6.svg' },
  { id: 3, name: 'Flooding', icon: 'img/icon7.svg' },
  { id: 4, name: 'Heat wave', icon: 'img/icon8.svg' },
  { id: 4, name: 'Hail', icon: 'img/icon9.svg' },
  { id: 4, name: 'Lightning', icon: 'img/icon10.svg' },
  { id: 4, name: 'Man Made', icon: 'img/icon11.svg' },
  { id: 4, name: 'Mudslide', icon: 'img/icon12.svg' },
  { id: 4, name: 'Severe Storm', icon: 'img/icon13.svg' },
  { id: 4, name: 'Strong Wind', icon: 'img/icon14.svg' },
  { id: 4, name: 'Tornado', icon: 'img/icon15.svg' },
  { id: 4, name: 'Tsunami', icon: 'img/icon16.svg' },
  { id: 4, name: 'Volcanic Eruption', icon: 'img/icon17.svg' },
];

function Incidenttype() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[753px] mx-auto px-4">
      <div className="py-9">
        <h2 className="text-primary font-ones text-2xl md:text-3xl font-bold">
          Which of these best describes the incident?
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
        {incidentTypes.map((incident) => (
          <div
            key={incident.id}
            className="flex items-center gap-2 py-5 px-4  md:w-[170px] h-[50px] bg-[#F4F4F5] hover:bg-button
            cursor-pointer  rounded-lg transition duration-200 group"
          >
            <img src={incident.icon} alt={incident.name} className="w-6 h-6" />
            <p className="text-base font-medium text-secondary font-ones text-[14px] group-hover:text-white">{incident.name}</p>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-15'>
        <Button onClick={() => navigate('/titlenDes')} text='Next Step' className='bg-button text-white text-sm'/>
      </div>
    </div>
  );
}

export default Incidenttype;
