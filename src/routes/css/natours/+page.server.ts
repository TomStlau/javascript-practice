import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		meta: {
			title: 'Natours | Exciting tours for aventurous people'
		}
	};
};
