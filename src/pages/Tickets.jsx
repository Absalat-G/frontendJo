import React from 'react';
import RectangularPicture from '../images/gallery1.png'; 
import CirclePicture from '../images/gallery2.png'; 
import { Link } from 'react-router-dom'; 
import NavigationMenu from '../components/NavigationMenu'

const Tickets = () => {
  return (
    <div className="relative w-full h-full">
      
    
      <NavigationMenu/>
      <Link to="/" className="absolute top-0 left-0 z-50">
    <button
      className="w-8 h-8 bg-white bg-opacity-50 text-black rounded-full hover:bg-opacity-70"
      style={{ marginLeft: '8px', marginTop: '8px'}}
    >  &#8592; 
    </button>
  </Link>
      <img
        src={RectangularPicture}
        alt="Rectangular Shape Picture"
        className="w-full h-96 object-cover rounded-lg"
      />
  
      <div className='flex flex-col-reverse'>
        <div className="absolute bottom-0 left-1/2 top-1/3 transform -translate-x-1/2">
          <img
            src={CirclePicture}
            alt="Circle Shape Picture"
            className="w-64 h-64 object-cover rounded-full border-4 border-white -mb-12"
          />
        </div>
      </div>
      <div className="mt-48 text-center ">
        <p className="text-lg font-bold">JOLLOF SUMMIT</p>
        <p className="text-sm">GHION HOTEL, Addis Ababa</p>
        <p className="text-sm">Wed, 6th March 2024</p>
        <p className="text-sm">10:00 am - 9:00 pm</p>
        <button className="bg-slate-900 text-white py-2 px-4 rounded hover:bg-blue-600">
          Upcoming in 92 day(s)
        </button>
        <p className='text-center mt-2 '>Addis Ababa’s biggest Jollof Festival! The epic festival where flavor meets fun and  your inner foodie comes alive!<br /> With incredible flavors, incredible people and unforgettable vibes. It’s the most iconic Jollof Summit<br /> coming together for an unforgettable taste adventure.</p>
      </div>
      <div className="mt-6 text-center mb-8 ">
        <div className="inline-block  ">
          <h1 className="text-3xl font-semibold mb-4">
            <span className="border-b-2 border-gray-300 pb-2">Tickets</span>
          </h1>
          <p className='mt-2'>Select Tickets to register</p>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/3 transform -translate-x-1/2 -mb-64">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Single Ticket</h2>
          <p className="text-sm mb-2">Access to VIP area</p>
          <p className="text-sm mb-2">VIP lounge access</p>
          <p className="text-sm mb-2">VIP parking</p>
          <button className="bg-slate-900 text-white py-2 px-4 rounded hover:bg-yellow-500">
            Buy Now
          </button>
        </div>
      </div>
      <div className="absolute bottom-12 right-1/3 transform translate-x-1/2 -mb-64">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Double Ticket</h2>
          <p className="text-sm mb-2">Access to event area</p>
          <p className="text-sm mb-2">Food and drink vouchers</p>
          <button className="bg-slate-900 text-white py-2 px-4 rounded hover:bg-yellow-500 border-b-2 border-inherit">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
