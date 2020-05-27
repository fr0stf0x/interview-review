import React from 'react';

const Level = ({ width, height = '1.5rem', color }) => (
  <div className="-mx-3 -my-1 border border-gray-700">
    <div style={{
      width,
      height,
      backgroundColor: color,
    }}>
    </div>
  </div>
);

export default Level;
