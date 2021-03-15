import App from './App.svelte';

const target = document.getElementById('chat-widget');
const app = new App({
	target,
	props: {
		botUrl: target.getAttribute('data-url')
	}
});

export default app;