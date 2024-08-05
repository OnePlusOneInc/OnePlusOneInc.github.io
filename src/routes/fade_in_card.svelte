<script lang="ts">
	import { onMount } from 'svelte';

	let card: HTMLElement;

	// Setup an intention observer on mount so that we can fade in the component on scroll.
	onMount(() => {
		const callback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate-fadeIn');
				}
			});
		};

		const observer = new IntersectionObserver(callback);

		card.classList.add('opacity-0');
		observer.observe(card);
	});
</script>

<div bind:this={card}>
	<slot />
</div>
