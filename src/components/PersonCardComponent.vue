<script>
export default {
  name: 'PersonCardComponent',
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fullName() {
      return `${this.person.first_name} ${this.person.last_name}`
    },
  },
}
</script>

<template>
  <article class="person-card">
    <div class="person-image">
      <img :src="'/images/' + person.image" :alt="fullName" />

      <div class="person-image-overlay">
        <h2 class="person-name">{{ fullName }}</h2>
      </div>
    </div>

    <div class="person-content">
      <header class="person-header">
        <span class="person-title">{{ person.job_title }}</span>
      </header>

      <div class="person-meta">
        <span>🌍 {{ person.citizenship }}</span>
        <span>🎓 {{ person.education }}</span>
        <span>🗣 {{ person.languages.join(', ') }}</span>
      </div>

      <div class="person-info">
        <p><strong>Experience:</strong> {{ person.experience_years }} years</p>
        <p><strong>Joined:</strong> {{ person.joined_company }}</p>
        <p><strong>Date of birth:</strong> {{ person.date_of_birth }}</p>
      </div>

      <p class="person-description">
        {{ person.description }}
      </p>

      <blockquote v-if="person.quote" class="person-quote">“{{ person.quote }}”</blockquote>
    </div>
  </article>
</template>
