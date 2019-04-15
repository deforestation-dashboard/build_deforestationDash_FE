import React from 'react';
import Plot from 'react-plotly.js';

import { data } from '../Plot 69.json';

const Map = (props) => {
	// console.log('from map', data[0].locations);

	const locationsArray = props.rawData.map((item) => item.entity);
	const zArray = props.rawData.map((item) => item.percent);
	return (
		<div>
			<Plot
				// data={data}
				data={[
					{
						type           : 'choropleth',
						locationmode   : 'country names',
						locations      : locationsArray,
						z              : zArray,
						autocolorscale : true
					}
				]}
				layout={{
					// colorscale : sequential,
					landcolor  : 'rgb(200, 212, 227)',
					showlakes  : true,
					showocean  : true,
					// framecolor : 'rgb(200, 212, 227)',
					// framewidth : 0.5,
					oceancolor : 'rgb(255, 255, 255)',
					width      : 1100,
					height     : 800,
					title      : 'Tree Coverage',
					geo        : {
						projection : {
							type : 'robinson'
						}
					}
				}}
			/>
		</div>
	);
};

export default Map;
