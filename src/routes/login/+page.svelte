<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { signIn } from '@auth/sveltekit/client';
</script>

<h1 class="text-2xl font-bold mb-4">Login</h1>
<Button
	variant="default"
	on:click={() => {
		signIn('google');
	}}>Sign in with Google</Button
>
