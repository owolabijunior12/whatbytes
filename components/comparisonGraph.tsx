"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title } from 'chart.js';
import { useStateValue } from '@/Context/StateProvider';
import Image from 'next/image';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title);

const ComparisonGraph: React.FC = () => {
    const [{score}] = useStateValue();
   
  const data = {
    labels: ['0', '25', '50', '75', '100'],
    datasets: [
      {
        label: 'Your Percentile',
        data: [10, 90, 90, 10, score?.percentile], 
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        pointRadius: 3,
        pointBackgroundColor: 'rgb(75, 192, 192)',
        pointBorderColor: '#fff',
        tension: 0.4, 
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, 
      },
      title: {
        display: false, 
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
        ticks: {
          stepSize: 25, 
        },
      },
      y: {
        grid: {
          display: false, 
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25, 
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className='flex'>
        <div>          
            <h2 className="text-xl font-semibold mb-2">Comparison Graph</h2>
            <p className='mb-5'>
              You scored {score?.percentile}% percentile which is lower than the average percentile 72% of
              all the engineers who took this assessment.
            </p>
        </div>
        <div className='rounded-full flex justify-center items-center p-3 h-[40px] bg-slate-300 '>
          <Image src={"/chart.png"} alt='logo' height={40} objectFit="cover" width={50}/>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ComparisonGraph;