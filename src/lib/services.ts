import { error } from '@sveltejs/kit';
import { APIKEY, APIHOST} from '$env/static/private'
import Axios from 'axios';


const axios = Axios.create({
	baseURL: 'https://youtube138.p.rapidapi.com/',
	headers: {
		'X-RapidAPI-Key': APIKEY,
		'X-RapidAPI-Host': APIHOST
	},
	params: {
		hl: 'en',
		gl: 'US'
	}
});

export const getHomePage = async () => {
	try {
		const result = await axios('home/');

		return result.data.contents;
	} catch (e) {
		console.log('🚀 ~ file: services.ts:23 ~ getHomePage ~ e:',e);
		throw error(500, {
			message: 'an error occurred, refresh the page and try again'
		});
	}
};

