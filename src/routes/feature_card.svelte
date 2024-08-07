<script lang="ts">
	import FadeInCard from './fade_in_card.svelte';

	export let feature: string;
</script>

<FadeInCard class={$$props.class}>
	<div class="rounded-md border-2 border-[#FF5C00] p-2">
		<div class="content-center p-16">
			<h3 class="text-center text-xl text-neutral-600">Illustration here</h3>
		</div>

		<p class="p-4 text-center text-sm text-neutral-600">
			{feature}
		</p>
	</div>
</FadeInCard>
