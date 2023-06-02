<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('msg', {
			text: 'Whats Up!'
		});
	}
</script>

<button on:click={sayHello}> Click to say hello </button>
