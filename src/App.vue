<script setup>
// Importing necessary components
import TheNavigation from './components/TheNavigation.vue';

</script>

<template>
  <!-- Navigation Component -->
  <TheNavigation />

  <!-- Main Content Area -->
  <div class="container">
    <RouterView />
  </div>
</template>
