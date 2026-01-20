<script lang="ts">
import { useMainDataStore } from '@/stores/mainDataStore'
import CruiseCardComponent from '@/components/CruiseCardComponent.vue'

export default {
  name: 'CruisesView',
  components: { CruiseCardComponent },

  computed: {
    dataStore() {
      return useMainDataStore()
    },

    cruises() {
      return this.dataStore.cruises
    },
  },
}
</script>
<template>
  <section class="ships-page">
    <header class="ships-header">
      <h1>Our Cruises</h1>

      <p>
        Discover carefully curated cruise itineraries across the world’s most breathtaking
        destinations. From majestic northern fjords and sunny Mediterranean shores to exotic
        long-distance voyages, each cruise is designed to offer comfort, adventure, and
        unforgettable memories.
      </p>

      <p class="subtitle">Choose your route, pick your ship, and let the journey begin.</p>
    </header>

    <section class="ships-grid">
      <CruiseCardComponent v-for="cruise in cruises" :key="cruise.id" :cruise="cruise" />
    </section>
  </section>
</template>
