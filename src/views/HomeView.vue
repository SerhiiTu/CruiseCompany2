<script lang="ts">
import CruiseCardComponent from '@/components/CruiseCardComponent.vue'
import PersonCardComponent from '@/components/PersonCardComponent.vue'
import ShipCardComponent from '@/components/ShipCardComponent.vue'
import { useMainDataStore } from '@/stores/mainDataStore'

export default {
  name: 'HomeView',
  components: { PersonCardComponent, CruiseCardComponent, ShipCardComponent },
  computed: {
    dataStore() {
      return useMainDataStore()
    },
    latestShip() {
      return useMainDataStore().ships[useMainDataStore().ships.length - 1]
    },
    topCruise() {
      return useMainDataStore().cruises[0]
    },
    topCaptain() {
      return useMainDataStore().captains[6]
    },
  },
}
</script>

<template>
  <!-- ABOUT US -->
  <section class="home">
    <h1>Welcome to Paradise Cruises 🌴</h1>
    <p>Discover luxury cruises, modern ships, and unforgettable journeys.</p>
  </section>

  <section class="about-us">
    <p>
      Paradise Cruises is your gateway to unforgettable experiences on the high seas. Our fleet of
      luxurious cruise liners spans the globe, from the icy fjords of Norway to the sun-drenched
      Caribbean waters. We combine comfort, adventure, and exquisite service to ensure every journey
      is a memory that lasts a lifetime.
    </p>
    <p>
      Our mission is simple: to provide you with safe, luxurious, and immersive travel experiences,
      whether you're seeking a romantic getaway, a family adventure, or a solo exploration. Join us
      and discover the world from the perfect vantage point: the deck of a magnificent cruise liner.
    </p>
  </section>

  <!-- HIGHLIGHT ROW: LATEST SHIP + TOP CRUISE -->
  <section class="highlight-row">
    <div class="highlight-card">
      <header>
        <h2>Our Latest Liner</h2>
        <p>
          Experience the pinnacle of maritime engineering with our newest addition to the fleet.
          Spacious decks, luxurious cabins, and world-class amenities await you. Enjoy it!
        </p>
      </header>
      <div class="highlight-card-inner">
        <ShipCardComponent :ship="latestShip" />
      </div>
    </div>

    <div class="highlight-card">
      <header>
        <h2>Featured Cruise</h2>
        <p>
          Sail away on our most popular itinerary, carefully curated to offer breathtaking views,
          exceptional service, and unforgettable experiences. Your next adventure starts here.
        </p>
      </header>
      <div class="highlight-card-inner">
        <CruiseCardComponent :cruise="topCruise" />
      </div>
    </div>
  </section>

  <!-- CAPTAIN OF THE MONTH -->
  <section class="top-captain">
    <header>
      <h2>Captain of the Month</h2>
      <p>
        Meet {{ topCaptain.first_name }} {{ topCaptain.last_name }}, our captain of the month! With
        years of experience, an unwavering commitment to safety, and a passion for the sea, they
        ensure every voyage is exceptional. Our guests praise their professionalism, charisma, and
        dedication to creating memorable journeys.
      </p>
    </header>
    <PersonCardComponent :person="topCaptain" />
  </section>
</template>
