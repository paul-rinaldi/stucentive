import React from "react";
//import Chart from '../../Components/Venn';
import Venn from "../../Components/Venn";
//import VennModule from 'highcharts/modules/venn.js';
//import Highcharts from 'highcharts'
//import HighchartsReact from 'highcharts-react-official';
//import venn from 'highcharts/modules/venn';
//import HighCharts from 'highcharts/highstock'

//venn(Highcharts);

const Focus = () => {
  /*  
  const options = {
        series: [
          {
            type: "venn",
            name: "The Unattainable Triangle",
            data: [
              {
                sets: ["Good"],
                value: 2
              },
              {
                sets: ["Fast"],
                value: 2
              },
              {
                sets: ["Cheap"],
                value: 2
              },
              {
                sets: ["Good", "Fast"],
                value: 1,
                name: "More expensive"
              },
              {
                sets: ["Good", "Cheap"],
                value: 1,
                name: "Will take time to deliver"
              },
              {
                sets: ["Fast", "Cheap"],
                value: 1,
                name: "Not the best quality"
              },
              {
                sets: ["Fast", "Cheap", "Good"],
                value: 1,
                name: "They're dreaming"
              }
            ]
          }
        ]
      };

    return (
    <div container>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </div>

    
  );
      */

  return (
    <div container>
      <Venn />
    </div>
  );
};

export default Focus;
