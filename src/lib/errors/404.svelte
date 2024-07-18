<script lang="ts">
  import hero from '$lib/assets/404.svg';
  import Text from '$lib/components/Text.svelte';
</script>

<div class="h-screen p-4 flex flex-col flex-nowrap align-middle justify-center items-center">
  <img class="w-32" src={hero} alt="">
  <Text type="heading" style="mt-6 mb-4">Not found</Text>
  <Text type="copy">The page you're looking for doesn't exist</Text>
</div>