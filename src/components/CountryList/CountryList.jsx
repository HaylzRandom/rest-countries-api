import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

// API
import {
	getCountries,
	getCountryByName,
	filterCountryByRegion,
} from '../../apis/api';

// Hooks
import useTitle from '../../hooks/useTitle';

// Components
import CountryCard from '../CountryCard/CountryCard';
import CountryFilter from '../CountryFilter/CountryFilter';
import SearchBar from '../SearchBar/SearchBar';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';

// Styles
import './countryList.css';

const CountryList = () => {
	useTitle('Frontend Mentor | REST Countries API');

	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState('');

	// On load, fetch all countries to be displayed
	useEffect(() => {
		getAllCountries();
	}, []);

	// Search API for country by name endpoint
	// Will search by official name rather than common
	const getByName = (name) => {
		setIsLoading(true);
		getCountryByName(name)
			.then((json) => {
				setCountries(json);
				setIsLoading(false);
				setIsError('');
			})
			.catch((error) => {
				setIsLoading(false);
				if (error.response) {
					if (error.response.status === 404) {
						setIsError('Country not found');
					} else {
						setIsError(error.response.data);
					}
				} else if (error.request) {
					setIsError(error.request);
				} else {
					setIsError(error.message);
				}

				setCountries([]);
			});
	};

	// Using dropdown value, fetch country by region endpoint
	const getByRegion = (regionName) => {
		setIsLoading(true);
		filterCountryByRegion(regionName)
			.then((json) => {
				setCountries(json);
				setIsLoading(false);
				setIsError('');
			})
			.catch((error) => {
				setIsLoading(false);
				setIsError(error.message);
				setTimeout(() => {
					getCountries();
				}, 1000);
			});
	};

	// Fetch all countries by all endpoint
	const getAllCountries = () => {
		setIsLoading(true);
		getCountries()
			.then((json) => {
				setCountries(json);
				setIsLoading(false);
				setIsError('');
			})
			.catch((error) => {
				setIsLoading(false);
				setIsError(error.message);
			});
	};

	return (
		<section className='countryList'>
			<div className='country__search'>
				<div className='searchBar'>
					<SearchBar onSearch={getByName} />
				</div>

				<div className='filter__refresh'>
					<CountryFilter onSelect={getByRegion} />
					<button
						className='refresh__btn'
						onClick={getAllCountries}
						title='Refresh Countries'>
						<FontAwesomeIcon icon={faRefresh} />
					</button>
				</div>
			</div>

			<div className='message__container'>
				{isLoading && !isError && <Spinner />}
				{isError && !isLoading && <Error isError={isError} />}
			</div>

			<div className='country__grid'>
				{!isLoading &&
					!isError &&
					countries?.map((country) => (
						<CountryCard key={nanoid()} country={country} />
					))}
			</div>
		</section>
	);
};
export default CountryList;
