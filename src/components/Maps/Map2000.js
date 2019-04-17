import React from 'react';
import Plot from 'react-plotly.js';

import { getYEAR } from '../../actions';

const Map2000 = (props) => {
	const filteredByYear = props.rawData.filter((item) => item.year === 2000);
	const locationsArray = filteredByYear.map((item) => item.country);
	const zArray = filteredByYear.map((item) => item.forest_propotion_to_land);

	// let selectedYear = 1990;
	// const selectYear = (e, year) => {
	// 	e.preventDefault();
	// 	selectedYear = year;
	// 	filteredByYear = props.rawData.filter((item) => item.year === selectedYear);
	// 	console.log(selectedYear);
	// };

	return (
		<div>
			{/* <button onClick={(e) => selectYear(e, 1990)}>1990</button>
			<button onClick={(e) => selectYear(e, 2000)}>2000</button>
			<button onClick={(e) => selectYear(e, 2005)}>2005</button>
			<button onClick={(e) => selectYear(e, 2010)}>2010</button>
			<button onClick={(e) => selectYear(e, 2015)}>2015</button> */}
			<Plot
				data={[
					{
						type           : 'choropleth',
						locationmode   : 'country names',
						locations      : locationsArray,
						z              : zArray,
						autocolorscale : false,
						colorscale     : [ [ 0, '#f9f7b1' ], [ 1, '#186806' ] ],
						zmin           : 0,
						zmax           : 100
					}
				]}
				layout={{
					width         : 1100,
					height        : 800,
					clickmode     : 'event+select',

					paper_bgcolor : '#ffffff',

					geo           : {
						landcolor  : 'rgb(200, 212, 227)',
						showlakes  : true,
						showocean  : true,
						framecolor : 'rgb(200, 212, 227)',
						framewidth : 0.5,
						oceancolor : 'rgb(242, 249, 239)',

						projection : {
							type  : 'robinson',
							scale : 1.5
						}
					}
				}}
			/>
		</div>
	);
};

export default Map2000;
