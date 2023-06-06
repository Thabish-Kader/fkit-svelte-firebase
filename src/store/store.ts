import { auth, googleProvider } from '$lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';
import { goto } from '$app/navigation';

export const authStore = writable<{
	user: User | null;
}>({
	user: null
});

export const authHandlers = {
	logout: async () => {
		await auth.signOut().then(() => {
			authStore.update(() => {
				return {
					user: null
				};
			});
		});
		goto('/');
	},
	loginWithGoogle: async () => {
		await signInWithPopup(auth, googleProvider).then(() =>
			authStore.update(() => {
				return {
					user: auth.currentUser
				};
			})
		);
		goto('/main');
	}
};
