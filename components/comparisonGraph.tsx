"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title);

const ComparisonGraph: React.FC = () => {
  const data = {
    labels: ['0', '25', '50', '75', '100'],
    datasets: [
      {
        label: 'Your Percentile',
        data: [10, 20, 90, 70, 100], 
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        pointRadius: 3,
        pointBackgroundColor: 'rgb(75, 192, 192)',
        pointBorderColor: '#fff',
        tension: 0.4, // Smoother curve
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      title: {
        display: false, // Hide title
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
        ticks: {
          stepSize: 25, // Set x-axis step size to 25
        },
      },
      y: {
        grid: {
          display: false, // Hide y-axis grid lines
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25, // Set y-axis step size to 25
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Comparison Graph</h2>
      <p>
        You scored 90% percentile which is lower than the average percentile 72% of
        all the engineers who took this assessment.
      </p>
      <Line data={data} options={options} />
    </div>
  );
};

export default ComparisonGraph;