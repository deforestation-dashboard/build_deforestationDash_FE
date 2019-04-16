import React from 'react';
import Plot from 'react-plotly.js';

const Map2005 = (props) => {
	// console.log('from map', data[0].locations);
	const filteredByYear = props.rawData.filter((item) => item.year === 2005);
	const locationsArray = filteredByYear.map((item) => item.entity);
	const zArray = filteredByYear.map((item) => item.percent);

	const clicked = (e) => {
		console.log(e.points[0].location, e.points[0]);
	};

	return (
		<div>
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
						colorscale     : [ [ 0, '#f9f7b1' ], [ 1, '#186806' ] ],
						zmin           : 0,
						zmax           : 100
					}
				]}
				layout={{
					width         : 1300,
					height        : 800,
					clickmode     : 'event+select',

					paper_bgcolor : '#ffffff',

					title         : 'Tree Coverage - 2005',

					geo           : {
						landcolor  : 'rgb(200, 212, 227)',
						showlakes  : true,
						showocean  : true,
						framecolor : 'rgb(200, 212, 227)',
						framewidth : 0.5,
						oceancolor : 'rgb(15, 9, 132)',

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

export default Map2005;
