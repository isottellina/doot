<template>
  <h1 class="ui header">Doot</h1>
  <div class="ui">
    <Task
      v-for="item in this.$store.state.tasks"
      :key="item.name"
      :name="item.name"
    >
      {{ item.desc }}
    </Task>
  </div>
  <div class="add">
    <button class="ui fluid button">Add Task</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Task from "./components/Task.vue";

@Options({
  components: {
    Task,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  @media (min-width: 720px) {
    max-width: 40%;
  }

  margin: 0 auto;
  padding-top: 1em;
}

.header {
  text-align: center;
}

.add {
  margin-top: 1em;
}
</style>
