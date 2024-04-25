import React from 'react';

const Footer = ({ personalName }) => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
    <div className="container mx-auto">
      <p className="mb-0">
        Copyright © KAIROS 2024, All Rights Reserved. Powered by Nebatech Software Solution. {personalName}
      </p>
    </div>
  </footer>
  );
};

export default Footer;
