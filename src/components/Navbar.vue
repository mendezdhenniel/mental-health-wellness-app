<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/breathing">Breathing</router-link> |
    <router-link to="/wellness">Wellness</router-link> |
    <router-link to="/ai-support">AI Support</router-link>
  </nav>
</template>

<style scoped>
nav { padding: 1rem; background: #f4f4f4; }
a { margin: 0 10px; text-decoration: none; color: #42b983; }
.router-link-active { font-weight: bold; border-bottom: 2px solid #42b983; }
</style>