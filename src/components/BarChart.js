import React from 'react';
import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {

  const data = {
    labels: [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24, 25,26,27,28,29,30], // X-axis labels
    datasets: [
      {
        label: 'Sales', 
        data: [3000,10000,4000,3000,7000,7000,6000,7000,5000,2000,7500,8000,6000,11000,9000,12000,15000,11000,8000,5000,6000,11000,7000,6000,2500,5000,8000,12000,6000,4500 ], // Data values
        backgroundColor: '#7294FF', 
        borderColor: '#7094FE', 
        borderWidth: 1 , 
        borderRadius: "20"
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            return `Sales: $${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: '',
        },
      },
      y: {
        title: {
          display: true,
          text: '',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{width:"100%", height:"50vh", textAlign:"center",paddingRight:"5%", paddingLeft:"5%"}}>
  <Bar data={data} options={options} />
</div>);
};

export default BarChart;
