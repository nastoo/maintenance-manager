<script setup lang="ts">

const {$matomoClient} = useNuxtApp();
const sites = await $matomoClient.getSites();

</script>

<template>
  <div>
   <div v-for="site in sites.sites" :key="site.idsite">
      <div class="card">
        <h2>{{ site.name }}</h2>
        <p>{{ site.main_url }}</p>
        <a :href="'/sites/' + site.idsite">Dashboard</a>
      </div>
     </div>

  </div>
</template>

<style scoped>

</style>
