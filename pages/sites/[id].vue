<script setup lang="ts">
const route = useRoute();
const siteId = parseInt(<string>route.params?.id);

if (siteId === undefined) {
  throw new Error("Site ID is undefined");
}

const {$matomoClient} = useNuxtApp();
const site = await $matomoClient.getSiteFromId(siteId);
const visitSummary = await $matomoClient.getVisitSummary(siteId);
const visitFrequency = await $matomoClient.getVisitFrequency(siteId);
const userCountry = await $matomoClient.getUserCountry(siteId);
const pageTitles = await $matomoClient.getPageTitles(siteId);
const devicesType = await $matomoClient.getDeviceTypes(siteId);
const getReferrer = await $matomoClient.getReferrers(siteId);
</script>

<template>
  <div>
    <h1>{{ site.name }}</h1>
    <p>{{ site.main_url}}</p>
  </div>
</template>

<style scoped>

</style>
