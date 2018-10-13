import React from "react";
import BarChart from "./BarChart";
import { range as d3Range } from "d3";

class BarChartContainer extends React.Component {
    state = {
        data: d3Range(34).map(Math.random),
        currentIndex: null
    };

    addData = () =>
        this.setState({
            data: [...this.state.data, Math.random()]
        });

    setCurrentIndex = currentIndex =>
        this.setState({
            currentIndex
        });

    render() {
        const { data, currentIndex } = this.state;

        return (
                <div>
                    <p>
                        {data.length} datapoints
                        <br />
                        <small>{currentIndex !== null ? data[currentIndex] : "🧐"}</small>
                    </p>
                    <svg width="100%" height="500">
                        <BarChart
                            data={data}
                            width={500}
                            height={250}
                            x={0}
                            y={0}
                        />
                    </svg>
                </div>
        );
    }
}

export default BarChartContainer;