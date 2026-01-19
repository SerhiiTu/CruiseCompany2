<script lang="ts">
import ShipCardComponent from '@/components/ShipCardComponent.vue'
import shipsData from '/Users/serhiitumarkin/WebProjects/CruiseCompany2/src/data/ships.json'
import { RouterView } from 'vue-router'
export default {
  computed: {},
  props: {},
  data() {
    return {
      ships: shipsData.ships,
    }
  },
  components: { ShipCardComponent },
}
</script>

<template>
  <div class="">
    <h2>Our ships:</h2>
    <div class="">
      <ShipCardComponent v-for="ship in ships" :key="ship.id" :ship="ship" />
    </div>
  </div>
</template>
