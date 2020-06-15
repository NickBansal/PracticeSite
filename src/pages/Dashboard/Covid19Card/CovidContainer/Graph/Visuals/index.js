import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { colors } from '../../../../../../utils/globalStyles/constants';

const Visuals = ({ countryData }) => {
	const ref = useRef();

	useEffect(() => {
		const {
			active,
			cases,
			deaths,
			recovered,
			tests,
			population
		} = countryData;

		const percentages = value => (value / population) * 100;

		const sample = [
			{
				option: 'Active',
				value: percentages(active),
				color: '#000000'
			},
			{
				option: 'Cases',
				value: percentages(cases),
				color: '#00a2ee'
			},
			{
				option: 'Deaths',
				value: percentages(deaths),
				color: '#fbcb39'
			},
			{
				option: 'Recovered',
				value: percentages(recovered),
				color: '#007bc8'
			},
			{
				option: 'Tests',
				value: percentages(tests),
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
			.domain(sample.map(s => s.option))
			.padding(0.4);

		const yScale = d3
			.scaleLinear()
			.range([height, 0])
			.domain([0, Math.round(percentages(tests)) + 2]);

		chart
			.append('g')
			.attr('transform', `translate(0, ${height})`)
			.call(d3.axisBottom(xScale));

		chart.append('g').call(d3.axisLeft(yScale));

		const makeYLines = () => d3.axisLeft().scale(yScale);

		chart
			.append('g')
			.attr('class', 'grid')
			.call(
				makeYLines()
					.tickSize(-width, 0, 0)
					.tickFormat('')
			)
			.style('color', '#fffcfc47');

		const barGroups = chart
			.selectAll()
			.data(sample)
			.enter()
			.append('g');

		barGroups
			.append('rect')
			.attr('class', 'bar')
			.attr('x', g => xScale(g.option))
			.attr('y', g => yScale(g.value))
			.attr('height', g => height - yScale(g.value))
			.attr('width', xScale.bandwidth())
			.style('fill', colors.darkYellow)
			.style('font-size', '18px');

		// .on('mouseenter', (actual, i) => {
		// 	d3.selectAll('.value').attr('opacity', 0);

		// 	d3.select(this)
		// 		.transition()
		// 		.duration(300)
		// 		.attr('opacity', 0.6)
		// 		.attr('x', a => xScale(a.option) - 5)
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
		// 		.attr('x', a => xScale(a.option) + xScale.bandwidth() / 2)
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
		// 		.attr('x', a => xScale(a.option))
		// 		.attr('width', xScale.bandwidth());

		// 	chart.selectAll('#limit').remove();
		// 	chart.selectAll('.divergence').remove();
		// });

		barGroups
			.append('text')
			.attr('class', 'value')
			.attr('x', a => xScale(a.option) + xScale.bandwidth() / 2)
			.attr('y', a => yScale(a.value) - 20)
			.attr('text-anchor', 'middle')
			.style('font-size', '18px')
			.style('fill', 'white')
			.text(a => `${a.value.toFixed(2)}%`);

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
			.style('fill', colors.darkYellow)
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
