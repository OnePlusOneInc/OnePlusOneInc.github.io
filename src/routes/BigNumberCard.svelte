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
	<div
		class="flex items-stretch w-[227px] h-[204px] sm:w-[248px] sm:h-[222px] aspect-auto rounded-md bg-neutral-700 on:mousemove|self={updateBackgroundGradient} on:mouseleave={removeBackgroundGradient} p-0.5"
	>
		<div class="px-9 flex flex-col justify-center grow rounded-md bg-neutral-800">
			<p class="mb-2 text-center font-geist font-semibold text-6xl text-primary-dark">{title}</p>
			<p class="text-center font-inter font-medium text-xl sm:text-2xl text-neutral-500">{description}</p>
		</div>
	</div>
</FadeInCard>
