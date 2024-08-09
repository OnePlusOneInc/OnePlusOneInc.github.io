<script lang="ts">
    import FadeInCard from './FadeInCard.svelte';

	export let problem: string;
</script>

<FadeInCard>
	<div class="h-full rounded-md bg-neutral-700 p-2">
		<div class="aspect-square content-center">
			<h3 class="text-center text-neutral-600">Illustration here</h3>
		</div>
		<div
			class="h-0.5 bg-gradient-to-r from-neutral-700 from-10% via-neutral-300 to-neutral-700 to-90%"
		/>
		<p class="p-4 text-center text-sm text-neutral-500">
			{problem}
		</p>
	</div>
</FadeInCard>
