import React from 'react';
import Plot from 'react-plotly.js';

import Form from './Form';
import CountryMap from './CountryMap';

class Dash extends React.Component {
	render() {
		if (this.props.countryLoading) {
			return <h2>Loading</h2>;
		}

		return (
			<div className="dash-container">
				{this.props.countryData && (
					<CountryMap rawData={this.props.rawData} countryData={this.props.countryData} />
				)}
				<Form
					rawData={this.props.rawData}
					countryData={this.props.countryData}
					selectCountryAndYear={this.props.selectCountryAndYear}
				/>

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
			</div>
		);
	}
}

export default Dash;
