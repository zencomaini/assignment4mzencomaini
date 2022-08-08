import React, { useState } from 'react'

const index: React.FC = () => {


  return (
    <>
    <div>
      <div className='relative flex flex-wrap bg-[#CDB4DB] items-center justify-between h-20'>
        <span className='relative left-12 text-black'>Logo</span>
        <nav className=''>
          <ul className='relative flex flex-wrap items-center justify-between space-x-12 right-12 text-black'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className='relative flex flex-wrap items-center justify-center top-7'>
        <span className='text-3xl'>Todo List</span>
      </div>
      <div className='relative flex flex-wrap items-center justify-center top-16'>
        <input type="text" className='w-96 rounded-lg h-8'/>
      </div>
      <div className='relative flex flex-wrap items-center justify-center top-24'>
        <input type="text" className='w-96 rounded-lg h-8'/>
      </div>
      <div className='relative flex flex-wrap items-center justify-center top-28'>
        <input type="text" className='w-96 rounded-lg h-8'/>
      </div>
      <div className='relative flex flex-wrap bg-[#CDB4DB] h-20 top-96'>
      </div>
    </div>
    </>
  );
};

export default index