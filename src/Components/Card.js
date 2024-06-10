import React from 'react';

const CardComponent = ({ imgSrc, heading, description }) => {
  return (
    <div className="bg-customBlue p-4 rounded shadow-md text-white">
      <div className="flex items-center">
        <img src={imgSrc} alt={heading} className="w-16 h-16 object-cover rounded mr-4" />
        <h3 className="text-lg font-bold">{heading}</h3>
      </div>
      <p className="mt-2 flex-1">{description}</p>
    </div>
  );
};

export default CardComponent;
