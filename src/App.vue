<template>
  <div id="app">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Pokemon name or ID"
    >
    <button @click="search">
      Buscar
    </button>
    <p
      v-if="this.pokemons.id !== undefined"
    >
      Pokemon {{ pokemonName }}
    </p>
    <div
      v-if="this.pokemons.id !== undefined"
    >
      <img
        :src="pokemonImage"
        :alt="pokemonName"
      />
    </div>
  </div>
</template>

<script>
import pokemon from './services/pokemon';

export default {
  data() {
    return {
      searchQuery: '',
      pokemons: [],
    }
  },

  methods: {
    async search() {
      try {
        this.searchQuery ? this.pokemons = await pokemon.getById(this.searchQuery) : alert('Please enter a valid pokemon name or ID');
      } catch (error) {
        alert(error);
      }
    }
  },

  computed: {
    pokemonName() {
      return this.pokemons.name;
    },

    pokemonImage() {
      return this.pokemons.sprites.front_default;
    }
  }
};
</script>

<style lang="scss">
</style>
