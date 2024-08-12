<script context="module" lang="ts">
  export interface CardProps {
    zIndex: number
    translateY: number
  }
</script>

<script lang="ts">
  import { SvelteComponent, type ComponentType } from "svelte"
  import type { HTMLAttributes } from "svelte/elements"

  interface Props {
    cards: string[]
    cardType: ComponentType<SvelteComponent<CardProps>>
  }

  interface $$props extends Pick<HTMLAttributes<HTMLElement>, 'class'>, Props {}

  export let contents: string[]
  export let cardType: ComponentType<SvelteComponent<CardProps>>
  const maxZIndex = contents.length 
  const translateYAmount = 10
</script>

<div 
  class="flex flex-col gap-4 pb-[_var(--extra-bottom-padding)] {$$props.class}" 
  style="--extra-bottom-padding:{Math.max(0, translateYAmount * contents.length - 10)}px">
  {#each contents as card, index}
    <svelte:component 
      this={cardType} 
      zIndex={maxZIndex - index} 
      translateY={translateYAmount * index}>
      {card}
    </svelte:component>
  {/each}
</div>