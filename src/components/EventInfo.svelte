<script lang="ts">
</script>

<section class="mt-[60px] sm:ml-[20px] xl:ml-[277px] text-white col-span-2 pr-8">
	<p class="">Date</p>
	<h1 class="pt-2 text-3xl font-bold">Even name</h1>
	<p class="pt-2">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro aspernatur similique praesentium
		velit officia molestiae explicabo nulla incidunt tempora, sint animi facere commodi in facilis
		provident quam minus numquam ipsam.
	</p>

	<h2 class="pt-6 text-xl font-bold">Join the event</h2>

	<form class="pt-6">
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
		<div class="flex space-x-4 pt-6 items-center">
			<input
				type="checkbox"
				class="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 border-gray-600"
			/>
			<p>I would like to recieve emails about future webinars</p>
		</div>
		<button class="py-6 px-8 bg-white text-black mt-8">Register for this event</button>
	</form>
</section>
