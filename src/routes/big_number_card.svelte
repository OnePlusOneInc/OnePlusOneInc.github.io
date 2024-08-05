<script lang="ts">
	import FadeInCard from './fade_in_card.svelte';

	export let title: string;
	export let description: string;
</script>

<FadeInCard>
	<div
		class="m-auto h-full w-3/4 w-full rounded-md bg-gradient-to-r from-neutral-400 to-neutral-700 p-0.5"
	>
		<div class="aspect-square h-full w-full content-center rounded-md bg-neutral-800 p-8">
			<h3 class="mb-2 text-center text-6xl">{title}</h3>
			<p class="text-center text-xl text-neutral-500">{description}</p>
		</div>
	</div>
</FadeInCard>
