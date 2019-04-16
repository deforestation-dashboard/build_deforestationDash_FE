import React from 'react';
import Plot from 'react-plotly.js';
import { Route, Link } from 'react-router-dom';

import { data } from '../../Plot 69.json';

import Map1990 from './Map1990';
import Map2015 from './Map2015';

const Maps = (props) => {
	// console.log('from map', data[0].locations);
	// const filteredByYear = props.rawData.filter((item) => item.year === 2015);
	// const locationsArray = filteredByYear.map((item) => item.entity);
	// const zArray = filteredByYear.map((item) => item.percent);
	return (
		<div>
			<Link to="/1990">1990</Link>
			<Link to="/2015">2015</Link>
			<Route path="/1990" render={() => <Map1990 rawData={props.rawData} />} />
			<Route path="/2015" render={() => <Map2015 rawData={props.rawData} />} />
			{/* <Plot
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
			/> */}
		</div>
	);
};

export default Maps;
