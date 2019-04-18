import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './App.css';

import Maps from './components/Maps/Maps';
import Dash from './components/dash/Dash';
import { getData, getYEAR, getCountry } from './actions';

class App extends Component {
	componentDidMount() {
		this.props.getData();
		this.props.getCountry(2015, 'Costa Rica');
	}

	// selectYear = (e, year) => {
	// 	e.preventDefault();
	// 	this.props.getYEAR(year);
	// };

	selectCountryAndYear = (country) => {
		this.props.getCountry(country);
		console.log('from app', country);
	};

	render() {
		if (this.props.loading) {
			return <h2>Loading...</h2>;
		}

		return (
			<Router>
				<div className="App">
					{/* <button onClick={(e) => this.selectYear(e, 1990)}>1990</button>
					<button onClick={(e) => this.selectYear(e, 2000)}>2000</button>
					<button onClick={(e) => this.selectYear(e, 2005)}>2005</button>
					<button onClick={(e) => this.selectYear(e, 2010)}>2010</button>
					<button onClick={(e) => this.selectYear(e, 2015)}>2015</button> */}
					<h1>Deforestation Dash</h1>
					<nav className="nav">
						<NavLink className="link" activeClassName="activeNav" to="/world/2015">
							Full Page Map
						</NavLink>
						<NavLink className="link" activeClassName="activeNav" to="/dash/country/2015">
							Dashboard
						</NavLink>
					</nav>

					<Route path="/world" render={() => <Maps rawData={this.props.data} />} />
					<Route
						path="/dash/country"
						render={() => (
							<Dash
								rawData={this.props.data}
								countryData={this.props.countryData}
								selectCountryAndYear={this.selectCountryAndYear}
								countryLoading={this.props.countryLoading}
							/>
						)}
					/>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('from App', state);
	return {
		loading        : state.mapReducer.loading,
		data           : state.mapReducer.data,
		countryLoading : state.countryReducer.loading,
		countryData    : state.countryReducer.data
	};
};

export default connect(mapStateToProps, { getData, getYEAR, getCountry })(App);
