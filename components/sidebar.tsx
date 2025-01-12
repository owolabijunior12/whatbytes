import { Badge, File } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="  shadow-md min-h-screen mt-16 w-[17vw] md:w-[300px] pr-2  flex flex-col">
      <div className="space-y-4">
        <div className='flex gap-5 items-center text-black p-3 font-bold'>
          <Image src={'/trade.png'} alt='icon' height={24} width={24} />
          <span className='hidden md:block'>Dashboard</span>
        </div>

        <div className='flex gap-5 items-center text-purple-600 p-3 font-bold rounded-r-3xl bg-blue-100'>
          <Image src={'/badger.png'} alt='icon' height={24} width={24} />
          <span className='hidden md:block'>Skill Test</span>
        </div>
        <div className='flex gap-5 items-center text-black p-3 font-bold'>
          <File />
          <span className='hidden md:block'>Intership</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;