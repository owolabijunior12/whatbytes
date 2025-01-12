import React from 'react';

const SyllabusWiseAnalysis: React.FC = () => {
  return (
    <div className="bg-white p-7 rounded shadow">
      <h2 className="text-xl font-semibold mb-6">Syllabus Wise Analysis</h2>
      <div className="flex flex-col gap-4 space-y-2">
        <div className="flex flex-col gap-3">
          <span className="text-black font-medium">HTML Tools, Forms, History</span>
          <div className='flex items-center justify-between'>
            <div className="w-[70%] h-3 bg-gray-200 rounded-full">
              <div
                className="bg-blue-500 h-full rounded-full"
                style={{ width: '80%' }}
              />
            </div>
            <span className='text-blue-500 font-bold'>80%</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-black font-medium">Tag & References in HTML</span>
          <div className='flex items-center justify-between'>
            <div className="w-[70%] h-3 bg-gray-200 rounded-full">
              <div
                className="bg-orange-500 h-full rounded-full"
                style={{ width: '60%' }}
              />
            </div>
            <span className='text-orange-500 font-bold'>60%</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-black font-medium">Table & References in HTML</span>
          <div className='flex items-center justify-between'>
            <div className="w-[70%] h-3 bg-gray-200 rounded-full">
              <div
                className="bg-red-500 h-full rounded-full"
                style={{ width: '24%' }}
              />
            </div>
            <span className='text-red-500 font-bold'>24%</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-black font-medium">Tables & CSS Basics</span>
          <div className='flex items-center justify-between'>
            <div className="w-[70%] h-3 bg-gray-200 rounded-full">
              <div
                className="bg-green-500 h-full rounded-full"
                style={{ width: '96%' }}
              />
            </div>
            <span className='text-green-500 font-bold'>96%</span>
          </div>
        </div>
        {/* Add more divs for other sections with the same structure */}
      </div>
    </div>
  );
};

export default SyllabusWiseAnalysis;