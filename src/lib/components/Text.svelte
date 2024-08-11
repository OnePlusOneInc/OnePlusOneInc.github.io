<script lang="ts">
  import { cva, type VariantProps } from "class-variance-authority"
  import type { HTMLAttributes } from "svelte/elements"

  const style = cva(undefined, {
    variants: {
      type: {
        logo: [
          'font-inter', 'font-semibold', 'text-5xl', 'sm:text-6xl', 'tracking-logo',
        ],
        hero: [
        'font-geist', 'font-medium', 'text-3xl', 'sm:text-7xl',
        ],
        title1: [
          'font-geist', 'font-medium', 'text-2xl', 'sm:text-5xl', 
        ],
        subhead: [
          'font-inter', 'font-normal', 'text-base'
        ],
        copy: [
          'font-inter', 'font-normal', 'text-sm', 'sm:text-base' 
        ],
        footnote: [
          'font-inter', 'font-normal', 'text-sm', 
        ],
        callout: [
          'font-inter', 'font-medium', 'text-sm', 'sm:text-base', 
        ]
      },
      color: {
        primary: ['text-primary-light', 'dark:text-primary-dark'],
        lightPrimary: ['text-primary-light'],
        darkPrimary: ['text-primary-dark'],
        secondary: ['text-secondary-light', 'dark:text-secondary-dark'],
        lightSecondary: ['text-secondary-light'],
        darkSecondary: ['text-secondary-dark'],
      },
    },
  })
  
  type StyleProps = VariantProps<typeof style>
  interface $$props extends Pick<HTMLAttributes<HTMLElement>, 'class'>, StyleProps {}

  export let type: StyleProps['type']
  export let color: StyleProps['color'] = 'primary';
</script>

{#if  type === 'copy' || type === 'callout'}
  <p {...$$props} class={style({type, color, class: $$props.class})}>
    <slot />
  </p>
{:else if type === 'footnote'}
  <h6 {...$$props} class={style({type, color, class: $$props.class})}>
  <slot />
  </h6>
{:else}
  <h1 {...$$props} class={style({type, color, class: $$props.class})}>
    <slot />
  </h1>
{/if}