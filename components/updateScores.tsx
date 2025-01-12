'use client';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect } from 'react';

interface UpdateScoresModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpdateScoresModal: React.FC<UpdateScoresModalProps> = ({ isOpen, onClose }) => {
  const [rank, setRank] = React.useState(4);
  const [percentile, setPercentile] = React.useState(100);
  const [currentScore, setCurrentScore] = React.useState(12);

  const handleSave = () => {
    console.log('Updated scores:', { rank, percentile, currentScore });
    onClose();
  };

  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center w-auto bg-black bg-opacity-90">
      <div className="bg-white rounded-lg shadow-xl max-w-[97%]   p-6">
        <div className='flex justify-between items-center'>
            <h3 className="text-lg  leading-6 font-bold">Update Scores</h3>
            <Image src="/html.png" alt='' width={40} height={40} onClick={onClose} />
        </div>
        <div className="mt-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div  className="text-sm items-center w-full  flex gap-2">
                <span className='bg-blue-800 text-white w-7 h-7 text-center p-1 rounded-full'>1</span>
                <span>Update your</span>
                <span className='font-bold'>Rank</span>              
            </div>
            <div className='flex w-[30%] flex-col'>
                <input
                type="text"
                id="rank"
                value={rank}
                onChange={(e:any) => setRank(e.target.value)}
                className="mt-1 p-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <span className='text-red-600 text-[12px] hidden'>Require to be number</span>
            </div>
          </div>
          <div className="mb-4 flex items-center justify-between gap-3">
            <div  className="text-sm items-center  flex gap-2">
                <span className='bg-blue-800 text-white w-7 h-7 text-center p-1 rounded-full'>2</span>
                <span>Update your</span>
                <span className='font-bold'>Percentage</span>              
            </div>
            <div className='flex w-[30%] flex-col'>
                <input
                type="number"
                max={100}
                id="peecentage"
                value={percentile}
                onChange={(e:any) => setPercentile(e.target.value)}
                className="mt-1 p-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <span className='text-red-600 text-[12px] hidden' >Require Percentile 0-100</span>
            </div>
          </div>
          <div className="mb-4 flex items-center justify-between gap-3">
          <div  className="text-sm items-center  flex g">
                <span className='bg-blue-800 text-white w-7 h-7 text-center p-1 rounded-full'>3</span>
                <span>Update your</span>
                <span className='font-bold text-xs md:text-sm'>Current Score(out of 15)</span>             
            </div>
            <div className='flex w-[30%] flex-col'>
                <input
                type="number"
                max={15}
                id="score"
                value={currentScore}
                onChange={(e:any) => setCurrentScore(e.target.value)}
                className="mt-1 p-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <span className='text-red-600 text-[12px] hidden' > max 15</span>
            </div>
          </div>
         
        </div>
        <div className="mt-4 flex justify-end space-x-4">
        <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-9 py-2 flex gap-2 items-center text-sm font-medium text-white bg-indigo-900 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleSave}
          >
            Save <MoveRight className='text-sm'/>
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default UpdateScoresModal;
