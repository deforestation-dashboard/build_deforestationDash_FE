import React from 'react';
import Plot from 'react-plotly.js';

const Graph1 = (props) => {
	console.log('graph2', props.countryData.map((item) => item.forest_area_km));
	// const yearArr = props.countryData.map((item) => item.year);
	const forestAreaArray = props.countryData.map((item) => {
		return item.wood_removal === '0' ? null : item.forest_area_km;
	});
	const woodRemovalArr = props.countryData.map((item) => {
		return item.wood_removal === '0' ? null : item.wood_removal;
	});
	console.log(forestAreaArray);
	return (
		<div className="wood-removal">
			<h3>Forest Area and Wood Removal</h3>
			<Plot
				data={[
					{
						type : 'scatter',
						uid  : '499dd25d-1b12-40a9-833f-cb1227b92266',
						xsrc : 'joshdsolis:19:6954e1',
						x    : forestAreaArray,
						ysrc : 'joshdsolis:19:39e317',
						y    : woodRemovalArr
					}
				]}
			/>
		</div>
	);
};

export default Graph1;
