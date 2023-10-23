"use client"

import ApexChart from 'react-apexcharts';

export default function Chart(props) {

    const options = {
        xaxis: {
            type: 'datetime'
        }
    }

    const series = [{
        name: "candles",
        type: "candlestick",
        data: props.data.candles
    }, {
        name: "support",
        type: 'line',
        data: props.data.support
    }, {
        name: "resistance",
        type: 'line',
        data: props.data.resistance
    }]

    return (
        <ApexChart options={options} series={series} width={800} height={600} />
    )
}