import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { BiError } from 'react-icons/bi';

// Development
import countryFlag from '../../assets/germany.png';

// Styles
import './countryInfo.css';

// Components
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';

// API
import { getCountryByName } from '../../apis/api';

const CountryInfo = () => {
	const [country, setCountry] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState('');

	const { countryName } = useParams();

	useEffect(() => {
		setIsLoading(true);
		getCountryByName(countryName)
			.then((json) => {
				/* debugger; */
				setCountry(json);

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

				setCountry([]);
			});
	}, [countryName]);

	const languages = country.map((country) =>
		Object.values(country.languages).map((language, idx, arr) => (
			<li key={nanoid()}>
				{language}
				{idx != arr.length - 1 ? ',' : ''}
			</li>
		))
	);

	const currencies = country.map((country) =>
		Object.values(country.currencies).map((currency) => (
			<li key={nanoid()}>{currency.name}</li>
		))
	);

	// If no borders for country exists, borders = null
	// Else: Create array from object and map through creating list items to display
	// TODO: Research better way to do below
	let borderArray;

	const borders = country.map((country) => {
		/* debugger; */
		/* console.log('Country borders', country.borders); */

		borderArray = Object.values(country.borders || {});

		/* console.log('Temp array', borderArray.length); */

		if (borderArray.length > 0) {
			console.log('Hit');
			return borderArray.map((border) => (
				<li className='country__borders--country' key={nanoid()}>
					{border}
				</li>
			));
		} else {
			return null;
		}
	});

	/* console.table({
		Borders: borders,
		BordersLength: borders.length,
	}); */

	console.log(isError);

	return (
		<section className='country__info'>
			{!isError && !isLoading && (
				<div className='btn-container'>
					<button className='back-btn'>
						<Link to='/'>
							<FontAwesomeIcon icon={faArrowLeft} />
							Back
						</Link>
					</button>
				</div>
			)}

			<div className='message__container'>
				{isLoading && !isError && <Spinner />}
				{isError && !isLoading && <Error isError={isError} />}
			</div>

			{country?.map((country) => {
				return (
					<div className='country__container' key={nanoid()}>
						<div className='country__image'>
							<img
								src={country.flags.png}
								alt={`Flag of ${country.name.common}`}
							/>
						</div>
						<div className='country__data'>
							<h2 className='country__data--title'>{country.name.common}</h2>
							<ul className='country__data--list'>
								<div className='left__list'>
									<li>
										<p className='country__data--info'>
											<span className='strong'>Official Name: </span>
											{country.name.official}
										</p>
									</li>
									<li>
										<p className='country__data--info'>
											<span className='strong'>Population: </span>
											{new Intl.NumberFormat().format(country.population)}
										</p>
									</li>
									<li>
										<p className='country__data--info'>
											<span className='strong'>Region: </span>
											{country.region}
										</p>
									</li>
									<li>
										<p className='country__data--info'>
											<span className='strong'>Sub Region: </span>
											{country.subregion}
										</p>
									</li>
									<li>
										<p className='country__data--info'>
											<span className='strong'>Capital: </span>
											{country.capital}
										</p>
									</li>
								</div>
								<div className='right__list'>
									<li>
										<p className='country__data--info'>
											<span className='strong'>Top Level Domain: </span>
											{country.tld}
										</p>
									</li>
									<li>
										<p className='country__data--info currencies'>
											<span className='strong'>Currencies: </span>
											<ul className='country__data--currencies'>
												{currencies}
											</ul>
										</p>
									</li>
									<li>
										<p className='country__data--info languages'>
											<span className='strong'>Languages: </span>
											<ul className='country__data--languages'>{languages}</ul>
										</p>
									</li>
								</div>
							</ul>
							{borderArray.length ? (
								<div className='country__borders'>
									<h3>Border Countries:</h3>
									<ul className='country__borders--list'>{borders}</ul>
								</div>
							) : null}
						</div>
					</div>
				);
			})}
		</section>
	);
};
export default CountryInfo;
