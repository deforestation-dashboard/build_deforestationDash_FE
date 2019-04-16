import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Maps from './components/Maps/Maps';
import Dash from './components/Dash';
import { getData, getYEAR } from './actions';

class App extends Component {
	componentDidMount() {
		this.props.getData();
	}

	selectYear = (e, year) => {
		// e.preventDefault();
		getYEAR(year);
	};

	render() {
		if (this.props.loading) {
			return <h2>Loading...</h2>;
		}

		return (
			<Router>
				<div className="App">
					<button onClick={(e) => this.selectYear(e, 1990)}>1990</button>
					<button onClick={(e) => this.selectYear(e, 2000)}>2000</button>
					<button onClick={(e) => this.selectYear(e, 2005)}>2005</button>
					<button onClick={(e) => this.selectYear(e, 2010)}>2010</button>
					<button onClick={(e) => this.selectYear(e, 2015)}>2015</button>
					<h1>{this.props.data.message}</h1>
					<Maps rawData={this.props.data} />
					<Dash />
				</div>
			</Router>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('from App', state);
	return {
		loading : state.mapReducer.loading,
		data    : state.mapReducer.data
	};
};

export default connect(mapStateToProps, { getData, getYEAR })(App);
