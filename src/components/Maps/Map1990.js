import React from 'react';
import Plot from 'react-plotly.js';

const Map1990 = (props) => {
	// console.log('from map', data[0].locations);
	const filteredByYear = props.rawData.filter((item) => item.year === 1990);
	const locationsArray = filteredByYear.map((item) => item.entity);
	const zArray = filteredByYear.map((item) => item.percent);
	return (
		<div>
			<Plot
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
					width  : 1300,
					height : 800,

					title  : 'Tree Coverage - 1990',

					geo    : {
						landcolor  : 'rgb(200, 212, 227)',
						showlakes  : true,
						showocean  : true,
						framecolor : 'rgb(200, 212, 227)',
						framewidth : 0.5,
						oceancolor : 'rgb(15, 9, 132)',

						projection : {
							type : 'robinson'
						}
					}
				}}
			/>
		</div>
	);
};

export default Map1990;
