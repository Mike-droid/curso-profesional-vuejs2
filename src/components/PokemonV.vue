<template>
  <div class="card">
    <h1 class="title">{{ pokemon.name }}</h1>
    <div class="card-image">
      <figure class="image is-128x128">
        <img
          @click="goToPokemon(pokemon.id)"
          class="is-rounded"
          :src="pokemon.sprites.front_default"
          :alt="pokemon.name"
        >
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
  },

  methods: {
    onClick() {
      this.$emit('on-click', this.pokemon);
    },

    goToPokemon(id) {
      this.$router.push(`/pokemon/${id}`);
    }
  }
}
</script>

<style lang="scss" scoped>
.image:hover {
  cursor: pointer;
}
</style>