import React from 'react';
import Chart from '../../Components/Venn';

const Focus = () => {
  
    var data = [
        { apples: 53245, oranges:	200 },
        { apples: 28479, oranges:	200 },
        { apples: 19697, oranges:	200 },
        { apples: 24037, oranges:	200 },
        { apples: 40245, oranges:	200 }
    ]
    return (
    <div container>
        <Chart data={data}/>
    
    </div>

    
  );
};

export default Focus;