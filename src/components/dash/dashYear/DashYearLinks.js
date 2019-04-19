import React from 'react';
import { NavLink } from 'react-router-dom';

const DashYearLinks = () => {
	return (
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
			<NavLink className="year" activeClassName="activeYear" exact to="/dash/country">
				2015
			</NavLink>
			<NavLink className="year" activeClassName="activeYear" to="/dash/country/2020">
				2020
			</NavLink>
			<NavLink className="year" activeClassName="activeYear" to="/dash/country/2025">
				2025
			</NavLink>
		</div>
	);
};

export default DashYearLinks;
