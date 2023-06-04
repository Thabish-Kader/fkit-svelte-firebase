<script lang="ts">
	import { doc, setDoc } from 'firebase/firestore';
	import { db, storage } from '$lib/firebase';
	import type { User } from 'firebase/auth';
	import { authStore } from '../../store/store';
	import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

	let eventName: string;
	let eventDescription: string;
	let eventDate: string;
	let guestName: string;
	let guestPhoto: File | undefined;
	let guestDesignation: string;
	let loading = false;

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
		}
	}

	async function createEvent() {
		if (eventName === undefined || eventDescription === undefined || loading === true)
			return alert('Fields cannot be empty');
		loading = true;
		const eventInfo = {
			eventName: eventName,
			eventDescription: eventDescription,
			eventDate: eventDate,
			guestName: guestName,
			guestPhoto: await uploadGuestPhoto(),
			guestDesignation: guestDesignation,
			hostName: currentUser?.displayName,
			hostPhoto: currentUser?.photoURL,
			hostemail: currentUser?.email
		};

		try {
			const eventRef = doc(db, 'events', eventName);
			setDoc(eventRef, eventInfo, { merge: true });
		} catch (error) {
			console.log(`An error ocuured while createing a document ${error}`);
		}
		loading = false;
	}
	async function uploadGuestPhoto() {
		if (!guestPhoto) {
			return null;
		}

		try {
			const storageRef = ref(storage, 'guest_photos/' + guestPhoto.name);
			await uploadBytes(storageRef, guestPhoto);
			const downloadURL = await getDownloadURL(storageRef);
			return downloadURL;
		} catch (error) {
			console.log(`An error occurred while uploading the guest photo ${error}`);
			return null;
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
			<!-- Event Date -->
			<div class="flex flex-col my-4">
				<label for="event-date">When is the event ?</label>
				<input
					id="event-date"
					bind:value={eventDate}
					type="date"
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

			<button
				disabled={loading}
				on:click={createEvent}
				class="py-2 px-8 bg-white text-black mt-8 disabled:bg-white/25 disabled:cursor-not-allowed"
				>{loading ? 'Createing' : 'Create'}</button
			>
		</div>
	</div>
</main>
