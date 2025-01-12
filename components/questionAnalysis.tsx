import React from 'react';
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Legend);

const QuestionAnalysis: React.FC = () => {
  const correctAnswers = 12; 
  const totalQuestions = 15;
  const percentageCorrect = (  totalQuestions / correctAnswers) * 100;

  const data = {
    
    datasets: [
      {
        data: [percentageCorrect, 100 - percentageCorrect],
        backgroundColor: [ 'rgba(59, 130, 246, 0.8)' , 'lightblue'], 
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'right' as const,
      },
    },
    cutout: '80%', 
  };

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col items-center">
      <div className='flex w-full justify-between'>
        <h2 className=" font-semibold">Question Analysis</h2>
        <span className='text-blue-700 font-bold'>{'12'}/15</span>
      </div>
        <p>
        You scored 12 questions correct out of 15. However, it still needs some improvements.
      </p>
      <div className="relative">
        <Doughnut data={data} options={options} />
        <div className="absolute top-[50%] bottom-[50%] right-[50%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
          🎯
        </div>
      </div>     
    </div>
  );
};

export default QuestionAnalysis;