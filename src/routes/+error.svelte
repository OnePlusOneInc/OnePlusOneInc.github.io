<script lang="ts">
	import { page } from '$app/stores';
	import NotFound from '$lib/errors/404.svelte';
</script>

{#if $page.status === 404}
	<NotFound />
{:else}
	<h1>Error {$page.status}</h1>
	<p>{$page.error?.message}</p>
{/if}
