<script>
	import Widget from './components/widget/Widget.svelte'
</script>

<div>
	<Widget />
</div>

<style>
	div {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		div {
			max-width: none;
		}
	}
</style>