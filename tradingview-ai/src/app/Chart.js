"use client"

import ApexChart from 'react-apexcharts';

/**
 * props:
 * - candles
 * - support
 * - resistance
 */
export default function Chart(props) {

    const options = {
        xaxis: {
            type: 'datetime'
        }
    }

    const series = [{
        name: "candles",
        type: "candlestick",
        data: props.data.candles,
        stroke: { width: 1 },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    }, {
        name: "support",
        type: 'line',
        color: "navy",
        stroke: {
            width: 3,
            color: "navy"
        },
        data: props.data.support
    }, {
        name: "resistance",
        type: 'line',
        color: "green",
        stroke: { width: 3 },
        data: props.data.resistance
    }]

    return (
        <ApexChart options={options} series={series} width={800} height={600} />
    )
}