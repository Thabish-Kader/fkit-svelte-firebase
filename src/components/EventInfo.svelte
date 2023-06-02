<script lang="ts">
</script>

<div class="mt-[89px] ml-[277px] text-white w-[930px]">
	<p class="">Date</p>
	<h1 class="pt-4 text-3xl font-bold">Even name</h1>
	<p class="pt-4">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro aspernatur similique praesentium
		velit officia molestiae explicabo nulla incidunt tempora, sint animi facere commodi in facilis
		provident quam minus numquam ipsam.
	</p>

	<h2 class="pt-14 text-xl font-bold">Join the event</h2>

	<form class="pt-9">
		<!-- 1st row -->
		<div class="grid grid-cols-2 gap-6">
			<div class="flex flex-col">
				<label for="first-name">First name</label>
				<input
					type="text"
					placeholder="Enter your first name"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<div class="flex flex-col">
				<label for="first-name">Last name</label>
				<input
					type="text"
					placeholder="Enter your last name"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<!-- 2nd row -->
			<div class="flex flex-col">
				<label for="first-name">Email</label>
				<input
					type="text"
					placeholder="Enter your email"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<div class="flex flex-col">
				<label for="first-name">Title</label>
				<input
					type="text"
					placeholder="What is your title?"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<!-- 3rd row -->
			<div class="flex flex-col">
				<label for="first-name">Company name</label>
				<input
					type="text"
					placeholder="Where do you work ?"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<div class="flex flex-col">
				<label for="first-name">First name</label>
				<input
					type="text"
					placeholder="Enter your first name"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
			<!-- Message  -->
			<div class="flex flex-col col-span-2">
				<label for="first-name">What are you hoping to learn about ?</label>
				<textarea
					placeholder="Where do you work ?"
					class="py-4 pl-5 pr-24 bg-transparent border border-borderclr"
				/>
			</div>
		</div>
		<!-- Checkbox and button -->
		<div class="flex space-x-4 pt-6">
			<input type="checkbox" />
			<p>I would like to recieve emails about future webinars</p>
		</div>
		<button class="py-6 mb-20 px-8 bg-white text-black mt-8">Register for this event</button>
	</form>
</div>
