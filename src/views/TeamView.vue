<script lang="ts">
import PersonCardComponent from '@/components/PersonCardComponent.vue'
import teamData from '@/data/team.json'

export default {
  name: 'TeamView',
  components: { PersonCardComponent },
  computed: {
    officeTeam() {
      return teamData.persons.filter((p) => p.job_title !== 'Captain')
    },
    captains() {
      return teamData.persons.filter((p) => p.job_title === 'Captain')
    },
  },
}
</script>

<template>
  <section class="team-page">
    <header class="ships-header">
      <h1>Our Team</h1>
      <p>
        Behind every unforgettable voyage stands a dedicated team of professionals — from leadership
        to crew — ensuring that every guest enjoys comfort, safety, and an unforgettable experience
        on the high seas.
      </p>
    </header>
    <section class="team-section">
      <h2>Leadership & Office Team</h2>
      <p>
        Our office team is the backbone of our operations. They manage logistics, planning, and
        customer service to guarantee smooth sailing for every cruise.
      </p>
    </section>
    <PersonCardComponent v-for="person in officeTeam" :key="person.id" :person="person" />

    <section class="team-section" style="margin-top: 60px">
      <h2>Our Captains</h2>
      <p>
        Steering our ships with expertise and passion, our captains ensure that every journey is
        safe, smooth, and memorable. They are the heart of our fleet.
      </p>
    </section>
    <PersonCardComponent v-for="person in captains" :key="person.id" :person="person" />
  </section>
</template>
