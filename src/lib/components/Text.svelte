<script lang="ts">
  type StyleColor = 'primary';

  export let type: 'logo';
  export let color: StyleColor = 'primary';

  const colorClasses: Record<StyleColor, string> = {
    primary: 'text-primary-light dark:text-primary-dark'
  }
</script>


{#if type === 'logo'}
<h1 class="font-logo font-semibold text-6xl tracking-logo ${colorClasses[color]}">
  <slot />
</h1>
{/if}