import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PolarGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Goals', 'Assists', 'Possession', 'Shots on Target'],
      datasets: [
        {
          label: 'Team A',
          data: [4, 10, 60, 30], // Replace with actual stats for Team A
          backgroundColor: [
            'rgba(247, 213, 160, 1)',
            'rgba(47, 139, 152, 1)',
            'rgba(242, 185, 97, 1)',
            'rgba(143, 46, 78, 1)'
          ],
          borderWidth: 1,
        }
      ],
    };

    // Options for the polar chart
    const options = {
      scales: {
        r: {
          angleLines: {
            display: true,
          },
          suggestedMin: 0,
          suggestedMax: 10, // Adjust the max value based on your scale
        },
      },
    };

    // Create the polar chart
    const myChart = new Chart(chartRef.current, {
      type: 'polarArea',
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

export default PolarGraph;
