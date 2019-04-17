import React from 'react';
import Plot from 'react-plotly.js';

import { getYEAR } from '../../actions';

const Map2000 = (props) => {
	const filteredByYear = props.rawData.filter((item) => item.year === 2000);
	const locationsArray = filteredByYear.map((item) => item.country);
	const zArray = filteredByYear.map((item) => item.forest_propotion_to_land);
	props.plotlyMapData[0].locations = locationsArray;
	props.plotlyMapData[0].z = zArray;

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
				data={props.plotlyMapData}
				layout={props.plotlyMapLayout}
			/>
		</div>
	);
};

export default Map2000;
