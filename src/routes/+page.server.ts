import { auth } from '$lib/firebase';
import { redirect } from '@sveltejs/kit';
import { authStore } from '../store/store';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const unsubscribe = auth.onAuthStateChanged(async (user) => {
		console.log(user === null);
		if (user === null) {
			redirect(302, '/');
			return;
		}
		if (user !== null) {
			redirect(301, '/main');
			return;
		}
	});
};
