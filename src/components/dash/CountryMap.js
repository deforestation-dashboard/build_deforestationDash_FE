import React from 'react';
import Plot from 'react-plotly.js';
import { countries } from '../../data/countryLocations';

const CountryMap = (props) => {
	const filteredByYear = props.rawData.filter((item) => item.year === props.year);
	const locationsArray = filteredByYear.map((item) => item.country);
	const zArray = filteredByYear.map((item) => item.forest_propotion_to_land);

	// let selectedYear = 1990;
	// const selectYear = (e, year) => {
	// 	e.preventDefault();
	// 	selectedYear = year;
	// 	filteredByYear = props.rawData.filter((item) => item.year === selectedYear);
	// 	console.log(selectedYear);
	// };
	console.log('countrydata', props.countryData[0].country);

	const latitude = props.countryData[0].country ? countries[props.countryData[0].country].lat : '9.748917';
	console.log(latitude);
	const longitude = props.countryData[0].country ? countries[props.countryData[0].country].lon : '-83.753428';
	console.log(longitude);

	//Country Selection--- by double clicking---

	let lastClick = null;

	const clicked = (e) => {
		let firstClick = now();
		if (firstClick - lastClick < 300) {
			console.log(e.points[0].location, e.points[0]);
			props.selectCountryAndYear(e.points[0].location);
		} else {
			lastClick = firstClick;
		}
	};

	const now = () => {
		return new Date().getTime();
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
						colorscale     : [
							[ 0, 'rgb(214,249,207)' ],
							[ 0.09090909090909091, 'rgb(186,228,174)' ],
							[ 0.18181818181818182, 'rgb(156,209,143)' ],
							[ 0.2727272727272727, 'rgb(124,191,115)' ],
							[ 0.36363636363636365, 'rgb(85,174,91)' ],
							[ 0.45454545454545453, 'rgb(37,157,81)' ],
							[ 0.5454545454545454, 'rgb(7,138,78)' ],
							[ 0.6363636363636364, 'rgb(13,117,71)' ],
							[ 0.7272727272727273, 'rgb(23,95,61)' ],
							[ 0.8181818181818182, 'rgb(25,75,49)' ],
							[ 0.9090909090909091, 'rgb(23,55,35)' ],
							[ 1, 'rgb(17,36,20)' ]
						],
						zmin           : 0,
						zmax           : 100,
						colorbar       : {
							lenmode : 'pixels',
							len     : 400
						}
					}
				]}
				layout={{
					width         : 1100,
					height        : 500,
					margin        : {
						l : 0,
						r : 0,
						t : 0,
						b : 0
					},
					clickmode     : 'event+select',

					paper_bgcolor : '#ffffff',

					// title         : {
					// 	text : `Tree Coverage - 2000`,
					// 	pad  : { t: 0, b: 0 }
					// },

					geo           : {
						center     : {
							lon : longitude,
							lat : latitude
						},

						landcolor  : 'rgb(200, 212, 227)',
						showlakes  : true,
						showocean  : true,
						framecolor : 'rgb(200, 212, 227)',
						framewidth : 0.5,
						oceancolor : 'rgb(15, 9, 132)',

						projection : {
							type  : 'robinson',
							scale : 7
						}
					}
				}}
			/>
		</div>
	);
};

export default CountryMap;
