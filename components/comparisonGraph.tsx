"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip } from 'chart.js';
import { useStateValue } from '@/Context/StateProvider';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

const ComparisonGraph: React.FC = () => {
    const [{ score }] = useStateValue();

    const data = {
        labels: ['0', '25', '50', '75', '100'],
        datasets: [
            {
                label: 'Your Percentile',
                data: [10, 60, 20, 10, score?.percentile],
                fill: false,
                borderColor: 'rgb(49, 46, 129)', 
                borderWidth: 2, 
                pointRadius: 3,
                pointBackgroundColor:' rgb(49, 46, 129)', 
                pointBorderColor: '#fff',
                tension: 0.4, 
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: {
                enabled: true, 
                callbacks: {
                    label: (context : any) => `${context.raw}%`, 
                },
            },
            legend: {
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
                ticks: {
                    display: false, 
                },
            },
        },
    };

    return (
        <div className="bg-white p-4 rounded shadow">
            <div className="flex">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Comparison Graph</h2>
                    <p className="mb-5">
                        You scored {score?.percentile}% percentile which is lower than the average percentile 72% of
                        all the engineers who took this assessment.
                    </p>
                </div>
                <div className='text-2xl border-none'>📈</div>
            </div>
            <Line data={data} options={options} />
        </div>
    );
};

export default ComparisonGraph;
