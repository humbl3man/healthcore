<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { signOut } from '@auth/sveltekit/client';

	let user = $page.data.session?.user;
</script>

<h1 class="text-2xl font-bold mb-4">Account Page</h1>
<h2 class="text-xl">{user?.name}</h2>
<img src={user?.image || ''} alt="" class="my-4" />
<Button variant="destructive" on:click={() => signOut()}>Sign Out</Button>
