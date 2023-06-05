<script lang="ts">
	import { doc, setDoc } from 'firebase/firestore';
	import { db, storage } from '$lib/firebase';
	import type { User } from 'firebase/auth';
	import { authStore } from '../../store/store';
	import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
	import { goto } from '$app/navigation';

	let eventName: string;
	let eventDescription: string;
	let eventDate: string;
	let guestName: string;
	let guestPhoto: File | undefined;
	let guestDesignation: string;
	let loading = false;
	let guestInputs: { name: string; photo: File | undefined; designation: string }[] = [];

	let currentUser: User | null = null;
	authStore.subscribe((value) => {
		currentUser = value.user;
	});
	function addInput() {
		// Create a new input element
		const inputContainer = document.querySelector('.guest-container');
		const newInput = document.createElement('input');
		const newPhotoInput = document.createElement('input');
		const newDesignationInput = document.createElement('input');
		const newInput2 = {
			name: '',
			photo: undefined,
			designation: ''
		};
		guestInputs.push(newInput2);
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

	function handleFileInputChange(event: Event, index: number) {
		const inputElement = event.target as HTMLInputElement;
		if (inputElement.files && inputElement.files.length > 0) {
			guestInputs[index].photo = inputElement.files[0];
		}
	}

	async function createEvent() {
		console.log(guestInputs);
	}
</script>

<main class="text-gray-100 mt-10">
	<div>
		<!-- Input box -->
		<div class="max-w-4xl mx-auto bg-secondary rounded-lg flex flex-col p-5">
			<!-- Input for guests -->
			<div class="flex my-4">
				<div class="flex flex-col flex-1 guest-container">
					{#each guestInputs as input, index (index)}
						<div class="flex flex-col flex-1">
							<label for="guest">Enter guest name</label>
							<input
								type="text"
								bind:value={guestInputs[index].name}
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
								on:change={(e) => handleFileInputChange(e, index)}
								class="py-4 pl-5 pr-24 bg-transparent border border-borderclr mb-4"
							/>
						</div>
						<!-- Guest Designation -->
						<div class="flex flex-col flex-1">
							<label for="designation">Enter guest designation</label>
							<input
								id="designation"
								type="text"
								bind:value={guestInputs[index].designation}
								placeholder="Enter guest designation"
								class="py-4 pl-5 pr-24 bg-transparent border border-borderclr mb-4"
							/>
						</div>
					{/each}
				</div>
				<button class="text-4xl ml-2 mt-4" on:click={addInput}>+</button>
			</div>

			<button
				disabled={loading}
				on:click={createEvent}
				class="py-2 px-8 bg-white text-black mt-8 disabled:bg-white/25 disabled:cursor-not-allowed"
				>{loading ? 'Createing' : 'Create'}</button
			>
		</div>
	</div>
</main>
