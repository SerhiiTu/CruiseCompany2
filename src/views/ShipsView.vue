<script lang="ts">
import ShipCardComponent from '@/components/ShipCardComponent.vue'
import shipsData from '@/data/ships.json'

export default {
  name: 'ShipsView',
  components: { ShipCardComponent },
  data() {
    return {
      ships: shipsData.ships,
    }
  },
}
</script>

<template>
  <section class="ships-page">
    <header class="ships-header">
      <h1>Our Cruise Fleet</h1>
      <p>
        Discover our modern and luxurious cruise ships, designed to deliver unforgettable journeys
        across the world’s most beautiful seas.
      </p>
    </header>

    <section class="ships-grid">
      <ShipCardComponent v-for="ship in ships" :key="ship.id" :ship="ship" />
    </section>
  </section>
</template>
