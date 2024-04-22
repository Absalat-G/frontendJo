import React from 'react';

const Gallery = ({ images1, title }) => {
  return (
    <div className="ml-24 mb-8">
      <div className="inline-block">
        <h1 className="text-3xl font-semibold mb-2">
          <span className="border-b-2 border-gray-300 pb-2">{title}</span>
        </h1>
      </div>
      <div className="mt-6 flex flex-wrap justify-center">
        {images1.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            className="m-2 border border-gray-300 rounded"
            style={{ width: '400px', height: '250px', objectFit: 'cover' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
