import React from 'react';
import Weather from './weather';
import back from './assets/cloud3.jpg';

const App = () => {
  return (
    <div
      className='flex justify-center items-center h-screen p-5'
      style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='bg-transparent border-2 border-white w-screen md:w-screen lg:w-1/3 rounded-2xl'>
        <Weather />
      </div>
    </div>
  );
};

export default App;
