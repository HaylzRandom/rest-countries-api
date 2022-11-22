import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://restcountries.com/v3.1',
});

export const getCountries = async () => {
	const response = await api.get('/all');
	return response.data;
};

export const getCountryByName = async (name) => {
	const response = await api.get(`/name/${name}`);

	return response.data;
};

export const filterCountryByRegion = async (region) => {
	const response = await api.get(`/region/${region}`);
	return response.data;
};

export const apiURL = 'https://restcountries.com/v3.1';
