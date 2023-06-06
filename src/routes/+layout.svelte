<script lang="ts">
	import '../app.css';
	// import { onMount } from 'svelte';
	// import { auth } from '$lib/firebase';
	import { authStore } from '../store/store';
	import Navbar from '../components/Navbar.svelte';
	import { goto } from '$app/navigation';
	// const nonAuthPaths = ['/', '/create', '/join', '/eventlist', '/main'];

	// onMount(() => {
	// 	const unsubscribe = auth.onAuthStateChanged(async (user) => {
	// 		const currentPath = window.location.pathname;
	// 		if (!user && !nonAuthPaths.includes(currentPath)) {
	// 			window.location.href = '/';
	// 			return;
	// 		}
	// 		authStore.set({ user: user });
	// 		if (user && currentPath === '/') {
	// 			window.location.href = '/main';
	// 			return;
	// 		}
	// 	});
	// });
</script>

<div>
	<Navbar />
	<slot />
</div>
