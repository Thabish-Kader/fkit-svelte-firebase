<script lang="ts">
	import EventInfo from '../../../components/EventInfo.svelte';
	import GuestInfo from '../../../components/GuestInfo.svelte';

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="grid xl:grid-cols-3">
	<EventInfo date={data.eventDate} name={data.eventName} description={data.eventDescription} />
	<GuestInfo
		guestName={data.guestName}
		guestDesignation={data.guestDesignation}
		guestPhoto={data.guestPhoto}
		hostName={data.hostName}
		hostEmail={data.hostemail}
		hostPhoto={data.hostPhoto}
		members={data.members}
	/>
</div>
