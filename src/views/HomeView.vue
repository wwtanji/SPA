<script setup>
import { ref } from 'vue';
import dataDestinations from '../data.json';


const destinations = ref(dataDestinations.destinations);
</script>

<template>
  <div class="home">
    <h1>All destinations</h1>

    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }">


        <div class="destination-card">
          <h2>{{ destination.name }}</h2>
          <img :src="`/images/${destination.image}`" :alt="destination.name">
        </div>
      </router-link>
    </div>
  </div>
</template>


<style>
#nav .vue-active-link {
  color: rgb(4, 255, 0);
}
</style>

