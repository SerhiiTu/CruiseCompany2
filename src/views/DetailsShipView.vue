<script lang="ts">
import shipsData from '@/data/ships.json'

export default {
  props: {
    ship: {
      type: String,
      required: true,
    },
  },
  computed: {
    currentShip() {
      return shipsData.ships.find((s) => s.slug === this.ship)
    },
  },
}
</script>

<template>
  <div v-if="currentShip">
    <h2>{{ currentShip.name }}</h2>
    <h2>{{ currentShip.stars }}</h2>
    <p>{{ currentShip.description }}</p>
  </div>
</template>
