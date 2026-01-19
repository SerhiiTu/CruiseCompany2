<script>
export default {
  name: 'ShipCardComponent',
  data() {
    return {}
  },
  computed: {},
  methods: {},
  watch: {},
  props: {
    ship: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <RouterLink
    :to="{
      name: 'detail_ship',
      params: { ship: ship.slug },
    }"
  >
    <div class="ship_card">
      <span>{{ ship.name }}</span>
      <img :src="'/images/' + ship.image" :alt="ship.name" />
      <span>"&#9733;" * {{ ship.stars }}</span>
    </div>
  </RouterLink>
</template>
