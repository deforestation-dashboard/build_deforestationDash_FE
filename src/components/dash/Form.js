import React from 'react';
import { countries } from '../../data/countryLocations';

class Form extends React.Component {
	state = {
		year    : 2015,
		country : ''
	};

	handleChanges = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	findCountry = (e) => {
		e.preventDefault();
		e.persist(); // this doesn't do anything --- what is the correct way to get the selected options to persist?
		console.log(this.state.year, this.state.country);
		this.props.selectCountryAndYear(this.state.country);
		this.setState({ country: this.state.country });
	};

	render() {
		return (
			<form className="form" onSubmit={this.findCountry}>
				<select
					required
					type="text"
					name="country"
					value={this.state.country}
					placeholder="Costa Rica"
					onChange={this.handleChanges}
				>
					<option value="">Select a Country</option>
					{Object.keys(countries).map((item, index) => (
						<option key={index} value={item}>
							{item}
						</option>
					))}
				</select>

				{/* <select
					type="number"
					name="year"
					value={this.state.year}
					placeholder="2015"
					onChange={this.handleChanges}
				>
					<option value="1990">1990</option>
					<option value="2000">2000</option>
					<option value="2005">2005</option>
					<option value="2010">2010</option>
					<option value="2015">2015</option>
				</select> */}

				<button>Analyze</button>
			</form>
		);
	}
}

export default Form;
