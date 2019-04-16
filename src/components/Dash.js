import React from 'react';
import Plot from 'react-plotly.js';
import { NavLink } from 'react-router-dom';

class Dash extends React.Component {
	render() {
		return (
			<div className="dash-container">
				<div className="year-links">
					<NavLink className="year" to="/1990">
						1990
					</NavLink>
					<NavLink className="year" to="/2000">
						2000
					</NavLink>
					<NavLink className="year" to="/2005">
						2005
					</NavLink>
					<NavLink className="year" to="/2010">
						2010
					</NavLink>
					<NavLink className="year" to="/2015">
						2015
					</NavLink>
				</div>
				<div className="search">
					<input />
					<select>
						{this.props.rawData.map((item) => <option value={item.entity}>{item.entity}</option>)}
					</select>
				</div>
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
