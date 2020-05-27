import React from 'react';

const Star = ({ star }) => (
  <div className="flex flex-no-wrap justify-center">
    {Array.from({ length: star }, (_, i) => i).map((_, idx) => (
      <i key={idx} className="fas fa-star" style={{ color: 'rgb(119, 170, 23)' }} />
    ))}
  </div>
);

export default Star;
