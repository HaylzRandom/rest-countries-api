// Components
import CountryCard from '../CountryCard/Countrycard';
import CountryFilter from '../CountryFilter/CountryFilter';
import SearchBar from '../SearchBar/SearchBar';

// Styles
import './countryList.css';

const CountryList = () => {
	return (
		<section className='countryList'>
			<div className='country__search'>
				<div className='searchBar'>
					<SearchBar />
				</div>

				<div className='filter'>
					<CountryFilter />
				</div>
			</div>

			<div className='country__grid'>
				<CountryCard />
				<CountryCard />
				<CountryCard />
				<CountryCard />
				<CountryCard />
			</div>
		</section>
	);
};
export default CountryList;
