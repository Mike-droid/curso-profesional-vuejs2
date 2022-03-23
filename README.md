# Curso profesional de Vue Js

## Introducción

### Bienvenidos al Curso Profesional de Vue JS

### Introducción a Vue JS

Vue JS nos permite hacer aplicaciones muy pequeñas y muy grandes.

Vue JS está pensado para manejar distintos tipos de complejidades. Tenemos por ejemplo 2; inherente (la que viene del proyecto y no podemos modificar) e instrumental (la que nosotros podemos controlar).

Estas complejidades tienen que crecer o decrecer a la par. Vue JS es el framework progresivo y nos ayuda con esto.

Vue JS usa rendering declarativo y sistema de componentes.

## CLI y Dev Tools

### Herramientas y Experiencia de Desarrollo + Archivos .vue

Debemos tener instalado Node JS y sirve tener también las Vue Dev Tools en el navegador. Además necesitamos instalar la vue-cli para crear proyectos.

### CLI - Hello World

### Webpack

Webpack es un empaquetador que crea un bundle de todos los archivos que necesitamos para el proyecto.

Hoy en día Webpack corre por detrás de Vue, no es necesario configurarlo.

### Babel

EcmaScript es el standar que usamos para escribir JavaScript moderno.

Babel es un trasnpilador de código JS que convierte nuestro código moderno a código que sea soportado por los navegadores.

Puedes encontrar más información en la [documentación de Babel](https://babeljs.io/)

### ESLint

Este es un linter de código. Nos permite definir reglas para que todos los programadores en el grupo del proyecto escriban código con las mismas reglas.

Puedes encontrar más información en la [documentación de ESLint](https://eslint.org/)

La instalamos con `npm i -D eslint` o también la pudimos haber instalado desde la creación de la aplicación.

[Aquí más información](https://eslint.org/docs/user-guide/getting-started)

### SASS y BULMA

Podemos usar SASS desde el momento en que estamos creando la aplicación con la vue-cli.

Bulma es un framework de CSS. [Documentación oficial](https://bulma.io/documentation/)

Lo instalamos con `npm i bulma`

### PUG

[Documentación oficial](https://pugjs.org/api/getting-started.html)

## Manipulación del DOM

### Expresiones

```html
<div>
  <p>{{ message }}</p>
</div>
```

### Directivas

```html
<template>
  <div id="app">
    <p v-show="showValue">
      {{ value }}
    </p>
    <p v-if="showValue">
      {{ value }}
    </p>
    <ul>
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      showValue: true,
      value: "Hello",
      items: [1, 2, 3, 4, 5],
    };
  },
};
</script>
```

### Data Binding

Podemos enlazar datos desde nuestra vista a nuestro código y viceversa.

```html
<template>
  <div id="app">
    <input type="text" name="" id="" v-model="this.name" />
    <p>{{ this.name }}</p>
    <a v-bind:href="url">Google</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Miguel",
      url: "https://www.google.com",
    };
  },
};
</script>
```

### Computed properties

Propiedades que se calculan a partir de valores de otras propiedades. Son funciones que retornan un valor.

```html
<template>
  <div id="app">
    <input type="text" name="" id="" v-model="this.name" />
    <input type="text" v-model="lastName" />
    <p>{{ fullName }}</p>
    <p>Age: {{ age }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Miguel",
      url: "https://www.google.com",
      lastName: "Reyes",
      dateBirth: 1998,
    };
  },

  computed: {
    fullName() {
      return `${this.name} ${this.lastName}`;
    },

    age() {
      return new Date().getFullYear() - this.dateBirth;
    },
  },
};
</script>

```

### Watchers

No devuelven un valor y no pueden ser usadas en expresiones.

```javascript
watch: {
    name(newName, oldName) {
      console.log(`new name: ${newName} -> old name: ${oldName}`);
      //! no funciona 😔
    },
  },
```

### Eventos

```html
<template>
  <div id="app">
    <input type="text" name="" id="" v-model="this.name" />
    <button @click="format">Format!</button>
    <p>{{ formatName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Miguel",
      formatName: "",
    };
  },

  methods: {
    format() {
      this.formatName = this.name.toUpperCase();
    },
  },
};
</script>

<style lang="scss">
</style>

```

### Integración a Platzi Music

```html
<template>
  <div id="app">
    <section class="section">
      <nav class="navbar has-shadow">
        <div class="container">
          <input
            type="text"
            class="input islarge"
            placeholder="Buscar canciones"
            v-model="searchQuery"
          >
          <button
            class="button is-info is-large"
            @click="search()"
          >
            Buscar
          </button>
          <a href="" class="button-is-danger is-large">&times;</a>
          <p>
            <small>
              {{ searchMessage }}
            </small>
          </p>
        </div>
      </nav>
      <div class="container">
        <div class="columns">
          <div class="column" v-for="track, index in tracks" :key="index">
            <div class="track">
              <h2>{{ track.name }}</h2>
              <h3>{{ track.artist }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const tracks = [
  {
    name: 'Track 1',
    artist: 'Artist 1',
  },
  {
    name: 'Track 2',
    artist: 'Artist 2',
  },
  {
    name: 'Track 3',
    artist: 'Artist 3'
  }
]

export default {
  data() {
    return {
      searchQuery: '',
      tracks: []
    };
  },

  methods: {
    search() {
      this.tracks = tracks
    }
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length} canciones`;
    }
  }
};
</script>

<style lang="scss">
@import './scss/main.scss';
</style>

```

### Ejercicio de Manipulación del DOM

```html
<template>
  <div id="app">
    <div class="tareas">
      <input type="text" name="" id="taskTitle" placeholder="Tarea">
      <input type="number" name="" id="taskTime" placeholder="Horas" min="1" step="1">
      <button @click="addTask">Agregar tarea</button>
    </div>
    <section v-if="tasks.length > 0">
      <div class="listaTareas">
        <ul>
          <li
            v-for="task, index in tasks"
            :key="index"
          >
            {{ task.title }} -> {{ task.time }} horas
          <button
            :key="index"
            @click="deleteTask"
          >
            Borrar tarea {{ task.title }}
          </button>
          </li>
        </ul>
      </div>

      <div class="tiempo">
        <p>Tiempo total: {{ totalTime }} horas</p>
      </div>
    </section>
    <section v-else>
      <h1>No hay tareas por el momento</h1>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      newTask: {
        title: '',
        time: 0
      }
    };
  },

  methods: {
    addTask() {
      const title = document.getElementById('taskTitle').value;
      const time = parseInt(document.getElementById('taskTime').value);
      if (title !== '' && time !== '') {
        this.newTask.title = title;
        this.newTask.time = time;
        this.tasks.push(this.newTask);
        this.newTask = {
          title: '',
          time: 0
        };
      } else {
        alert('La tarea y el tiempo deben tener un valor');
      }

      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },

    deleteTask(task) {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  },

  computed: {
    totalTime() {
      let total = 0;
      this.tasks.forEach(task => {
        total += parseInt(task.time);
      });
      return total;
    }
  },

  created() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks) || [];
    }
  }
};
</script>

