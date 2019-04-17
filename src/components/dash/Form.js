import React from 'react';

class Form extends React.Component {
	state = {
		year    : 0,
		country : ''
	};

	handleChanges = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	findCountry = (e) => {
		e.preventDefault();
		console.log(this.state.year, this.state.country);
		this.props.selectCountryAndYear(this.state.year, this.state.country);
		this.setState({ year: 0, country: '' });
	};

	render() {
		return (
			<form className="form" onSubmit={this.findCountry}>
				<select
					type="text"
					name="country"
					value={this.state.country}
					placeholder="Costa Rica"
					onChange={this.handleChanges}
				>
					{this.props.rawData.map((item, index) => (
						<option key={index} value={item.country}>
							{item.country}
						</option>
					))}
				</select>

				<select
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
				</select>

				<button>Analyze Country</button>
			</form>
		);
	}
}

export default Form;
