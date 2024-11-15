// components/PercentileGraph.js
"use client";
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PercentileGraph = ({ initPer, initStudentCounts, newPerc }) => {
  const [data, setData] = useState({
    labels: initPer,
    datasets: [
      {
        label: 'Number of Students',
        data: initStudentCounts,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.3, // Creates the curve
        pointRadius: 3,
      },
      {
        label: 'You are here',
        data: newPerc ? [newPerc.count] : [], // Plot only the new percentile point
        pointBackgroundColor: 'red',
        pointBorderColor: 'black',
        pointRadius: 6,
        showLine: false , // Only show the point
      },
    ],
  });

  useEffect(() => {
    if (newPerc) {
      setData((prevData) => ({
        ...prevData,
        datasets: [
          prevData.datasets[0],
          {
            ...prevData.datasets[1],
            data: prevData.labels.map((label) =>
              label === newPerc.percentile ? newPerc.count : null // Only show "You are here" point at newPerc position
            ),
          },
        ],
      }));
    }
  }, [newPerc]);

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Percentile',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Students',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            if (context.dataset.label === 'You are here') {
              return 'You are here';
            }
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    animations: {
      tension: {
        duration: 2000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
  };

  return (
    <div className="w-[300px] h-[380px] sm:w-[500px] sm:h-[400px]">
      <Line data={data} options={{ ...options, maintainAspectRatio: false }} />
    </div>
  );
  
  
};

export default PercentileGraph;
