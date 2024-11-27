<template>

  <div class="card">
    <img :src="experience.image ? `/images/${experience.image}` : '/images/default-experience.png'" :alt="experience.name || 'Experience'" />
    <span class="card__text">
      {{experience.name}}
    </span>


  </div>
</template>

<script>
export default {
  props: {
    experience: { type: Object, required: true}
  },
};
</script>

