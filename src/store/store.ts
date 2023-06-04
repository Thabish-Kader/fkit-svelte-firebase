import { auth, googleProvider } from '$lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';

export const authStore = writable<{
	user: User | null;
}>({
	user: null
});

export const authHandlers = {
	logout: async () => {
		await auth.signOut();
	},
	loginWithGoogle: async () => {
		await signInWithPopup(auth, googleProvider);
	}
};
