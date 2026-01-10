<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
</template>