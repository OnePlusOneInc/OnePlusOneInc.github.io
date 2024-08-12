<script lang="ts">
  import { cva, type VariantProps } from "class-variance-authority"
  import type { HTMLAttributes } from "svelte/elements"
  import Text from '$lib/components/Text.svelte'


  const style = cva("rounded-full px-4 sm:px-5 py-2", {
    variants: {
      type: {
        hero: [
          "bg-primary-dark"
        ]
      },
      textColor: {
        hero: ["text-primary-dark"]
      }
    }
  })

  type StyleProps = VariantProps<typeof style>
  interface $$props extends Pick<HTMLAttributes<HTMLElement>, 'class'>, StyleProps {}

  export let type: StyleProps['type']
  export let textColor: StyleProps['textColor']
</script>

<Text type="callout" color="unstyled" class={style({type, textColor})}>
  <slot />
</Text>