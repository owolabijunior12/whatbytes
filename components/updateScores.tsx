'use client';
import { actionType } from '@/Context/reducer';
import { useStateValue } from '@/Context/StateProvider';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface UpdateScoresModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpdateScoresModal: React.FC<UpdateScoresModalProps> = ({ isOpen, onClose }) => {
  const [score, dispatch] = useStateValue();


  
  const [rank, setRank] = React.useState(4);
  const [percentile, setPercentile] = React.useState(100);
  const [currentScore, setCurrentScore] = React.useState(12);

  const [rankError, setRankError] = useState<string>('');
  const [percentileError, setPercentileError] = useState<string>('');
  const [currentScoreError, setCurrentScoreError] = useState<string>('');

  const validateInputs = () => {
    let isValid = true;

    if ( rank <= 0) {
      setRankError('Rank must be a positive number.');
      isValid = false;
    } else {
      setRankError('');
    }

    if ( percentile < 0 || percentile > 100) {
      setPercentileError('Percentile must be between 0 and 100.');
      isValid = false;
    } else {
      setPercentileError('');
    }

    if ( currentScore < 0 || currentScore > 15) {
      setCurrentScoreError('Current Score must be between 0 and 15.');
      isValid = false;
    } else {
      setCurrentScoreError('');
    }

    return isValid;
  };

const handleRankChange = (e: any) => {
  const newRank = parseInt(e.target.value); 
  setRank(newRank);

  if (newRank <= 0) {
    setRankError('Rank must be a positive number.');
  } else {
    setRankError('');
  }
};

const handlePercentileChange = (e: any) => {
  const newPercentile = parseInt(e.target.value);
  setPercentile(newPercentile);

  if (newPercentile < 0 || newPercentile > 100) {
    setPercentileError('Percentile must be between 0 and 100.');
  } else {
    setPercentileError('');
  }
};

const handleCurrentScoreChange = (e: any) => {
  const newCurrentScore = parseInt(e.target.value);
  setCurrentScore(newCurrentScore);

  if (newCurrentScore < 0 || newCurrentScore > 15) {
    setCurrentScoreError('Current Score must be between 0 and 15.');
  } else {
    setCurrentScoreError('');
  }
};
  
  const handleSave = () => {
    // if () {
      dispatch({
        type: actionType.SET_SCORE,
        score: { rank, percentile, currentScore },
      });
      onClose();
    // }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    validateInputs()
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center w-auto bg-black bg-opacity-90">
      <div className="bg-white rounded-lg shadow-xl max-w-[97%] p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg leading-6 font-bold">Update Scores</h3>
          <Image src="/html.png" alt="" width={40} height={40} onClick={onClose} />
        </div>
        <div className="mt-4">
          
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="text-sm items-center w-full flex gap-2">
              <span className="bg-blue-800 text-white w-7 h-7 text-center p-1 rounded-full">1</span>
              <span>Update your</span>
              <span className="font-bold">Rank</span>
            </div>
            <div className="flex w-[30%] flex-col">
              <input
                type="number"
                id="rank"
                value={rank}
                onChange={handleRankChange} 
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {rankError && <span className="text-red-600 text-[12px]">{rankError}</span>}
            </div>
          </div>

         
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="text-sm items-center flex gap-2">
              <span className="bg-blue-800 text-white w-7 h-7 text-center p-1 rounded-full">2</span>
              <span>Update your</span>
              <span className="font-bold">Percentile</span>
            </div>
            <div className="flex w-[30%] flex-col">
              <input
                type="number"
                max={100}
                id="percentile"
                value={percentile}
                onChange={handlePercentileChange} 
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {percentileError && <span className="text-red-600 text-[12px]">{percentileError}</span>}
            </div>
          </div>

          
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="text-sm items-center flex gap-2">
              <span className="bg-blue-800 text-white w-7 h-7 text-center p-1 rounded-full">3</span>
              <span>Update your</span>
              <span className="font-bold">Current Score (out of 15)</span>
            </div>
            <div className="flex w-[30%] flex-col">
              <input
                type="number"
                max={15}
                id="currentScore"
                value={currentScore}
                onChange={handleCurrentScoreChange} 
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {currentScoreError && <span className="text-red-600 text-[12px]">{currentScoreError}</span>}
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
            Save <MoveRight className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateScoresModal;
