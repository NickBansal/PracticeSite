import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Visuals = ({ countryData }) => {
	const ref = useRef();

	useEffect(() => {
		const sample = [
			{
				language: 'Rust',
				value: 78.9,
				color: '#000000'
			},
			{
				language: 'Kotlin',
				value: 75.1,
				color: '#00a2ee'
			},
			{
				language: 'Python',
				value: 68.0,
				color: '#fbcb39'
			},
			{
				language: 'TypeScript',
				value: 67.0,
				color: '#007bc8'
			},
			{
				language: 'Go',
				value: 65.6,
				color: '#65cedb'
			}
		];
		const margin = 30;
		const width = 600 - 2 * margin;
		const height = 400 - 2 * margin;

		const svg = d3.select(ref.current);

		const chart = svg
			.append('g')
			.attr('transform', `translate(${margin}, ${margin})`);

		const xScale = d3
			.scaleBand()
			.range([0, width])
			.domain(sample.map(s => s.language))
			.padding(0.4);

		const yScale = d3
			.scaleLinear()
			.range([height, 0])
			.domain([0, 100]);

		// const makeXLines = () => d3.axisBottom().scale(xScale);

		const makeYLines = () => d3.axisLeft().scale(yScale);

		chart
			.append('g')
			.attr('transform', `translate(0, ${height})`)
			.call(d3.axisBottom(xScale));

		chart.append('g').call(d3.axisLeft(yScale));

		chart
			.append('g')
			.attr('class', 'grid')
			.call(
				makeYLines()
					.tickSize(-width, 0, 0)
					.tickFormat('')
			);
	}, []);

	return (
		<>
			{countryData ? (
				<>
					<h2>{countryData.country}</h2>
					<svg
						ref={ref}
						style={{
							height: '400px',
							width: '600px'
						}}
					/>
				</>
			) : (
				<h1>No data to show </h1>
			)}
		</>
	);
};

export default Visuals;
