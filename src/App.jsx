import { Routes, Route } from 'react-router-dom';
import CountryInfo from './components/CountryInfo/CountryInfo';

// Components
import CountryList from './components/CountryList/CountryList';

const App = () => {
	return (
		<>
			<header>
				<h1>Where in the world?</h1>
			</header>
			<main>
				<Routes>
					<Route path='/' element={<CountryList />} />
					<Route path='/country/:countryName' element={<CountryInfo />} />
				</Routes>
			</main>
		</>
	);
};
export default App;
