import { useEffect } from 'react';
import { BiError } from 'react-icons/bi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Styles
import './error.css';

const Error = ({ isError }) => {
	const navigate = useNavigate();
	const location = useLocation();

	// Will only fire if user is not on homepage and there is an API error
	useEffect(() => {
		if (isError && location.pathname !== '/') {
			setTimeout(() => {
				navigate('/');
			}, 8000);
		}
	}, []);

	return (
		<div className='error'>
			{/* If not on homepage and no API error */}
			{isError && location.pathname !== '/' && (
				<>
					<p className='errorMsg'>
						<BiError className='errorMsg__icon' />
						{isError}
					</p>
					<p className='errorMsg'>You will be redirected momentarily...</p>
				</>
			)}

			{/* If on homepage and API error occurs */}
			{isError && location.pathname === '/' && (
				<>
					<p className='errorMsg'>
						<BiError className='errorMsg__icon' />
						{isError}
					</p>
					<p className='errorMsg'>Please try another country</p>
				</>
			)}

			{/* If on page that does not exist */}
			{!isError && (
				<>
					<p className='errorMsg'>
						<BiError className='errorMsg__icon' />
						Sorry page cannot be found!
					</p>
					<button className='home__btn' onClick={() => navigate('/')}>
						Back Home
					</button>
				</>
			)}
		</div>
	);
};
export default Error;
