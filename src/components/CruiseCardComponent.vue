<script>
export default {
  name: 'CruiseCardComponent',
  props: {
    cruise: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      const parts = this.cruise.start_date.split(' ')[0].split('.')
      return `${parts[0]}.${parts[1]}.${parts[2]}`
    },
    formattedRoute() {
      const ports = this.cruise.ports
      if (!ports || ports.length === 0) return ''
      if (ports.length <= 4) return ports.join(' → ')

      return `${ports[0]} → ${ports[1]} → ${ports[2]} → … → ${ports[ports.length - 1]}`
    },
  },
}
</script>

<template>
  <RouterLink
    class="cruise-card-link"
    :to="{ name: 'detail_cruise', params: { cruise: cruise.slug } }"
  >
    <article class="cruise-card">
      <div class="cruise-image-wrapper">
        <img :src="'/images/' + cruise.image" :alt="cruise.name" />
        <div class="cruise-overlay">
          <span class="cruise-date">📅 {{ formattedDate }}</span>
          <span class="cruise-nights">🌙 {{ cruise.nights }} nights</span>
        </div>
      </div>

      <div class="cruise-content">
        <h3 class="cruise-name">{{ cruise.name }}</h3>

        <!-- Цена -->
        <div class="cruise-price">From {{ cruise.price_from }} {{ cruise.currency }}</div>

        <!-- Каюты и маршрут -->
        <ul class="cruise-info">
          <li>🛏 {{ cruise.available_cabins }} cabins left</li>
          <li class="cruise-route">⚓ {{ formattedRoute }}</li>
        </ul>

        <span class="cruise-cta">More Info →</span>
      </div>
    </article>
  </RouterLink>
</template>
