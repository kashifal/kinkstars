<template>
  <Line :data="data" :options="options" />
</template>

<script setup>
import gradient from "chartjs-plugin-gradient";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "vue-chartjs";
const data = {
  labels: [
    "July 10",
    "July 11",
    "July 12",
    "July 13",
    "July 14",
    "July 15",
    "July 16",
    "July 17",
    "July 18",
    "July 19",
    "July 20",
    "July 21",
    "July 22",
    "July 23",
    "July 24",
    "July 25",
    "July 26",
    "July 27",
    "July 28",
    "July 29",
    "July 30",
    "Aug 01",
    "Aug 02",
    "Aug 03",
    "Aug 04",
    "Aug 05",
    "Aug 06",
    "Aug  07",
  ],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#f87979",
      data: [
        500, 600, 450, 800, 300, 700, 550, 400, 650, 750, 900, 550, 350, 500,
        700, 450, 800, 650, 600, 550, 400, 750, 900, 500, 650, 350, 800, 700,
      ],
      tension: 0.4,
      pointRadius: 0,
      borderColor: "#FDC157",
      gradient: {
        backgroundColor: {
          axis: "x",
          colors: {
            0: "#FDC157",
            50: "#E8F1F3",
            100: "white",
          },
        },
      },
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
  },
  scales: {
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    title: {
      display: false,
    },
    subtitle: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  gradient
);
</script>
