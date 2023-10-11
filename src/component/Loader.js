import React from 'react';
import { PiSpiralFill } from 'react-icons/pi';

const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px',
  }

const Loader = () => {
  return (
    <div style={loaderStyle} >
      <PiSpiralFill className='text-6xl text-blue-900' />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;