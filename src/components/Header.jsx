import React from 'react';

export const Header = () => {  // Named export
  return (
    <div className='border shadow-md uppercase py-3 w-full fixed top-0 bg-white'>
        <header className='text-center'>
        <h1 className='text-2xl font-bold text-blue-600'>Rishikesh Blogs</h1>
        </header>
    </div>
  );
};
