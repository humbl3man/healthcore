<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.css';
</script>

<Navbar />
<main class={$page.route.id !== '/' ? 'mx-auto max-w-screen-2xl px-4 xl:px-0' : ''}>
	<slot />
</main>
<Toaster />
