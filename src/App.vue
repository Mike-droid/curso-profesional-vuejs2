<template>
  <div id="app">
    <input type="text" id="searchInput">
    <button @click="search">
      Buscar
    </button>
    <p
      v-if="this.pokemons.lenght > 0"
    >
      Pokemon {{ this.pokemons.name }}
    </p>
    <div
      v-if="this.pokemons.lenght > 0"
    >
      <img
        :src="this.pokemons.sprites.front_default"
        :alt="this.pokemons.name"
      />
    </div>
  </div>
</template>

<script>
import pokemon from './services/pokemon';

const inputPokemon = document.getElementById('searchInput');

export default {
  data() {
    return {
      pokemons: [],
    }
  },

  methods: {
    async search() {
      if (inputPokemon.value !== '' && inputPokemon.value !== null) {
        this.pokemons = await pokemon.getById(inputPokemon.value);
        console.log(this.pokemons);
      } else {
        console.log('no value')
      }
    }
  }
};
</script>

<style lang="scss">
</style>
