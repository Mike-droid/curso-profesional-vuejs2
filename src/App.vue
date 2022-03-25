<template>
  <div id="app">
    <HeaderV/>
    <router-view></router-view>
    <div>
      <h2>Contador</h2>
      <p>{{ count }}</p>
      <p> {{ double }} </p>
      <button @click="increment"> + </button>
      <button @click="decrement"> - </button>
      <button @click="increment10"> +10 </button>
      <button @click="incrementAsync"> +Async </button>
    </div>
    <FooterV />
  </div>
</template>

<script>
import HeaderV from '@/components/layout/HeaderV'
import FooterV from '@/components/layout/FooterV';

import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  components: {
    FooterV,
    HeaderV,
  },

  data() {
    return {
      count: 0,
    };
  },

  computed: {
    ...mapState({
      count: state => state.count,
    }),

    double() {
      return this.count * 2;
    },
  },

  methods: {
    ...mapMutations(['increment', 'decrement', 'increment10']),

    increment() {
      this.count++;
      this.$store.commit('increment');
    },

    decrement() {
      this.count--;
      this.$store.commit('decrement');
    },

    increment10() {
      this.count += 10;
      this.$store.commit('increment', {
        number: 10
      });
    },

    incrementAsync() {
      this.count += 2;
      this.$store.dispatch('incrementAsync', {
        number: 2
      } );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>