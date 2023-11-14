import React, { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";

function LineChart({ chartData, chartLabels, chartTitle }) {
	const [labels, setLabels] = useState([]);
	const [dataset, setDataset] = useState([]);

	useEffect(() => {
		if (chartData?.length > 0 && chartLabels?.length > 0) {
			setLabels(chartLabels);
			setDataset(chartData);
		} else {
			setLabels([
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
			]);
			setDataset([65, 59, 80, 81, 56, 55, 40]);
		}
	}, [chartData, chartLabels]);

	const data = {
		labels: labels,
		datasets: [
			{
				label: chartTitle || "My First dataset",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: dataset,
			},
		],
	};

	return (
		<div>
			<Line data={data} />
		</div>
	);
}
export default LineChart;
