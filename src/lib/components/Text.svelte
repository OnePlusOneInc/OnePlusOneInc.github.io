<script lang="ts">
  import { cva, type VariantProps } from "class-variance-authority"
  import type { HTMLAttributes } from "svelte/elements"

  const style = cva(undefined, {
    variants: {
      type: {
        logo: [
          'font-inter', 'font-semibold', 'text-5xl', 'sm:text-6xl', 'tracking-logo',
        ],
        heading: [
          'font-geist', 'font-medium', 'text-4xl', 'sm:text-5xl', 
        ],
        copy: [
          'font-inter', 'font-normal', 'text-sm', 'sm:text-base' 
        ]
      },
      color: {
        primary: ['text-primary-light', 'dark:text-primary-dark']
      },
    },
  })
  
  type StyleProps = VariantProps<typeof style>
  interface $$props extends Pick<HTMLAttributes<HTMLElement>, 'class'>, StyleProps {}

  export let type: StyleProps['type']
  export let color: StyleProps['color'] = 'primary';
</script>

<h1 {...$$props} class={style({type, color, class: $$props.class})}>
  <slot />
</h1>