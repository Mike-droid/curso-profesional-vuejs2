<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4">
        <PokemonV v-show="pokemon !== null" :pokemon="pokemon" />
      </div>
    </div>
  </div>
</template>

<script>
import pokemon from '@/services/pokemon'
import PokemonV from '@/components/PokemonV'

export default {
  components: {
    PokemonV
  },

  data() {
    return {
      pokemon: {}
    }
  },

  created() {
    const id = this.$route.params.id
    pokemon.getById(id).then(pokemon => {
      this.pokemon = pokemon
    })
  }
}
</script>

<style lang="scss" scoped>
  .columns {
    margin: 20px;
  }
</style>