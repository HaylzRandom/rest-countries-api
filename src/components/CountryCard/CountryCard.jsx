import { Link } from 'react-router-dom';

// Development Purposes
import flagImage from '../../assets/germany.png';

import './countryCard.css';

const CountryCard = ({ country }) => {
	return (
		<>
			<Link to={`/country/${country.name.common}`}>
				<div className='card'>
					<div className='card__image'>
						<img
							src={country.flags.svg}
							alt={`Flag of ${country.name.common}`}
						/>
					</div>

					<div className='card__data'>
						<h2 className='card__data--title'>{country.name.common}</h2>
						<p className='card__data--info'>
							<span className='strong'>Population: </span>
							{new Intl.NumberFormat().format(country.population)}
						</p>
						<p className='card__data--info'>
							<span className='strong'>Region: </span>
							{country.region}
						</p>
						<p className='card__data--info'>
							<span className='strong'>Capital: </span>
							{country.capital}
						</p>
					</div>
				</div>
			</Link>
		</>
	);
};
export default CountryCard;
