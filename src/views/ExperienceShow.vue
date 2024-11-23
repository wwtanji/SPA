<template>
  <section v-if="experience">
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name">
    <p>{{ experience.description }}</p>
  </section>
  <p v-else>Experience not found.</p>
</template>

<script>
import dataDestinations from '@/data.json';

export default {
  props: {
    experienceSlug: { type: String, required: true }, // The slug of the experience passed via route
  },
  computed: {
    // Getting the destination by ID (assuming the ID comes from route params)
    destination() {
      // Make sure `id` comes from route params
      const destinationId = this.$route.params.id;
      return dataDestinations.destinations.find(
        destination => destination.id === parseInt(destinationId) // Ensure it's an integer
      );
    },
    // Getting the experience by the experienceSlug from the destination's experiences
    experience() {
      if (this.destination) {
        return this.destination.experiences.find(
          experience => experience.slug === this.experienceSlug
        );
      }
      return null; // Return null if destination is not found
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
