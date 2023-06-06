<script lang="ts">
	import type { User } from 'firebase/auth';
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';

	import { authStore } from '../store/store';

	let currentUser: User | null;
	authStore.subscribe((value) => {
		currentUser = value.user;
	});
</script>

<div>
	{#if currentUser}
		<Navbar />
	{/if}
	<slot />
</div>
