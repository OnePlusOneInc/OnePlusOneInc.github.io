<script lang="ts">
	const problems: string[] = [
		'An average of 306 cold emails sent to generate 1 lead',
		'MQL to SQL conversion rates have dropped to a mere 13%',
		'B2B Marketing Customer Acquisition Costs have surged 75% in the past 5 years'
	];

	const features: string[] = [
		'Seamless integrate partnerships in sales discussions',
		'Maximize partnerships as a resource',
		'Tell your AEs when partners can help source and close deals',
		'Leverage power workflows to enhance efficiency',
		'Keep partners informed',
		'Convert more pipeline with partner intent signals',
		'Never miss a referral again'
	];

	const currentDate = new Date();
</script>

<!-- Top bar with logo and "Get early access" button  -->
<section
	class="bg-gradient-to-r from-neutral-800 from-25% via-neutral-400 to-neutral-800 to-75% pb-0.5 text-neutral-100"
>
	<div class="flex items-center bg-neutral-900 p-4">
		<p class="flex-grow">Logo</p>
		<button class="rounded-full border-2 border-neutral-700 px-4 py-1">Get Early Access</button>
	</div>
</section>

<!-- Hero -->
<section class="p-8">
	<div class="flex flex-col items-center gap-4">
		<p class="rounded-full bg-neutral-800 px-4 py-1 text-sm text-neutral-100">
			Backed by top investors
		</p>
		<h1 class="text-center text-4xl text-neutral-100">Turn all Partnerships into Revenue</h1>
		<p class="text-center text-neutral-400">
			Our AI Partnerships Intelligence Platform analyzes sales calls to uncover partner
			opportunities. Our insights and workflows empower you to boost revenue and close deals faster
			through partnerships.
		</p>
		<button class="rounded-full bg-orange-500 px-4 py-1 text-neutral-100">Get Early Access</button>
	</div>
</section>

<!-- Metric Cards -->
<section class="flex flex-col gap-4 p-8 text-neutral-100">
	<h2 class="text-center text-2xl">When you tap into your Partner Ecosystem:</h2>
	<div class="m-auto w-3/4 rounded-md bg-gradient-to-r from-neutral-400 to-neutral-700 p-0.5">
		<div class="aspect-square content-center rounded-md bg-neutral-800 p-8">
			<h3 class="mb-2 text-center text-6xl">2X</h3>
			<p class="text-center text-xl text-neutral-500">Drive 2x more revenue</p>
		</div>
	</div>
	<div class="m-auto w-3/4 rounded-md bg-gradient-to-r from-neutral-400 to-neutral-700 p-0.5">
		<div class="aspect-square content-center rounded-md bg-neutral-800 p-8">
			<h3 class="mb-2 text-center text-6xl">41%</h3>
			<p class="text-center text-xl text-neutral-500">41% Higher Win Rate</p>
		</div>
	</div>
	<div class="m-auto w-3/4 rounded-md bg-gradient-to-r from-neutral-400 to-neutral-700 p-0.5">
		<div class="aspect-square content-center rounded-md bg-neutral-800 p-8">
			<h3 class="mb-2 text-center text-6xl">35%</h3>
			<p class="text-center text-xl text-neutral-500">Close deals 35% faster</p>
		</div>
	</div>
</section>

<!-- GTM Problem -->
<section class="flex flex-col gap-4 bg-neutral-800 p-8">
	<h2 class="text-center text-2xl text-neutral-100">The GTM Problem</h2>
	<p class="text-center text-sm text-neutral-400">
		B2B companies are struggling to hit revenue targets in this economic downturn. Buyers are
		overwhelmed by volume-based tactics, generic outreach, and AI-generated content.
	</p>

	{#each problems as problem}
		<div class="rounded-md bg-neutral-700 p-2">
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
	{/each}

	<p class="text-center text-neutral-100">This is why 84% of B2B purchases start with a referral</p>
</section>

<!-- Light Background -->
<section class="rounded-t-xl bg-[#FFF1E0] text-neutral-900">
	<!-- Bullet Points -->
	<section class="flex flex-col gap-4 p-8">
		<h2 class="text-center text-2xl">But Partnerships are still stuck in the old day</h2>

		<p class="text-center text-sm text-neutral-500">
			Partnerships often lose momentum, miss timelines, fail to launch, or bring consistent results
			because Partner Managers are stuck using tools and processes built for other GTM departments.
		</p>

		<ul class="list-inside list-disc gap-4 text-sm">
			<li class="mb-2 text-[#FF5C00]">
				<span class="text-neutral-900">Missing referrals and losing deals?</span>
			</li>

			<li class="mb-2 text-[#FF5C00]">
				<span class="text-neutral-900">Tired of sending endless "just checking in" messages?</span>
			</li>

			<li class="mb-2 text-[#FF5C00]">
				<span class="text-neutral-900">Unsure how to build on initial partnership momentum?</span>
			</li>

			<li class="mb-2 text-[#FF5C00]">
				<span class="text-neutral-900">
					Struggling to track which partners are actually referring business?
				</span>
			</li>

			<li class="mb-2 text-[#FF5C00]">
				<span class="text-neutral-900"
					>Spending hours in Salesforce trying to support your sales team?</span
				>
			</li>
			<li class="mb-2 text-[#FF5C00]">
				<span class="text-neutral-900">
					Constantly reminding your sales team to refer partners?
				</span>
			</li>
			<li class="mb-2 text-[#FF5C00]">
				<span class="text-neutral-900">
					Organizing partner education sessions and documents that no one cares about?
				</span>
			</li>
			<li class="mb-2 text-[#FF5C00]">
				<span class="text-neutral-900">
					Wishing you could be on every sales call to highlight partner value?
				</span>
			</li>
			<li class="mb-2 text-[#FF5C00]">
				<span class="text-neutral-900">
					Losing credit for partner-driven deals due to poor record-keeping?
				</span>
			</li>
		</ul>
	</section>

	<!-- Illustrations -->
	<section class="flex flex-col gap-4 p-8">
		<h2 class="text-center text-2xl">A New Era for Partnerships</h2>

		<p class="text-center text-sm text-neutral-500">
			We empower B2B partnership teams with AI-powered insights, workflows, and automation to
			activate new partnerships, uncover referrals, and boost revenue.
		</p>

		{#each features as feature}
			<div class="rounded-md border-2 border-[#FF5C00] p-2">
				<div class="content-center p-16">
					<h3 class="text-center text-xl text-neutral-600">Illustration here</h3>
				</div>

				<p class="p-4 text-center text-sm text-neutral-600">
					{feature}
				</p>
			</div>
		{/each}
	</section>

	<section class="p-8">
		<h2 class="text-center text-2xl">Never let a referral escape</h2>
	</section>

	<!-- Footer -->
	<footer class="flex place-items-center px-4 py-2">
		<p class="flex-grow">&copy; {currentDate.getFullYear()} OnePlusOne</p>
		<a class="h-12 w-12 rounded-md bg-[#FF5C00] text-center text-neutral-100" href="/">in</a>
	</footer>
</section>
