import React from 'react';
import * as d3 from 'd3';

class BarChart extends React.Component {
    state = {
      widthScale: d3
        .scaleBand()
        .domain(d3.range(0, this.props.data.length))
        .range([0, this.props.width]),

      heightScale: d3
        .scaleLinear()
        .domain([0, d3.max(this.props.data)])
        .range([0, this.props.height]),
    };

    static getDerivedStateFromProps(nextProps, prevState) {
      const { widthScale, heightScale } = prevState;

      widthScale.domain(d3.range(0, nextProps.data.length));
      heightScale.domain([0, d3.max(nextProps.data)]);

      prevState = { ...prevState, widthScale, heightScale };
      return prevState;
    }

    render() {
      const {
          x, y, data, height,
        } = this.props,
        { widthScale, heightScale } = this.state;

      return (
        <g
          transform={`translate(${x}, ${y})`}
        >
          {data.map((d, i) => (
            <rect
              x={widthScale(i)}
              y={height - heightScale(d)}
              width={widthScale.bandwidth()}
              height={heightScale(d)}
              key={i}
            />
                ))}
        </g>
      );
    }
}

export default BarChart;
