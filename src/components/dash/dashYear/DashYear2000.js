import React from 'react';
import Plot from 'react-plotly.js';
import { NavLink } from 'react-router-dom';

import InfoCard from './InfoCard';
import CountryMap from '../CountryMap';

import Graph1 from '../Graph1';
import Graph2 from '../Graph2';
import Graph3 from '../Graph3';

const DashYear2000 = (props) => {
	const filteredByYear = props.countryData.filter((item) => item.year === 2000);
	const locationsArray = filteredByYear.map((item) => item.country);
	const zArray = filteredByYear.map((item) => item.forest_propotion_to_land);

	console.log('fromDashYear1990', filteredByYear);

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
					<CountryMap rawData={props.rawData} countryData={props.countryData} year={2000} />
				)}
			</div>
			<div className="dash-year-links">
				<NavLink className="year" activeClassName="activeYear" to="/dash/country/1990">
					1990
				</NavLink>
				<NavLink className="year" activeClassName="activeYear" to="/dash/country/1995">
					1995
				</NavLink>
				<NavLink className="year" activeClassName="activeYear" to="/dash/country/2000">
					2000
				</NavLink>
				<NavLink className="year" activeClassName="activeYear" to="/dash/country/2005">
					2005
				</NavLink>
				<NavLink className="year" activeClassName="activeYear" to="/dash/country/2010">
					2010
				</NavLink>
				<NavLink className="year" activeClassName="activeYear" to="/dash/country/2015">
					2015
				</NavLink>
				<NavLink className="year" activeClassName="activeYear" to="/dash/country/2020">
					2020
				</NavLink>
			</div>
			<div className="right-container">
				<InfoCard countryData={filteredByYear[0]} />
				<Graph1 countryData={props.countryData} />
				<Graph2 countryData={props.countryData} />
				<Graph3 countryData={props.countryData} />
			</div>
		</div>
	);
};

export default DashYear2000;
