<template>
  <div id="app">
    <div class="tareas">
      <input type="text" name="" id="taskTitle" placeholder="Tarea">
      <input type="number" name="" id="taskTime" placeholder="Horas" min="1" step="1">
      <button @click="addTask" class="addTask button">
        <img class="icon" src="./assets/icons/mas.png" alt="Agregar tarea">
      </button>
    </div>

    <section v-if="tasks.length > 0" class="section_tareas">
      <div class="listaTareas">
        <ul>
          <li
            v-for="(task, key) in tasks"
            :key="key"
            ref="task"
          >
            {{ task.title }} -> {{ task.time }} horas
          <button
            @click="deleteTask"
            class="deleteTask button"
          >
            <img class="icon" src="./assets/icons/borrar.png" alt="Borrar tarea">
          </button>
          </li>
        </ul>
      </div>

      <div class="tiempo">
        <h2>Tiempo total: {{ totalTime }} horas</h2>
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
        time: 0,
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
          time: 0,
        };
      } else {
        alert('La tarea y el tiempo deben tener un valor');
      }

      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },

    deleteTask(taskIndex) {
      const taskToDelete = taskIndex.path[2]
      const arrayTasks = Array.from(taskIndex.path[3].children);

      let index

      arrayTasks.forEach((task, key) => {
        if (task === taskToDelete) {
          index = key;
        }
      });

      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
#app {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-family: 'Inter', sans-serif;

  & .tareas {
    display: grid;
    grid-template-areas: "title time"
                          "button button";
    justify-items: center;
    align-self: start;
    width: 40%;
    margin-block-start: 20px;

    input {
      width: 95%;
      font-family: 'Inter', sans-serif;
      padding: 5px;
      font-size: 18px;
      border-top: none;
      border-left: none;
      border-right: none;
      border-width: 2px;
      border-color: rgb(151, 147, 147);
      outline: none;
    }

    & #taskTitle {
      grid-area: title;
    }

    & #taskTime {
      grid-area: time;
    }

    & .addTask {
      grid-area: button;
      margin-block-start: 20px;
    }
  }

  & .section_tareas{
    align-items: center;
    display: flex;
    flex-direction: row;
    width: 40%;

    & .listaTareas {
      & ul {
        list-style: none;
        padding: 0;
        pointer-events: none;

        & .deleteTask {
          pointer-events: auto;
        }

        & li {
          display: flex;
          transition: 0.5s;
          align-items: center;
          justify-content: space-between;
          width: 400px;
          margin-block: 15px;
          border: 1px solid black;
          border-radius: 10px;
          padding: 5px;

          &:hover {
            background-color: crimson;
            opacity: 0.9;
            color: white;
          }
        }
      }
    }
  }

  & .icon {
    width: 25px;
  }

  & .tiempo {
    width: 40%;
    align-self: start;
    margin-left: 25px;

    h2 {
      text-align: end;
    }
  }

  & .button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    outline: none;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
