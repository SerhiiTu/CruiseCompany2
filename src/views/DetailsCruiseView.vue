<script lang="ts">
import ShipCardComponent from '@/components/ShipCardComponent.vue'
import cruisesData from '@/data/cruises.json'
import shipsData from '@/data/ships.json'

export default {
  name: 'DetailsCruiseView',
  components: { ShipCardComponent },
  props: {
    cruise: {
      type: String,
      required: true,
    },
  },
  computed: {
    currentCruise() {
      return cruisesData.cruises.find((c) => c.slug === this.cruise)
    },
    currentCruiseShip() {
      return shipsData.ships.find((s) => s.id === this.currentCruise?.ship_id)
    },
    formattedRoute() {
      const ports = this.currentCruise?.ports
      if (!ports || ports.length === 0) return ''
      return ports.join(' → ')
    },
    startDate() {
      return this.currentCruise?.start_date.split(' ')[0]
    },
    startTime() {
      return this.currentCruise?.start_date.split(' ')[1]
    },
    endDate() {
      return this.currentCruise?.end_date.split(' ')[0]
    },
    endTime() {
      return this.currentCruise?.end_date.split(' ')[1]
    },
  },
}
</script>

<template>
  <section v-if="currentCruise" class="cruise-details-page">
    <RouterLink to="/cruises" class="back-link">← Back to cruises</RouterLink>

    <div class="cruise-hero">
      <img :src="'/images/' + currentCruise.image" :alt="currentCruise.name" />
      <div class="hero-overlay">
        <h1>{{ currentCruise.name }}</h1>
        <span class="nights">🌙 {{ currentCruise.nights }} nights</span>
      </div>
    </div>

    <div class="cruise-main">
      <div class="cruise-info">
        <div class="cruise-meta">
          <p>
            <strong>Departure:</strong> {{ currentCruise.departure_city }},
            {{ currentCruise.departure_country }} ({{ currentCruise.departure_port }})
          </p>
          <p>
            <strong>Arrival:</strong> {{ currentCruise.arrival_city }},
            {{ currentCruise.arrival_country }} ({{ currentCruise.arrival_port }})
          </p>
          <p>
            <strong>Start:</strong> {{ startDate }} |<span class="time">{{ startTime }}</span>
          </p>
          <p>
            <strong>End:</strong> {{ endDate }} |<span class="time">{{ endTime }}</span>
          </p>
          <p><strong>Nights:</strong> {{ currentCruise.nights }}</p>
          <p><strong>Price:</strong> {{ currentCruise.price_from }} {{ currentCruise.currency }}</p>
          <p><strong>Available cabins:</strong> {{ currentCruise.available_cabins }}</p>
          <p><strong>Route:</strong> {{ formattedRoute }}</p>
        </div>

        <div class="cruise-description">
          <h2>About the cruise</h2>
          <p>{{ currentCruise.description }}</p>
        </div>
      </div>

      <div class="cruise-right-column">
        <div class="cruise-ship-card">
          <ShipCardComponent v-if="currentCruiseShip" :ship="currentCruiseShip" />
        </div>

        <div v-if="currentCruise.included_services?.length" class="cruise-services">
          <h2>Included services</h2>
          <div class="services-grid">
            <div
              v-for="service in currentCruise.included_services"
              :key="service"
              class="service-card"
            >
              <span class="service-icon">✔️</span>
              <span class="service-text">{{ service }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
