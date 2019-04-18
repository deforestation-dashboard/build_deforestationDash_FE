import React from 'react';

const InfoCard = (props) => {
	const forestArea =
		props.countryData.forest_area_km === '0'
			? 'Data Unavailable'
			: props.countryData.forest_area_km + ' km' + String.fromCharCode(178);

	const landArea =
		props.countryData.country_land_area_km === '0'
			? 'Data Unavailable'
			: props.countryData.country_land_area_km + ' km' + String.fromCharCode(178);

	const forestToLand =
		props.countryData.forest_propotion_to_land === '0'
			? 'Data Unavailable'
			: props.countryData.forest_propotion_to_land + '%';

	const population =
		props.countryData.country_population === '0'
			? 'Data Unavailable'
			: props.countryData.country_population + ' people';

	const woodRemoval =
		props.countryData.wood_removal === '0'
			? 'Data Unavailable'
			: props.countryData.wood_removal + ' m' + String.fromCharCode(179);

	const landUsage =
		props.countryData.total_land_usage === '0'
			? 'Data Unavailable'
			: props.countryData.total_land_usage + ' km' + String.fromCharCode(178);

	const protectedLand =
		props.countryData.percent_protected_land === '0'
			? 'Data Unavailable'
			: props.countryData.percent_protected_land + '%';

	const pollution =
		props.countryData.mean_yearly_exposure_pollution === '0'
			? 'Data Unavailable'
			: `${props.countryData.mean_yearly_exposure_pollution} ${String.fromCharCode(181)}g/m${String.fromCharCode(
					179
				)}`;

	return (
		<div className="infoCard">
			<div className="basic-info column">
				<h2>{props.countryData.country}</h2>
				{/* <p>{props.countryData.code}</p> */}
				<h3>{props.countryData.year}</h3>
			</div>
			<div className="column">
				<p>
					Forest Area:<br /> {forestArea}
				</p>
				<p>
					Land Area:<br /> {landArea}
				</p>
				<p>
					Percentage of Forest Area:<br /> {forestToLand}
				</p>
				<p>
					Population:<br /> {population}
				</p>
			</div>
			<div className="column">
				<p>
					Wood Removal:<br /> {woodRemoval}
				</p>
				<p>
					Total Land Usage:<br /> {landUsage}
				</p>
				<p>
					Protected Land:<br /> {protectedLand}
				</p>
				<p>
					Yearly Pollution Exposure:<br /> {pollution}
				</p>
			</div>
		</div>
	);
};

export default InfoCard;
