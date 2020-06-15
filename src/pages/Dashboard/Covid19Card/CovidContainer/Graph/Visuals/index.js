import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { colors } from '../../../../../../utils/globalStyles/constants';
import { graphData, percentages } from './utils';

const Visuals = ({ countryData }) => {
	const ref = useRef();

	useEffect(() => {
		const { tests, population, country } = countryData;

		const sample = graphData(countryData);
		const margin = 60;
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
			.domain([0, Math.round(percentages(tests, population)) + 1]);

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
			.style('fill', colors.darkYellow);

		barGroups
			.append('text')
			.attr('class', 'value')
			.attr('x', a => xScale(a.option) + xScale.bandwidth() / 2)
			.attr('y', a => yScale(a.value) - 6)
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
			.style('font-size', '18px')
			.style('fill', 'white')
			.text('Percentages by population (%)');

		svg.append('text')
			.attr('class', 'title')
			.attr('x', width / 2 + margin)
			.attr('y', 40)
			.attr('text-anchor', 'middle')
			.style('fill', colors.darkYellow)
			.text(`${country}`)
			.style('font-size', '22px');

		console.log(svg.select('x').selectAll('text'));
	}, [countryData]);

	return (
		<>
			{countryData ? (
				<svg
					ref={ref}
					style={{
						height: '400px',
						width: '600px'
					}}
				/>
			) : (
				<h1>No data to show </h1>
			)}
		</>
	);
};

export default Visuals;
