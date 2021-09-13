import React from "react";
import ChartBar from "../ChartBar/ChartBar";
import "./Chart.css";

function Chart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label} //unique identifier
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart;