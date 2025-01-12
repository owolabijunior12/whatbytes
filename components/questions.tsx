'use client';
import Image from 'next/image';
import React from 'react';

interface QuestionsProps {
  title: string;
  questions: number;
  duration: string;
  submissionDate: string;
  onUpdate: () => void;
}

const Questions: React.FC<QuestionsProps> = ({ title, questions, duration, submissionDate, onUpdate }) => {
  return (
    <div className="shadow-md p-3 gap-4 rounded flex justify-around items-center">
      <Image src={'/html.png'} alt={`${title} logo`} height={40} width={40} />
      <div className="flex flex-col">
        <span className="font-bold text-sm md:text-lg">{title}</span>
        <span className="text-xs">
          Questions: {questions} | Duration: {duration} | Submitted on {submissionDate}
        </span>
      </div>
      <button
        onClick={onUpdate}
        className="bg-indigo-900  hover:bg-blue-700 h-9 py-0 rounded-xl w-28 text-xs text-center text-white"
        aria-label="Update Question"
      >
        Update
      </button>
    </div>
  );
};

export default Questions;
