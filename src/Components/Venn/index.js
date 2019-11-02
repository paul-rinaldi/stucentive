import React from 'react';
import {Bubble} from 'react-charts';

const Venn = () => {
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    }
    return (
    <div container>
        <Bubble data={data} />
    </div>
  );
};

export default Venn;