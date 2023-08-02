import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";

/**
 * line chart component using apache echarts
 * @returns  {jsx element}
 *
 * reference link for echarts:
 * https://echarts.apache.org/handbook/en/get-started
 *
 */

const Chart = () => {
  //State that holds value of target weight to mark area and line
  const [target, settarget] = useState(70);

  //options for chart configuration
  const option = {
    // x-axis values
    xAxis: {
      type: "category",
      data: [
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
      ],
    },

    // y axis configuration
    yAxis: {
      //takes value according to data given
      type: "value",

      //appends kg after the values
      axisLabel: {
        formatter: "{value} kg",
      },
      //minimum and maximum values for y axis values
      min: 40,
      max: 110,

      //splits y axis into 3 lines apart from min and max
      splitNumber: 3,

      axisLine: {
        show: true,
      },
    },

    //shows tooltip while hovering on points showing BMI values
    tooltip: {
      trigger: "axis",
      label: "BMI",
    },

    //displayed on top annoting the chart data
    legend: {},

    //datasets of chart is defined under series
    series: [
      {
        name: "BMI",
        data: [85, 80, 85, 80, 80, 75], // data for marking on chart
        type: "line",

        //style for ponits on graph
        symbol: "circle",
        symbolSize: 10,

        //styles for lines on graph
        lineStyle: {
          color: "#5470C6",
          width: 1,
          type: "dashed",
        },
        itemStyle: {
          color: "#5470C6",
        },

        //to mark the area between given targeted weight + 10 and targeted weight - 10
        markArea: {
          itemStyle: {
            color: "rgba(197, 162 ,245 ,0.5)",
          },
          data: [
            [
              {
                yAxis: `${target}`,
              },
              {
                yAxis: `${target - 10}`,
              },
            ],
            [
              {
                yAxis: `${target}`,
              },
              {
                yAxis: `${target + 10}`,
              },
            ],
          ],
        },

        //to mark line at targeted weight
        markLine: {
          symbol: "none",
          data: [
            {
              name: "test",
              yAxis: `${target}`,
              lineStyle: {
                type: "solid",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <>
      <p>Target weight :</p>
      <input
        type="text"
        onChange={(e) => settarget(parseInt(e.target.value))}
      />
      <ReactEcharts option={option} />
    </>
  );
};

export default Chart;
