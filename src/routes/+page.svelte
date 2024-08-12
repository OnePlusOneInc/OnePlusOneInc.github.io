<script lang="ts">
	import FeatureCard from './FeatureCard.svelte'
	import BigNumberCard from './BigNumberCard.svelte'
	import ProblemCard from './ProblemCard.svelte'
	import Icon from './Icon.svelte';
	import Logo from '$lib/components/Logo.svelte'
	import Pill from '$lib/components/Pill/Pill.svelte'
	import AnimatedCarousel from '$lib/components/AnimatedCarousel/AnimatedCarousel.svelte'
	import Text from '$lib/components/Text.svelte'
  import Button from '$lib/components/Button/Button.svelte'
  import Toast from '$lib/components/Toast/Toast.svelte'
	import HeroBackground from '$lib/assets/hero_background.svg'

	/* Size in pixels for the nav bar, defining it as a constant means we can use it to calculate how
	tall the hero section should be in order to fill the screen taking into account the navbar size */
	const navSize: number = 80;

	const features: string[] = [
		'Seamless integrate partnerships in sales discussions',
		'Maximize partnerships as a resource',
		'Tell your AEs when partners can help source and close deals',
		'Leverage power workflows to enhance efficiency',
		'Keep partners informed', 'Convert more pipeline with partner intent signals',
		'Never miss a referral again'
	];

	const bulletPoints: Record<'one' | 'two' | 'three', string[]> = {
		one: ["Missing referrals and losing deals?", "Constantly reminding your sales team to refer partners?", "Organizing partner enablement sessions and documents that no one reads?"],
		two: ["Struggling to track which partners are actually referring business?", "Tired of sending endless \"just checking in\" messages?", "Unsure how to build on initial partnership momentum?"],
		three: ["Wishing you could be on every sales call to highlight partner value?", "Spending hours in Salesforce trying to support your sales team?", "Losing credit for partner-driven deals due to poor record-keeping?"]
	}

	const getEarlyAccessHref = "https://tally.so/r/nrVBgN";
	const getEarlyAccessText = "Get early access ›";
	const currentDate = new Date();
	const pageMargin = "mx-4 sm:mx-12 md:mx-28";
</script>

<!-- Above the fold section -->
<div class="bg-hero flex flex-col lg:min-h-screen">
	<!-- Top bar with logo and "Get early access" button  -->
	<section class="{pageMargin} flex flex-col flex-nowrap justify-between items-stretch">
		<div class="flex flex-row flex-nowrap justify-between items-center py-4 md:py-6 xl:py-8">
			<Logo text={true} />
			<Button type="secondary" href={getEarlyAccessHref}>{getEarlyAccessText}</Button>
		</div>
		<div class="h-px bg-gradient-to-r from-transparent sm:from-20% via-[#38373A] to-transparent sm:to-80%"/>
	</section>

	<!-- Hero -->
	<section class="flex flex-col flex-grow gap-6 sm:gap-8 pt-8 pb-32 sm:pb-24">
		<div class="{pageMargin} flex flex-col items-center">
			<Toast type="hero" textColor="hero">Backed by top investors</Toast>
			<Text type="hero" color="darkPrimary" class="pt-5 pb-4 lg:max-w-[60%] text-center">Turn all Partnerships into Revenue</Text>
			<Text type="subhead" color="darkSecondary" class="sm:max-w-[55%] text-center">
				Our AI Partnerships Intelligence Platform analyzes sales calls to uncover partner
				opportunities. Our insights and workflows empower you to boost revenue and close deals faster
				through partnerships.
			</Text>
		</div>
		<div class="flex flex-col relative">
			<img class="hidden sm:block sm:-mt-6" src={HeroBackground} alt="Background logo" />
			<Button class="place-self-center sm:z-10 sm:absolute" type="primary" href={getEarlyAccessHref}>{getEarlyAccessText}</Button>
		</div>
	</section>

	<!-- Metric Cards -->
	<section class="flex flex-col items-center gap-8 mx-4 sm:mx-28 pb-12 sm:pb-24">
		<Text type="largeTitle" color="darkPrimary" class="text-center sm:max-w-[50%] place-self-center">When you tap into your Partner Ecosystem:</Text>
		<div class="flex flex-col justify-center gap-4 md:flex-row">
			<BigNumberCard title="2X" description="Drive 2x more revenue" />
			<BigNumberCard title="41%" description="41% Higher Win Rate" />
			<BigNumberCard title="35%" description="Close deals 35% faster" />
		</div>
	</section>
