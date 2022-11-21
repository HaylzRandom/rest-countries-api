import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Development
import countryFlag from '../../assets/germany.png';

// Styles
import './countryInfo.css';

const CountryInfo = () => {
	return (
		<section className='country__info'>
			<div className='btn-container'>
				<button className='back-btn'>
					<FontAwesomeIcon icon={faArrowLeft} />
					Back
				</button>
			</div>
			<div className='country__container'>
				<div className='country__image'>
					<img src={countryFlag} alt='' />
				</div>
				<div className='country__data'>
					<h2 className='country__data--title'>Belgium</h2>
					<ul className='country__data--list'>
						<li>
							<p className='country__data--info'>
								<span className='strong'>Native Name: </span>Belgie
							</p>
						</li>
						<li>
							<p className='country__data--info'>
								<span className='strong'>Population: </span>11,319,511
							</p>
						</li>
						<li>
							<p className='country__data--info'>
								<span className='strong'>Region: </span>Europe
							</p>
						</li>
						<li>
							<p className='country__data--info'>
								<span className='strong'>Sub Region: </span>Western Europe
							</p>
						</li>
						<li>
							<p className='country__data--info'>
								<span className='strong'>Capital: </span>Brussels
							</p>
						</li>
						<li>
							<p className='country__data--info'>
								<span className='strong'>Top Level Domain: </span>.be
							</p>
						</li>
						<li>
							<p className='country__data--info'>
								<span className='strong'>Currencies: </span>Euro
							</p>
						</li>
						<li>
							<p className='country__data--info'>
								<span className='strong'>Languages: </span>Dutch, French, German
							</p>
						</li>
					</ul>
					<div className='country__borders'>
						<h3>Border Countries:</h3>
						<ul className='country__borders--list'>
							<li className='country__borders--country'>France</li>
							<li className='country__borders--country'>Germany</li>
							<li className='country__borders--country'>Netherlands</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
export default CountryInfo;
