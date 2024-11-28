<template>
  <div class="experience-details">
    <section v-if="experience">
      <h1>{{ experience.name }}</h1>
      <img :src="`/images/${experience.image}`" :alt="experience.name">
      <p>{{ experience.description }}</p>
    </section>
  </div>
</template>

<script>
import dataDestinations from '@/data.json';

export default {
  props: {
    experienceSlug: { type: String, required: true }, // The slug of the experience passed via route
  },
  computed: {
    destination() {
      const destinationId = this.$route.params.id;
      return dataDestinations.destinations.find(
        destination => destination.id === parseInt(destinationId)
      );
    },
    experience() {
      if (this.destination) {
        return this.destination.experiences.find(
          experience => experience.slug === this.experienceSlug
        );
      }
      return null;
    },
  },
};
</script>

