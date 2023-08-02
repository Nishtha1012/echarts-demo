import React from "react";
import ReactEcharts from "echarts-for-react";
import { graphic } from "echarts/dist/echarts.js";

/**
 * bar chart component using apache echarts that represents normal , diabetic ,pre-diabetic according to given range
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

    visualMap: {
      //shows which data the colours represents in bar at the bottom of graph just like legend
      show: true,
      symbol: "circle",
      bottom: 0,
      left: "30%",
      orient: "horizontal",
      itemSymbol: "circle",

      //to change color of bars according to given data
      pieces: [
        {
          //i.e., if value is betweenn  0 to 4 green gradient will be color of the bar

          gt: 0, //greater than 0
          lte: 4, // less than or equal to 4
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
        // if value is betweenn  4 to 8 yellows gradient will be color of the bar
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
        zlevel: 100, //z index of graph

        //to change colours of x axis according to given value
        markLine: {
          label: {
            show: false,
          },
          symbol: "none",

          data: [
            // x axis will be of green colored where value is 4
            {
              name: "normal",
              yAxis: `4`,
              lineStyle: {
                type: "solid",
                color: "green",
              },
            },
            // x axis will be of yellow colored where value is 8
            {
              name: "pre-diabetic",
              yAxis: `8`,
              lineStyle: {
                type: "solid",
                color: "yellow",
              },
            },
            // x axis will be of orange colored where value is 10
            {
              name: "diabetic",
              yAxis: `10`,
              lineStyle: {
                type: "solid",
                color: "orange",
              },
            },
            // x axis will be of red colored where value is 12
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