</div>
<!-- GTM Problem -->
<section class="flex flex-col bg-primary-dark px-4 sm:px-28 pt-6 sm:pt-24 pb-12 sm:pb-0 min-h-screen items-center">
    <Icon name="users" />
	<Text type="largeTitle" color="darkPrimary" class="text-center mt-3 sm:mt-6 mb-4">The GTM Problem</Text>
	<Text type="subhead" color="darkSecondary" class="text-center sm:max-w-[50%] mb-12 sm:mb-20">
		B2B companies are struggling to hit revenue targets in this economic downturn. Buyers are
		overwhelmed by volume-based tactics, generic outreach, and AI-generated content.
	</Text>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-3 pb-16 sm:pb-20 max-w-[60%] md:max-w-full">
		<ProblemCard header="306" problem="An average of 306 cold emails sent to generate 1 lead" />
		<ProblemCard header="13%" problem="MQL to SQL conversion rates have dropped to a mere 13%" />
		<ProblemCard header="75%" problem="B2B Marketing Customer Acquisition Costs have surged 75% in the past 5 years"
		/>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-16">
		<div class="hidden md:block h-px bg-gradient-to-r from-[#222225] to-primary-light/[.20]"></div>
		<Text type="title1" color="darkPrimary" class="text-center">This is why 84% of B2B purchases start with a referral</Text>
		<div class="hidden md:block h-px bg-gradient-to-r to-[#222225] from-primary-light/[.20]"></div>
	</div>
	<div class="hidden md:block h-44 w-full relative">
		<div class="bg-primary-light rounded-t-xl absolute bottom-0 h-24 left-32 right-32"/>
	</div>
</section>

<!-- Light Background -->
<section class="rounded-t-xl md:rounded-t-none bg-primary-light pt-7 md:pt-0">
	<!-- Bullet Points -->
	<section class="flex flex-col items-center gap-4 pb-20 sm:pb-32">
    <Icon name="writing" class="md:-mt-4 z-10" />
		<Text type="largeTitle" color="lightPrimary" class="text-center text-2xl px-8 sm:max-w-[50%] ">But Partnerships are still stuck in the old day</Text>

		<Text type="subhead" color="lightSecondary" class="text-center px-8 mb-8 max-w-4xl sm:max-w-[55%]">
			Partnerships often lose momentum, miss timelines, fail to launch, or fail to bring consistent results because Partner Managers are stuck using tools and processes built for other GTM departments.
		</Text>
		<AnimatedCarousel direction="leftToRight" class="self-stretch">
			{#each bulletPoints['one'] as bulletPoint}
				<Pill>{bulletPoint}</Pill>
			{/each}
		</AnimatedCarousel>
		<AnimatedCarousel direction="rightToLeft" class="self-stretch">
			{#each bulletPoints['two'] as bulletPoint}
				<Pill>{bulletPoint}</Pill>
			{/each}
		</AnimatedCarousel>
		<AnimatedCarousel direction="leftToRight" class="self-stretch">
			{#each bulletPoints['three'] as bulletPoint}
				<Pill>{bulletPoint}</Pill>
			{/each}
		</AnimatedCarousel>
	</section>

	<!-- Illustrations -->
	<section class="flex flex-col items-center gap-4 p-8">
        <Icon name="handshake" />
       	<Text type="largeTitle" color="lightPrimary" class="text-center">A New Era for Partnerships</Text>

		<Text type="subhead" color="lightSecondary" class="text-center max-w-4xl mb-8">
			We empower B2B partnership teams with AI-powered insights, workflows, and automation to
			activate new partnerships, uncover referrals, and boost revenue.
		</Text>

		{#each features as feature}
			<FeatureCard {feature} class="w-full md:w-1/2 m-auto"/>
		{/each}
	</section>

	<!-- Call to Action -->
	<section class="{pageMargin} flex flex-col justify-center items-center gap-3 sm:gap-6 pb-9 sm:pb-24">
    <Icon name="arrows" />
		<Text type="largeTitle" color="lightPrimary" class="text-center">Never let a referral escape</Text>
		<Button type="primary" href={getEarlyAccessHref}>{getEarlyAccessText}</Button>
	</section>

	<!-- Footer -->
	<footer class="{pageMargin} flex justify-center items-center py-4 sm:py-10 border-t border-[#EBEBEB]">
		<Text type="footnote" color="lightPrimary">
			&copy; {currentDate.getFullYear()} OnePlusOne
		</Text>
	</footer>
</section>
