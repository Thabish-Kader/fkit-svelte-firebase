<script lang="ts">
	import { formatDate } from '../helpers/formatDate';

	export let date: string;
	export let name: string;
	export let description: string;

	const formattedDate = formatDate(date);
</script>

<section class="mt-[60px] ml-[20px] xl:ml-[277px] text-white col-span-2 pr-8">
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
					type="text"
					placeholder="Enter your first name"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<div class="flex flex-col">
				<label for="first-name">Last name</label>
				<input
					type="text"
					placeholder="Enter your last name"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<!-- 2nd row -->
			<div class="flex flex-col">
				<label for="first-name">Email</label>
				<input
					type="text"
					placeholder="Enter your email"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<div class="flex flex-col">
				<label for="first-name">Title</label>
				<input
					type="text"
					placeholder="What is your title?"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<!-- 3rd row -->
			<div class="flex flex-col">
				<label for="first-name">Company name</label>
				<input
					type="text"
					placeholder="Where do you work ?"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<div class="flex flex-col">
				<label for="first-name">First name</label>
				<input
					type="text"
					placeholder="Enter your first name"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<!-- Message  -->
			<div class="flex flex-col col-span-2">
				<label for="first-name">What are you hoping to learn about ?</label>
				<textarea
					placeholder="Where do you work ?"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
		</div>
		<!--  button -->
		<button class="py-6 px-8 bg-white text-black mt-8">Register for this event</button>
	</form>
</section>
