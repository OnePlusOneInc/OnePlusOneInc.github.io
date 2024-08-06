<script lang="ts">
  import Text from '$lib/components/Text.svelte';
</script>
<div class="w-fit inline-block overflow-hidden py-3 px-5 whitespace-nowrap border border-gray-600 rounded-full">
  <Text type="copy"><slot /></Text>
</div>