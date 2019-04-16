import React from 'react';

import { Route } from 'react-router-dom';

import Map1990 from './Map1990';
import Map2000 from './Map2000';
import Map2005 from './Map2005';
import Map2010 from './Map2010';
import Map2015 from './Map2015';

const Maps = (props) => {
	return (
		<div className="map-wrapper">
			<Route path="/1990" render={() => <Map1990 rawData={props.rawData} />} />
			<Route path="/2000" render={() => <Map2000 rawData={props.rawData} />} />
			<Route path="/2005" render={() => <Map2005 rawData={props.rawData} />} />
			<Route path="/2010" render={() => <Map2010 rawData={props.rawData} />} />
			<Route path="/2015" render={() => <Map2015 rawData={props.rawData} />} />
		</div>
	);
};

export default Maps;
