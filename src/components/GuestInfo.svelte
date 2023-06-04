<script lang="ts">
	export let guestName: string;
	export let guestDesignation: string;
	export let guestPhoto: string;
	export let hostName: string;
	export let hostEmail: string;
	export let hostPhoto: string;
</script>

<section class="h-screen w-full bg-secondary">
	<div class="mt-[224px] ml-[89px] text-white">
		<!-- Socials -->
		<div class="mr-[496px]">
			<p class="text-gray-400">Share</p>
			<div class="flex space-x-2 text-gray-200">
				<p>FaceBook</p>
				<p>Twitter</p>
				<p>LinkedIn</p>
			</div>
		</div>

		<!-- Guest -->
		<div class="mt-[175px]">
			<p class="capitalize tracking-widest">GUESTS</p>
			<div class="flex mt-4">
				<img src={guestPhoto} alt={guestName} class="rounded-full h-12 w-12 object-cover" />
				<div class="flex flex-col ml-2">
					<p class="text-sm font-bold">{guestName}</p>
					<p class="text-xs text-gray-200">{guestDesignation}</p>
				</div>
			</div>

			<!-- Host -->

			<p class="capitalize tracking-widest mt-[50px]">HOSTED BY</p>
			<div class="flex mt-4">
				<img src={hostPhoto} alt="profile pics" class="rounded-full h-12 w-12 object-cover" />
				<div class="flex flex-col ml-2">
					<p class="text-sm font-bold">{hostName}</p>
					<p class="text-xs text-gray-200">{hostEmail}</p>
				</div>
			</div>
		</div>
	</div>
</section>
