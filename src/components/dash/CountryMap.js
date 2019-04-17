import React from 'react';
import Plot from 'react-plotly.js';
import { countries } from '../../data/countryLocations';

const CountryMap = (props) => {
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
	console.log('countrydata', props.countryData.country);

	const latitude = props.countryData.country ? countries[props.countryData.country].lat : '9.748917';
	console.log(latitude);
	const longitude = props.countryData.country ? countries[props.countryData.country].lon : '-83.753428';
	console.log(longitude);
	// if (props.countryData.country) {
	// 	console.log(countries[props.countryData.country]);
	// 			return countries[props.countryData.country].lat
	// }

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
					width         : 600,
					height        : 500,
					clickmode     : 'event+select',

					paper_bgcolor : '#ffffff',

					margin        : {
						pad        : 0,
						autoexpand : true
					},

					title         : {
						text : `Tree Coverage - 2000`,
						pad  : { t: 0, b: 0 }
					},

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
							type  : 'natural earth',
							scale : 7
						}
					}
				}}
			/>
		</div>
	);
};

export default CountryMap;
