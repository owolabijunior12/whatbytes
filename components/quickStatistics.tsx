import { TrophyIcon } from 'lucide-react';
import React from 'react';

const QuickStatistics: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-md font-semibold mb-2">Quick Statistics</h2>
      <div className='flex justify-around'>        
        <div className="flex gap-4  items-center mb-2">
            <div className='rounded-full bg-slate-100 p-3 border '>                
            🏆
            </div>
            <div className='flex flex-col items-start'>
                <span className="text-lg font-bold">1</span>
                <span className="text-gray-300 uppercase text-sm">Your Rank</span>
            </div>
        </div>       
        <div className='border'></div> 
        <div className="flex gap-4  items-center mb-2">
            <div className='rounded-full bg-slate-100 p-3 border '>                
            📅
            </div>
            <div className='flex flex-col items-start'>
                <span className="text-lg font-bold">30%</span>
                <span className="text-gray-300 uppercase text-sm">Percentage</span>
            </div>
        </div> 
        <div className='border'></div> 
        <div className="flex gap-4  items-center mb-2">
            <div className='rounded-full bg-slate-100 p-3 border '>                
            ✅
            </div>
            <div className='flex flex-col items-start'>
                <span className="text-lg font-bold">10/15</span>
                <span className="text-gray-300 uppercase text-sm">Correct Answer</span>
            </div>
        </div> 
      </div>
    </div>
  );
};

export default QuickStatistics;