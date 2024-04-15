"use client";
import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import styles from "./chart.module.css";

export default function BarChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: [
            "February - 2024",
            "January - 2024",
            "December - 2023",
            "November - 2023",
            "October - 2023",
            "September - 2023",
            "August - 2023",
            "July - 2023",
            "June - 2023",
            "May - 2023",
            "April - 2023",
            "March - 2023",
            "February - 2023",
          ],
          datasets: [
            {
              label: "Month - Year",
              data: [25, 32, 45, 45, 24, 50, 32, 37, 47, 28, 5, 7, 20],
              backgroundColor: [
                "rgb(255, 99, 132, 0.2)",
                "rgb(255, 159, 64, 0.2)",
                "rgb(255, 205, 86, 0.2)",
                "rgb(75, 192, 192, 0.2)",
                "rgb(54, 162, 235, 0.2)",
                "rgb(153, 102, 255, 0.2)",
                "rgb(201, 203, 207, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
              ],
              borderWidth: 1,
              borderRadius: 10,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "จำนวนการแยก",
              font: {
                size: 16,
                weight: "bold",
              },
            },
          },
          layout: {
            padding: 40,
          },
          // responsive: true
          scales: {
            x: {
              type: "category",
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "จำนวนรายการ",
                font: {
                  size: 16,
                  weight: "bold",
                },
              },
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "80vh" }}>
      <h2 className={styles.title}>รายงานข้อมูลยืม - คืน</h2>
      <canvas ref={chartRef} />
    </div>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import styles from "./chart.module.css";
// import { Bar } from "react-chartjs-2";
// import { Chart, registerables } from "chart.js";
// Chart.register(...registerables);

// export default function BarChart() {
//   const [chartData, setChartData] = useState({
//     datasets: [],
//   });
//   const [chartOptions, setChartOptions] = useState({});

//   useEffect(() => {
//     setChartData({
//       labels: ["February - 2024", "January - 2024", "December - 2023", "November - 2023", "October - 2023", "September - 2023", "August - 2023", "July - 2023", "June - 2023", "May - 2023", "April - 2023", "March - 2023", "February - 2023"],
//       datasets: [
//         {
//           label: "Month - Year",
//           data: [25, 32, 45, 45, 24, 50, 32, 37, 47, 28, 5, 7, 2],
//           borderColor: "rgb(53, 162, 235)",
//           backgroundColor: "rgb(53, 162, 253, 0.4)",
//         },
//       ],
//     });
//     setChartOptions({
//       plugins: {
//         legend: {
//           position: "top",
//         },
//         title: {
//           display: true,
//           text: "จำนวนแยกตามเดือน",
//         },
//       },
//       maintainAspectRatio: false,
//       responsive: true,
//       scales: {
//         y: {
//           title: {
//             display: true,
//             text: "จำนวนรายการ",
//             position: "left",
//           },
//         },
//       },
//     });
//   }, []);

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>รายงานข้อมูลยืม - คืน</h2>
//       <Bar data={chartData} options={chartOptions} />
//     </div>
//   );
// }

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   {
//     name: "Sun",
//     visit: 4000,
//     click: 2400,
//   },
//   {
//     name: "Mon",
//     visit: 3000,
//     click: 1398,
//   },
//   {
//     name: "Tue",
//     visit: 2000,
//     click: 3800,
//   },
//   {
//     name: "Wed",
//     visit: 2780,
//     click: 3908,
//   },
//   {
//     name: "Thu",
//     visit: 1890,
//     click: 4800,
//   },
//   {
//     name: "Fri",
//     visit: 2390,
//     click: 3800,
//   },
//   {
//     name: "Sat",
//     visit: 3490,
//     click: 4300,
//   },
// ];

// const Chart = () => {
//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>รายงานข้อมูลยืม - คืน</h2>
//       <ResponsiveContainer width="100%" height="90%">
//         <LineChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
//           <Legend />
//           <Line
//             type="monotone"
//             dataKey="visit"
//             stroke="#8884d8"
//             strokeDasharray="5 5"
//           />
//           <Line
//             type="monotone"
//             dataKey="click"
//             stroke="#82ca9d"
//             strokeDasharray="3 4 5 2"
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };
