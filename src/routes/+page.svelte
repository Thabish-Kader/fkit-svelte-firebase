<script lang="ts">
	import Inner from '../components/Inner.svelte';

	function handleMessage(event: CustomEvent<{ text: string }>) {
		alert(event.detail.text);
	}
</script>

<Inner on:msg={handleMessage} />
