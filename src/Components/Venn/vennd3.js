import React from 'react';
import * as d3 from "d3";
  
class Chart extends React.Component {
    state = {
        dataset: 'apples'
    };
    setDataset = e => {
        this.setState({
            dataset: e.target.value
        });
    };
    render() {
        var width = 640,
            height = 300,
            radius = Math.min(width, height) / 2;
        
        var color = d3.schemeCategory10;
        
        var pie = d3.pie()
            .value(d => d[this.state.dataset])
            .sort(null);
        
        var arc = d3.arc()
            .innerRadius(radius - 100)
            .outerRadius(radius - 20);
            
        var displayedData = pie(this.props.data);
            
        return <div>
        <form>
            <label><input type="radio"name="dataset" value="apples"
            onChange={this.setDataset}
            checked={this.state.dataset == 'apples'} /> Apples</label>
            <label><input type="radio" name="dataset" value="oranges"
            onChange={this.setDataset}
            checked={this.state.dataset == 'oranges'} /> Oranges</label>
        </form>
        <svg width={width} height={height}>
            <g transform={"translate(" + width / 2 + "," + height / 2 + ")"}>
                {displayedData.map((slice, i) =>
                <path
                    fill={color[i]}
                    key={i}
                d={arc(slice)} />
            )}
            </g>
        </svg>
        </div>;
    }
};

export default Chart;