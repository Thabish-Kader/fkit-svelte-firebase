<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { auth } from '$lib/firebase';
	import { authStore } from '../store/store';

	const nonAuthPaths = ['/'];

	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			const currentPath = window.location.pathname;
			if (!user && !nonAuthPaths.includes(currentPath)) {
				window.location.href = '/';
				return;
			}
			authStore.set({ user: user });
			if (user && currentPath === '/') {
				window.location.href = '/main';
				return;
			}
		});
	});
</script>

<div>
	<slot />
</div>
