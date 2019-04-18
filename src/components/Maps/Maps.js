import React from 'react';

import { Route, NavLink } from 'react-router-dom';

import Map1990 from './Map1990';
import Map1995 from './Map1995';
import Map2000 from './Map2000';
import Map2005 from './Map2005';
import Map2010 from './Map2010';
import Map2015 from './Map2015';
import Map2020 from './Map2020';

// plotlyMapData and plotlyMapLayout adjusts all Full Page Maps at once.
// location and z propteries set to null here so they can be set by each map's filtering functions
const plotlyMapData = [
	{
		type           : 'choropleth',
		locationmode   : 'country names',
		locations      : null,
		z              : null,
		autocolorscale : false,
		colorscale     : [
			[ 0, 'rgb(135, 104, 67)' ], //brown
			[ 0.1, 'rgb(211, 178, 139)' ], //brown
			[ 0.2, 'rgb(139, 219, 81)' ], //lightest green
			[ 0.3, 'rgb(105, 163, 62)' ],
			[ 0.5, 'rgb(74, 124, 37)' ],
			[ 0.6, 'rgb(52, 96, 19)' ],
			[ 0.7, 'rgb(35, 71, 8)' ],
			[ 1, 'rgb(25, 56, 1)' ] // darkest green
		],
		zmin           : 0,
		zmax           : 100,
		colorbar       : {
			lenmode : 'pixels',
			len     : 500
		}
	}
];

const plotlyMapLayout = {
	width         : 1100,
	height        : 510,
	margin        : {
		l : 0,
		r : 0,
		t : 0,
		b : 0
	},
	clickmode     : 'event+select',

	paper_bgcolor : '#ffffff',

	geo           : {
		landcolor  : 'rgb(200, 212, 227)',
		showlakes  : true,
		showocean  : true,
		framecolor : 'rgb(200, 212, 227)',
		framewidth : 0.5,
		oceancolor : 'rgb(242, 249, 239)',

		projection : {
			type  : 'robinson',
			scale : 1
		}
	}
};

const Maps = (props) => {
	return (
		<div className="map-wrapper">
			<div className="year-links">
				<NavLink className="year" to="/world/1990">
					1990
				</NavLink>
				<NavLink className="year" to="/world/1995">
					1995
				</NavLink>
				<NavLink className="year" to="/world/2000">
					2000
				</NavLink>
				<NavLink className="year" to="/world/2005">
					2005
				</NavLink>
				<NavLink className="year" to="/world/2010">
					2010
				</NavLink>
				<NavLink className="year" to="/world/2015">
					2015
				</NavLink>
				<NavLink className="year" to="/world/2020">
					2020
				</NavLink>
			</div>
			<Route
				path="/world/1990"
				render={() => (
					<Map1990 rawData={props.rawData} plotlyMapData={plotlyMapData} plotlyMapLayout={plotlyMapLayout} />
				)}
			/>
			<Route
				path="/world/1995"
				render={() => (
					<Map1995 rawData={props.rawData} plotlyMapData={plotlyMapData} plotlyMapLayout={plotlyMapLayout} />
				)}
			/>
			<Route
				path="/world/2000"
				render={() => (
					<Map2000 rawData={props.rawData} plotlyMapData={plotlyMapData} plotlyMapLayout={plotlyMapLayout} />
				)}
			/>
			<Route
				path="/world/2005"
				render={() => (
					<Map2005 rawData={props.rawData} plotlyMapData={plotlyMapData} plotlyMapLayout={plotlyMapLayout} />
				)}
			/>
			<Route
				path="/world/2010"
				render={() => (
					<Map2010 rawData={props.rawData} plotlyMapData={plotlyMapData} plotlyMapLayout={plotlyMapLayout} />
				)}
			/>
			<Route
				path="/world/2015"
				render={() => (
					<Map2015 rawData={props.rawData} plotlyMapData={plotlyMapData} plotlyMapLayout={plotlyMapLayout} />
				)}
			/>
			<Route
				path="/world/2020"
				render={() => (
					<Map2020 rawData={props.rawData} plotlyMapData={plotlyMapData} plotlyMapLayout={plotlyMapLayout} />
				)}
			/>
		</div>
	);
};

export default Maps;
