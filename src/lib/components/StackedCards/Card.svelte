<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements"
  import Text from "$lib/components/Text.svelte"
  import type { CardProps } from "$lib/components/StackedCards/StackedCards.svelte"

  interface $$props extends Pick<HTMLAttributes<HTMLElement>, 'class'>, CardProps {}

  export let zIndex: $$props['zIndex']
  export let translateY: $$props['translateY']
</script>

<div class="card sticky bottom-1/4 rounded-2xl py-6 sm:py-11 px-11 
border border-opo-orange-default bg-secondary-light 
flex flex-col items justify-center
h-52 {$$props.class}"
style="--card-z-index:{zIndex}; --card-translate-y:{translateY}px">
  <p class="font-geist font-medium text-3xl text-center text-primary-light">
    <slot />
  </p>
</div>

<style>
  .card {
    z-index: var(--card-z-index);
    transform: translateY(var(--card-translate-y));
  }
</style>