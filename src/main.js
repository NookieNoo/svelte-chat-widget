import App from './App.svelte';

const app = new App({
	// target: document.body,
	target: document.getElementById('chat-widget'),
});

export default app;