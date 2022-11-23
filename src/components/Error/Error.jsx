import { useEffect } from 'react';
import { BiError } from 'react-icons/bi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Styles
import './error.css';

const Error = ({ isError }) => {
	const navigate = useNavigate();

	const location = useLocation();

	console.table({
		isError: isError,
		Location: location,
	});

	useEffect(() => {
		if (isError && location.pathname !== '/') {
			setTimeout(() => {
				navigate('/');
			}, 10000);
		}
	}, []);

	return (
		<div className='error'>
			{isError && location.pathname !== '/' && (
				<>
					<p className='errorMsg'>
						<BiError className='errorMsg__icon' />
						{isError}
					</p>
					<p className='errorMsg'>You will be redirected momentarily...</p>
				</>
			)}

			{isError && location.pathname === '/' && (
				<>
					<p className='errorMsg'>
						<BiError className='errorMsg__icon' />
						{isError}
					</p>
					<p className='errorMsg'>Please try another country</p>
				</>
			)}

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
