<script lang="ts">
import PersonCardComponent from '@/components/PersonCardComponent.vue'
import shipsData from '@/data/ships.json'
import teamData from '@/data/team.json'

export default {
  name: 'DetailsShipView',
  components: { PersonCardComponent },
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
    captain() {
      return teamData.persons.find((p) => p.id === this.currentShip?.captain_id)
    },
  },
}
</script>

<template>
  <section v-if="currentShip" class="ship-details">
    <RouterLink to="/ships" class="back-link">← Back to ships</RouterLink>

    <div class="ship-hero">
      <img :src="'/images/' + currentShip.image" :alt="currentShip.name" />
      <div class="hero-overlay">
        <h1>{{ currentShip.name }}</h1>
        <span class="stars">⭐ {{ currentShip.stars }}</span>
      </div>
    </div>

    <div class="ship-content">
      <ul class="ship-info">
        <li><strong>Year:</strong> {{ currentShip.year }}</li>
        <li><strong>Length:</strong> {{ currentShip.length }} m</li>
        <li><strong>Width:</strong> {{ currentShip.width }} m</li>
        <li><strong>Decks:</strong> {{ currentShip.decks }}</li>
        <li><strong>Max speed:</strong> {{ currentShip.max_speed }} knots</li>
        <li><strong>Capacity:</strong> {{ currentShip.capacity }} guests</li>
        <li><strong>Crew:</strong> {{ currentShip.crew }}</li>
        <li><strong>Registry port:</strong> {{ currentShip.registry_port }}</li>
      </ul>

      <div class="ship-description">
        <h2>About the ship</h2>
        <p>{{ currentShip.description }}</p>
      </div>
    </div>
    <section v-if="captain" class="ship-captain">
      <h2 class="captain-title">👨‍✈️ Captain of the ship</h2>

      <PersonCardComponent :person="captain" />
    </section>
  </section>
</template>
