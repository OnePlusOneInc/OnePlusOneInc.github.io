<script lang="ts">
    import FadeInCard from './FadeInCard.svelte';

	export let title: string;
	export let description: string;

	const updateBackgroundGradient = (event: MouseEvent) => {
		const rectangle = (event.target as HTMLElement).getBoundingClientRect();
		const leftPercentage: string = ((event.clientX - rectangle.left) / rectangle.width * 100).toString();
		const topPercentage: string = ((event.clientY - rectangle.top) / rectangle.height * 100).toString();
		(event.target as HTMLElement).style.background = `radial-gradient(circle at top ${topPercentage}% left ${leftPercentage}%, #a3a3a3, #404040)`;
	}

	const removeBackgroundGradient = (event: MouseEvent) => {
   	    (event.target as HTMLElement).style.background = '';
	}
</script>

<FadeInCard>
	<div role="complementary" class="m-auto h-full w-full rounded-md p-0.5 bg-neutral-700" on:mousemove|self={updateBackgroundGradient} on:mouseleave={removeBackgroundGradient}>
		<div class="aspect-square h-full w-full content-center rounded-md bg-neutral-800 p-8 pointer-events-none">
			<h3 class="mb-2 text-center text-6xl">{title}</h3>
			<p class="text-center text-xl text-neutral-500">{description}</p>
		</div>
	</div>
</FadeInCard>
