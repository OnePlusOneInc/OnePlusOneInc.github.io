<script lang="ts">
  import { cva, type VariantProps } from "class-variance-authority"
  import Text from "../Text.svelte"

  const style = cva("rounded-full", {
    variants: {
      type: {
        primary: [
          "bg-opo-orange-default", "hover:bg-opo-orange-l1", "active:bg-opo-orange-d1", "px-3", "py-2", "sm:px-4", "sm:py-3", "py-1", "sm:py-2", 
        ],
        secondary: [
          "bg-transparent", "border", "active:border-primary-light", "px-3", "sm:px-4", "py-1", "sm:py-2"
        ],
      },
      textColor: {
        primary: ["text-primary-dark"],
        dark: ["text-primary-dark"]
      } 
    }
  })

  type StyleProps = VariantProps<typeof style>
  interface $$props extends Pick<HTMLLinkElement, 'href'>, StyleProps {}

  export let type: StyleProps['type']
  export let textColor: StyleProps['textColor'] = 'primary';
</script>

<a {...$$props} href={$$props.href} class={style({type, class: $$props.class})}>
  <Text type="button" color="unstyled" class={style({textColor})}>
    <slot />
  </Text>
</a>


