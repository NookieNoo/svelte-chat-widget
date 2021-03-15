<script>
	import Widget from './components/widget/Widget.svelte';
	export let botUrl;
</script>

<div>
	<Widget botUrl={botUrl}/>
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