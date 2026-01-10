<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />

    <main style="padding: 20px;">
      <RouterView />
    </main>
  </div>
</template>