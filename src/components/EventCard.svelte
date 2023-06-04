<script lang="ts">
	import { formatDate } from '../helpers/formatDate';

	export let date: string;
	export let description: string;
	export let hostName: string;
	export let eventName: string;

	// export let guestName: string;
	// export let guestDesignation: string;
	// export let guestPhoto: string;
	// export let hostPhoto: string;

	// export let hostEmail: string;
	const formattedDate = formatDate(date);
</script>

<div class="bg-secondary flex items-center justify-between p-2 mb-4 rounded-lg">
	<div class="mx-5 flex justify-center items-center bg-blue-500 p-4 rounded-lg">
		<h1>{formattedDate}</h1>
	</div>
	<div class="flex flex-col">
		<h1 class="text-xl font-bold">{eventName}</h1>
		<p class="text-sm text-gray-300 flex-0">
			{description}
		</p>
	</div>
	<div>
		<div class="flex flex-col">
			<p class=" font-bold">Host : {hostName}</p>
			<p class="text-sm text-gray-300 flex-0">Members: 56</p>
		</div>
	</div>
	<div class="">
		<button
			class="text-white tracking-wider px-4 hover:bg-black hover:text-white rounded-full duration-300 transition-colors"
			>+Join
		</button>
	</div>
</div>
