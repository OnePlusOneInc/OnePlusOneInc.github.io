<script lang="ts">
  import FadeInCard from './FadeInCard.svelte'
	import Text from '$lib/components/Text.svelte'

	export let header: string;
	export let problem: string;
</script>

<FadeInCard class="flex flex-col bg-secondary-dark rounded-md p-6 gap-6 aspect-square">
	<Text type="hero" color="darkPrimary" class="grow text-center place-content-center font-geist font-semibold text-6xl">{header}</Text>
	<div class="h-px bg-radial-gradient from-primary-light/[.2] to-[#222225] mx-5" />
	<Text type="subhead" color="darkSecondary" class="text-center">{[problem]}</Text>
</FadeInCard>
