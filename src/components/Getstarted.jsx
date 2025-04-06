import React from 'react';
import Button from './Button';
import { useNavigate, Navigate } from 'react-router-dom';

function Getstarted() {
  const steps = [1, 2, 3];
  const navigate = useNavigate();

  const incidentData = [
    {
      title: 'What type of incident?',
      text: 'Choose the category that best describes the incidents.',
      img: '/img/danger.png',
    },
    {
      title: 'Tell us about the incident?',
      text: 'Let’s connect the dots and see where to start.',
      img: '/img/two.png',
    },
    {
      title: 'Where did the incident occur?',
      text: 'Lorem ipsum dolar sit general sac mascho werho',
      img: '/img/location.png',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="font-ones text-primary text-2xl md:text-[32px] font-bold">Let's get started</h2>
        <p className="text-secondary font-ones text-sm md:text-[16px] mt-2">
          Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br className="hidden sm:block" />
          dolar sit general sac mascho werhoLorem ipsum dolar sit gene
        </p>
      </div>

      {/* Step bar */}
      <div className="w-full max-w-xl mx-auto flex items-center justify-center py-5 px-4">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div className="w-4 h-4 md:w-5 md:h-5 bg-gray-300 rounded-full z-10" />
            {index !== steps.length - 1 && (
              <div className="h-1 bg-gray-300 flex-1 mx-1" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Incident cards - Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 justify-center md:w-[815px] mx-auto">
        {incidentData.map((item, index) => (
          <div
            key={index}
            className="py-5 px-4  w-[235px] sm:max-w-none mx-auto sm:mx-0 rounded-md hover:border-y-2 transition-all border-button bg-[#F4F4F5] h-[269px]"
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="mb-8 w-12 h-12 md:w-auto md:h-auto" 
            />
            <h4 className="text-primary font-ones text-base md:text-lg font-bold py-3">
              {item.title}
            </h4>
            <p className="text-secondary font-ones text-xs md:text-sm">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <Button 
          text="Get started" onClick={()=> navigate('/incidenttype')}
          className="bg-button text-white text-xs md:text-[12px] px-5 md:px-7 py-2" 
        />
      </div>
    </div>
  );
}

export default Getstarted;