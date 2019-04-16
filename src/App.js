import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Maps from './components/Maps/Maps';
import Dash from './components/Dash';
import { getData } from './actions';

class App extends Component {
	componentDidMount() {
		this.props.getData();
	}

	render() {
		if (this.props.loading) {
			return <h2>Loading...</h2>;
		}

		return (
			<Router>
				<div className="App">
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

export default connect(mapStateToProps, { getData })(App);
