<template>
  <div id="nav">


    <router-link id="logo" to="/">Home</router-link>

    <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}">
        {{ destination.name }}
    </router-link>

  </div>

</template>

<script>
import dataDestinations from '../data.json';
export default {
  data(){
    return {
      destinations: dataDestinations.destinations
    }
  }
}
</script>
