import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Visuals = ({ countryData }) => {
	const ref = useRef();

	useEffect(() => {
		const svgElement = d3.select(ref.current);
		svgElement
			.append('svg')
			.attr('width', 700)
			.attr('height', 300);

		svgElement
			.selectAll('rect')
			.data([1, 20, 30, 40])
			.enter()
			.append('rect')
			.attr('x', (d, i) => i * 70)
			.attr('y', 0)
			.attr('width', 25)
			.attr('height', d => d)
			.attr('fill', 'green');
	}, []);

	return (
		<>
			{countryData ? (
				<>
					<h2>{countryData.country}</h2>
					<svg ref={ref} />
				</>
			) : (
				<h1>No data to show </h1>
			)}
		</>
	);
};

export default Visuals;
