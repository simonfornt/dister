import React from 'react';
import { MapPin, RadioReceiver } from 'lucide-react';

const locationsData = [
  {
    id: 1,
    title: 'Whitechapel Rd.',
    address: 'Tulare County, Los Angles, CA 23415',
    cost: '$1,456,654.00',
    image: 'img/building.png',
  },
  {
    id: 2,
    title: 'Whitechapel Rd.',
    address: 'Tulare County, Los Angles, CA 23415',
    cost: '$1,456,654.00',
    image: 'img/building2.png',
  },
  {
    id: 3,
    title: 'Whitechapel Rd.',
    address: 'Tulare County, Los Angles, CA 23415',
    cost: '$1,456,654.00',
    image: 'img/building.png',
  },
];

const activityData = [
  {
    name: 'Document name',
    location: 'Location name',
    coordinates: '16.12212, -122.1424',
    cost: '$11,456,654.00',
    image: 'img/building.png',
  },
  {
    name: 'Document name',
    location: 'Location name',
    coordinates: '16.12212, -122.1424',
    cost: '$11,456,654.00',
    image: 'img/building.png',
  },
];

function Locations() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <MapPin />
            <div>
              <p className="text-secondary font-ones text-sm">Location</p>
              <h2 className="text-primary font-ones text-lg font-semibold">Tulare Country, Los Angles, CA 23415</h2>
            </div>
          </div>

          <div className="flex items-center gap-3 border-b pb-10 border-slate-300">
            <RadioReceiver />
            <div>
              <p className="text-secondary font-ones text-sm">Approx. Cost</p>
              <h2 className="text-primary font-ones text-lg font-semibold">$60,607,456.00</h2>
            </div>
          </div>

          {/* Description */}
          <div className="py-10 border-b border-slate-300">
            <h4 className="text-primary font-bold font-ones">Description</h4>
            <p className="font-ones text-sm text-secondary">
            Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac
             mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
             general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho
            </p>
          </div>

          {/* Locations */}
          <div className="py-10 border-b border-slate-300">
            <h4 className="my-3 font-ones font-semibold text-sm">Locations</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
              {locationsData.map((location) => (
                <div key={location.id} className='transform transition duration-200 hover:scale-[1.03]'>
                  <img src={location.image} alt={location.title} className="w-full h-32 object-cover rounded-md" />
                  <div>
                    <h2 className="font-ones text-primary font-bold">{location.title}</h2>
                    <p className="text-secondary text-sm">{location.address}</p>
                    <h2 className="font-ones font-bold">{location.cost}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="pt-8">
            <div className="flex justify-between pb-3">
              <h2 className="font-ones font-bold">Activities</h2>
              <p className="text-sm font-semibold underline font-ones">See all</p>
            </div>
            {activityData.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 bg-[#F4F4F5] px-3 py-3 mb-3 rounded-lg transform transition duration-200 hover:scale-[1.03]">
                <img src={activity.image} alt={activity.name} className="w-28 h-20 object-cover rounded" />
                <div>
                  <h2 className="text-lg font-ones font-bold">{activity.name}</h2>
                  <p className="text-secondary text-sm font-ones">
                    {activity.location} . {activity.coordinates}
                  </p>
                  <h2 className="text-primary font-ones font-bold">{activity.cost}</h2>
                </div>
              </div>
            ))}
          </div>

          {/* Documents */}
          <div className="pt-8">
            <div className="flex justify-between pb-3">
              <h2 className="font-ones font-bold">Documents</h2>
              <p className="text-sm font-semibold underline font-ones">See all</p>
            </div>
            {activityData.map((doc, index) => (
              <div key={index} className="flex items-center gap-4 bg-slate-100 px-3 py-3 mb-3 rounded-lg transform transition duration-200 hover:scale-[1.03]">
                <img src={doc.image} alt={doc.name} className="w-28 h-20 object-cover rounded" />
                <div>
                  <h2 className="text-lg font-ones font-bold">{doc.name}</h2>
                  <p className="text-secondary text-sm font-ones">
                    {doc.location} . {doc.coordinates}
                  </p>
                  <h2 className="text-primary font-ones font-bold">{doc.cost}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Map) */}
        <div className="w-full flex justify-center items-start">
          <img src="img/map.png" alt="Map" className="w-full max-w-md rounded shadow-md" />
        </div>
      </div>
    </div>
  );
}

export default Locations;
