import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

const Chart = (props) => {
  const { data } = props;
  const options = {
    title: {
      text: "Covid Status App",
    },
    data: [
      {
        type: "column",
        dataPoints: data,
      },
    ],
  };
  return <CanvasJSChart options={options} />;
};

export default Chart;
