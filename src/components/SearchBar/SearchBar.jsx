import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Styles
import './searchBar.css';

const SearchBar = ({ onSearch }) => {
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (value === null || value === '') return;

		onSearch(value);

		setValue('');
	};

	return (
		<form className='search' onSubmit={handleSubmit}>
			<button className='search__button'>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</button>
			<input
				type='text'
				id='search'
				className='search__input'
				placeholder='Search for a country...'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</form>
	);
};
export default SearchBar;
