import { Badge, File } from 'lucide-react';
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:block shadow-md min-h-screen mt-16 w-[100px] md:w-[300px] pr-5 ">
      <div className="space-y-4"> 
        <div className='text-md flex gap-5 items-center text-black p-3 font-bold '>  
            <Badge/>         
            <span className='hidden md:block'>Dashboard</span>            
        </div>        
        <div className='text-md flex gap-5 items-center text-purple-600 p-3 font-bold rounded-r-3xl bg-blue-100'>            
            <Badge/>
            <span className='hidden md:block'>Skill Test</span>            
        </div>        
        <div className='text-md flex gap-5 items-center text-black p-3 font-bold '>            
            <File/>
            <span className='hidden md:block'>Intership</span>            
        </div>        
      </div>
    </aside>
  );
};

export default Sidebar;