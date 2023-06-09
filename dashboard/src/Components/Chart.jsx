import React from "react";
import Chart from "react-apexcharts";

const PieChart = ({ data }) => {
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const chartOptions = {
    labels: data.map((item) => item.pestle),
    colors: data.map(() => generateRandomColor()),
    legend: {
      position: "bottom",
    },
  };

  const chartSeries = data.map((item) => item.likelihood);

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="pie"
      width="100%"
    />
  );
};

export default PieChart;
