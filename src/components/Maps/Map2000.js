import React from 'react';
import Plot from 'react-plotly.js';

import { getYEAR } from '../../actions';

// let selectedYear = 1990;
// const selectYear = (e, year) => {
// 	selectedYear = year;
// 	console.log(selectedYear);
// 	return year;
// };

const Map2000 = (props) => {
	// let selectedYear = 1990;
	// const selectYear = (e, year) => {
	// 	e.preventDefault();
	// 	selectedYear = year;
	// 	console.log(selectedYear);
	// 	return selectedYear;
	// };

	// console.log('from map', data[0].locations);
	let filteredByYear = props.rawData.filter((item) => item.year === selectedYear);
	const locationsArray = filteredByYear.map((item) => item.entity);
	const zArray = filteredByYear.map((item) => item.percent);

	const clicked = (e) => {
		console.log(e.points[0].location, e.points[0]);
	};

	let selectedYear = 1990;
	const selectYear = (e, year) => {
		e.preventDefault();
		selectedYear = year;
		filteredByYear = props.rawData.filter((item) => item.year === selectedYear);
		console.log(selectedYear);
	};

	// const selectYear = (e, year) => {
	// 	e.preventDefault();
	// 	getYEAR(year);
	// };

	return (
		<div>
			<button onClick={(e) => selectYear(e, 1990)}>1990</button>
			<button onClick={(e) => selectYear(e, 2000)}>2000</button>
			<button onClick={(e) => selectYear(e, 2005)}>2005</button>
			<button onClick={(e) => selectYear(e, 2010)}>2010</button>
			<button onClick={(e) => selectYear(e, 2015)}>2015</button>
			<Plot
				onClick={(e) => {
					console.log('onClick');
					clicked(e);
				}}
				data={[
					{
						type           : 'choropleth',
						locationmode   : 'country names',
						locations      : locationsArray,
						z              : zArray,
						autocolorscale : false,
						colorscale     : [ [ 0, '#f9f7b1' ], [ 1, '#186806' ] ]
					}
				]}
				layout={{
					width         : 1300,
					height        : 800,
					clickmode     : 'event+select',

					paper_bgcolor : '#131326',

					title         : `Tree Coverage - ${selectedYear}`,

					geo           : {
						landcolor  : 'rgb(200, 212, 227)',
						showlakes  : true,
						showocean  : true,
						framecolor : 'rgb(200, 212, 227)',
						framewidth : 0.5,
						oceancolor : 'rgb(15, 9, 132)',
						// locationssrc : 'Algeria',

						projection : {
							type  : 'robinson',
							scale : 1
						}
					}
				}}
			/>
		</div>
	);
};

export default Map2000;
