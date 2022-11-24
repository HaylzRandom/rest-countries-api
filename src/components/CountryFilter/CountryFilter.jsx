// Styles
import './countryFilter.css';

const CountryFilter = ({ onSelect }) => {

	const handleSelect = (e) => {
		const regionName = e.target.value;
		onSelect(regionName);
	};

	return (
		<select className='filter__select' onChange={handleSelect}>
			<option className='option' defaultValue={true}>
				Filter by Region
			</option>
			<option className='option' value='Africa'>
				Africa
			</option>
			<option className='option' value='America'>
				America
			</option>
			<option className='option' value='Asia'>
				Asia
			</option>
			<option className='option' value='Europe'>
				Europe
			</option>
			<option className='option' value='Oceania'>
				Oceania
			</option>
		</select>
	);
};
export default CountryFilter;
