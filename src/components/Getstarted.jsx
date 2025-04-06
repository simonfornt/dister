import React from 'react';
import Button from './Button';

function Getstarted() {
  const steps = [1, 2, 3];

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
        <h2 className="font-ones text-primary text-[32px] font-bold">Let's get started</h2>
        <p className="text-secondary font-ones text-[16px]">
          Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br />
          dolar sit general sac mascho werhoLorem ipsum dolar sit gene
        </p>
      </div>

      {/* Step bar */}
      <div className="w-full max-w-xl mx-auto flex items-center justify-center py-5 px-4">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div className="w-5 h-5 bg-gray-300 rounded-full z-10"></div>
            {index !== steps.length - 1 && (
              <div className="h-1 bg-gray-300 flex-1 mx-1"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Incident cards - Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-4">
        {incidentData.map((item, index) => (
          <div
            key={index}
            className="py-5 px-4 rounded-md hover:border-y-2 transition-all border-button bg-[#F4F4F5] w-full h-[269px] text-center"
          >
            <img src={item.img} alt={item.title} className="mb-8 mx-auto" />
            <h4 className="text-primary font-ones text-lg font-bold py-3">{item.title}</h4>
            <p className="text-secondary font-ones text-[14px]">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <Button text="Get started" className="bg-button text-white text-[12px] px-7" />
      </div>
    </div>
  );
}

export default Getstarted;
