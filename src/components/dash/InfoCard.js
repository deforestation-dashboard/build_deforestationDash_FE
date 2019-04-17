import React from 'react';

const InfoCard = (props) => {
	return (
		<div className="infoCard">
			<div className="basic-info column">
				<h2>{props.countryData.country}</h2>
				<p>{props.countryData.code}</p>
				<h3>{props.countryData.year}</h3>
			</div>
			<div className="column">
				<p>Forest Area: {props.countryData.forest_area_km}km</p>
				<p>Country Land Area: {props.countryData.country_land_area_km}km</p>
				<p>Forest Propotion to Land: {props.countryData.forest_propotion_to_land}</p>
				<p>Country Population: {props.countryData.country_population}</p>
			</div>
			<div className="column">
				<p>Wood Removal: {props.countryData.wood_removal}</p>
				<p>Total Land Usage: {props.countryData.total_land_usage}</p>
				<p>Protected Land: {props.countryData.percent_protected_land}%</p>
				<p>Mean Yearly Exposure to Pollution: {props.countryData.mean_yearly_exposure_pollution}</p>
			</div>
		</div>
	);
};

export default InfoCard;
