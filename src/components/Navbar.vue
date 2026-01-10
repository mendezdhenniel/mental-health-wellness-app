<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/breathing" class="nav-link">Breathing</router-link>
    <router-link to="/wellness" class="nav-link">Wellness</router-link>
    <router-link to="/ai-support" class="nav-link">AI Support</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
.navbar {
  background-color: #4CAF50;
  padding: 1rem;
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-link.router-link-exact-active {
  text-decoration: underline;
}
</style>