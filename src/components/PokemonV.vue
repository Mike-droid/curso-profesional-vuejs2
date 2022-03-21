<template>
  <div class="card">
    <h1 class="title">{{ pokemon.name }}</h1>
    <div class="card-image">
      <figure class="image is1by1">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="">
</style>