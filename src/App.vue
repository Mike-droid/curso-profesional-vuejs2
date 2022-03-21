<template>
  <div id="app">
    <HeaderV/>
    <LoaderV v-show="isLoading" />
    <input
      class="input is-primary"
      type="text"
      v-model="searchQuery"
      placeholder="Pokemon name or ID"
    >
    <button @click="search" class="button is-primary">
      Buscar
    </button>
    <section v-show="!isLoading"
      v-if="this.pokemons.id !== undefined"
    >
      <PokemonV :pokemon="pokemons" />
    </section>
    <FooterV />
  </div>
</template>

<script>
import pokemon from '@/services/pokemon';
import HeaderV from '@/components/layout/HeaderV'
import FooterV from '@/components/layout/FooterV';
import PokemonV from '@/components/PokemonV';
import LoaderV from '@/components/shared/LoaderV';

export default {
  components: {
    FooterV,
    HeaderV,
    PokemonV,
    LoaderV
  },

  data() {
    return {
      searchQuery: '',
      pokemons: [],
      isLoading: false,
    }
  },

  created() {
    console.log('App created');
  },

  mounted() {
    console.log('App mounted');
  },

  methods: {
    async search() {
      try {
        this.isLoading = true;
        this.searchQuery ? this.pokemons = await pokemon.getById(this.searchQuery) : alert('Please enter a valid pokemon name or ID');
        this.isLoading = false;
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
