import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '$lib/firebase';
import type { TEvents } from '../../../types';

export const load = (async ({ params }) => {
	const docRef = doc(db, 'events', params.slug);
	const docSnap = await getDoc(docRef);
	const event = docSnap.data();

	if (event) {
		return event as TEvents;
	}

	throw error(404, 'Not found');
}) satisfies PageServerLoad;
