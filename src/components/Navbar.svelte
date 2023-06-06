<script lang="ts">
	import type { User } from 'firebase/auth';
	import { authStore, authHandlers } from '../store/store';

	let currentUser: User | null;
	authStore.subscribe((value) => {
		currentUser = value.user;
	});
</script>

<header class="bg-secondary p-4 flex justify-between items-center text-white">
	<!-- o -->
	<h1 class=" font-bold text-sm md:text-2xl tracking-widest">Event Manager Co.</h1>
	<!-- links -->
	<div class="flex items-center space-x-3 font-semibold">
		<a href="/main">Main</a>
		<a href="/eventlist" data-sveltekit-preload-data>Event List</a>
		<a href="/create">Create Event</a>
	</div>

	<!-- User/Logout -->

	{#if currentUser}
		<div class="items-center space-x-2 hidden xl:inline-flex">
			<img
				src={currentUser?.photoURL}
				alt={currentUser?.displayName}
				class="h-12 w-12 rounded-full"
			/>
			<div class="flex flex-col">
				<p>
					Logged in as : <span class="text-purple-500 italic font-bold">
						{currentUser?.displayName}
					</span>
				</p>
				<p>{currentUser?.email}</p>
			</div>
			<button on:click={authHandlers.logout} class="bg-white p-2 rounded-full text-black"
				>Log Out</button
			>
		</div>
	{/if}
</header>
