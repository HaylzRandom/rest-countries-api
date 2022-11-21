import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Styles
import './searchBar.css';

const SearchBar = () => {
	return (
		<form className='search'>
			<button className='search__button'>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</button>
			<input type='text' id='search' className='search__input' placeholder='Search for a country...' />
		</form>
	);
};
export default SearchBar;
