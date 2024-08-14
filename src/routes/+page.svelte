<script lang="ts">
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
  import StackedCards from '$lib/components/StackedCards/StackedCards.svelte'
  import Card from '$lib/components/StackedCards/Card.svelte'
  import Hand from '$lib/assets/hand.svg'

  const bulletPoints: Record<'one' | 'two' | 'three', string[]> = {
    one: [
      "Missing referrals and losing deals?",
      "Constantly reminding your sales team to refer partners?",
      "Organizing partner education sessions and documents that no one cares about?",
    ],
    two: [
      "Unsure how to build on initial partnership momentum?",
      "Struggling to track which partners are actually referring business?",
      "Tired of sending endless \"just checking in\" messages?"
    ],
    three: [
      "Losing credit for partner-driven deals due to poor record-keeping?",
      "Wishing you could be on every sales call to highlight partner value?",
      "Spending hours in Salesforce trying to support your sales team?",
    ]
  }

  const features: Record<'one' | 'two', string[]> = {
    one: [
      'Seamless integrate partnerships in sales discussions',
      'Leverage partnerships to unblock deals',
      'Help your AEs source and close deals with Partners',
      'Build power workflows to enhance efficiency'
    ],
    two: [
      'Keep partners informed',
      'Leverage partner intent signals',
      'Recommend Partners to bridge gaps you can’t fill yourself',
      'Never miss a referral again',
      'Celebrate wins with Partners'
    ],
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
      <Text type="hero" color="darkPrimary" class="pt-5 pb-4 lg:max-w-[60%] text-center">Unlock Revenue through Partnerships</Text>
      <Text type="subhead" color="darkSecondary" class="mt-2 sm:mt-4 sm:max-w-[55%] text-center">
        Our AI-powered platform analyzes sales conversations to uncover partnership opportunities and empowers Partnership Leaders with actionable insights, dedicated workspaces, and workflows to boost win rates and close deals faster through partnerships.
      </Text>
    </div>
    <div class="flex flex-col relative">
      <img class="hidden sm:block sm:-mt-6" src={HeroBackground} alt="Background logo" />
      <Button class="place-self-center sm:z-10 sm:absolute" type="primary" href={getEarlyAccessHref}>{getEarlyAccessText}</Button>
    </div>
  </section>

  <!-- Metric Cards -->
  <section class="flex flex-col items-center gap-8 mx-4 sm:mx-28 pb-12 sm:pb-24">
    <Text type="largeTitle" color="darkPrimary" class="text-center sm:max-w-[50%] place-self-center">When you tap into your Partner Ecosystem</Text>
    <div class="flex flex-col justify-center gap-4 md:flex-row">
      <BigNumberCard title="2X" description="Drive 2x more revenue" />
      <BigNumberCard title="41%" description="41% higher win-rate" />
      <BigNumberCard title="35%" description="Close deals 35% faster" />
    </div>
  </section>
</div>
<!-- GTM Problem -->
<section class="flex flex-col bg-primary-dark px-4 sm:px-28 pt-6 sm:pt-24 pb-12 sm:pb-0 min-h-screen items-center">
    <Icon name="users" />
  <Text type="largeTitle" color="darkPrimary" class="text-center mt-3 sm:mt-6 mb-4">The GTM Problem</Text>
  <Text type="subhead" color="darkSecondary" class="text-center sm:max-w-[50%] mt-2 sm:mt-4 mb-12 sm:mb-20">
    The B2B world is changing fast, and the old ways of growing don't work anymore. Buyers are overwhelmed by volume-based tactics, generic outreach, and AI-generated content.
  </Text>

  <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 pb-16 sm:pb-20 max-w-[80%] lg:max-w-full">
    <ProblemCard header="306" problem="An average of 306 cold emails sent to generate 1 lead" />
    <ProblemCard header="13%" problem="MQL to SQL conversion rates have dropped to 13%" />
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
  <section class="flex flex-col items-center pb-20 sm:pb-32">
    <Icon name="writing" class="md:-mt-4 z-10" />
    <Text type="largeTitle" color="lightPrimary" class="mt-3 sm:mt-6 text-center text-2xl px-8 sm:max-w-[50%] ">But Partnerships are still stuck in the old days</Text>

    <Text type="subhead" color="lightSecondary" class="text-center mt-2 sm:mt-4 px-8 mb-8 sm:mb-20 max-w-4xl sm:max-w-[55%]">
      Partnerships often lose momentum, miss timelines, fail to launch, or fail to bring consistent results because Partner Managers are stuck using tools and processes built for other GTM departments		</Text>
    <AnimatedCarousel direction="leftToRight" class="self-stretch mb-2 sm:mb-4">
      {#each bulletPoints['one'] as bulletPoint}
        <Pill>{bulletPoint}</Pill>
      {/each}
    </AnimatedCarousel>
    <AnimatedCarousel direction="rightToLeft" class="self-stretch mb-2 sm:mb-4">
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
  <section class="flex flex-col items-center pb-20 sm:pb-44 ">
    <Icon name="handshake" />
    <Text type="largeTitle" color="lightPrimary" class="mt-3 sm:mt-6 text-center sm:max-w-[40%]">A New Era for Partnerships</Text>
    <Text type="subhead" color="lightSecondary" class="text-center sm:max-w-[45%] mt-2 sm:mt-4 mb-8 sm:mb-24">
      We empower B2B partnership teams with AI-powered insights, dedicated workspaces, and workflows to activate new partnerships, uncover referrals, and unlock revenue.
    </Text>

    <div class="hidden md:block">
      <div class="grid grid-cols-2 gap-8 overflow-clip [direction:rtl]">
        <StackedCards
          class="mr-28"
          contents={features['one']}
          cardType={Card}
        />
        <img src={Hand} alt="" class="mt-16 max-w-none sticky top-1/2 object-cover" />
      </div>
      <div class="grid grid-cols-2 pt-44 gap-8 overflow-clip">
        <StackedCards
          class="ml-28"
          contents={features['two']}
          cardType={Card}
        />
        <img src={Hand} alt="" class="mt-16 -scale-x-[1] max-w-none sticky top-1/2"/>
      </div>
    </div>
    <div class="md:hidden">
      <StackedCards
        class="mx-4"
        contents={[...features['one'], ...features['two']]}
        cardType={Card}
      />
    </div>

    <Text type="title1" color="lightPrimary" class="pt-16 sm:pt-20 text-center {pageMargin}">
      Helping your partners find new customers strengthens your partnership. They grow, you grow, and customers are happier. When your partners succeed, so do you.
    </Text>
  </section>

  <!-- Call to Action -->
  <section class="{pageMargin} flex flex-col justify-center items-center gap-3 sm:gap-6 pb-9 sm:pb-24">
    <Icon name="arrows" />
    <Text type="largeTitle" color="lightPrimary" class="text-center sm:max-w-[50%]">Purpose-built for Partnerships</Text>
    <Button type="primary" href={getEarlyAccessHref}>{getEarlyAccessText}</Button>
  </section>

  <!-- Footer -->
  <footer class="{pageMargin} flex justify-center items-center py-4 sm:py-10 border-t border-[#EBEBEB]">
    <Text type="footnote" color="lightPrimary">
      &copy; {currentDate.getFullYear()} OnePlusOne
    </Text>
  </footer>
</section>
