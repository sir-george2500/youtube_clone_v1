import { getHomePage } from '$lib/services.js';


export const load = async () => {
	console.log('home page ran');
	return {
		contents: getHomePage()
	};
};