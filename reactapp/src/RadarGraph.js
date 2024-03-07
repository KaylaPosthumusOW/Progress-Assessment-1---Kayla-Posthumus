import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Goals', 'Assists', 'Possession', 'Shots on Target', 'Corners'],
      datasets: [
        {
          label: 'Manchester United',
          data: [40, 20, 60, 15, 5], // Replace with actual stats for Team A
          backgroundColor: 'rgba(242, 185, 97, 0.2)',
          borderColor: 'rgba(242, 185, 97, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(242, 185, 97, 1)',
        },
        {
          label: 'Liverpool',
          data: [15, 4, 55, 20, 40], // Replace with actual stats for Team B
          backgroundColor: 'rgba(47, 139, 152, 0.2)',
          borderColor: 'rgba(47, 139, 152, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(47, 139, 152, 1)',
        },
      ],
    };

    // Options for the radar chart
    const options = {
      scale: {
        ticks: {
          beginAtZero: true,
          max: 10, // Adjust the max value based on your scale
        },
      },
    };

    // Create the radar chart
    const myChart = new Chart(chartRef.current, {
      type: 'radar',
      data: data,
      options: options,
    });

    // Cleanup on component unmount
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  );
};

export default RadarChart;
