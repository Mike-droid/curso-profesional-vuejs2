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