<style lang="scss">

</style>

```

## REST y HTTP

### Servicios

### Fetch API & Trae

[Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

[Trae](https://github.com/Huemul/trae/tree/v1) la instalamos con `npm i -S trae`

### Consumir API's REST

Creamos la carpeta 'services' y adentro:

- config.js:

```js
const configService = {
  apiUrl: 'https://pokeapi.co/api/v2/pokemon/'
}

export default configService

```

- pokemon.js:

```js
import config from '@/services/config'

const pokemon = {
  getById: async (id) => {
    try {
      const response = await fetch(`${config.apiUrl}${id}`)
      return await response.json()
    } catch (error) {
      console.log(`Ocurrió un error: ${error}`)
    }
  }
}

export default pokemon

```

App.vue:

```html
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

```

## Sistema de componentes

### Component

Podemos tener un sistema más organizado, escalable, fácil de leer, y los componentes serán reutilizables.

### Creación de componentes

### Reactividad

### Ciclo de vida

Cada componente tiene su ciclo de vida.

[Lifecycle hooks](https://v3.vuejs.org/api/options-lifecycle-hooks.html)

### Comunicación entre componentes padres e hijos

Padre -> **propiedades** -> Hijo

Hijo -> **eventos** -> Padre

### Comunicación de hijos hacia padres

### Utilización de slots

Los slots nos permiten no sobrecargar componentes.

### Comunicacion entre Componentes Genericos - Event Bus y Plugins

Un plugin añade funcionalidades.

## Vue Router

### Introducción a Vue Router

### Instalar vue-router y configurar router view

### Crear y navegar rutas con router-link

## Extendiendo VueJS

### Modifiers

Ejemplo muy básico: `@keyup.enter="search"`

### Filtros

### Directivas personalizadas

### Mixins

Los mixins nos permiten reutilizar funcionalidad de los componentes.

## Clases, animaciones y transiciones

### Vue transitions y animaciones de css
