import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between w-[100vw] shadow-md text-black p-4 mb-1">
        <div className='flex gap-2 items-center'>
            <Image src={'/logo.jpeg'} width={40} height={40} alt='whatbytes logo'/>
            <h1 className="text-xl font-bold">WhatBytes</h1>
        </div>
        <div className='flex rounded-lg gap-2 border m-0 p-0 px-1  border-gray-400  items-center'>
            <Image 
                src={'/logo.jpeg'}
                width={20} 
                height={20} 
                className='rou rounded-full'
                alt='profile image'
            />
            <span className="text-sm font-bold">Rahil Siddique</span>
        </div>
    </header>
  );
};

export default Header;