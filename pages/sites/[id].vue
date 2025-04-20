<script setup lang="ts">
const route = useRoute();
const siteId = parseInt(<string>route.params?.id);

if (siteId === undefined) {
  throw new Error("Site ID is undefined");
}

const {$matomoClient} = useNuxtApp();
const site = await $matomoClient.getSiteFromId(siteId);

</script>

<template>
  <div>
    <h1>{{ site.name }}</h1>
    <p>{{ site.main_url}}</p>
  </div>
</template>

<style scoped>

</style>
