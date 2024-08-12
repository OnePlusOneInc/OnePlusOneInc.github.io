<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  type Direction = 'rightToLeft' | 'leftToRight'
  export let direction: Direction
  export let duration: number = 60

  const justifyContent = direction === 'rightToLeft' ? 'justify-end' : 'justify-start'

  interface $$props extends Pick<HTMLAttributes<HTMLElement>, 'class'> {
    direction: Direction,
    duration: number,
  }
</script>

<div class="carousel relative flex flex-row flex-nowrap overflow-hidden {justifyContent}
  before:left-0 before:bg-gradient-to-r before:from-primary-light
  after:right-0 after:bg-gradient-to-l after:from-primary-light
  before:absolute before:top-0 before:w-1/12 before:h-full before:content-[''] before:z-10
  after:absolute after:top-0 after:w-1/12 after:h-full after:content-[''] after:z-10 {$$props.class}"
  style="--duration:{duration}s">
  {#each {length: 2} as _}
    <div class="slide flex flex-row flex-nowrap gap-4 {direction} {justifyContent} pl-2 pr-2">
      <slot></slot>
    </div>   
  {/each}
</div>

<style>
  .carousel:hover .slide {
    animation-play-state: paused;
  }

  @keyframes animation {
    from {
      transform: translateX(var(--from));
    }
    to {
      transform: translateX(var(--to));
    }
  }

  .leftToRight {
    --from: 0;
    --to: -100%;
  }

  .rightToLeft {
    --from: 0;
    --to: 100%;
  }

  .slide {
    animation: var(--duration) animation infinite linear;
  }
</style>
