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

<main class="text-gray-100 mt-10">
	<div>
		<!-- Input box -->
		<div class="max-w-4xl mx-auto bg-secondary rounded-lg flex flex-col p-5">
			<h1 class="text-center text-white text-2xl">Create</h1>

			<div class="flex flex-col my-4">
				<label for="event-name">Event name</label>
				<input
					id="event-name"
					type="text"
					placeholder="Enter Event name"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<!-- Description -->
			<div class="flex flex-col my-4">
				<label for="event-name">What is the event about ?</label>
				<textarea
					id="event-name"
					placeholder="Enter Event description"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<!-- Input for guests -->
			<div class="flex my-4">
				<div class="flex flex-col flex-1">
					<div class="flex flex-col guest-container">
						<label for="guest">Enter guest name</label>
						<input
							type="text"
							placeholder="Enter guest name"
							class="py-4 pl-5 pr-24 bg-transparent border border-borderclr mb-4"
						/>
					</div>
				</div>
				<button class="text-4xl ml-2 mt-4" on:click={addInput}>+</button>
			</div>
			<!-- Host  -->
			<div class="flex flex-col my-4">
				<label for="host">What is your name ?</label>
				<input
					id="host"
					type="text"
					placeholder="Enter Host name"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<button class="py-2 px-8 bg-white text-black mt-8">Create</button>
		</div>
	</div>
</main>
