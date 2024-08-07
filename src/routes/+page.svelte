<script lang="ts">
	import FeatureCard from './feature_card.svelte'
	import BigNumberCard from './big_number_card.svelte'
	import ProblemCard from './problem_card.svelte'
	import Logo from '$lib/components/Logo.svelte'
	import LinkedinLogo from '$lib/assets/linkedin_logo.svelte'
	import Pill from '$lib/components/Pill/Pill.svelte'
	import AnimatedCarousel from '$lib/components/AnimatedCarousel/AnimatedCarousel.svelte'
	import Text from '$lib/components/Text.svelte'

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

	const currentDate = new Date();
</script>

<!-- Top bar with logo and "Get early access" button  -->
<section
	class="bg-gradient-to-r from-neutral-800 from-25% via-neutral-400 to-neutral-800 to-75% pb-0.5 text-neutral-100"
>
	<div class="flex items-center bg-hero p-4">
    	<div class="h-4 md:h-6 grow"><Logo text={true} /></div>
    	<a href="https://tally.so/r/nrVBgN"><button class="rounded-full border-2 border-neutral-700 px-4 py-1">Get Early Access</button></a>
	</div>
</section>

<!-- Hero -->
<section class="px-8 py-16 bg-hero bg-[size:200%] md:bg-cover" id="hero">
	<div class="flex flex-col items-center gap-4 px-[10%]">
		<Text type="callout" color="darkPrimary" class="rounded-full px-4 sm:px-5 py-2 bg-primary-dark">Backed by top investors</Text>
		<Text type="hero" color="darkPrimary" class="sm:max-w-[60%] text-center">Turn all Partnerships into Revenue</Text>
		<Text type="subhead" color="darkSecondary" class="sm:max-w-[55%] text-center">
			Our AI Partnerships Intelligence Platform analyzes sales calls to uncover partner
			opportunities. Our insights and workflows empower you to boost revenue and close deals faster
			through partnerships.
		</Text>
		<a href="https://tally.so/r/nrVBgN"><button class="rounded-full bg-orange-500 px-4 py-1 text-neutral-100">Get Early Access</button></a>
	</div>
</section>

<!-- Metric Cards -->
<section class="flex flex-col gap-8 p-8 text-neutral-100">
	<Text type="title1" color="darkPrimary" class="text-center">When you tap into your Partner Ecosystem:</Text>

	<div class="flex flex-col justify-center gap-4 md:flex-row">
		<BigNumberCard title="2X" description="Drive 2x more revenue" />
		<BigNumberCard title="41%" description="41% Higher Win Rate" />
		<BigNumberCard title="35%" description="Close deals 35% faster" />
	</div>
</section>

<!-- GTM Problem -->
<section class="flex flex-col gap-8 bg-neutral-800 p-8">
	<Text type="title1" color="darkPrimary" class="text-center">The GTM Problem</Text>
	<Text type="subhead" color="darkSecondary" class="text-center">
		B2B companies are struggling to hit revenue targets in this economic downturn. Buyers are
		overwhelmed by volume-based tactics, generic outreach, and AI-generated content.
	</Text>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
		<ProblemCard problem="An average of 306 cold emails sent to generate 1 lead" />
		<ProblemCard problem="MQL to SQL conversion rates have dropped to a mere 13%" />
		<ProblemCard
			problem="B2B Marketing Customer Acquisition Costs have surged 75% in the past 5 years"
		/>
	</div>

	<p class="text-center text-neutral-100">This is why 84% of B2B purchases start with a referral</p>
</section>

<!-- Light Background -->
<section class="rounded-t-xl bg-[#FFF1E0] text-neutral-900">
	<!-- Bullet Points -->
	<section class="flex flex-col gap-4 py-8">
		<Text type="title1" color="lightPrimary" class="text-center text-2xl px-8">But Partnerships are still stuck in the old day</Text>

		<Text type="subhead" color="lightSecondary" class="text-center px-8">
			Partnerships often lose momentum, miss timelines, fail to launch, or fail to bring consistent results because Partner Managers are stuck using tools and processes built for other GTM departments.
		</Text>
		<AnimatedCarousel direction="leftToRight">
			{#each bulletPoints['one'] as bulletPoint}
				<Pill>{bulletPoint}</Pill>
			{/each}
		</AnimatedCarousel>
		<AnimatedCarousel direction="rightToLeft">
			{#each bulletPoints['two'] as bulletPoint}
				<Pill>{bulletPoint}</Pill>
			{/each}
		</AnimatedCarousel>
		<AnimatedCarousel direction="leftToRight">
			{#each bulletPoints['three'] as bulletPoint}
				<Pill>{bulletPoint}</Pill>
			{/each}
		</AnimatedCarousel>
	</section>

	<!-- Illustrations -->
	<section class="flex flex-col gap-4 p-8">
		<Text type="title1" color="lightPrimary" class="text-center">A New Era for Partnerships</Text>

		<Text type="subhead" color="lightSecondary" class="text-center">
			We empower B2B partnership teams with AI-powered insights, workflows, and automation to
			activate new partnerships, uncover referrals, and boost revenue.
		</Text>

		{#each features as feature}
			<FeatureCard {feature} />
		{/each}
	</section>

	<section class="p-8">
		<Text type="title1" color="lightPrimary" class="text-center">Never let a referral escape</Text>
	</section>

	<!-- Footer -->
	<footer class="flex place-items-center px-4 py-2">
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
