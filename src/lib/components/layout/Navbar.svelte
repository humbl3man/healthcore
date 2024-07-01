<script lang="ts">
	import { page } from '$app/stores';

	let user = $page.data.session?.user;
</script>

<header class="h-20">
	<div class="mx-auto max-w-screen-2xl px-4 xl:px-0 h-full">
		<div class="flex justify-between gap-4 items-center h-full">
			<a href="/" class="font-bold tracking-wide text-xl text-secondary-foreground">HealthCore</a>
			<!-- Links -->
			<div class="flex gap-16 items-center">
				<nav class="flex gap-8 text-secondary-foreground/80">
					<a href="/" class="hover:text-secondary-foreground transition-colors duration-300">Home</a
					>
					<a href="/about" class="hover:text-secondary-foreground transition-colors duration-300"
						>About</a
					>
				</nav>
				<div class="text-secondary-foreground/80">
					{#if user}
						<a href="/account">{user.name}</a>
					{:else}
						<a href="/login">Login</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
</header>
