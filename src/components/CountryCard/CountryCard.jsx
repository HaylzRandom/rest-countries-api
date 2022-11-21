import { Link } from 'react-router-dom';

// Development Purposes
import flagImage from '../../assets/germany.png';

import './countryCard.css';

const CountryCard = () => {
	return (
		<>
			<Link>
				<div className='card'>
					<div className='card__image'>
						<img src={flagImage} alt='' />
					</div>

					<div className='card__data'>
						<h2 className='card__data--title'>Germany</h2>
						<p className='card__data--info'>
							<span className='strong'>Population: </span>323,947,000
						</p>
						<p className='card__data--info'>
							<span className='strong'>Region: </span>Europe
						</p>
						<p className='card__data--info'>
							<span className='strong'>Capital: </span>Berlin
						</p>
					</div>
				</div>
			</Link>
		</>
	);
};
export default CountryCard;
