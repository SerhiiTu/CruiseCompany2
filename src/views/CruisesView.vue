<script lang="ts">
import CruiseCardComponent from '@/components/CruiseCardComponent.vue'
import cruisesData from '@/data/cruises.json'

export default {
  name: 'CruisesView',
  components: { CruiseCardComponent },
  data() {
    return {
      cruises: cruisesData.cruises,
    }
  },
}
</script>

<template>
  <section class="ships-page">
    <header class="ships-header">
      <h1>Our Cruies</h1>
      <p>TEST</p>
    </header>

    <section class="ships-grid">
      <CruiseCardComponent v-for="cruise in cruises" :key="cruise.id" :cruise="cruise" />
    </section>
  </section>
</template>
