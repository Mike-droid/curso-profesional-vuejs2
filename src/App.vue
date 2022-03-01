<template>
  <div id="app">
    <img src="@/assets/platzi_foto.jpg" />
    <h1 class="title">{{ msgH1 }}</h1>
    <form class="form">
      <label class="nameInput">
        <small>Nombre</small>
        <input type="text" name="" id="" placeholder="Ejemplo: Miguel">
      </label>
      <label class="lastNameInput">
        <small>Apellido</small>
        <input type="text" name="" id="" placeholder="Ejemplo: Reyes">
      </label>
      <label class="workInput">
        <small>Cargo</small>
        <input type="text" name="" id="" placeholder="Ejemplo: Software Developer">
      </label>
      <button class="sendButton" type="submit">
        ENVIAR
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgH1: 'Registro estación Platzi',
    }
  }
}
</script>

<style lang="scss">
$blue: #00bfd6;
$blue2: #a3ecf3;
$orange: #ff9300;
$black: #212121;

#app, .form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app {
  width: 409px;
  height: 320px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  & img {
    width: 100%;
    height: auto;
  }

  & .title {
    font-style: bold;
    color: $blue;
  }

  & .form {
    width: 100%;
    & small {
      color: $orange;
      font-weight: bold;
      font-size: 10px;
    }

    & input, & label {
      width: 100%;
    }

    & input {
      border: none;
      border-bottom: 2px solid $orange;
      font-size: 16px;
      color: $black;

      &:focus {
        outline: none;
      }
    }

    & .sendButton {
      width: fit-content;
      margin-top: 20px;
      align-self: flex-end;
      background: $blue;
      color: white;
      border: none;
      border-radius: 2px;
      font-size: 16px;
      padding: 10px 40px;
      box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 25%);

      &:hover {
        background: $blue2;
      }
    }
  }
}
</style>
