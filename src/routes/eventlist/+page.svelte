<script lang="ts">
	import { collection, query, where, onSnapshot } from 'firebase/firestore';
	import { db } from '$lib/firebase';
	import type { TEvents } from '../../types';
	import EventCard from '../../components/EventCard.svelte';

	let events: TEvents[] = [];
	const q = query(collection(db, 'events'));
	const unsubscribe = onSnapshot(q, (querySnapshot) => {
		querySnapshot.forEach((doc) => {
			events.push(doc.data() as TEvents);
			events = events; //Svelte specific
		});
	});
	console.log(events);
</script>

<main class="text-gray-100 mt-10 max-w-5xl mx-auto">
	<h1 class="text-5xl font-bold my-5">Events</h1>

	{#each events as event}
		<EventCard
			date={event.eventDate}
			eventName={event.eventName}
			description={event.eventDescription}
			hostName={event.hostName}
		/>
	{/each}
</main>
