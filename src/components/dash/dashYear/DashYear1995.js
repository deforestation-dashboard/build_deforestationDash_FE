import React from 'react';
import Plot from 'react-plotly.js';
import { NavLink } from 'react-router-dom';

import InfoCard from './InfoCard';
import CountryMap from '../CountryMap';
import DashYearLinks from './DashYearLinks';

import Graph1 from '../Graph1';
import Graph2 from '../Graph2';
import Graph3 from '../Graph3';

const DashYear1995 = (props) => {
	const filteredByYear = props.countryData.filter((item) => item.year === 1995);
	const locationsArray = filteredByYear.map((item) => item.country);
	const zArray = filteredByYear.map((item) => item.forest_propotion_to_land);

	console.log('fromDashYear1995', filteredByYear);

	if (!filteredByYear[0]) {
		console.log('filteredByYear load');
		return 'Loading...';
	}
	if (!props.rawData) {
		console.log('rawData load');
		return 'Loading...';
	}

	return (
		<div className="dash-year">
			<div className="country-map-container">
				{props.countryData && (
					<CountryMap
						rawData={props.rawData}
						countryData={props.countryData}
						year={1995}
						selectCountryAndYear={props.selectCountryAndYear}
					/>
				)}
			</div>
			<DashYearLinks />
			<div className="right-container">
				<InfoCard countryData={filteredByYear[0]} />
				<Graph1 countryData={props.countryData} />
				<Graph2 countryData={props.countryData} />
				<Graph3 countryData={props.countryData} />
			</div>
		</div>
	);
};

export default DashYear1995;
