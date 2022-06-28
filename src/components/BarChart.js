import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
function BarChart(props) {
  let colors = [];
  let borderColors = [];
  for (let i = 0; i < props.labels.length; i++) {
    colors.push(props.color);
    borderColors.push(props.borderColor);
  }
  //   console.log(borderColors);
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: "Problem ratings",
        data: props.data,
        backgroundColor: colors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
}

export default BarChart;
