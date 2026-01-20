<script>
export default {
  name: 'NavBarComponent',
}
</script>

<template>
  <header class="nav">
    <RouterLink to="/" class="logo">
      <img src="/images/logo2.svg" alt="Cruise company logo" class="logo-image" />
    </RouterLink>

    <nav class="nav-links">
      <RouterLink to="/ships" class="nav-link">Our Ships</RouterLink>
      <RouterLink to="/cruises" class="nav-link">Our Cruises</RouterLink>
      <RouterLink to="/team" class="nav-link">Our Team</RouterLink>
      <RouterLink to="/contact" class="nav-link contact"> Contact Us </RouterLink>
    </nav>
  </header>
</template>
