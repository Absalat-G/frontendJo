
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending the data to an API or displaying a success message.
    console.log(formData);
  };

  return (
    <section id="contact" className="">
      <div className="max-w-6xl mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex">
        <div className="w-1/3 pr-12">
          <h2 className="text-xl text-black font-bold mb-4">Send Us Message</h2>
          <p className="text-gray-700 mb-4">
          We would love to hear from you and are here to assist with any questions, feedback, or 
          inquiries you may have. Whether  it’s about ticketing, event details, vendor participation,
           or  anything else related to the Waakye Summit, feel free to reach out to us. Our dedicated
            team is ready to provide  you with the information you need.
          </p>
          <p className="text-gray-700">
            You can also reach us via email at <a href="mailto:info@example.com">info@example.com</a>.
          </p>
          <div className="flex justify-start mt-4">
        <a href="#" className="mr-4 text-gray-700 hover:text-blue-500"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
        <a href="#" className="mr-4 text-gray-700 hover:text-blue-500"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
        <a href="#" className="mr-4 text-gray-700 hover:text-blue-500"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
        <a href="#" className="text-gray-700 hover:text-blue-500"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
      </div>
        </div>
        <div className="w-2/3 pl-24 pr-24">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      
    </div>
    </section>
    
  );
};

export default Contact;
