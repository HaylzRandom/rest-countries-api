import { Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

// Components
import CountryList from './components/CountryList/CountryList';
import CountryInfo from './components/CountryInfo/CountryInfo';
import Error from './components/Error/Error';

// Styles
import './App.css';

const App = () => {
	return (
		<>
			<header>
				<h1>Where in the world?</h1>
				{/* Theme changer here later */}
				<button className='theme__btn'>
					<FontAwesomeIcon className='theme__btn--icon' icon={faMoon} />
					<span className='theme__btn--text'>Dark Mode</span>
				</button>
			</header>
			<main>
				<Routes>
					<Route path='/' element={<CountryList />} />
					<Route path='/country/:countryName' element={<CountryInfo />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</main>
		</>
	);
};
export default App;
