<template>
  <section class="hero is-success">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <div class="nav-item">
              <strong>🐦 Pokemon</strong>
            </div>
          </div>
          <div class="nav-right nav-menu">
            <router-link
              :to="{ name: 'Home' }"
              class="nav-item"
            >
              Inicio
            </router-link>
            <router-link
              :to="{ name: 'About' }"
              class="nav-item"
            >
              Nosotros
            </router-link>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Pokedex</h1>
        <h2 class="subtitle">¡Búscalos todos!</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>