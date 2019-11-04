import React from "react";
import { Chart } from "react-charts";

const Venn = () => {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: "Series 2",
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  );
  const series = React.useMemo(
    () => ({
      type: "bubble",
      showPoints: false
    }),
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" }
    ],
    []
  );
  return (
    <div
      container
      style={{
        width: "400px",
        heightt: "300px"
      }}
    >
      <br />
      <br />
      {console.log("DOING")}
      <Chart
        data={data}
        series={series}
        axes={axes}
        grouping="single"
        tooltip
      />
      <br />
    </div>
  );
};

export default Venn;
