<script lang="ts">
	import heroPic from '$lib/assets/heropic.svg';
	import hero1 from '$lib/assets/hero1.svg';
	import hero2 from '$lib/assets/hero2.svg';
	import hero3 from '$lib/assets/hero3.svg';
	import { goto } from '$app/navigation';
	import type { User } from 'firebase/auth';
	import { authHandlers, authStore } from '../../store/store';

	let currentUser: User | null = null;
	authStore.subscribe((value) => {
		currentUser = value.user;
	});
</script>

<main class="">
	<div class="relative mt-[150px] p-2 lg:ml-[133px] flex">
		<!-- Main Tagline -->
		<div class="text-center">
			<h1 class="text-[32px] font-bold text-white lg:w-[710px]">
				Your Ticket to Extraordinary: Register, Discover, Connect!
			</h1>
			<div class="flex flex-col px-10 sm:flex-row mt-20 gap-14">
				<button
					on:click={() => goto('/create')}
					class="py-[23px] px-[86px] bg-white text-xl w-[299px] hover:bg-black hover:text-white duration-300 transition-colors"
					>Create Event</button
				>
				<button
					on:click={() => goto('/eventlist')}
					class="py-[23px] px-[86px] bg-black text-white text-xl w-[299px] hover:bg-white hover:text-black duration-300 transition-colors"
					>List of Events</button
				>
			</div>
		</div>
		<img
			src={heroPic}
			alt="herpic"
			class="absolute -top-[90px] left-[800px] h-[376px] w-[706px] hidden xl:block"
		/>
	</div>
	<div
		class="mx-auto max-w-[1500px] flex flex-col items-center mt-[60px] bg-secondary rounded-lg p-10"
	>
		<div class="grid md:grid-cols-3 gap-x-10">
			<!-- Feature-1 -->
			<div class="">
				<img src={hero1} alt="" class="h-[203px] w-[400px] py-2" />
				<h2 class="text-2xl font-bold text-white">Create Events</h2>
				<p class="text-sm text-gray-300">Your Event, Your Way: Create, Innovate, Celebrate.</p>
			</div>
			<!-- Feature-2 -->
			<div>
				<img src={hero2} alt="" class="h-[203px] w-[400px] py-2" />
				<h2 class="text-2xl font-bold text-white">Join Events</h2>
				<p class="text-sm text-gray-300">Join Events, Acquire Valuable Skills.</p>
			</div>
			<!-- Feature-3 -->
			<div>
				<img src={hero3} alt="" class="h-[200px] w-[400px] py-2" />
				<h2 class="text-2xl font-bold text-white">Track Events</h2>
				<p class="text-sm text-gray-300">Track Events and Discover New Opportunities.</p>
			</div>
		</div>
	</div>
</main>
