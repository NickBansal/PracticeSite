export const percentages = (value, population) => (value / population) * 100;

export const graphData = ({
	population,
	active,
	cases,
	deaths,
	recovered,
	tests
}) => {
	return [
		{
			option: 'Active',
			value: percentages(active, population)
		},
		{
			option: 'Cases',
			value: percentages(cases, population)
		},
		{
			option: 'Deaths',
			value: percentages(deaths, population)
		},
		{
			option: 'Recovered',
			value: percentages(recovered, population)
		},
		{
			option: 'Tests',
			value: percentages(tests, population)
		}
	];
};
