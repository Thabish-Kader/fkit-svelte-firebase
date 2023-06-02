<script lang="ts">
	function addInput() {
		// Create a new input element
		const inputContainer = document.querySelector('.guest-container');
		const newInput = document.createElement('input');
		newInput.type = 'text';
		newInput.placeholder = 'Enter guest name';
		newInput.className = 'py-4 pl-5 pr-24 bg-transparent border border-borderclr flex-1 mb-4';

		// Append the new input to the guest container
		inputContainer?.appendChild(newInput);
	}
</script>

<main class="text-gray-100 mt-10 max-w-5xl mx-auto">
	<h1 class="text-5xl font-bold my-5">Events</h1>

	<!-- Event list -->
	<div class="bg-secondary flex items-center justify-between p-2 mb-4 rounded-lg">
		<div class="mx-5 flex justify-center items-center bg-blue-500 p-4 rounded-lg">
			<h1>12-Oct 10:00</h1>
		</div>
		<div class="flex flex-col">
			<h1 class="text-xl font-bold">Event Title</h1>
			<p class="text-sm text-gray-300 flex-0">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quo! Voluptas labore
				tempora est excepturi eveniet incidunt a assumenda quia quos, voluptatibus quis ratione
				iste. Totam officia error libero beatae.
			</p>
		</div>
		<div class="">
			<button
				class="text-white tracking-wider px-4 hover:bg-black hover:text-white rounded-full duration-300 transition-colors"
				>+Join
			</button>
		</div>
	</div>

	<div class="bg-secondary flex items-center justify-between p-2">
		<div class="mx-5 flex justify-center items-center bg-blue-500 p-4 rounded-lg">
			<h1>12-Oct 10:00</h1>
		</div>
		<div class="flex flex-col">
			<h1 class="text-xl font-bold">Event Title</h1>
			<p class="text-sm text-gray-300 flex-0">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quo! Voluptas labore
				tempora est excepturi eveniet incidunt a assumenda quia quos, voluptatibus quis ratione
				iste. Totam officia error libero beatae.
			</p>
		</div>
		<div class="">
			<button
				class="text-white tracking-wider px-4 hover:bg-black hover:text-white rounded-full duration-300 transition-colors"
				>+Join
			</button>
		</div>
	</div>
</main>
