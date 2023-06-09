import React from "react";
import Chart from "react-apexcharts";

const DonutChart = ({ data }) => {
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const chartOptions = {
    labels: data.map((item) => item.region),
    colors: data.map(() => generateRandomColor()),
    legend: {
      position: "bottom",
    },
  };

  const chartSeries = data.map((item) => item.intensity);

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="donut"
      width={380}
    />
  );
};

export default DonutChart;
