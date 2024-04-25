import React from 'react';

const Footer = ({ personalName }) => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>
        Copyright © KAIROS 2024, All Rights Reserved. Powered by Nebatech Software Solution. {personalName}
      </p>
    </footer>
  );
};

export default Footer;
