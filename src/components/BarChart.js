import React from "react";
import ReactEcharts from "echarts-for-react";
import { graphic } from "echarts/dist/echarts.js";
/**
 * main chart component using apache echarts
 * @returns  {jsx element}
 *
 * reference link for echarts:
 * https://echarts.apache.org/handbook/en/get-started
 *
 */

const BarChart = () => {
  //State that holds value of target weight to mark area and line

  //options for chart configuration
  const option = {
    //x axis configuration
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },

    //y axis configuration
    yAxis: {
      type: "value",
      splitLine: {
        lineStyle: {
          color: "rgba(0,0,0,0.1)",
        },
      },
    },

    //shows tooltip while hovering on points showing BMI values
    tooltip: {
      trigger: "axis",
    },

    //shows the which data colours represents in bar at the bottom of graph
    visualMap: {
      show: true,
      symbol: "circle",
      bottom: 0,
      left: "30%",
      orient: "horizontal",
      itemSymbol: "circle",

      //to change color of bars according to given data
      pieces: [
        {
          gt: 0,
          lte: 4,
          label: "normal",
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(9, 187, 30)",
            },
            {
              offset: 1,
              color: "rgb(191, 242, 198)",
            },
          ]),
        },
        {
          gt: 4,
          lte: 8,
          label: "pre-diabetic",
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(234, 232, 24)",
            },
            {
              offset: 1,
              color: "rgb(247, 247, 189)",
            },
          ]),
        },
        {
          gt: 8,
          lte: 10,
          label: "diabetic",
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(244, 138, 39)",
            },
            {
              offset: 1,
              color: "rgb(244, 214, 185)",
            },
          ]),
        },
        {
          gt: 10,
          label: "high-diabetic",
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(249,11, 11)",
            },
            {
              offset: 1,
              color: "rgb(255, 193, 193)",
            },
          ]),
        },
      ],
    },

    //datasets of chart is defined under series

    series: [
      {
        data: [11, 9, 5, 4, 3, 2, 1],
        type: "bar",
        zlevel: 100,

        //to change colours of x axis according to given value
        markLine: {
          label: {
            show: false,
          },
          symbol: "none",

          data: [
            {
              name: "normal",
              yAxis: `4`,
              lineStyle: {
                type: "solid",
                color: "green",
              },
            },
            {
              name: "pre-diabetic",
              yAxis: `8`,
              lineStyle: {
                type: "solid",
                color: "yellow",
              },
            },
            {
              name: "diabetic",
              yAxis: `10`,
              lineStyle: {
                type: "solid",
                color: "orange",
              },
            },
            {
              name: "high-diabetic",
              yAxis: `12`,
              lineStyle: {
                type: "solid",
                color: "red",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <div style={{ width: "60%", marginInline: "auto" }}>
      <ReactEcharts option={option} />
    </div>
  );
};

export default BarChart;
