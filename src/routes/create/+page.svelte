<script lang="ts">
	let eventName: string;
	let eventDescription: string;
	let guestName: string;
	let guestPhoto: File | undefined;
	let guestDesignation: string;
	let hostName: string;

	function addInput() {
		// Create a new input element
		const inputContainer = document.querySelector('.guest-container');
		const newInput = document.createElement('input');
		const newPhotoInput = document.createElement('input');
		const newDesignationInput = document.createElement('input');

		// newInput
		newInput.type = 'text';
		newInput.placeholder = 'Enter guest name';
		newInput.className = 'py-4 pl-5 pr-24 bg-transparent border border-borderclr flex-1 mb-4';

		// newPhotoInput
		newPhotoInput.type = 'file';
		newPhotoInput.placeholder = 'Upload Guest Photo';
		newPhotoInput.className = 'py-4 pl-5 pr-24 bg-transparent border border-borderclr mb-4';

		// newDesignationInput
		newDesignationInput.type = 'text';
		newDesignationInput.placeholder = 'Enter guest designation';
		newDesignationInput.className = 'py-4 pl-5 pr-24 bg-transparent border border-borderclr mb-4';

		// Append the new input to the guest container
		inputContainer?.append(newInput, newPhotoInput, newDesignationInput);
	}
	function handleFileInputChange(event: Event) {
		const inputElement = event.target as HTMLInputElement;
		if (inputElement.files && inputElement.files.length > 0) {
			guestPhoto = inputElement.files[0];
			console.log(guestPhoto);
		}
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
					bind:value={eventName}
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
					bind:value={eventDescription}
					placeholder="Enter Event description"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<!-- Input for guests -->
			<div class="flex my-4">
				<div class="flex flex-col flex-1 guest-container">
					<div class="flex flex-col">
						<!-- Guest name -->
						<div class="flex flex-col flex-1">
							<label for="guest">Enter guest name</label>
							<input
								type="text"
								bind:value={guestName}
								placeholder="Enter guest name"
								class="py-4 pl-5 pr-24 bg-transparent border border-borderclr mb-4"
							/>
						</div>
						<!-- Guest Photo -->
						<div class="flex flex-col flex-1">
							<label for="file_input">Upload Guest Photo</label>
							<input
								id="file_input"
								type="file"
								on:change={handleFileInputChange}
								class="py-4 pl-5 pr-24 bg-transparent border border-borderclr mb-4"
							/>
						</div>
					</div>
					<div class="flex flex-col">
						<label for="designation">Enter guest designation</label>
						<input
							id="designation"
							type="text"
							bind:value={guestDesignation}
							placeholder="Enter guest designation"
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
					bind:value={hostName}
					placeholder="Enter Host name"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<button class="py-2 px-8 bg-white text-black mt-8">Create</button>
		</div>
	</div>
</main>
