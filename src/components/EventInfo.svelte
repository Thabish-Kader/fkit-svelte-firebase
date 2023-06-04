<script lang="ts">
	import { formatDate } from '../helpers/formatDate';

	export let date: string;
	export let name: string;
	export let description: string;

	const formattedDate = formatDate(date);

	let memberName: string;
	let memberLastName: string;
	let memberEmail: string;
	let memberTitle: string;
	let memberOutcome: string;
</script>

<section class="mt-[60px] ml-[20px] xl:ml-[277px] text-white xl:col-span-2 pr-8">
	<p class="">{formattedDate}</p>
	<h1 class="pt-2 text-3xl font-bold">{name}</h1>
	<p class="pt-2">
		{description}
	</p>

	<h2 class="pt-6 text-xl font-bold">Join the event</h2>

	<form class="pt-6">
		<div class="flex flex-col xl:grid xl:grid-cols-2 gap-6">
			<!-- 1st row -->
			<div class="flex flex-col">
				<label for="first-name">First name</label>
				<input
					id="first-name"
					type="text"
					bind:value={memberName}
					placeholder="Enter your first name"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<div class="flex flex-col">
				<label for="last-name">Last name</label>
				<input
					type="text"
					bind:value={memberLastName}
					placeholder="Enter your last name"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<!-- 2nd row -->
			<div class="flex flex-col">
				<label for="email">Email</label>
				<input
					id="email"
					type="email"
					bind:value={memberEmail}
					placeholder="Enter your email"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<div class="flex flex-col">
				<label for="title">Title</label>
				<input
					id="title"
					type="text"
					bind:value={memberTitle}
					placeholder="What is your title?"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>

			<!-- Message  -->
			<div class="flex flex-col col-span-2">
				<label for="outcome">What are you hoping to learn about ?</label>
				<textarea
					id="outcome"
					bind:value={memberOutcome}
					placeholder="Where do you work ?"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
		</div>
		<!--  button -->
		<button
			class="py-6 px-8 bg-white text-black mt-8 hover:scale-105 hover:bg-green-500 transition-all duration-300"
			>Register for this event</button
		>
	</form>
</section>
