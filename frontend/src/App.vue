<template>
  <h1 class="ui header">Doot</h1>
  <div class="ui">
    <Task v-for="item in this.tasks" :key="item.id" :task="item" />
  </div>
  <div class="add">
    <button class="ui fluid button">Add Task</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import Task from "./components/Task.vue";

export default defineComponent({
  components: {
    Task,
  },
  computed: mapState(["tasks"]),
});
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
