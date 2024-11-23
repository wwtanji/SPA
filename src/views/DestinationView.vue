<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <p v-else>Destination not found.</p>


<section class="experiences">
  <h2>Top Experiences in {{ destination.name }}</h2>

  <div class="cards">
    <router-link
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{name: 'experience.show', params: {experienceSlug: experience.slug}}"

    >
      <ExperienceCard

        :experience="experience"
      />
    </router-link>

  </div>

  <router-view/>

</section>

</template>

<script>
import dataDestinations from '@/data.json';
import ExperienceCard from '@/components/ExperienceCard.vue';

export default {
  components:{ExperienceCard},
  props: {
    id: { type: Number, required: true }, // Отримуємо ID як пропс
  },
  computed: {
    destination() {
      // Знаходимо пункт призначення за пропсом ID
      return dataDestinations.destinations.find(
        (destination) => destination.id === this.id // Пропс id — це строка, тому приводимо до числа
      );
    },
  },
};
</script>
