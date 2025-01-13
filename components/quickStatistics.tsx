import { useStateValue } from '@/Context/StateProvider';
import React from 'react';

const QuickStatistics: React.FC = () => {
  const [{ score }] = useStateValue();

  return (
    <div className="bg-white rounded shadow p-2 md:p-4"> 
      <h2 className="text-xs font-semibold mb-2 text-center md:text-left">Quick Statistics</h2>
      <div className="flex   gap-2 justify-between items-center"> 
        <div className="flex gap-1 items-center mb-2 md:mb-0">
          <div className="rounded-full text-sm bg-slate-100 p-1 border">
            🏆
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs font-bold">{score?.rank || 0}</span>
            <span className="text-gray-300 md:uppercase text-[6px] md:text-sm">Your Rank</span>
          </div>
        </div>

        <div className="flex gap-1 items-center mb-2 md:mb-0">
          <div className="rounded-full text-sm bg-slate-100 p-1 border">
            🗓️
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs font-bold">{score?.percentile || 0}%</span>
            <span className="text-gray-300 md:uppercase text-[6px] md:text-sm">Percentage</span>
          </div>
        </div>

        <div className="flex gap-1 items-center mb-2 md:mb-0">
          <div className="rounded-full bg-slate-100 p-1 text-sm border">
            ✅
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs font-bold">{score?.currentScore || 0}/15</span>
            <span className="text-gray-300 md:uppercase text-[6px] md:text-sm">Correct Answer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStatistics;