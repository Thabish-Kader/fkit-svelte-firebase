<script>
	import heroPic from '$lib/heropic.svg';
	import hero1 from '$lib/hero1.svg';
	import hero2 from '$lib/hero2.svg';
	import hero3 from '$lib/hero3.svg';
	import { goto } from '$app/navigation';
</script>

<main class="">
	<div class="relative mt-[200px] ml-[133px] flex">
		<!-- Main Tagline -->
		<div>
			<h1 class="text-[32px] font-bold text-white w-[710px]">
				Your Ticket to Extraordinary: Register, Discover, Connect!
			</h1>
			<div class="mt-[50px] space-x-[54px]">
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
		<img src={heroPic} alt="herpic" class="absolute -top-[90px] left-[800px] h-[376px] w-[706px]" />
	</div>
	<div
		class="mx-auto max-w-[1500px] flex flex-col items-center mt-[93px] bg-secondary rounded-lg p-10"
	>
		<div class="grid grid-cols-3 gap-x-10">
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
