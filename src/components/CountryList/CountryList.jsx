// Components
import CountryCard from '../CountryCard/Countrycard';
import CountryFilter from '../CountryFilter/CountryFilter';
import SearchBar from '../SearchBar/SearchBar';

const CountryList = () => {
	return (
		<section>
			<div className='top'>
				<div className='search'>
					<SearchBar />
				</div>

				<div className='filter'>
					<CountryFilter />
				</div>
			</div>

			<div className='bottom'>
				<CountryCard />
			</div>
		</section>
	);
};
export default CountryList;
