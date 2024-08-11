<script lang="ts">
	import FeatureCard from './FeatureCard.svelte'
	import BigNumberCard from './BigNumberCard.svelte'
	import ProblemCard from './ProblemCard.svelte'
	import Icon from './Icon.svelte';
	import Logo from '$lib/components/Logo.svelte'
	import LinkedinLogo from '$lib/assets/linkedin_logo.svelte'
	import Pill from '$lib/components/Pill/Pill.svelte'
	import AnimatedCarousel from '$lib/components/AnimatedCarousel/AnimatedCarousel.svelte'
	import Text from '$lib/components/Text.svelte'
	import Handshake from '$lib/assets/icons/Handshake.svelte';
	import Writing from '$lib/assets/icons/Writing.svelte';
	import Arrows from '$lib/assets/icons/Arrows.svelte';
	import Users from '$lib/assets/icons/Users.svelte';

	/* Size in pixels for the nav bar, defining it as a constant means we can use it to calculate how
	tall the hero section should be in order to fill the screen taking into account the navbar size */
	const navSize: number = 80;

	const currentDate = new Date();

	export let data;

	// Number of questions to be used for each of the carousels.
	const carouselChunkSize = data.questions.items.length / 3;
</script>

<!-- Top bar with logo and "Get early access" button  -->
<section
	class={`bg-gradient-to-r from-neutral-800 from-25% via-neutral-400 to-neutral-800 to-75% pb-0.5 text-neutral-100 h-[${navSize}px]`}>
	<div class="flex items-center bg-hero p-4 h-full">
    	<div class="h-4 md:h-6 grow"><Logo text={true} /></div>
    	<a href="https://tally.so/r/nrVBgN"><button class="rounded-full border-2 border-neutral-700 px-4 py-1">{data.cta}</button></a>
	</div>
</section>

<!-- Hero -->
<section id="hero" class={`py-8 bg-hero bg-[size:200%] md:bg-cover min-h-[calc(100vh-${navSize}px)]`}>
	<div class="flex flex-col items-center gap-4 px-[10%]">
		<Text type="callout" color="darkPrimary" class="rounded-full px-4 sm:px-5 py-2 bg-primary-dark">Backed by top investors</Text>
		<Text type="hero" color="darkPrimary" class="sm:max-w-[60%] text-center">{data.hero.title}</Text>
		<Text type="subhead" color="darkSecondary" class="sm:max-w-[55%] text-center">{data.hero.subtitle}</Text>
		<a href="https://tally.so/r/nrVBgN"><button class="rounded-full bg-orange-500 px-4 py-1 text-neutral-100">{data.cta}</button></a>
	</div>
</section>

<!-- Metric Cards -->
<section class="flex flex-col gap-8 p-8 md:p-32 text-neutral-100">
	<Text type="title1" color="darkPrimary" class="text-center">{data.metrics.title}</Text>

	<div class="flex flex-col justify-center gap-4 md:flex-row">
	   {#each data.metrics.cards as card}
			<BigNumberCard title={card.title} description={card.subtitle} />
		{/each}
	</div>
</section>

<!-- GTM Problem -->
<section class="flex flex-col gap-8 bg-neutral-800 p-8 md:p-32 min-h-screen items-center">
    <Icon><Users class="fill-primary-dark" /></Icon>
	<Text type="title1" color="darkPrimary" class="text-center">{data.problems.title}</Text>
	<Text type="subhead" color="darkSecondary" class="text-center max-w-4xl">{data.problems.subtitle}</Text>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        {#each data.problems.cards as card}
            <ProblemCard problem={card.subtitle} />
        {/each}
	</div>

	<p class="text-center text-neutral-100">{data.problems.conclusion}</p>
</section>

<!-- Light Background -->
<section class="rounded-t-xl bg-[#FFF1E0] text-neutral-900 pt-8 md:pt-32 pb-4">
	<!-- Bullet Points -->
	<section class="flex flex-col gap-4 py-8 items-center">
    	<Icon><Writing class="fill-white" /></Icon>
		<Text type="title1" color="lightPrimary" class="text-center text-2xl px-8">{data.questions.title}</Text>

		<Text type="subhead" color="lightSecondary" class="text-center px-8 mb-8 max-w-4xl">{data.questions.subtitle}</Text>
		<AnimatedCarousel direction="leftToRight">
			{#each data.questions.items.slice(0, carouselChunkSize) as question}
				<Pill>{question}</Pill>
			{/each}
		</AnimatedCarousel>
		<AnimatedCarousel direction="rightToLeft">
    		{#each data.questions.items.slice(carouselChunkSize, carouselChunkSize * 2) as question}
   			<Pill>{question}</Pill>
    		{/each}
		</AnimatedCarousel>
		<AnimatedCarousel direction="leftToRight">
    		{#each data.questions.items.slice(carouselChunkSize * 2, carouselChunkSize * 3) as question}
   			<Pill>{question}</Pill>
    		{/each}
		</AnimatedCarousel>
	</section>

	<!-- Illustrations -->
	<section class="flex flex-col items-center gap-4 p-8">
        <Icon><Handshake class="fill-primary-light" /></Icon>
       	<Text type="title1" color="lightPrimary" class="text-center">{data.features.title}</Text>

		<Text type="subhead" color="lightSecondary" class="text-center max-w-4xl mb-8">{data.features.subtitle}</Text>

		{#each data.features.items as feature}
			<FeatureCard {feature} class="w-full md:w-1/2 m-auto"/>
		{/each}
	</section>

	<section class="p-8 flex flex-col items-center">
    	<Icon><Arrows class="stroke-neutral-100" /></Icon>
       <Text type="title1" color="lightPrimary" class="text-center">{data.footer.title}</Text>
	</section>

	<!-- Footer -->
	<footer class="flex place-items-center px-4 pb-2 pt-4 max-w-4xl m-auto">
		<p class="grow">&copy; {currentDate.getFullYear()} OnePlusOne</p>
		<a href="/"><LinkedinLogo /></a>
	</footer>
</section>

<style>
    section#hero {
        background-image: url('$lib/assets/hero_background.svg');
        background-repeat: no-repeat;
        background-position: bottom center;
    }
</style>
