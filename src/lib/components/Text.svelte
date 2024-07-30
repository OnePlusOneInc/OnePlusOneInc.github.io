<script lang="ts">
  type TextType = 'logo' | 'heading' | 'copy';
  type StyleColor = 'primary';

  export let type: TextType;
export let color: StyleColor = 'primary';
  export let style: string | undefined = undefined;

  const colorClasses: Record<StyleColor, string> = {
    primary: 'text-primary-light dark:text-primary-dark'
  }
</script>


{#if type === 'logo'}
  <h1 class={`font-inter font-semibold text-5xl sm:text-0xl tracking-logo ${colorClasses[color]} ${style ? style : ''}`}>
  <slot />
  </h1>
{:else if type === 'heading'}
  <h1 class={`font-geist font-medium text-4xl sm:text-5xl ${colorClasses[color]} ${style ? style : ''}`}>
    <slot />
    </h1>
    {:else if type === 'copy'}
      <h1 class={`font-inter font-normal text-sm sm:text-base ${colorClasses[color]} ${style ? style : ''}`}>
        <slot />
        </h1>
{/if}