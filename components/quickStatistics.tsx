import { useStateValue } from '@/Context/StateProvider';
import React from 'react';


const QuickStatistics: React.FC = () => {
  const [{score}] = useStateValue(); 

  return (
    <div className="bg-white max-w-full rounded shadow p-1 md:p-4">
      <h2 className="text-md font-semibold mb-2">Quick Statistics</h2>
      <div className="flex gap-4 justify-between">
        <div className="flex gap-1 md:gap-2 items-center mb-2">
          <div className="rounded-full text-sm md:text-lg bg-slate-100 p-1 md:p-3 border">
            🏆
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm md:text-lg font-bold">{score?.rank || 0}</span>
            <span className="text-gray-300 md:uppercase text-xs md:text-sm">Your Rank</span>
          </div>
        </div>

        <div className="flex gap-1 md:gap-4 items-center mb-2">
          <div className="rounded-full text-sm md:text-lg bg-slate-100 p-1 md:p-3 border">
          🗓️
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm md:text-lg font-bold">{score?.percentile || 0}%</span>
            <span className="text-gray-300 md:uppercase text-xs md:text-sm">Percentage</span>
          </div>
        </div>

        <div className="flex gap-1 md:gap-4 items-center mb-2">
          <div className="rounded-full bg-slate-100 p-1 md:p-3 text-sm md:text-lg border">
            ✅
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs md:text-lg font-bold">{score?.currentScore || 0}/15</span>
            <span className="text-gray-300 md:uppercase text-[10px] md:text-sm">Correct Answer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStatistics;
