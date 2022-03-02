<template>
  <div id="app">
    <header class="header">
      <img src="@/assets/movies.jpg" alt="Movies.es" class="logo" />
      <input type="search" class="searchBar" name="" id="" placeholder="Busca tu peli, actor, actriz o director favorito">
      <div class="profile">
        <p>{{ this.name }}</p>
        <img :src=profilePic class="profilePic" alt="Profile Pic" />
      </div>
    </header>
    <aside class="menu">
      <div class="features">
        <div class="home">
          <img src="@/assets/home.svg" alt="Home">
          <p>Home</p>
        </div>
        <div>
          <img src="@/assets/favorite.svg" alt="Favorites">
          <p>Más likes</p>
        </div>
        <div>
          <img src="@/assets/whatshot.svg" alt="Trending" />
          <p>Trending</p>
        </div>
      </div>
      <div class="settings">
        <div>
          <img src="@/assets/settings.svg" alt="Settings" />
          <p>Ajustes</p>
        </div>
      </div>
    </aside>
    <main class="main">
      <div class="movies">
        <div class="movie" v-for="movie in 9" :key="movie">
          <img src="@/assets/metal-gear-solid.jpg" />
          <div class="description">
            <h3> Metal Gear Solid </h3>
            <p>A Hideo Kojima's Game</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Miguel Reyes',
      profilePic: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2015/01/438806-metal-gear-solid-v-nos-muestra-sangriento-big-boss.jpg?itok=iJlnY4ge",
    }
  }
}
</script>

<style lang="scss">
$pink: #ff535bc7;
$purple: #50557F;

  #app {
    width: 1024px;
    height: 72vh;
    display: grid;
    font-family: 'Lato', sans-serif;
    grid-template-areas: "header header header"
                          "menu main main";

    & .header {
      grid-area: header;
      background-color: white;
      width: 100vw;
      height: 100px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      & .logo {
        width: 5%;
        height: fit-content;
      }

      & .searchBar {
        width: 30%;
        border: 1px solid $purple;
        border-radius: 5px;
        padding: 5px;
      }

      & .profile {
        width: 15%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        font-weight: bold;

        & .profilePic {
          width: 25px;
          height: 25px;
          border-radius: 50%;
        }
      }
    }

    & .menu {
      grid-area: menu;
      background-color: $pink;
      width: 5vw;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & .features div,
      & .settings div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;

        & p {
          text-align: center;
        }
      }

      & .features,
      & .settings {
        & img {
          filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(212deg) brightness(109%) contrast(104%);
        }

        & p {
          color: white;
        }
      }
    }

    & .main {
      grid-area: main;
      grid-template-columns: 2fr;
      width: 95vw;
      height: fit-content;

      & .movies {
        display: grid;
        grid-template-columns: repeat(3, 30%);
        gap: 20px;

        & .movie {
          box-shadow: 0px 10px 10px 2px rgb(94 94 94 / 75%);

          & img {
            width: 100%;
          }

          & .description {
            background-color: $pink;
            color: white;
            text-align: right;
            margin-top: -50px;

            & h3,
            & p {
              margin: 0;
            }
          }
        }
      }
    }
  }
</style>
