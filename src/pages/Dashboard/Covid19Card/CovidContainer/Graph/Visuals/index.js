import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Visuals = ({ countryData }) => {
	const ref = useRef();

	console.log(countryData);

	useEffect(() => {
		const sample = [
			{
				language: 'Active',
				value: 78.9,
				color: '#000000'
			},
			{
				language: 'Cases',
				value: 75.1,
				color: '#00a2ee'
			},
			{
				language: 'Deaths',
				value: 68.0,
				color: '#fbcb39'
			},
			{
				language: 'Recovered',
				value: 67.0,
				color: '#007bc8'
			},
			{
				language: 'Tests',
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

		chart
			.append('g')
			.attr('transform', `translate(0, ${height})`)
			.call(d3.axisBottom(xScale));

		chart.append('g').call(d3.axisLeft(yScale));

		// const makeYLines = () => d3.axisLeft().scale(yScale);

		// chart.append('g').attr('class', 'grid');
		// .call(
		// 	makeYLines()
		// 		.tickSize(-width, 0, 0)
		// 		.tickFormat('')
		// );

		const barGroups = chart
			.selectAll()
			.data(sample)
			.enter()
			.append('g')
			.attr('background', 'yellow');

		barGroups
			.append('rect')
			.attr('class', 'bar')
			.attr('x', g => xScale(g.language))
			.attr('y', g => yScale(g.value))
			.attr('height', g => height - yScale(g.value))
			.attr('width', xScale.bandwidth())
			.style('fill', 'yellow')
			.style('font-size', '18px');

		// .on('mouseenter', (actual, i) => {
		// 	d3.selectAll('.value').attr('opacity', 0);

		// 	d3.select(this)
		// 		.transition()
		// 		.duration(300)
		// 		.attr('opacity', 0.6)
		// 		.attr('x', a => xScale(a.language) - 5)
		// 		.attr('width', xScale.bandwidth() + 10);

		// 	const y = yScale(actual.value);

		// 	chart
		// 		.append('line')
		// 		.attr('id', 'limit')
		// 		.attr('x1', 0)
		// 		.attr('y1', y)
		// 		.attr('x2', width)
		// 		.attr('y2', y);

		// 	barGroups
		// 		.append('text')
		// 		.attr('class', 'divergence')
		// 		.attr('x', a => xScale(a.language) + xScale.bandwidth() / 2)
		// 		.attr('y', a => yScale(a.value) + 30)
		// 		.attr('fill', 'white')
		// 		.attr('text-anchor', 'middle')
		// 		.text((a, idx) => {
		// 			const divergence = (a.value - actual.value).toFixed(1);

		// 			let text = '';
		// 			if (divergence > 0) text += '+';
		// 			text += `${divergence}%`;

		// 			return idx !== i ? text : '';
		// 		});
		// })
		// .on('mouseleave', () => {
		// 	d3.selectAll('.value').attr('opacity', 1);

		// 	d3.select(this)
		// 		.transition()
		// 		.duration(300)
		// 		.attr('opacity', 1)
		// 		.attr('x', a => xScale(a.language))
		// 		.attr('width', xScale.bandwidth());

		// 	chart.selectAll('#limit').remove();
		// 	chart.selectAll('.divergence').remove();
		// });

		barGroups
			.append('text')
			.attr('class', 'value')
			.attr('x', a => xScale(a.language) + xScale.bandwidth() / 2)
			.attr('y', a => yScale(a.value) + 30)
			.attr('text-anchor', 'middle')
			.text(a => `${a.value}%`)
			.style('font-size', '18px');

		svg.append('text')
			.attr('class', 'label')
			.attr('x', -(height / 2) - margin)
			.attr('y', margin / 2.4)
			.attr('transform', 'rotate(-90)')
			.attr('text-anchor', 'middle')
			.text('Love meter (%)');

		svg.append('text')
			.attr('class', 'title')
			.attr('x', width / 2 + margin)
			.attr('y', 40)
			.attr('text-anchor', 'middle')
			.style('fill', 'yellow')
			.text('Percentages by country')
			.style('font-size', '18px');
	}, [countryData]);

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