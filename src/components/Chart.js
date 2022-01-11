import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

const Chart = (props) => {
  const { data, type } = props;
  const options = {
    title: {
      text: "Selected country view",
    },
    data: [
      {
        type: type,
        startAngle: 240,
        yValueFormatString: '##0.00"%"',
        indexLabel: "{label} {y}",
        dataPoints: data,
      },
    ],
  };
  return <CanvasJSChart options={options} />;
};

export default Chart;
