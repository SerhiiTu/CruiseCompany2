<script>
export default {
  name: 'ShipCardComponent',
  props: {
    ship: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <RouterLink class="ship-card-link" :to="{ name: 'detail_ship', params: { ship: ship.slug } }">
    <article class="ship-card">
      <div class="image-wrapper">
        <img :src="'/images/' + ship.image" :alt="ship.name" />
        <div class="rating">⭐ {{ ship.stars }}</div>
      </div>

      <div class="content">
        <h3 class="name">{{ ship.name }}</h3>

        <ul class="info">
          <li>🚢 {{ ship.year }}</li>
          <li>🧍 {{ ship.capacity }} guests</li>
          <li>⚓ {{ ship.decks }} decks</li>
        </ul>

        <span class="cta">View details →</span>
      </div>
    </article>
  </RouterLink>
</template>
