import React from 'react';
import Plot from 'react-plotly.js';

class Dash extends React.Component {
	render() {
		return (
			<div className="dash-container">
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
