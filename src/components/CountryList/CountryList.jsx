import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faExclamationTriangle,
	faRefresh,
} from '@fortawesome/free-solid-svg-icons';
import { BiError } from 'react-icons/bi';
import FadeLoader from 'react-spinners/FadeLoader';

// API
import {
	getCountries,
	getCountryByName,
	filterCountryByRegion,
} from '../../apis/api';

// Components
import CountryCard from '../CountryCard/Countrycard';
import CountryFilter from '../CountryFilter/CountryFilter';
import SearchBar from '../SearchBar/SearchBar';
import Spinner from '../Spinner/Spinner';

// Styles
import './countryList.css';

const CountryList = () => {
	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState('');

	useEffect(() => {
		getAllCountries();
	}, []);

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

	const getByRegion = (regionName) => {
		setIsLoading(true);
		filterCountryByRegion(regionName)
			.then((json) => {
				setCountries(json);
				setIsLoading(false);
				setIsError('');
			})
			.catch((error) => {
				console.log(error);
				setIsLoading(false);
				setIsError(error.message);
				setTimeout(() => {
					getCountries();
				}, 1000);
			});
	};

	const getAllCountries = () => {
		setIsLoading(true);
		getCountries()
			.then((json) => {
				setCountries(json);
				setIsLoading(false);
				setIsError('');
			})
			.catch((error) => {
				console.log(error);
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
					<button className='refresh__btn' onClick={getAllCountries}>
						<FontAwesomeIcon icon={faRefresh} />
					</button>
				</div>
			</div>

			<div className='message__container'>
				{isLoading && !isError && <Spinner />}
				{isError && !isLoading && (
					<p className='errorMsg'>
						<BiError className='errorMsg__icon' />
						{isError}
					</p>
				)}
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
