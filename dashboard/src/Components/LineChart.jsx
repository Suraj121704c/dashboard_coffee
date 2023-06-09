import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = ({ data }) => {
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const chartOptions = {
    chart: {
      height: 350,
      type: 'line',
    },
    xaxis: {
      categories: data.map(item => item.source),
    },
    colors: data.map(() => generateRandomColor()),
  };

  const chartSeries = [
    {
      name: 'Value',
      data: data.map(item => item.intensity),
    },
  ];

  return (
    <Chart options={chartOptions} series={chartSeries} type="line" height={350} />
  );
};

export default LineChart;