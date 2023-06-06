// See https://kit.svelte.dev/docs/types#app

import type { User } from 'firebase/auth';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			User: User | null;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
