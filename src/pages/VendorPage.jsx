
import React, { useState } from 'react';
import backgroundImage from '../images/Vendor.png';
import { Link } from 'react-router-dom'; 
import NavigationMenu from '../components/NavigationMenu';
const VendorPage = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    businessName: '',
    email: '',
    phoneNumber: '',
    website: '',
    productsServices: '',
    itemsList: '',
    electricityRequired: false,
    staffCount: 0,
    hasDigitalPayment: false,
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    
    
    <div className="container mx-auto px-4" style={{backgroundImage: `url(${backgroundImage})`, // Apply background image
    backgroundSize: 'cover',
    color: 'white',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden', }}>
       
     
<div className="absolute top-0 left-0 right-0 z-50">
        <NavigationMenu />
      </div>
 
<Link to="/" className="absolute top-0 left-0 z-50">
    <button
      className="w-8 h-8 bg-white bg-opacity-50 text-black rounded-full hover:bg-opacity-70"
      style={{ marginLeft: '8px', marginTop: '8px'}}
    >  &#8592; 
    </button>
  </Link>
    <h1 className="text-2xl font-bold mb-6 mt-16 text-center" style={{ borderBottom: '2px solid #F61D78' }}>
      VENDOR APPLICATION
    </h1>
    

    <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-8">
      <div className="w-full md:w-1/2 p-6 rounded-lg" style={{ border: '1px solid #F61D78', color: 'white' }}>
     
        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label className="block text-sm text-white font-medium mb-2">
              CONTACT NAME
            </label>
            <input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              className="w-full border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4 text-white">
            <label className="block text-sm text-white font-medium mb-2">
              BUSINESS NAME
            </label>
            <input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              className="w-full border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-wrap -mx-2">
       
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-sm text-white font-medium mb-2">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
     
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-sm text-white font-medium mb-2">
                PHONE NUMBER
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border-gray-300 text-white border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
     
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm text-white font-medium mb-2">
              WEBSITE
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm  text-white font-medium mb-2">
            Please state the Products or Services you offer and List of items to be sold (Kindly note that only approved products and service as per agreement will be permitted at the event)
            </label>
            <textarea
              name="productsServices"
              value={formData.productsServices}
              onChange={handleChange}
              className="w-full border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
        
          <div className="flex flex-wrap -mx-2">
            
            <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm text-white font-medium mb-2">
            Do you require electricity at your stand
            </label>
            <input
              name="itemsList"
              value={formData.itemsList}
              onChange={handleChange}
              className="w-full border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            </div>
            
            <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm text-white font-medium mb-2">
              How many staff will you bring?
            </label>
            <input
              type="number"
              name="staffCount"
              value={formData.staffCount}
              onChange={handleChange}
              className="w-full border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            </div>
          </div>
          
       
  <div className="w-full md:w-1/2 px-2 mb-4">
            <label className="block text-sm text-white font-medium mb-2">
            Do you have a digital payment system for your business
            </label>
            <input
              name="itemsList"
              value={formData.itemsList}
              onChange={handleChange}
              className="w-full border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            </div>
       
         
          <div className="mb-4">
            <label className="flex items-center"> ACCEPT THE TERM AND CONDITIONS</label>
              <input
                type="checkbox"
                name="acceptedTerms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
                className="mr-2 leading-tight"
              />
              <span className="text-sm text-white">
                I have read and accept the terms and conditions
              </span>
            
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 mb-4">
        <p className="text-sm font-medium m-6 text-gray-700 leading-relaxed text-white">
          ARE YOU A FOOD, DRINKS OR MERCHANDISE VENDOR? APPLY TO JOIN <br /> US AT THE JOLLOF SUMMIT AND SHOWCASE YOUR OFFERINGS TO THOUSANDS OF ATTANDEES!<br />
    
       <span className='font-bold'>STARTING PRICE:</span> <br />JOLLOF STAND: 20.000 ETB <br /> DRINK STAND: 15.000 ETB <br />NON FOOD/DRINK STAND: 15.000 ETB <br />
       PLEASE NOTE THAT THE FOLLOWING RESOURCES WILL BE PROVIDED TO EACH VENDOR: <br />
       1. A STAND (AS APPLICABLE) <br />
       2. TABLE & CHAIRS (QUANTITY DEPENDENT ON TYPE OF STAND)<br />
       4. ELECTRICITY (As APPLICABLE)<br />
  THE ABOVE RESOURCES MAYBE SUBJECT TO CHANGE BASED ON THE DISCRETION OF THE ORGANIZERS AND EACH VENDOR'S SPECIAL REQUIREMENTS.<br/>
  VENDORS WILL BE ALLOTTED TICKETS FOR 3 STAFF MEMBERS (INCLUDING LEAD VENDOR). STAFF MEMBERS EXCEEDING THE ALLOTTED NUMBER WILL ATTRACT A ENTRY FEE OF 5.000 ETB.<br/>
  WE SHALL RESPOND TO THE VENDOR APPLICATIONS WITHIN A MAXIMUM OF 2 WEEKS. SHOULD YOUR APPLICATION BE SUCCESSFUL, YOU WOULD BE SENT A VENDOR AGREEMENT TO REVIEW AND SIGN IN ORDER FOR US TO PROCEED.<br />
<span className='font-bold'>THANK YOU FOR YOUR INTEREST IN PARTICIPATING IN THE JOLLOF SUMMIT! <br />

  TERMS AND CONDITIONS</span>
        
  <br />  THESE VENDOR TERMS AND CPNDITIONS ("TERMS") GOVERN THE RELALATIONSHIP BETWEEN VENDOR ("VENDOR") AND THE WAAKYE SUMMIT ("ORGANIZER"). BY SUBMITTING A VENDOR APPLICATION THE VENDOR AGREES TO COMPLY WITH THESE TERMS.<br />
1. APPLICATION PROCESS:<br />
SUBMISSION OF THE VENDOR APPLICATION FORM DOESNOT GUARANTEE PARTICIPATION. THE ORGANIZER RESERVES THE RIGHT TO ACCEPT OR REJECT APPLICATIONS AT ITS DISCRETION. VENDORS MUST PROVIDE ACCURATE AND COMPLETE INFORMATION IN THE APPLICATION.<br />
2. STAND ALLOCATION:<br />
STAND ALLOCATION IS AT THE SOLE DISCRETION OF THE ORGANIZER. VENDORS WILL BE NOTIFIED OF THEIR STAND ALLOCATION IN ADVANCE OF THE EVENT.<br />

3. STAND FEES:<br />
STAND FEES MUST BE PAID IN FULL BY THE SPECIFIED DEADLINE TO SECURE PARTICIPATION. FEES ARE NON-REFUNDABLE, EXCEPT AT THE DISCRETION OF THE ORGANIZER.<br /> 
4. OPERATION REQUIREMENTS:<br />
VENDORS ARE RESPONSIBLE FOR ALL ASPECTS OF THEIR STAND'S SETUP AND OPERATION. STANDS MUST COMPLY WITH SAFETY AND HYGIENE REGULATIONS.<br />
        </p>
      </div>
    </div>
    </div>
  );
};

export default VendorPage;
