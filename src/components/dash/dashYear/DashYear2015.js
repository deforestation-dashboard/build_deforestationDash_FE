import React from 'react';
import Plot from 'react-plotly.js';
import { NavLink } from 'react-router-dom';

import InfoCard from './InfoCard';
import CountryMap from '../CountryMap';

const DashYear2015 = (props) => {
	const filteredByYear = props.countryData.filter((item) => item.year === 2015);
	const locationsArray = filteredByYear.map((item) => item.country);
	const zArray = filteredByYear.map((item) => item.forest_propotion_to_land);

	console.log('fromDashYear2015', filteredByYear);

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
					<CountryMap rawData={props.rawData} countryData={props.countryData} year={2015} />
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
				<Plot
					data={[
						{
							x      : [ 1, 2, 3 ],
							y      : [ 2, 6, 3 ],
							type   : 'scatter',
							mode   : 'lines+points',
							marker : { color: 'red' }
						},
						{
							type : 'bar',
							x    : [ 1, 2, 3 ],
							y    : [ 2, 5, 3 ]
						}
					]}
					layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
				/>
				<InfoCard countryData={filteredByYear[0]} />
			</div>
		</div>
	);
};

export default DashYear2015;
