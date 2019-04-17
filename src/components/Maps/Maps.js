import React from 'react';

import { Route, NavLink } from 'react-router-dom';

import Map1990 from './Map1990';
import Map2000 from './Map2000';
import Map2005 from './Map2005';
import Map2010 from './Map2010';
import Map2015 from './Map2015';

const Maps = (props) => {
	return (
		<div className="map-wrapper">
			<div className="year-links">
				<NavLink className="year" to="/world/1990">
					1990
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
			</div>
			<Route path="/world/1990" render={() => <Map1990 rawData={props.rawData} />} />
			<Route path="/world/2000" render={() => <Map2000 rawData={props.rawData} />} />
			<Route path="/world/2005" render={() => <Map2005 rawData={props.rawData} />} />
			<Route path="/world/2010" render={() => <Map2010 rawData={props.rawData} />} />
			<Route path="/world/2015" render={() => <Map2015 rawData={props.rawData} />} />
		</div>
	);
};

export default Maps;
