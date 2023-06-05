<script lang="ts">
	import type { User } from 'firebase/auth';
	import { formatDate } from '../helpers/formatDate';
	import { authStore } from '../store/store';
	import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase';
	import { goto } from '$app/navigation';

	export let date: string;
	export let name: string;
	export let description: string;

	const formattedDate = formatDate(date);

	let eventHear: string;
	let memberIndutry: string;
	let memberEmail: string;
	let memberTitle: string;
	let memberOutcome: string;
	let currentUser: User | null;
	let loading = false;

	authStore.subscribe((value) => {
		currentUser = value.user;
	});

	const eventRef = doc(db, 'events', name);

	async function registerMember() {
		if (eventHear === undefined || memberIndutry === undefined)
			return alert('The first two inputs cannot be empty');

		let memberInfo = {
			eventHear,
			memberIndutry,
			memberEmail,
			memberTitle,
			memberOutcome,
			memberName: currentUser?.displayName,
			memberPhoto: currentUser?.photoURL
		};

		loading = true;
		try {
			await updateDoc(eventRef, {
				members: arrayUnion(memberInfo)
			});
			goto('/eventlist');
		} catch (error) {
			console.log(`Error while adding member ${error}`);
		} finally {
			loading = false;
		}
	}
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
				<label for="how">Where did you first hear about this event ?</label>
				<input
					id="how"
					type="text"
					bind:value={eventHear}
					placeholder="Where did you hear about us ?"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<div class="flex flex-col">
				<label for="industry">Which sector do you work in ?</label>
				<input
					id="indutry"
					type="text"
					bind:value={memberIndutry}
					placeholder="Which sector do you work in ?"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<!-- 2nd row -->
			<div class="flex flex-col">
				<label for="email">Work Email</label>
				<input
					id="email"
					type="email"
					bind:value={memberEmail}
					placeholder="Enter your work email"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<div class="flex flex-col">
				<label for="title">Your Title</label>
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
			on:click={registerMember}
			disabled={loading}
			class="py-6 px-8 bg-white text-black mt-8 hover:scale-105 hover:bg-green-500 transition-all duration-300 disabled:cursor-not-allowed disabled:bg-white/30"
		>
			{loading ? 'Registering...' : 'Register for this event'}</button
		>
	</form>
</section>
