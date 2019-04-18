import React from 'react';
import Plot from 'react-plotly.js';
import { NavLink, Route } from 'react-router-dom';

import Form from './Form';
import Graph1 from './Graph1';

import DashYear1990 from './dashYear/DashYear1990';
import DashYear1995 from './dashYear/DashYear1995';
import DashYear2000 from './dashYear/DashYear2000';
import DashYear2005 from './dashYear/DashYear2005';
import DashYear2010 from './dashYear/DashYear2010';
import DashYear2015 from './dashYear/DashYear2015';
import DashYear2020 from './dashYear/DashYear2020';

class Dash extends React.Component {
	render() {
		if (this.props.countryLoading) {
			return <h2>Loading</h2>;
		}

		return (
			<div className="dash-container">
				<Form
					rawData={this.props.rawData}
					countryData={this.props.countryData}
					countryLoading={this.props.countryLoading}
					selectCountryAndYear={this.props.selectCountryAndYear}
				/>
				{/* <div className="dash-year-links">
					<NavLink className="year" to="/dash/country/1990">
						1990
					</NavLink>
					<NavLink className="year" to="/dash/country/2000">
						2000
					</NavLink>
					<NavLink className="year" to="/dash/country/2005">
						2005
					</NavLink>
					<NavLink className="year" to="/dash/country/2010">
						2010
					</NavLink>
					<NavLink className="year" to="/dash/country/2015">
						2015
					</NavLink>
				</div> */}

				<Route
					path="/dash/country/1990"
					render={() => <DashYear1990 rawData={this.props.rawData} countryData={this.props.countryData} />}
				/>
				<Route
					path="/dash/country/1995"
					render={() => <DashYear1995 rawData={this.props.rawData} countryData={this.props.countryData} />}
				/>
				<Route
					path="/dash/country/2000"
					render={() => <DashYear2000 rawData={this.props.rawData} countryData={this.props.countryData} />}
				/>
				<Route
					path="/dash/country/2005"
					render={() => <DashYear2005 rawData={this.props.rawData} countryData={this.props.countryData} />}
				/>
				<Route
					path="/dash/country/2010"
					render={() => <DashYear2010 rawData={this.props.rawData} countryData={this.props.countryData} />}
				/>
				<Route
					path="/dash/country/2015"
					render={() => <DashYear2015 rawData={this.props.rawData} countryData={this.props.countryData} />}
				/>
				<Route
					path="/dash/country/2020"
					render={() => <DashYear2020 rawData={this.props.rawData} countryData={this.props.countryData} />}
				/>
				{/* <Graph1 /> */}
			</div>
		);
	}
}

export default Dash;
