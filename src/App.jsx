import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as lightMoon } from '@fortawesome/free-regular-svg-icons';
import { faMoon as darkMoon } from '@fortawesome/free-solid-svg-icons';

// Components
import CountryList from './components/CountryList/CountryList';
import CountryInfo from './components/CountryInfo/CountryInfo';
import Error from './components/Error/Error';

// Hooks
import useTitle from './hooks/useTitle';

// Styles
import './App.css';

const App = () => {
	useTitle('Frontend Mentor | REST Countries API');

	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem('rest-countries-dark-mode'))
	);

	// Toggle of Dark Mode
	useEffect(() => {
		if (darkMode) {
			document.body.classList.remove('light');
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
			document.body.classList.add('light');
		}

		const json = JSON.stringify(darkMode);
		localStorage.setItem('rest-countries-dark-mode', json);
	}, [darkMode]);

	return (
		<>
			<header>
				<h1>Where in the world?</h1>
				<button
					type='button'
					className='theme__btn'
					aria-label='toggle theme'
					onClick={() => setDarkMode(!darkMode)}>
					{darkMode ? (
						<>
							<FontAwesomeIcon className='theme__btn--icon' icon={darkMoon} />
							<span className='theme__btn--text'>Dark Mode</span>
						</>
					) : (
						<>
							<FontAwesomeIcon className='theme__btn--icon' icon={lightMoon} />
							<span className='theme__btn--text'>Dark Mode</span>
						</>
					)}
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
