<template>
  <main>
    <transition name="move">
      <NotificationV
        v-show="showNotification"
      >
        <p slot="body">No se encontraron resultados</p>
      </NotificationV>
    </transition>

    <transition name="move">
      <LoaderV
        v-show="isLoading"
      />
    </transition>
    <input
      class="input is-primary"
      type="text"
      v-model="searchQuery"
      placeholder="Pokemon name or ID"
      @keyup.enter="search"
    >
    <button
      @click="search"
      class="button is-primary"
    >
      Buscar
    </button>
    <section
      v-show="!isLoading"
      v-if="this.pokemons.id !== undefined"
    >
      <PokemonV
        :pokemon="pokemons"
        @on-click="setSelectedPokemon"
        :class="setSelectedPokemon === pokemons.id ? 'isActive' : ''"
      />
    </section>
  </main>
</template>

<script>
import pokemon from '@/services/pokemon';

import PokemonV from '@/components/PokemonV';
import LoaderV from '@/components/shared/LoaderV';
import NotificationV from '@/components/shared/NotificationV'

export default {
  components: {
    PokemonV,
    LoaderV,
    NotificationV
  },

  data() {
    return {
      searchQuery: '',
      pokemons: [],
      isLoading: false,
      clickedPokemon: '',
      showNotification: false,
    }
  },

  methods: {
    async search() {
      try {
        this.isLoading = true;
        this.searchQuery ? this.pokemons = await pokemon.getById(this.searchQuery) : alert('Please enter a valid pokemon name or ID');
        this.isLoading = false;
      } catch (error) {
        this.showNotification = true;
        alert(error);
      }
    },

    setSelectedPokemon(pokemon) {
      this.clickedPokemon = pokemon;
      return pokemon.id;
    }
  },

  computed: {
    pokemonName() {
      return this.pokemons.name;
    },

    pokemonImage() {
      return this.pokemons.sprites.front_default;
    }
  },

  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.isActive {
  border: 3px solid #ffd700;
}
</style>